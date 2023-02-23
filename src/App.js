import logo from "./assests/logo.png";
import "./App.css";
import { useState } from "react";
import { Sandpack } from "@codesandbox/sandpack-react";

function App() {
  const templateOptions = [
    "react",
    "angular",
    "solid",
    "svelte",
    "vanilla",
    "vue",
    "node",
    "vite",
    "vite-react",
    "vite-vue",
    "vite-svelte",
    "astro",
    "nextjs",
  ];

  const themeOptions = ["dark", "light"];
  const [selectedTemplate, setSelectedTemplate] = useState("react");
  const [selectedThem, setSelectedThem] = useState("dark");

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };

  const handleThemeChange = (event) => {
    setSelectedThem(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main-conatiner">
        <section className="option-container">
          <div className="select-container-them">
            <label htmlFor="template-change">Select a Template:</label>
            <select onChange={handleTemplateChange} id="template-change">
              {templateOptions.map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="select-container">
            <label htmlFor="theme-select">Select a theme:</label>
            <select id="theme-select" onChange={handleThemeChange}>
              {themeOptions.map((el) => {
                return (
                  <option key={el} value={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          </div>
        </section>
        <Sandpack
          theme={selectedThem}
          template={selectedTemplate}
          options={{
            showLineNumbers: false, // default - true
            showInlineErrors: true, // default - false
            wrapContent: true, // default - false
            editorHeight: 450, // default - 300
            editorWidthPercentage: 60, // default - 50
          }}
        />
      </section>
    </div>
  );
}

export default App;
