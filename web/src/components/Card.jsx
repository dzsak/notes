const Card = ({ title }) => {
  return (
    <div className="flex-1 text-neutral-800 bg-neutral-100 rounded-md ring-1 ring-inset ring-neutral-200 p-3">
      <h3 className="flex text-lg font-bold rounded">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-2 mt-4">
        <div>[content]</div>
        <div>[content]</div>
        <div>[content]</div>
      </div>
    </div>
  )
}

export default Card;
