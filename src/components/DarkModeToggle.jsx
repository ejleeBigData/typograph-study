import { useState } from "react";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem("theme"));
  return <div>DartModeToggle</div>;
};

export default DarkModeToggle;
