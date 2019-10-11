import { createRole, deleteRole, patchRole, queryRoles } from '../../../services/role/api';

export default {
  namespace: 'role',
  state: {
    roles: [],
  },
  //初始化页面
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/role') {
          dispatch({
            type: 'fetch',
            payload: query,
          });
        }
      });
    },
  },
  effects: {

    * fetch({ type, payload }, { put, call, select }) {
      const resdata = yield call(queryRoles);
      const { data, success } = resdata;
      if (success){
        yield put({
          type: 'save',
          payload: {
            // heros: data||localData,
            roles: data,
          },
        });
      } else {
        throw data;
      }
      // console.log("11111"+JSON.stringify(rolelist))
    },
    * remove({ payload: id }, { call, put, select }) {
      const {data,success} = yield call(deleteRole, id);
      if (success) {
        yield put({ type: 'fetch' });
      }else {
        throw data;
      }
    },
    * patch({ payload: { id, value } }, { call, put, select }) {
      yield call(patchRole, id, value);
      yield put({ type: 'fetch' });
    },
    * create({ payload: { value } }, { call, put, select }) {
      yield call(createRole, value);
      yield put({ type: 'fetch' });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
