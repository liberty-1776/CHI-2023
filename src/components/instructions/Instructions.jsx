import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Note from "../layout/Note";

function Instructions() {
  return (
    <div>
This is a hypothetical case which deals with the following crops cases:       

We have four crops <b>(Meemmaseed, Gresley, Joumusame, Vussanut)</b>, and subjects predict irrigation based on the three inputs <b>(sunshine, temperature, wind speed)</b>.

Subjects are asked to predict the amount of irrigation needed (<b>in 1000 gallons</b>).

The Optimal Irrigation Formula determines Irrigation. The best-possible model predicts everything but the random error correctly.

The Model with artificial error follows the problem-respective formula.

Subjects predict irrigation for all four crops, in blocks of 20 Learning Rounds.

Treatment determines which model (best-possible or error-model) subjects see during the learning rounds.

      <button>
        <NavLink
          className="btn btn-primary btn-lg btn-demo"
          to="/instructionquestion"
          variant="body2"
        >
          You sure you read all the instructions???
        </NavLink>
        {/* {" "}
        <a href="/instructionquestion">
          {" "}
          You sure you read all the instructions???
        </a> */}
      </button>
    </div>
  );
}

export default Instructions;
