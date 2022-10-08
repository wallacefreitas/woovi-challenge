/**
 * @generated SignedSource<<4048a25b615b3b41039e7a55fec4994c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EntryUpdateInput = {
  date?: StringFieldUpdateOperationsInput | null;
  description?: StringFieldUpdateOperationsInput | null;
  id?: StringFieldUpdateOperationsInput | null;
  title?: StringFieldUpdateOperationsInput | null;
  type?: StringFieldUpdateOperationsInput | null;
  value?: FloatFieldUpdateOperationsInput | null;
};
export type StringFieldUpdateOperationsInput = {
  set?: string | null;
};
export type FloatFieldUpdateOperationsInput = {
  decrement?: number | null;
  divide?: number | null;
  increment?: number | null;
  multiply?: number | null;
  set?: number | null;
};
export type EntryWhereUniqueInput = {
  id?: string | null;
};
export type UpdateEntryMutation$variables = {
  data: EntryUpdateInput;
  where: EntryWhereUniqueInput;
};
export type UpdateEntryMutation$data = {
  readonly updateOneEntry: {
    readonly __id: string;
    readonly date: string;
    readonly description: string;
    readonly id: string;
    readonly title: string;
    readonly type: string;
    readonly value: number;
  } | null;
};
export type UpdateEntryMutation = {
  response: UpdateEntryMutation$data;
  variables: UpdateEntryMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "data"
  },
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
        "name": "data",
        "variableName": "data"
      },
      {
        "kind": "Variable",
        "name": "where",
        "variableName": "where"
      }
    ],
    "concreteType": "Entry",
    "kind": "LinkedField",
    "name": "updateOneEntry",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "value",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "date",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__id",
            "storageKey": null
          }
        ]
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
    "name": "UpdateEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6c47c21e8acd40ab6806ea522ea89692",
    "id": null,
    "metadata": {},
    "name": "UpdateEntryMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateEntryMutation(\n  $data: EntryUpdateInput!\n  $where: EntryWhereUniqueInput!\n) {\n  updateOneEntry(data: $data, where: $where) {\n    type\n    value\n    date\n    description\n    title\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "8b087536da1b023e2c6d177da5da0ef8";

export default node;
