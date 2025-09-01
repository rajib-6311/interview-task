import Cards from "./components/Cards";
import Cta from "./components/Cta";
import HeaderText from "./components/HeaderText";
import Navbar from "./components/Navbar";
import SocialProof from "./components/SocialProof";


const App = () => {
  return (
    <div className=" md:w-[1440px] mx-auto">
       <div className="bg-primary md:h-[840px] h-[700px] relative">
        <Navbar/>
        <HeaderText/>
        <Cards/>
       </div>
       <SocialProof/>
       <Cta/>
    </div>
  );
};

export default App;