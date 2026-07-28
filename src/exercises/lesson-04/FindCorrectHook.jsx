// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useState } from 'react';

export default function FindCorrectHook() {
  //let clickCount = 0; // ← incorrect implementation
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((count) => count + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// Write your explanation
/*
clickCount was a normal variable so it reset to 0 everytime the component rendered. Since the count is displayed in the UI,
useState is the correct hook. Updating state causes react to re-render the component and allowing the button text to 
display the updated count. 
*/
