import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../useFetch";

const UserDetails = () => {
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  const { userId } = useParams();
  const user = data && data.find((user) => user.id == userId);

  return (
    <>
      <Header />
      <main>
        <div className="container mt-4">
          {user && (
            <>
              <h1>{user.name}</h1>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Name: </strong>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <strong>Username: </strong>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <strong>Email: </strong>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <strong>Phone: </strong>
                  {user.phone}
                </li>
                <li className="list-group-item">
                  <strong>Website: </strong>
                  {user.website}
                </li>
                <li className="list-group-item">
                  <strong>Company: </strong>
                  {user.company.name} ({user.company.catchPhrase})
                </li>
                <li className="list-group-item">
                  <strong>City: </strong>
                  {user.address.city}
                </li>
                <li className="list-group-item">
                  <strong>Zipcode: </strong>
                  {user.address.zipcode}
                </li>
              </ul>
            </>
          )}

        </div>
      </main>
    </>
  );
};

export default UserDetails;
