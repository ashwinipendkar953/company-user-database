import Header from "../components/Header";

const Statistics = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container mt-4">
          <h1>User Statistics</h1>
          <hr />
          <div className="row g-4 p-4">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Total Number of Users</h3>
                  <p className="fs-1 card-text">10</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Paid Users</h3>
                  <p className="fs-1 card-text">5</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Most Valuable User</h3>
                  <p className="fs-1 card-text">Leanne Graham</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Statistics;
