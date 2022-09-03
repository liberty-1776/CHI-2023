import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import P1 from "./seed3/P1.jsx";
import P2 from "./seed3/P2.jsx";
import P3 from "./seed3/P3.jsx";
import P4 from "./seed3/P4.jsx";
import P5 from "./seed3/P5.jsx";
import P6 from "./seed3/P6.jsx";
import P7 from "./seed3/P7.jsx";
import P8 from "./seed3/P8.jsx";
import P9 from "./seed3/P9.jsx";
import P10 from "./seed3/P10.jsx";
import P11 from "./seed3/P11.jsx";
import P12 from "./seed3/P12.jsx";
import P13 from "./seed3/P13.jsx";
import P14 from "./seed3/P14.jsx";
import P15 from "./seed3/P15.jsx";


function Seed3() {

  const [PCount, setPCount] = useState(0);

  return (
    <div>

This is for Gresley irrigation							
							
        Input variables determining irrigation:  sunshine (-), temperature (-), wind speed (+)							
                      
                      
        Sunshine-Input randomly drawn from (hours/day):				    High	Low		
                                                            <br/>        18	1
                      
        Temperature-Input randomly drawn from (Fahrenheit):				High	Low		
        <br/>             104	32		
                      
        Wind-Input randomly drawn from (km/h):				             High	Low		
        <br/>   
        
      {PCount === 0 &&
        <>
        <p>{PCount}</p>
          <P1 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 1 &&
        <>
        <p>{PCount}</p>
          <P2 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 2 &&
        <>
        <p>{PCount}</p>
          <P3 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 3 &&
        <>
        <p>{PCount}</p>
          <P4 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 4 &&
        <>
        <p>{PCount}</p>
          <P5 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 5 &&
        <>
        <p>{PCount}</p>
          <P6 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 6 &&
        <>
        <p>{PCount}</p>
          <P7 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 7 &&
        <>
        <p>{PCount}</p>
          <P8 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 8 &&
        <>
        <p>{PCount}</p>
          <P9 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 9 &&
        <>
        <p>{PCount}</p>
          <P10 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 10 &&
        <>
        <p>{PCount}</p>
          <P11 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 11 &&
        <>
        <p>{PCount}</p>
          <P12 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 12 &&
        <>
        <p>{PCount}</p>
          <P13 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 13 &&
        <>
        <p>{PCount}</p>
          <P14 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
      {PCount === 14 &&
        <>
        <p>{PCount}</p>
          <P15 />
          <button>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/"
              variant="body2"
            >
              Next
            </NavLink>
          </button>
        </>
      }
    </div>
  );
}

export default Seed3;
