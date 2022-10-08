import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa"
import { useLazyLoadQuery } from "react-relay";

import { CardAccountingEntries, EntryModal, TransactionList } from './components'

import { AllEntries } from "./modules/entry/AllEntriesQuery";
import { AllEntriesQuery } from "./modules/entry/__generated__/AllEntriesQuery.graphql"

import { RootState } from "./store";
import { setEntries } from "./store/entries";

export default function App() {
  const dispatch = useDispatch();
  const { entries } = useSelector((state: RootState) => state.entriesSlice );
  const dataEntries = useLazyLoadQuery<AllEntriesQuery>(AllEntries, {}, {
    fetchPolicy: "store-or-network"
  });
  
  const totalReceive = getTotal("receive");
  const totalPaid = getTotal("paid");
  const balance = totalReceive - totalPaid;

  useEffect(() => {
    dispatch(setEntries(dataEntries.entries));
  }, [])

  function getTotal(type: string) {
    const initialValue = 0;

    return entries
      .filter(entry => entry.type === type)
      .reduce((previousValue, currentValue) => previousValue + currentValue.value, initialValue)
  }

  return (
    <div className="App h-full">
      <header className="flex flex-col justify-center bg-[#03D49B] h-14 border-b-2 border-zinc-100 text-white font-bold pl-4 text-xl">
        WOOVI - Challenge
      </header>
      <main className="flex flex-col h-full bg-[#F7F7F7]">
        <div className='container mx-auto'>
          <div className="flex justify-center py-2 gap-2">
            <CardAccountingEntries title="Receive" value={totalReceive} type='receive' />
            <CardAccountingEntries title="Paid" value={totalPaid} type='paid' />
            <CardAccountingEntries title="Balance" value={balance} type='balance' />
          </div>
          <section className='flex flex-col container mx-auto gap-2 my-4 overflow-y-auto h-max'>
            <article className='flex justify-end'>
              <EntryModal>
                <div className='flex justify-center items-center border-2 p-2 w-40 gap-2 bg-white cursor-pointer' >
                  <FaPlus className="w-full" />
                </div>
              </EntryModal>
            </article>
            { entries.map((entry) => <TransactionList key={ entry.__id } data={entry} />) }
          </section>
        </div>
      </main>
    </div>
  )
}
