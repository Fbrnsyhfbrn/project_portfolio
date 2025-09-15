import { Nbar } from "@/app/Addons/NavBar";
import{ Home } from "@/app/Addons/Home";
import { About } from "@/app/Addons/About";
import { History } from "@/app/Addons/Project";
import { Mproject } from "./Addons/Mproject";
import { Akhir } from "./Addons/Fotter";
import CntactSt from "./Addons/Contact";

export default function Page() {
  return (
<main className="overflow-x-hidden">
  <Nbar />
  <Home />
  <About />
  <History />
  <Mproject />
  <CntactSt /> 
  <Akhir />
</main>

  );
}