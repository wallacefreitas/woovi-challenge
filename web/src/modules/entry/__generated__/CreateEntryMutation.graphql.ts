/**
 * @generated SignedSource<<62502cf4fe8ea58ff7c4450a02ff97f4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type EntryCreateInput = {
  date: string;
  description: string;
  id: string;
  title: string;
  type: string;
  value: number;
};
export type CreateEntryMutation$variables = {
  data: EntryCreateInput;
};
export type CreateEntryMutation$data = {
  readonly createOneEntry: {
    readonly __id: string;
    readonly date: string;
    readonly description: string;
    readonly id: string;
    readonly title: string;
    readonly type: string;
    readonly value: number;
  };
};
export type CreateEntryMutation = {
  response: CreateEntryMutation$data;
  variables: CreateEntryMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "data"
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
      }
    ],
    "concreteType": "Entry",
    "kind": "LinkedField",
    "name": "createOneEntry",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
        "name": "description",
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
        "name": "value",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
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
    "name": "CreateEntryMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateEntryMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b2282665de6f44a3336bf6dd6a2d8341",
    "id": null,
    "metadata": {},
    "name": "CreateEntryMutation",
    "operationKind": "mutation",
    "text": "mutation CreateEntryMutation(\n  $data: EntryCreateInput!\n) {\n  createOneEntry(data: $data) {\n    id\n    title\n    description\n    date\n    value\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "3f47e9ca32a3c7b7b250df493ae89263";

export default node;
