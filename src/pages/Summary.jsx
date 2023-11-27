import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddOnsContext from "../context/AddOnsContext";
import UserInfoContext from "../context/UserInfoContext";

const Summary = () => {

  const navigate = useNavigate();

  let { selectedAddOnsValue, setSelectedAddOnsValue } = useContext(AddOnsContext);
  let { name, setName } = useContext(UserInfoContext);
  let { email, setEmail } = useContext(UserInfoContext);

  return (
    <>
      <div className="card">

        <h1>Summary</h1>

        <div className="summary">

          <div className="info__user">
            <p><span>Name: </span><span>{name}</span></p>
            <p><span>Email: </span><span>{email}</span></p>
          </div>

          <h2>Topics:</h2>

          <div className="topics">

            {selectedAddOnsValue.map((item) => {
              return (
                <ul key={item.id}>
                  <li>
                    <p>{item.value}</p>
                  </li>

                </ul>
              );
            })}
          </div>
        </div>


        <div className="action__wrapper">
          <button onClick={() => navigate("/success")}>
            Confirm
          </button>
        </div>

      </div>
      <div className="step">
        <span>Step 3 of 3</span>
        <ul className="step__list">
          <li className="before"><span></span></li>
          <li className="before"><span></span></li>
          <li className="active"><span></span></li>
        </ul>
      </div>
    </>
  );
};

export default Summary;
