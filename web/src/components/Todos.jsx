import Empty from "./Empty";

const Todos = () => {
  return (
    <div className="grid justify-items-center mt-16">
      <Empty>
        <h3 className="text-sm font-semibold">No to-do lists just yet</h3>
        <p className="mt-1 text-sm text-slate-600">Organize work across teams to get things done on time. Assign tasks, set due dates, and discuss. Get started by creating a new list above.</p>
      </Empty>
    </div>
  )
};

export default Todos;
