/* Api methods to call /functions */

const create = (data: any) => {
  return fetch('/.netlify/functions/profiles-create', {
    body: JSON.stringify(data),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

const readAll = () => {
  return fetch('/.netlify/functions/profiles-read-all').then((response) => {  
    return response.json()
  })
}

const deleteTodo = (todoId: string) => {
  return fetch(`/.netlify/functions/profiles-delete/${todoId}`, {
    method: 'POST',
  }).then(response => {
    return response.json()
  })
}

const batchDeleteTodo = (todoIds: any) => {
  return fetch(`/.netlify/functions/profiles-delete-batch`, {
    body: JSON.stringify({
      ids: todoIds
    }),
    method: 'POST'
  }).then(response => {
    return response.json()
  })
}

export default {
  create: create,
  readAll: readAll,  
  delete: deleteTodo,
  batchDelete: batchDeleteTodo
}