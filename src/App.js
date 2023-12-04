import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button > Press the Button </Button>
      <Button > Try the Button </Button>
      <Button > Click here </Button>
      <Button > Button </Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
     ({children})
    </button>
  );
}
