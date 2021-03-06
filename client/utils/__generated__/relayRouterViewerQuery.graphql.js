/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule relayRouterViewerQuery.graphql
 * @generated SignedSource<<0196d2378cbbd9479315d192617ff6b8>>
 * @relayHash 9c055d803ed51e6e9cf7285a47c1dbdf
 * @flow
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/


/*
query relayRouterViewerQuery(
  $first: Int!
) {
  viewer {
    user {
      email
      id
    }
    ...App_viewer
    ...LandingComponent_viewer
    ...Todos_viewer
    todos(first: $first) {
      edges {
        node {
          id
        }
      }
    }
    id
  }
}

fragment App_viewer on Viewer {
  id
  user {
    id
    email
  }
}

fragment LandingComponent_viewer on Viewer {
  id
  user {
    id
    email
  }
}

fragment Todos_viewer on Viewer {
  id
  user {
    id
    email
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "relayRouterViewerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "args": null,
        "concreteType": "Viewer",
        "name": "__viewer_viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "UserNode",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "App_viewer",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "LandingComponent_viewer",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "Todos_viewer",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
                "type": "Int"
              }
            ],
            "concreteType": "TodoNodeConnection",
            "name": "todos",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "TodoNodeEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "TodoNode",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "relayRouterViewerQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "relayRouterViewerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "UserNode",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "email",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "first",
                "type": "Int"
              }
            ],
            "concreteType": "TodoNodeConnection",
            "name": "todos",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "TodoNodeEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "TodoNode",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": null,
        "handle": "viewer",
        "name": "viewer",
        "key": "",
        "filters": null
      }
    ]
  },
  "text": "query relayRouterViewerQuery(\n  $first: Int!\n) {\n  viewer {\n    user {\n      email\n      id\n    }\n    ...App_viewer\n    ...LandingComponent_viewer\n    ...Todos_viewer\n    todos(first: $first) {\n      edges {\n        node {\n          id\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment App_viewer on Viewer {\n  id\n  user {\n    id\n    email\n  }\n}\n\nfragment LandingComponent_viewer on Viewer {\n  id\n  user {\n    id\n    email\n  }\n}\n\nfragment Todos_viewer on Viewer {\n  id\n  user {\n    id\n    email\n  }\n}\n"
};

module.exports = batch;
