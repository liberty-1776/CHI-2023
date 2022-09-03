import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Seed1 from "../lrseeds/Seed1.jsx";
import Seed2 from "../lrseeds/Seed2.jsx";
import Seed3 from "../lrseeds/Seed3.jsx";
import Seed4 from "../lrseeds/Seed4.jsx";


function Learninground() {
  
const [seedCount, setSeedCount] = useState(0);

  return (
    <div>
    {seedCount === 0 && 
      <>
        <p>{seedCount}</p>
    <Seed1/>
    </>
    }
    {seedCount === 1 && 
      <>
        <p>{seedCount}</p>
    <Seed2/>
    </>
    }
    {seedCount === 2 && 
      <>
        <p>{seedCount}</p>
    <Seed3/>
    </>
    }
    {seedCount === 3 && 
      <>
        <p>{seedCount}</p>
    <Seed4/>
    </>
    }
    {seedCount === 4 && 

      <button>
        <NavLink
          className="btn btn-primary btn-lg btn-demo"
          to="/officialround"
          variant="body2"
        >
          Let's try official rounds ;O Shall we???
        </NavLink>
      </button>
    }

    </div>
  );
}

export default Learninground;
