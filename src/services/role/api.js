import request from '../../../utils/request';

export async function queryRoles() {
  return request('/api/role/list-all',{
    method:'POST'
  });
}

export async function queryRole(id) {
  return request(`/api/role/query-role/${id}`, {
    method: 'GET',
  });
}

export async function deleteRole(id) {
  return request(`/api/role/delete-role/${id}`, {
    method: 'DELETE',
  });
}

export async function patchRole(id, param) {
  return request('/api/role/update-role', {
    method: 'PUT',
    body: JSON.stringify(param),
  });
}

export async function createRole(param) {
  console.log(JSON.stringify(param));
  return request('/api/role/insert-role', {
    method: 'POST',
    body: JSON.stringify(param),
  });
}
