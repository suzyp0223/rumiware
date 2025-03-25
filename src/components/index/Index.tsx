// import { useRecoilValue } from "recoil";
import Slider from "../../components/layout/Slider";

import ProductsMain from "../../pages/ProductsMain";
// import productsList from '../../pages/ProductsList';

const Index = (): JSX.Element => {
  // const products = useRecoilValue(productsList);

  return (
    <>
    {/* slider 수정할것 -250325화 */}
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        {/* <ProductsMain products={products} /> */}
        <ProductsMain />
      </section>
    </>
  );
}

export default Index;