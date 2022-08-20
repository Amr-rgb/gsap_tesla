import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

function App() {
  let tl = new gsap.timeline();
  let app = useRef(null);

  useEffect(() => {
    tl.to(app, { duration: 0, css: { visibility: "visible" } }, 0);
  }, []);

  return (
    <div
      ref={(el) => (app = el)}
      className="App invisible container mx-auto px-4 pb-12 h-screen min-h-[800px] flex flex-col justify-between"
    >
      <Header timeline={tl} />
      <Main timeline={tl} />
      <Sidebar timeline={tl} />
    </div>
  );
}

export default App;
