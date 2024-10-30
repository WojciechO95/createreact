import { useState } from "react";

export const Textarea = () => {
  const [text, setText] = useState("");
  const maxChars = 30;
  const handleUserInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleUserInput}></textarea>
      <p style={{ color: text.length > maxChars ? "red" : "black" }}>
        {text.length}/{maxChars}
      </p>
    </div>
  );
};
