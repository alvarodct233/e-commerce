import PageLayout from "../../components/layout/pagelayout";
import Header from "../../components/shared/home/header";
// import ProductsGrid from "../../components/shared/home/productsGrid";
import ProductCard from "../../components/shared/home/productCard";
// import { useContext } from "react"; userNameContext
import { useUserName, } from "../../context";

export const HomePage = () => {

    // const {userName} = useContext(userNameContext);
    const {userName} = useUserName();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <PageLayout>
        <main className="flex-1">
          <Header />
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter lg:text-4xl">
                Beach Day Essentials
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                <em>{ userName ? userName : 'User not defined'}</em>, get ready for the perfect beach day with our curated collection
                of essentials.
              </p>
            </div>
            {/* <ProductsGrid> */}
              <ProductCard />
            {/* </ProductsGrid> */}
          </section>
        </main>
      </PageLayout>
    </div>
  );
};
