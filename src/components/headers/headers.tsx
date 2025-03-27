import { memo, ReactNode, RefObject, useEffect, useRef, useState } from "react";

function AppHeaders() {
  return (
    <div className="header" style={{ textAlign: "center" }}>
      <h1>Your one stop problem resolution</h1>
      <h2>Click on the play button below to start speaking to the customer care agent</h2>
      <h3>Features</h3>
      <ul style={{
        listStyleType: "none",
        padding: 0,
        maxWidth: "600px",
        margin: "20px auto",
        textAlign: "center",
      }}>
        <li style={{ marginBottom: "8px" }}>&#8226; Adapts to the conversation seamlessly</li>
        <li style={{ marginBottom: "8px" }}>&#8226; Has the ability to seamlessly Google Search</li>
        <li style={{ marginBottom: "8px" }}>&#8226; Is mindful of interruptions from the customer and switches tracks</li>
        <li style={{ marginBottom: "8px" }}>&#8226; Can refer to specific knowledge bases such as company documents</li>
        <li style={{ marginBottom: "8px" }}>&#8226; Can transfer call to supervisor on user dissatisfaction</li>
      </ul>
      <h3>Things to improve</h3>
      <ul style={{
        listStyleType: "none",
        padding: 0,
        maxWidth: "600px",
        margin: "20px auto",
        textAlign: "center",
      }}>
        <li style={{ marginBottom: "8px" }}>&#8226; Indian accent for better immersion</li>
        <li style={{ marginBottom: "8px" }}>&#8226; Better pauses</li>
        <li style={{ marginBottom: "8px" }}>&#8226; Personalized Assistance</li>
        <li style={{ marginBottom: "8px" }}>&#8226; Quick Problem Resolution</li>
      </ul>
    </div>
  );
}

export default memo(AppHeaders);