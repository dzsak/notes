import { PlusIcon, PencilIcon } from '@heroicons/react/24/outline'

const Card = ({ title, type }) => {
  return (
    <div className="flex-1 text-slate-800 bg-neutral-100 rounded-md ring-1 ring-inset ring-neutral-200 p-3">
      <h3 className="flex text-lg font-bold rounded ml-4">
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-2 mt-4">
        <ul>
          <li className="group/item">
            <button onClick={() => console.log("Todo edit card")} className="flex items-center justify-between w-full bg-slate-200 p-2 rounded-lg text-left hover:ring-inset hover:ring-2 ring-sky-500">
              <p className="ml-2">Simple card</p>
              <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="tel:{person.phone}">
                <div className="hover:bg-slate-300 p-1 rounded-full">
                  <PencilIcon className='size-4' />
                </div>
              </a>
            </button>
          </li>
        </ul>
        <button
          onClick={() => console.log("Todo add card", type)}
          className="flex items-center text-left hover:bg-neutral-200 p-2 rounded-lg"
        >
          <PlusIcon className='size-5 mr-2' />Add a card
        </button>
      </div>
    </div>
  )
}

export default Card;
