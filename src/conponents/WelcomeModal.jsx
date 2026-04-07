import { useEffect } from "react";
import LOGO from "../assets/Ea.png";
import axiomLogo from "../assets/axiomLogo.png";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // show for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash flex flex-col gap-30 justify-center items-center h-screen w-full bg-white">
      <img src={axiomLogo} alt="logo" width={100} height={100} className="logo" />
      <img src={LOGO} alt="logo" width={100} height={100} className="logo" />
    </div>
  );
}