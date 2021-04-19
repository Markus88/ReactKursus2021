import { ButtonHTMLAttributes } from "react";
import "./App.css";
import RandomExamples from "./RandomExamples";

export default function (props: any) {
  return (
    <>
      Main view{" "}
      <button value={1} onClick={() => RandomExamples()}>
        View 1
      </button>{" "}
      <button value={2} onClick={props.clickBtn}>
        View 2
      </button>{" "}
    </>
  );
}

// function App(): React.ReactElement {
//   return (
//     <div>
//       <h1>Kursus kode</h1>
//       <h2>Opgave 1</h2>
//       <h1>Random eksempler</h1>
//       <h2>Eksempel 1</h2>
//       <Eksempel01 />
//       <h2>Eksempel 2</h2>
//       <Eksempel02 />
//       <h2>Chaper_1_1</h2>
//       <Chapter_1_1 />
//       <h2>Chaper_1_2</h2>
//       <Chapter_1_2 />

//       <h1>Basic Hooks</h1>
//       <h2>UseState</h2>
//       <UseStateExample />
//       <h2>UseEffect</h2>
//       <UseEffectExample />
//       <h2>UseContext</h2>
//     </div>
//   );
// }

// export default App;
