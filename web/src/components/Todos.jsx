import Emtpy from "./Emtpy";

const Todos = () => {
  return (
    <div className="grid justify-items-center mt-16">
      <Emtpy>
        <h3 className="mt-2 text-sm font-semibold">No to-do lists just yet</h3>
        <p className="mt-1 text-sm text-slate-600">Organize work across teams to get things done on time. Assign tasks, set due dates, and discuss. Get started by creating a new list above.</p>
      </Emtpy>
    </div>
  )
};

export default Todos;
