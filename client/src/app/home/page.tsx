import { useGetTasksQuery } from "@/state/api";
import React from "react";

const HomePage = () => {
  const {
    data: tasks,
    isLoading: tasksLoading,
    isError: tasksError,
  } = useGetTasksQuery({ projectId: parseInt("1") });

  return <div>HomePage</div>;
};

export default HomePage;
