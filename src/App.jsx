import Cards from "./components/Cards";
import HeaderText from "./components/HeaderText";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="bg-primary md:w-[1440px] mx-auto md:h-[840px] h-[700px] relative">
       <Navbar/>
       <HeaderText/>
       <Cards/>
    </div>
  );
};

export default App;