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

const update = (id, number) => (
  axios.patch(baseUrl + id, { number })
    .then((r) => r.data.number)
);

export default { getAll, add, remove, update };
