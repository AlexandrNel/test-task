export const http = {
  get: (input: URL | RequestInfo, init?: RequestInit) => fetch(input, init),
};
