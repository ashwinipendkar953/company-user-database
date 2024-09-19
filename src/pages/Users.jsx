import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../useFetch";

const Users = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  return (
    <>
      <Header />
      <main>
        <div className="container mt-4">
          <h1>List of Users</h1>
          <div>
            {loading && <p>Loading...</p>}
            {error && !data && (
              <p className="text-danger">
                An error occurred while fetching data.
              </p>
            )}
            {data && data.length > 0 && (
              <ul>
                {data.map((user) => (
                  <li key={user.id} className="py-4">
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Company: {user.company.name}</p>
                    <Link className="btn btn-primary" to={`/users/${user.id}`}>
                      View Details
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Users;
