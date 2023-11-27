import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddOnsContext from "../context/AddOnsContext";

const Topics = () => {

  const navigate = useNavigate();

  const { addOns, setAddOns } = useContext(AddOnsContext);

  let { selectedAddOnsValue, setSelectedAddOnsValue } = useContext(AddOnsContext);

  const [num, setNum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/summary");
  };

  const handleChange = (e, id) => {

    setSelectedAddOnsValue((prev) => [...prev, addOns[id]]);

    console.log(selectedAddOnsValue.id + addOns[id]);

    setNum(id + 1);
  };

  return (
    <>
      <div className="card">

        <h1>Which topics you are interested in?</h1>

        <form
          onSubmit={handleSubmit}
        >
          {addOns.map((item, idx) => {
            return (
              <div
                key={item.id}
                className={`${num != idx + 1 ? "" : "checkbox__checked"}`}
              >

                <div class="checkboxes__item">
                  <label class="checkbox style-i">
                    <input type="checkbox" onChange={(e) => handleChange(e, idx)} value={item.value} />

                    <div class="checkbox__body">{item.value}</div>
                  </label>
                </div>




              </div>
            );
          })}

          <div className="action__wrapper">
            <button
              className=""
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>

      </div>
      <div className="step">
        <span>Step 2 of 3</span>
        <ul className="step__list">
          <li className="before"><span></span></li>
          <li className="active"><span></span></li>
          <li><span></span></li>
        </ul>
      </div>
    </>
  );
};

export default Topics;
