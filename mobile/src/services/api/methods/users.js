import { getRequest } from '..';

export const getUserApi = () =>
  getRequest(`/users`);
