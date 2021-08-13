//Actions => describir la información que vamos a hacer  y pasar un objeto que vamos a tener disponible dentro de nuestro reducer
// El cual después va a tomar la acción que nosotros estamos ejecutando, para evaluar cómo lo va a guardar dentro de nuestro destino
export const setFavorite = (payload) => ({
  //type: la descripción de lo que estamos haciendo
  type: 'SET_FAVORITE',
  payload,
});

export const deleteFavorite = (payload) => ({
  type: 'DELETE_FAVORITE',
  payload,
});

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const getVideoSource = (payload) => ({
  type: 'GET_VIDEO_SOURCE',
  payload,
});
