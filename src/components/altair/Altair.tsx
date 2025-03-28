/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { type FunctionDeclaration, SchemaType } from "@google/generative-ai";
import { useEffect, useRef, useState, memo } from "react";
import vegaEmbed from "vega-embed";
import { useLiveAPIContext } from "../../contexts/LiveAPIContext";
import { ToolCall } from "../../multimodal-live-types";

const declaration: FunctionDeclaration = {
  name: "render_altair",
  description: "Displays an altair graph in json format.",
  parameters: {
    type: SchemaType.OBJECT,
    properties: {
      json_graph: {
        type: SchemaType.STRING,
        description:
          "JSON STRING representation of the graph to render. Must be a string, not a json object",
      },
    },
    required: ["json_graph"],
  },
};

const maleAgentNames = ["Aarav", "Arjun","Kabir", "Rohan","Varun", "Aryan", "Vikram", "Ishaan", "Shivam"];
const femaleAgentNames = ["Aanya", "Diya", "Siya", "Pari", "Myra", "Aisha", "Navya", "Ira", "Riya"];
const geminiVoices= ["Aoede", "Charon", "Fenrir", "Kore", "Puck"]
const geminiVoice = geminiVoices[Math.floor(Math.random() * geminiVoices.length)];
const Names = (geminiVoice == "Aoede" || geminiVoice == "Kore")? femaleAgentNames: maleAgentNames;
const randomName = Names[Math.floor(Math.random() * Names.length)];





function AltairComponent() {
  const [jsonString, setJSONString] = useState<string>("");
  const { client, setConfig } = useLiveAPIContext();

  useEffect(() => {
    setConfig({
      model: "models/gemini-2.0-flash-exp",
      generationConfig: {
        responseModalities: "audio",
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: `${geminiVoice}` } },
        },
      },
      // liveClientContent: { clientContent: {
      //   turns: [
      //     {
      //       parts:[
      //         {
      //           text: "Hi, please introduce yourself."
      //         }
      //       ],
      //       role:"user"
      //     },
      //     {
      //       parts:[
      //         {
      //           text: ""
      //         }
      //       ],
      //       role:"model"
      //     }
      //   ],
      //   turnComplete: false
      // }},
      systemInstruction: {
        parts: [
          {
            text: `Your name is ${randomName}. You are a customer care agent for term life insurance working for a major Indian insurance platform, capable of assisting customers with a wide variety of queries.\
                    You MUST follow the following rules when engaging with a customer:\
                    1.  At no point MUST YOU REVEAL YOU ARE AN AI.\
                    2.  Don't ask for additional information, just make your best judgement.\
                    3. If you do not know something, make use of the Google Search. Always tell the customer- 'Sure, just give me a moment please' when doing so.\
                    4. You must ONLY ANSWER QUESTIONS RELATED TO TERM INSURANCE. If you feel like your knowledge is not enough, if the query is not related to your expertise, the user asks for it or if the user expresses dissatisfaction, transfer the call to a human. You MUST say- 'Let me transfer the call to my supervisor' while also letting the customer know the reason for the transfer. \
                    5. Before you get started, ALWAYS TELL YOUR NAME, YOUR ROLE and explain with a very short anecdote as to why you sound American with an Indian name. Then ASK THE USER THEIR NAME and use it in the conversation naturally to build familiarity and trust.\
                    6. If a query seems complicated, think through it step by step. Tell the customer- 'Sure, give me a moment.', take a pause, then provide the response.\
                    7. If you get queries regarding the way you speak, your accent, why its not Indian etc., just make up an excuse with a laugh.
                    `,
          },
        ],
      },
      tools: [
        // there is a free-tier quota for search
        { googleSearch: {} },
        { functionDeclarations: [declaration] },
      ],
    });
  }, [setConfig]);

  useEffect(() => {
    const onToolCall = (toolCall: ToolCall) => {
      console.log(`got toolcall`, toolCall);
      const fc = toolCall.functionCalls.find(
        (fc) => fc.name === declaration.name,
      );
      if (fc) {
        const str = (fc.args as any).json_graph;
        setJSONString(str);
      }
      // send data for the response of your tool call
      // in this case Im just saying it was successful
      if (toolCall.functionCalls.length) {
        setTimeout(
          () =>
            client.sendToolResponse({
              functionResponses: toolCall.functionCalls.map((fc) => ({
                response: { output: { success: true } },
                id: fc.id,
              })),
            }),
          200,
        );
      }
    };
    client.on("toolcall", onToolCall);
    return () => {
      client.off("toolcall", onToolCall);
    };
  }, [client]);

  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (embedRef.current && jsonString) {
      vegaEmbed(embedRef.current, JSON.parse(jsonString));
    }
  }, [embedRef, jsonString]);
  return <div className="vega-embed" ref={embedRef} />;
}

export const Altair = memo(AltairComponent);
