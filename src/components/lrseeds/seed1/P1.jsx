import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import css from  "../../learninground/learninground.css";
function P1() {
  return (
    <div>
        <h1> Q1</h1>
            
            <p>values of variables are : 5        8        7</p>
            <form>
            <input type="number" min={10} max={18} placeholder="Enter your expected value here" />
            <input type="submit" defaultValue="Submit" />
            </form>
        
        <h1>Q2</h1>
        
            <p>values of variables are : 5        8         7</p>
            <form>
              <input type="number" min={10} max={18} placeholder="Enter your expected value here" />
              <input type="submit" defaultValue="Submit" />
            </form>

        <h1>Q3</h1>
        
            <p>values of variables are : 5          8       7</p>
            <form>
              <input type="number" min={10} max={18} placeholder="Enter your expected value here" />
              <input type="submit" defaultValue="Submit" />
            </form>
            
        <h1>Q4</h1>
        
            <p>values of variables are : 5          8             7</p>
            <form>
              <input type="number" min={10} max={18} placeholder="Enter your expected value here" />
              <input type="submit" defaultValue="Submit" />
            </form>

    </div>
  );
}

export default P1;
