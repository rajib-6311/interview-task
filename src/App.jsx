import Cards from "./components/Cards";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="bg-primary md:w-[1440px] mx-auto md:h-[800px] h-[700px] relative">
       <Navbar/>
       <Cards/>
    </div>
  );
};

export default App;