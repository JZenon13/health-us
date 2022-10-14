import React from "react";
import { Link } from "react-router-dom";
function Homes({ user }) {
  if (user) {
    return <></>;
  } else {
    return (
      <>
        <h1 className="centerText">
          <b>Welcome to Health Us</b>
        </h1>
        <div className="body">
          <h2 className="centerLinks">
            {
              <Link className="centerLinks" to="/signup">
                Signup /
              </Link>
            }

            {
              <Link className="centerLinks" to="/login">
                {" "}
                Login
              </Link>
            }
          </h2>
        </div>
      </>
    );
  }
}

export default Homes;
