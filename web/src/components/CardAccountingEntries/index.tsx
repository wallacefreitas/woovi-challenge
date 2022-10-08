import { FaPlus, FaMinus } from "react-icons/fa";

interface CardAccountingEntriesProps {
  type: "paid" | "receive" | "balance",
  title: string,
  value: number,
}

export function CardAccountingEntries(props: CardAccountingEntriesProps) {
  const { type, value, title } = props;
  const valueFormatted = new Intl.NumberFormat([], { 
    style: 'currency', currency: 'BRL' 
  }).format(value);

  return (
    <div className="flex relative w-full h-full border-2 rounded py-7 bg-white">
      <div className={`absolute top-0 h-full w-2 rounded-l ${type === "paid" ? "bg-red-500" : type === "receive" ? "bg-green-500" : "bg-blue-500"}`}>&nbsp;&nbsp;&nbsp;</div>
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <div className="flex items-center gap-2 text-zinc-500">
          { type === "receive" ? <FaPlus /> : type == "paid" ? <FaMinus /> : null }
          <h1 className="text-xl">{title}</h1>
        </div>
        <span className="text-6xl font-bold text-zinc-700">{valueFormatted}</span>
      </div>
    </div>
  )
}

