import apisauce from 'apisauce'
import Config from '../../config/'

const _instance = (baseURL) => {
  // Create and configure an apisauce-based api object.

  return apisauce.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 100000
  })
};

const instance = _instance.bind(null, Config.API_ENDPOINT);

const tag = 'RestApi';
const login = (api, email, password) => {
  console.log(tag, 'login');
  return api.post('/login', {email, password});
};

const getUsers = (api) => {
  console.log(tag, 'getUsers');
  return api.get('/users');
};

const createUser = (api, newUser) => {
  return api.put('/users', {newUser});
};

const updateUser = (api, id, newUser) => {
  return api.post(`/users/${id}`, {newUser});
};

const deleteUser = (api, id) => {
  return api.delete(`/users/${id}`);
};

const getDoctors = (api) => {
  return api.get('/doctors');
};

const createDoctor = (api, newUser) => {
  return api.put('/doctors', {newUser});
};

const updateDoctor = (api, id, newUser) => {
  return api.post(`/doctors/${id}`, {newUser});
};

const deleteDoctor = (api, id) => {
  return api.delete(`/doctors/${id}`);
};

const getReviews = (api) => {
  return api.get('/reviews');
};

const updateReview = (api, id, rating, description) => {
  return api.post(`/review/${id}`, {rating, description})
};

const deleteReview = (api, id) => {
  return api.delete(`/review/${id}`)
};

const getBookings = (api) => {
  return api.get('/bookings');
};

const updateBooking = (api, id, date, status) => {
  return api.post(`/booking/${id}`, {date, status});
};

const deleteBooking = (api, id) => {
  return api.delete(`/booking/${id}`)
};

const getSpecialities = (api) => {
  return api.get('/speciality')
};

const createSpeciality = (api, newSpeciality) => {
  return api.put('/speciality', {newSpeciality})
};

const updateSpeciality = (api, id, newSpeciality) => {
  return api.post(`/speciality/${id}`, {newSpeciality});
};

const deleteSpeciality = (api, id) => {
  return api.delete(`/speciality/${id}`)
};

export default {
  instance,
  login,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  createDoctor,
  getDoctors,
  updateDoctor,
  deleteDoctor,
  getReviews,
  updateReview,
  deleteReview,
  getBookings,
  updateBooking,
  deleteBooking,
  getSpecialities,
  createSpeciality,
  updateSpeciality,
  deleteSpeciality
}
