import "./App.css";
import Eksempel01 from "./Eksempel01VisVariable";
import Eksempel02 from "./Eksempel02KaldUseState";
import Chapter_1_1 from "./Chapter_1_1";
import Chapter_1_2 from "./Chapter_1_2";
import UseStateExample from "./UseStateHookExample";
import UseEffectExample from "./UseEffectHookExample";

function RandomExamples(): React.ReactElement {
  return (
    <div>
      <h1>Random eksempler</h1>
      <h2>Eksempel 1</h2>
      <Eksempel01 />
      <h2>Eksempel 2</h2>
      <Eksempel02 />
      <h2>Chaper_1_1</h2>
      <Chapter_1_1 />
      <h2>Chaper_1_2</h2>
      <Chapter_1_2 />

      <h1>Basic Hooks</h1>
      <h2>UseState</h2>
      <UseStateExample />
      <h2>UseEffect</h2>
      <UseEffectExample />
      <h2>UseContext</h2>
    </div>
  );
}

export default RandomExamples;
