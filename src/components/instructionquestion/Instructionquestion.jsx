import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Note from "../layout/Note";

function Instructionquestion() {
  return (
    <div>
      <Header>
        This round will check your understanding for the Instructions which was
        provided
      </Header>
      <p>Make sure you properly have read the instructions or you won't be allowed to take this test</p>

      <button>
        <NavLink
          className="btn btn-primary btn-lg btn-demo"
          to="/instructions"
          variant="body2"
        >
          Go back to the previous page and read instructions again
        </NavLink>
        {/* {" "}
        <a href="/instructions">
          Or go back to the previous page and read instructions again
        </a> */}
      </button>
      <h1>Else Answers this Questions</h1>
      <h1> How many crops are there?  </h1>
      <button type="button">3</button><button type="button">4</button><button type="button">5</button>

      <h1> What are we trying to predict </h1>
      <button type="button">Irrigation</button><button type="button">Tiling</button><button type="button">Harvesting</button>
      
      <h1> How many input variable are here?   </h1>
      <button type="button">3</button><button type="button">4</button><button type="button">5</button>
      
      
      <h1>  The best-possible model predicts everything but the  correctly. </h1>
      <button type="button">random error</button><button type="button">mean error</button><button type="button">median error</button>
      
      <button>
        <NavLink
          className="btn btn-primary btn-lg btn-demo"
          to="/learninground"
          variant="body2"
        >
          Time to unlearn so that you can learn something up!!!!
        </NavLink>
        {/* <a href="/learninground">
          {" "}
          Time to unlearn so that you can learn something up!!!!
        </a> */}
      </button>
    </div>
  );
}

export default Instructionquestion;
