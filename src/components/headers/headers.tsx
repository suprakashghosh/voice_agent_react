import { memo, ReactNode, RefObject, useEffect, useRef, useState } from "react";


function AppHeaders() {
  return (
    <div className="header" style={{ textAlign: "center" }}>
      <h1>Your one stop for problem resolution</h1>
      <h2>Click on the play button below to start speaking to customer care</h2>
      < div style={{ display: "flex" }}>
        < div style={{
          border: "2px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          width: "45%",
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
            <li style={{ marginBottom: "8px" }}>&#8226; Has the ability to seamlessly Google Search</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Is mindful of interruptions from the customer</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Can transfer call to supervisor when required</li>
          </ul>
        </div>

        < div style={{
          border: "2px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          width: "45%",
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
            <li style={{ marginBottom: "8px" }}>&#8226; Indian agents</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Better pauses</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Personalized Assistance</li>
            <li style={{ marginBottom: "8px" }}>&#8226; Access company-specific knowledge and documentation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(AppHeaders);