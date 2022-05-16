import { getImgUrl } from '../../store/index';

// eslint-disable-next-line import/prefer-default-export
export const loadData = async (store) => {
  console.log('在服务端执行了getInitialProps', store.dispatch);
  return store.dispatch(getImgUrl());
};
