import Cards from "./components/Cards";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="bg-primary md:w-[1440px] mx-auto h-[800px] relative">
       <Navbar/>
       <Cards/>
    </div>
  );
};

export default App;