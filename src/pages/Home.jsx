import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary py-5 ">
          <div className="container">
            <div className="text-center text-white">
              <h1 className="display-5 fw-normal">User Database</h1>
              <p>View company's user data</p>
              <Link className="btn btn-light" to="/users">
                View List of Users
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-body-tertiary py-5">
          <div className="container">
            <div className="text-center">
              <h2 className="display-5 fw-normal">User Statistics</h2>
              <p>View company's user statistics</p>
              <Link className="btn btn-primary" to="/statistics">
                View User Stats
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
