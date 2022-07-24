import { getRequest,postRequestMultiPart } from '..';

export const getTasksApi = () =>
  getRequest(`/tasks`);

  export const postTasksApi = (payload) =>
  postRequestMultiPart(`/tasks`,payload);
