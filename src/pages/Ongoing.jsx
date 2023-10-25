import React, { useState, useEffect } from "react";
import Goal from "../components/Goal";
import goals from "../data/goals";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";

const Ongoing = () => {
  const {
    isLoading,
    data: { goals },
  } = useFetch("http://localhost:5000/api/goals");
  // condition ? first action : second action
  const Goals = isLoading ? [] : goals.filter((g) => g.progress < 100);

  return (
    <div className="container mt-2">
      <GoalHeader heading="Ongoing" />
      {isLoading && <Loading />}
      <div>
        {Goals && Goals.length < 1 ? (
          <Empty />
        ) : (
          Goals.map((g) => {
            return <Goal key={g._id} {...g} />;
          })
        )}
      </div>
    </div>
  );
};

export default Ongoing;
