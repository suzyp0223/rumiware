import { useRecoilValue } from "recoil";

import ProductsMain  from "../../pages/ProductsMain";
import productsList from '../../pages/ProductsList';

const Index = (): JSX.Element => {
  const products = useRecoilValue(productsList);

  return (
    <>
      <section className="">
        <ProductsMain products={products} />
      </section>
    </>
  );
}

export default Index;