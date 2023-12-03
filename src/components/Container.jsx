import Header from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function Container() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Container;
