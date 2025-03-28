import { memo, ReactNode, RefObject, useEffect, useRef, useState } from "react";


function AppHeaders() {
  return (
    <div className="header" style={{ textAlign: "center" }}>
      <h1>Your one stop insurance advisor</h1>
      <h2>Click on the <span style={{color: "blue"}}>play button</span> below and start speaking to our agent</h2>
      < div style={{ display: "flex" }}>
        < div style={{
          border: "2px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          width: "85%",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
        }}>
          <h3>Features</h3>
          <ul style={{
            listStyleType: "none",
            padding: 0,
            maxWidth: "100%",
            margin: "0 auto",
            textAlign: "left",
          }}>
            <li style={{ marginBottom: "8px" }}>&#8226; Adapts to the conversation seamlessly</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Ability to seamlessly Google Search</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Is mindful of interruptions/pauses</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Can infer voice tone</li>
          </ul>
        </div>

        < div style={{
          border: "2px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          width: "85%",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
          marginLeft: "20px",
        }}>
          <h3>Coming Soon</h3>
          <ul style={{
            listStyleType: "none",
            padding: 0,
            maxWidth: "100%",
            margin: "0 auto",
            textAlign: "left",
          }}>
            <li style={{ marginBottom: "8px" }}>&#8226; More <a href="https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice#demo">natural sounding voices and pauses</a></li>
            <li style={{ marginBottom: "8px" }}>&#8226; Indian accent</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Company-specific knowledge/documentation</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Better maths and reasoning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(AppHeaders);