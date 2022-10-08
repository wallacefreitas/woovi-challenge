import { useDispatch } from "react-redux";
import { FaEdit, FaTrash, FaPlus, FaMinus } from "react-icons/fa";

import { EntryModal } from "../EntryModal";

import { AlertDeleteEntries } from "../AlertDeleteEntries";
import { showAlert } from "../AlertDeleteEntries/store";

import { Transaction } from "../../@types";

interface TransactionListProps {
  data: Transaction
}

export function TransactionList(props: TransactionListProps) {
  const { data } = props;
  const dispatch = useDispatch();
  const valueFormatted = new Intl.NumberFormat([], { 
    style: 'currency',
    currency: 'BRL'
  }).format(data.value);

  return (
    <article className="flex w-full h-max items-center bg-white border-2 p-2 gap-4">
      <div className={`flex items-center justify-center rounded-full ${ data.type === "paid" ? "bg-red-500" : "bg-green-500" } w-4 h-4`}>
        {data.type === "paid" ? <FaMinus size={12} color="#F1F1F1" /> : <FaPlus size={12} color="#F1F1F1" />}
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-md font-bold">{data.title}</h1>
          <h2 className="text-sm">{data.description}</h2>
          <h2 className="text-md">{valueFormatted}</h2>
        </div>
        <div className="flex gap-3 pr-2">
          <EntryModal data={data}>
            <FaEdit size={20} color="#7F8487" className="cursor-pointer" />
          </EntryModal>
          <FaTrash size={20} color="#7F8487" className="cursor-pointer" onClick={() => dispatch(showAlert(true)) }  />
        </div>
      </div>
      
      <AlertDeleteEntries transactionId={data.id} />
    </article>
  )
}