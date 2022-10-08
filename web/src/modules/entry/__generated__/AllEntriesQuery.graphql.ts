/**
 * @generated SignedSource<<117d3d3b51b3577d38f02412fd33afaf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AllEntriesQuery$variables = {};
export type AllEntriesQuery$data = {
  readonly entries: ReadonlyArray<{
    readonly __id: string;
    readonly date: string;
    readonly description: string;
    readonly id: string;
    readonly title: string;
    readonly type: string;
    readonly value: number;
  }>;
};
export type AllEntriesQuery = {
  response: AllEntriesQuery$data;
  variables: AllEntriesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Entry",
    "kind": "LinkedField",
    "name": "entries",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllEntriesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AllEntriesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f0f28ee851e45d14cac9a5c5266a4235",
    "id": null,
    "metadata": {},
    "name": "AllEntriesQuery",
    "operationKind": "query",
    "text": "query AllEntriesQuery {\n  entries {\n    id\n    title\n    description\n    date\n    value\n    type\n  }\n}\n"
  }
};
})();

(node as any).hash = "f735bafa17fef951319829483ec5ddb8";

export default node;
