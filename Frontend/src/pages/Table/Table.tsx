import AnimatedFoodBackground from "../../components/AnimatedFoodBackground/AnimatedFoodBackground";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import Product from "../../components/Product/Product";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";

const Table = () => {
  return (
    <div className="">
      <AnimatedFoodBackground />
      <Banner />
      <NavBar/>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <br />
      <Product />
      <div className="container mx-auto py-12"></div>
    </div>
  );
};

export default Table;
