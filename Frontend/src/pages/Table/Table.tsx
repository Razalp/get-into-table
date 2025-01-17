import AnimatedFoodBackground from "../../components/AnimatedFoodBackground/AnimatedFoodBackground";
import Banner from "../../components/Banner/Banner";
import NavBar from "../../components/NavBar/NavBar";
import Product from "../../components/Product/Product";

const Table = () => {
  return (
    <div className="">
      <AnimatedFoodBackground />
      <Banner />
      <NavBar/>
      <br />
      <Product />
      <div className="container mx-auto py-12"></div>
    </div>
  );
};

export default Table;
