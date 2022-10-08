/**
 * @generated SignedSource<<d34a591370dee0ff9fb71d15f6de81c9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EntryWhereInput = {
  AND?: ReadonlyArray<EntryWhereInput> | null;
  NOT?: ReadonlyArray<EntryWhereInput> | null;
  OR?: ReadonlyArray<EntryWhereInput> | null;
  date?: StringFilter | null;
  description?: StringFilter | null;
  id?: StringFilter | null;
  title?: StringFilter | null;
  type?: StringFilter | null;
  value?: FloatFilter | null;
};
export type StringFilter = {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string> | null;
  lt?: string | null;
  lte?: string | null;
  not?: NestedStringFilter | null;
  notIn?: ReadonlyArray<string> | null;
  startsWith?: string | null;
};
export type NestedStringFilter = {
  contains?: string | null;
  endsWith?: string | null;
  equals?: string | null;
  gt?: string | null;
  gte?: string | null;
  in?: ReadonlyArray<string> | null;
  lt?: string | null;
  lte?: string | null;
  not?: NestedStringFilter | null;
  notIn?: ReadonlyArray<string> | null;
  startsWith?: string | null;
};
export type FloatFilter = {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number> | null;
  lt?: number | null;
  lte?: number | null;
  not?: NestedFloatFilter | null;
  notIn?: ReadonlyArray<number> | null;
};
export type NestedFloatFilter = {
  equals?: number | null;
  gt?: number | null;
  gte?: number | null;
  in?: ReadonlyArray<number> | null;
  lt?: number | null;
  lte?: number | null;
  not?: NestedFloatFilter | null;
  notIn?: ReadonlyArray<number> | null;
};
export type SumAccountingEntriesQuery$variables = {
  where?: EntryWhereInput | null;
};
export type SumAccountingEntriesQuery$data = {
  readonly aggregateEntry: {
    readonly _sum: {
      readonly value: number | null;
    } | null;
  };
};
export type SumAccountingEntriesQuery = {
  response: SumAccountingEntriesQuery$data;
  variables: SumAccountingEntriesQuery$variables;
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
    "concreteType": "AggregateEntry",
    "kind": "LinkedField",
    "name": "aggregateEntry",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "EntrySumAggregate",
        "kind": "LinkedField",
        "name": "_sum",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "value",
            "storageKey": null
          }
        ],
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
    "name": "SumAccountingEntriesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SumAccountingEntriesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "108f40b526e01c0a5bd7518d2c05d8d0",
    "id": null,
    "metadata": {},
    "name": "SumAccountingEntriesQuery",
    "operationKind": "query",
    "text": "query SumAccountingEntriesQuery(\n  $where: EntryWhereInput\n) {\n  aggregateEntry(where: $where) {\n    _sum {\n      value\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "348333d1d620add049c5ce8cd9f9cfa0";

export default node;
