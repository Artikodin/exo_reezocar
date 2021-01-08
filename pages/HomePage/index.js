import { Layout } from "../../components";
import Banner from "./Banner";
import Review from "./Review";
import Advertisement from "./Advertisement";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Banner />
        <Review />
        <Advertisement />
      </Layout>
    </>
  );
};

export default HomePage;
