export const environment = {
  production: true,
  firebase: {//Agregados para que no salga el error al ingresa "ng build --prod"
    apiKey: 'AIzaSyCvstdxMEP4JSZwCJNQsccFkI-HguTv97Y ',
    authDomain: 'agenda-de-contacto.firebaseapp.com',
    databaseURL: 'https://agenda-de-contacto.firebaseio.com/',
    projectId: 'agenda-de-contacto',
    storageBucket: 'agenda-de-contacto.appspot.com'
  }
};
