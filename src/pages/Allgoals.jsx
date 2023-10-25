import React, { useState, useEffect } from "react";
import GoalHeader from "../components/GoalHeader";

import Goal from "../components/Goal";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import goals from "../data/goals";
const Allgoals = () => {
  const Goals = goals;

  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      <div>
        <div>
          {Goals.map((g) => {
            return <Goal key={g.id} {...g} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
