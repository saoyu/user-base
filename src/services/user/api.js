import request from '../../../utils/request';

export async function queryUsers() {
  return request('/api/user/list-all');
}

export async function queryUser(id) {
  console.log("我是大戏i"+id);
  return request(`/api/user/query-user/${id}`, {
    method: 'GET',
  });
}

export async function deleteUser(id) {
  return request(`/api/user/${id}`, {
    method: 'DELETE',
  });
}

export async function patchUser(id, param) {
  return request('/api/user/update-user', {
    method: 'PUT',
    body: JSON.stringify(param),
  });
}

//只能自动生成id，不能自定义
export async function createUser(param) {
  console.log(JSON.stringify(param));
  return request('/api/user/insert-user', {
    method: 'POST',
    body: JSON.stringify(param),
  });
}
