import { useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  const adviceHandler = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  };

  return (
    <section className="advice__section">
      <button className="button" onClick={adviceHandler}>
        Get Free Advice
      </button>
      <div className="advice__container">
        <p>{advice}</p>
      </div>
    </section>
  );
};

export default Advice;
