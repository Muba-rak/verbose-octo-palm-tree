import Goal from "../components/Goal";
import GoalHeader from "../components/GoalHeader";
import Loading from "../components/Loading";
import { useFetch } from "../Hooks/useFetch";
import Empty from "../components/Empty";
import ErrorFetch from "../components/ErrorFetch";

const Ongoing = () => {
  const {
    isLoading,
    data: { goals },
    isError,
  } = useFetch("http://localhost:5000/api/goals");

  const Goals =
    isLoading || isError ? null : goals.filter((g) => g.progress < 100);

  if (!isLoading && isError) {
    return <ErrorFetch />;
  }

  if (!isLoading && Goals.length < 1) {
    return <Empty />;
  }

  return (
    <div className="container mt-2">
      <GoalHeader heading="Ongoing" />
      {isLoading && <Loading />}
      <div>
        {Goals &&
          Goals.map((g) => {
            return <Goal key={g._id} {...g} />;
          })}
      </div>
    </div>
  );
};

export default Ongoing;
