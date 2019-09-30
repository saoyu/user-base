import request from 'utils/request';

export async function queryRoles() {
  return request('/api/role/list-all');
}

export async function queryRole(id) {
  return request(`/api/role/query-role/${id}`, {
    method: 'GET',
  });
}

export function deleteRole(id) {
  return request(`/api/role/${id}`, {
    method: 'DELETE',
  });
}

export function patchRole(id, param) {
  return request('/api/role/update-role', {
    method: 'PUT',
    body: JSON.stringify(param),
  });
}

export function createRole(param) {
  return request('/api/role/insert-role', {
    method: 'POST',
    body: JSON.stringify(param),
  });
}
