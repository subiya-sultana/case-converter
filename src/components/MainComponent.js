import React, { useState } from "react";

export default function MainComponent() {
  const [text, setText] = useState("");

  // function to get text from user
  const getText = (e) => {
    setText(e.target.value);
  };
  // function to convert text into lower-case
  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  // function to convert text into upper-case
  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  // function to convert text into sentance-case
  const toSentenceCase = () => {
    let newText = text;
    if (text.includes("\n")) {
      newText = text.toLowerCase().split(/\r?\n/);
      for (let i = 0; i < newText.length; i++) {
        const sentences = newText[i].split(". ");
        for (let j = 0; j < sentences.length; j++) {
          sentences[j] =
            sentences[j].charAt(0).toUpperCase() + sentences[j].slice(1);
        }
        newText[i] = sentences.join(". ");
      }
      newText = newText.join("\r\n");
    } else {
      newText = text.toLowerCase().split(". ");
      for (let i = 0; i < newText.length; i++) {
        newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
      }
      newText = newText.join(". ");
    }
    setText(newText);
  };
  // function to convert text into title-case
  const toTitleCase = () => {
    let newText = text;
    if (text.includes("\n")) {
      newText = text.toLowerCase().split(/\r?\n/);
      for (let i = 0; i < newText.length; i++) {
        const words = newText[i].split(" ");
        for (let j = 0; j < words.length; j++) {
          words[j] = words[j].charAt(0).toUpperCase() + words[j].slice(1);
        }
        newText[i] = words.join(" ");
      }
      newText = newText.join("\r\n");
      console.log(newText);
    } else {
      newText = text.toLowerCase().split(" ");
      for (let i = 0; i < newText.length; i++) {
        newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
      }
      newText = newText.join(" ");
    }
    setText(newText);
  };

  // function to convert text into alternating-case
  const toAlternatingCase = () => {
    function alternateCase(word) {
      let alternatingWord = "";
      for (let i = 0; i < word.length; i++) {
        alternatingWord +=
          i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
      }
      return alternatingWord;
    }

    let newText = text;
    if (text.includes("\n")) {
      newText = text.split(/\r?\n/);
      for (let i = 0; i < newText.length; i++) {
        const words = newText[i].split(" ");
        for (let j = 0; j < words.length; j++) {
          words[j] = alternateCase(words[j]);
        }
        newText[i] = words.join(" ");
      }
      newText = newText.join("\r\n");
    } else {
      // If there are no newlines, treat the input as a single line
      newText = text.split(" ");
      for (let i = 0; i < newText.length; i++) {
        newText[i] = alternateCase(newText[i]);
      }
      newText = newText.join(" ");
    }
    setText(newText);
  };
  // function to clear text
  const toClearText = () => {
    let newText = "";
    setText(newText);
  };
  // function to copy text
  const toCopyText = () => {
    navigator.clipboard.writeText(text);
  };
  // function to remove extra spaces
  const toRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  // function to find and replace with in text
  const toFindAndReplace = () => {
    alert("xyz");
  };
  // function to convert snake_Case to kebab-case
  const snakeCaseToKebabCase = () => {
    alert("works");
  };
  // function to convert snake_Case to camelCase
  const snakeCaseToCamelCase = () => {
    alert("works");
  };
  // function to convert kebab-Case to snake_Case
  const kebabCaseToSnakeCase = () => {
    alert("works");
  };
  // function to convert kebab-Case to snake_Case
  const kebabCaseToCamelCase = () => {
    alert("works");
  };
  // function to convert camelCase to snake_Case
  const camelCaseToSnakeCase = () => {
    alert("works");
  };
  // function to convert camelCase to kebab-Case
  const camelCaseToKebabCase = () => {
    alert("works");
  };

  return (
    <div id="wrapper" className={`container-fluid bg-light-subtle`}>
      <div className="my-4">
        <p id="myHeading" className="fs-5 text-center my-0">
          A simple application to analyze your text and edit it's format within
          seconds!
        </p>
        <div className="w-75 m-auto text-center">
          CaseConverter : convert text between lower case, upper case,
          capitalized, or alternating case easily. Instead of retyping your
          message having caps lock enabled, just copy and paste your text and
          set the case transform you need.
        </div>
      </div>
      <div id="textBox" className="w-75 m-auto">
        <h5 className="px-1 text-start">
          Enter Your Text To Analyze And Edit It.
        </h5>
        <textarea
          onChange={getText}
          className="form-control"
          id="myTextbox"
          rows="8"
          placeholder="Enter your text here...."
          value={text}
        ></textarea>
        <div id="btnContainer" className="py-2 text-sm-start">
          <button
            type="button"
            onClick={toLowerCase}
            className="btn btn-secondary m-1"
          >
            lowercase
          </button>
          <button
            type="button"
            onClick={toUpperCase}
            className="btn btn-secondary m-1"
          >
            UPPERCASE
          </button>
          <button
            type="button"
            onClick={toSentenceCase}
            className="btn btn-secondary m-1"
          >
            Sentence case
          </button>
          <button
            type="button"
            onClick={toTitleCase}
            className="btn btn-secondary m-1"
          >
            Title Case
          </button>
          <button
            type="button"
            onClick={toAlternatingCase}
            className="btn btn-secondary m-1"
          >
            AlTeRnAtInG cAsE
          </button>
          <button
            type="button"
            onClick={toClearText}
            className="btn btn-secondary m-1"
          >
            Clear text
          </button>
          <button
            type="button"
            onClick={toCopyText}
            className="btn btn-secondary m-1"
          >
            Copy text
          </button>
          <button
            type="button"
            onClick={toRemoveExtraSpaces}
            className="btn btn-secondary m-1"
          >
            Remove extra spaces
          </button>
          <button
            type="button"
            onClick={toFindAndReplace}
            className="btn btn-secondary m-1"
          >
            Find and replace
          </button>
          <button
            type="button"
            onClick={snakeCaseToKebabCase}
            className="btn btn-secondary m-1"
          >
            snake_case to kebab-case
          </button>
          <button
            type="button"
            onClick={snakeCaseToCamelCase}
            className="btn btn-secondary m-1"
          >
            snake_case to camelCase
          </button>
          <button
            type="button"
            onClick={kebabCaseToSnakeCase}
            className="btn btn-secondary m-1"
          >
            kebab-case to snake_case
          </button>
          <button
            type="button"
            onClick={kebabCaseToCamelCase}
            className="btn btn-secondary m-1"
          >
            kebab-case to camelCase
          </button>
          <button
            type="button"
            onClick={camelCaseToSnakeCase}
            className="btn btn-secondary m-1"
          >
            camelCase to snake_case
          </button>
          <button
            type="button"
            onClick={camelCaseToKebabCase}
            className="btn btn-secondary m-1"
          >
            camelCase to kebab-case
          </button>
        </div>
      </div>
      <div id="textDetails" className=" w-75 m-auto text-start px-1">
        <h5 className="mt-4">Your Text Summary:</h5>
        <p className="px-1 mb-0">
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p className="px-1 mb-0">
          {text.match(/[aeiou]/gi) === null
            ? 0
            : text.match(/[aeiou]/gi).length}{" "}
          vowels and{" "}
          {text.match(/[^aeiou]/gi) === null
            ? 0
            : text.match(/[^aeiou\s]/gi).length}{" "}
          consonants.
        </p>
        <p className="px-1">
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes read.
        </p>
        <h5 className="mt-4">Your Text Preview:</h5>
        <pre className="px-1 mb-4">
          {text.length > 0
            ? text
            : "Enter some text in the above textbox to preview it here..."}
        </pre>
      </div>
    </div>
  );
}
