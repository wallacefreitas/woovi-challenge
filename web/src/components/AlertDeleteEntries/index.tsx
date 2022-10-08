import { useSelector, useDispatch } from "react-redux";
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useLazyLoadQuery, useMutation } from "react-relay"

import { RootState } from "../../store";
import { showAlert } from "./store";
import { setEntries } from "../../store/entries";

import { deleteOneEntryMutation } from "../../modules/entry/DeleteEntryMutation";
import type { DeleteEntryMutation } from "../../modules/entry/__generated__/DeleteEntryMutation.graphql"
// import type { AllEntriesQuery } from "../../modules/entry/__generated__/AllEntriesQuery.graphql";
// import { AllEntries } from "../../modules/entry/AllEntriesQuery";

interface AlertDeleteEntriesProps {
  transactionId: string;
}

export function AlertDeleteEntries(props: AlertDeleteEntriesProps) {
  const dispatch = useDispatch();
  const { openAlertDelete } = useSelector((state: RootState) => state.entryAlertDeleteSlice );
  const { entries } = useSelector((state: RootState) => state.entriesSlice );
  const [commitMutation] = useMutation<DeleteEntryMutation>(deleteOneEntryMutation);
  // const dataEntries = useLazyLoadQuery<AllEntriesQuery>(AllEntries, {}, {
  //   fetchPolicy: "store-or-network"
  // });

  function deleteEntry() {
    commitMutation({
      variables: {
        where: {
          id: props.transactionId
        }
      },
      onCompleted: (response, errors) => {
        // const entries = dataEntries.entries.filter((entry) => entry.id !== response.deleteOneEntry?.id );
        // entries.slice(entries.findIndex(entry => entry.id === response.deleteOneEntry?.id), 1)
        // console.log(entries);
        const entriesFiltered = entries.filter((entry) => entry.id !== response.deleteOneEntry?.id );
        dispatch(setEntries(entriesFiltered));
      }
    });
  }

  return (
    <AlertDialog.Root open={openAlertDelete} onOpenChange={() => dispatch(showAlert(false))}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className='bg-zinc-800/10 inset-0 fixed' />
        <AlertDialog.Content 
          className='fixed bg-white py-8 px-10 text-zinc-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'
          onEscapeKeyDown={() => dispatch(showAlert(false))}
        >
          <AlertDialog.Title className="font-bold text-2xl">
            Atenção
          </AlertDialog.Title>
          <AlertDialog.Description>
            Deseja deletar esse lançamento ?
          </AlertDialog.Description>
          <div className="flex w-full justify-end gap-2 mt-4">
            <AlertDialog.Action className="border-2 p-2 w-36 text-zinc-900" onClick={() => dispatch(showAlert(false))}>
              Cancel
            </AlertDialog.Action>
            <AlertDialog.Action className="p-2 w-36 bg-[#764AF1] text-white" onClick={deleteEntry}>
              Yes
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}