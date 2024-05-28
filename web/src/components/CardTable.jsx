import Card from "./Card"

const CardTable = () => {
  return (
    <div className="min-h-full">
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Card table</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl pb-12">
          <div className="min-h-screen px-5 py-6 sm:px-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Card title="To do" type="todo" />
              <Card title="Doing" type="doing" />
              <Card title="Done" type="done" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CardTable;
