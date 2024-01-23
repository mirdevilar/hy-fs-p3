import axios from 'axios';

const baseUrl = '/api/persons/';

const getAll = () => (
  axios.get(baseUrl)
    .then((r) => r.data)
);

const add = (data) => (
  axios.post(baseUrl, data)
    .then((r) => r.data)
);

const remove = (id) => axios.delete(baseUrl + id);

const update = (data) => (
  axios.put(baseUrl + data.id, data)
    .then((r) => r.data)
);

export default { getAll, add, remove, update };
