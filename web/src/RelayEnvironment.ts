import { Environment, Network, RecordSource, Store, RequestParameters, Variables, CacheConfig } from 'relay-runtime';

async function fetchRelay(params: RequestParameters, variables: Variables, _cacheConfig: CacheConfig) {
  const response = await fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  return await response.json();
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});