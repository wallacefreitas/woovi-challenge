import { useState, FormEvent, ReactNode } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Dialog from '@radix-ui/react-dialog'
import { MdClose } from "react-icons/md"
import { useMutation } from "react-relay";

import { RootState } from "../../store";
import { setEntries } from "../../store/entries";

import { Transaction } from "../../@types";

import { createOneEntryMutation } from "../../modules/entry/CreateEntryMutation";
import type { CreateEntryMutation } from "../../modules/entry/__generated__/CreateEntryMutation.graphql"
import { updateOneEntryMutation } from "../../modules/entry/UpdateEntryMutation";
import type { UpdateEntryMutation } from "../../modules/entry/__generated__/UpdateEntryMutation.graphql";

interface EntryModalProps {
  data?: Transaction,
  children: ReactNode;
}

export function EntryModal(props: EntryModalProps) {
  const { data } = props;
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);
  const { entries } = useSelector((state: RootState) => state.entriesSlice );
  const [commitCreateMutation] = useMutation<CreateEntryMutation>(createOneEntryMutation);
  const [commitUpdateMutation] = useMutation<UpdateEntryMutation>(updateOneEntryMutation);
  const valueFormatted = new Intl.NumberFormat([], { 
      style: 'currency',
      currency: 'BRL',
    })
    .format(data?.value ? data.value : 0)
    .replace("R$", "").trim();

  function handleSaveEntry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const objectData = Object.fromEntries(formData);

    const dataJson = JSON.stringify({
      ...objectData,
      __id: data?.__id,
      value: parseFloat(objectData.value.toString().replace(".", "").replace(",","."))
    }) ;

    return data 
            ? updateEntry(dataJson)
            : createEntry(dataJson);
  }

  function createEntry(dataJson: string) {
    commitCreateMutation({
      variables: {
        data: JSON.parse(dataJson)
      },
      onCompleted: (response, errors) => {
        dispatch(setEntries([...entries, response.createOneEntry]));
        setOpenDialog(false);
      }
    });
  }

  function updateEntry(dataJson: string) {
    const dataUpdate = JSON.parse(dataJson);
    console.log(dataUpdate.value);

    commitUpdateMutation({
      variables: {
        data: {
          title: {
            set: dataUpdate.title
          },
          description: {
            set: dataUpdate.description
          },
          value: {
            set: dataUpdate.value
          },
          date: {
            set: dataUpdate.date
          },
          type: {
            set: dataUpdate.type
          }
        },
        where: {
          id: data?.id
        }
      },
      onCompleted: (response, errors) => {
        const entriesChanged = entries.map( entry => entry.id === response.updateOneEntry?.id ? { ...dataUpdate } : entry);
        dispatch(setEntries(entriesChanged));
        setOpenDialog(false);
      }
    });
  }

  return (
    <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
      <Dialog.Trigger>
        {props.children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-zinc-800/10 inset-0 fixed' />
        <Dialog.Content className='fixed bg-white py-8 px-10 text-zinc-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
          <Dialog.Title className='text-3xl font-black'>Lançamento</Dialog.Title>
          <form onSubmit={handleSaveEntry} className="mt-8 flex flex-col gap-4">
            <label>Id</label>
            <input name="id" type="text" className="border-2" defaultValue={data ? data.id : (entries.length+1).toString() } readOnly />

            <label>Title</label>
            <input name="title" type="text" className="border-2" defaultValue={data ? data.title : "" } />

            <label>Description</label>
            <input name="description" type="text" className="border-2" defaultValue={data ? data.description : "" } />

            <label>Value</label>
            <input name="value" type="text" className="border-2" defaultValue={valueFormatted} />

            <label>Date</label>
            <input name="date" type="date" className="border-2" defaultValue={data ? data.date : "" } />

            <label>Type</label>
            <select name="type" className="border-2" defaultValue={data ? data.type : "receive" }>
              <option value={"receive"}>Receive</option>
              <option value={"paid"}>Paid</option>
            </select>

            <footer className="flex w-full justify-end gap-2 mt-4">
              <button type="submit" className=" bg-[#764AF1] p-2 w-36 text-white">Salvar</button>
            </footer>
          </form>

          <Dialog.Close className="absolute top-5 right-4 cursor-pointer">
            <MdClose size={20} />
          </Dialog.Close>
        </Dialog.Content>
        
      </Dialog.Portal>
    </Dialog.Root>
  )
}