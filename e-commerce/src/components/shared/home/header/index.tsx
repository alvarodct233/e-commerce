// import { useContext } from "react";
// import { useUserName, userNameContext } from "../../../../context"

// import products  from "../src/assets/products";

const Header = () => {
    // const {userName} = useContext(userNameContext);
    // This sintax is much sorter and less error prone than the one above. We just call a function 
    // and we get the value we need. Check the context file to see how it is implemented.
    // const {userName} = useUserName();

  return (
    <section className="w-full py-12 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className=" space-y-2">
            <h1 className=" text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skin Care Collection
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              {/* Specially designed for <em>{ userName ? userName : "User name not defined"}</em>. */}
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Get a beautiful skin with our kit now in stock  
              <br/>
              <strong>Go and get it</strong>
            </p>
          </div>
          <img
            alt="Image"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
            height="400"
            src= "./src/assets/products.jpg"
            width="300"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
