import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App container mx-auto px-4 pb-12 h-screen min-h-[800px] flex flex-col justify-between">
      <Header />
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
