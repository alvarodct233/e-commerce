import { FC, PropsWithChildren } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
