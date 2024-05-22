import { useQuery, useMutation } from "react-query";
import { getData, postData } from "../api/service";
import Card from "./Card"
import { useEffect } from "react";

const Home = () => {
  const {
    data: data,
    isLoading,
    isError,
    error,
  } = useQuery("data", getData);

  const { mutate, mutateLoading } = useMutation(postData, {
    onSuccess: (data) => console.log(data),
  });

  useEffect(() => {
    mutate("")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(data)
  console.log(isLoading)
  console.log(isError)
  console.log(error)

  console.log(mutateLoading)
  return (
    <div className="min-h-full">
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-grays-900">Home</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl pb-12">
          <div className="min-h-screen px-5 py-6 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Card title="To do" />
              <Card title="Doing" />
              <Card title="Done" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;
