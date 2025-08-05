import Article from "./components/Article";
import LoginForm from "./components/LoginForm";
import DarkText from "./components/DarkText";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <div className="bg-cyan-100 min-h-screen flex flex-col justify-center items-center gap-6 yang-jin">
      <div className="flex gap-4">
        <Article />
        <LoginForm />
      </div>

      <div className="flex gap-4">
        <DarkText />
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default App;
