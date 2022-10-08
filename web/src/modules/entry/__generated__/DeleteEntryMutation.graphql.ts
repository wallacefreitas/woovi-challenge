/**
 * @generated SignedSource<<e2d60c7a9ff20de819f7ce9245466eee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EntryWhereUniqueInput = {
  id?: string | null;
};
export type DeleteEntryMutation$variables = {
  where: EntryWhereUniqueInput;
};
export type DeleteEntryMutation$data = {
  readonly deleteOneEntry: {
    readonly id: string;
  } | null;
};
export type DeleteEntryMutation = {
  response: DeleteEntryMutation$data;
  variables: DeleteEntryMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "where"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "where"
      }
    ],
    "concreteType": "Entry",
    "kind": "LinkedField",
    "name": "deleteOneEntry",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f4d4fa97c1bdea6f2675d3710d76a467",
    "id": null,
    "metadata": {},
    "name": "DeleteEntryMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteEntryMutation(\n  $where: EntryWhereUniqueInput!\n) {\n  deleteOneEntry(where: $where) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0281e2eeaab10f3f4e67667e71a615e1";

export default node;
