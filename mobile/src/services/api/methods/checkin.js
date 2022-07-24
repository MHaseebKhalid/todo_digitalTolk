import { getRequest,postRequestMultiPart } from '..';

export const getCheckInApi = () =>
  getRequest(`/checkins`);


  export const postCheckInApi = (payload) =>
  postRequestMultiPart(`/checkins`,payload);

