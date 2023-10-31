import GoalHeader from "../components/GoalHeader";
import Goal from "../components/Goal";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";

const Allgoals = () => {
  const {
    isLoading,
    data: { goals: Goals },
    isError,
  } = useFetch("http://localhost:5000/api/goals");

  if (!isLoading && isError) {
    return <ErrorFetch />;
  }

  if (!isLoading && Goals.length < 1) {
    return <Empty />;
  }

  return (
    <div className="container pb-3">
      <GoalHeader heading="All Goals" />
      {isLoading && <Loading />}
      <div>
        <div>
          {Goals &&
            Goals.map((g) => {
              return <Goal key={g._id} {...g} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Allgoals;
