// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCpLdTcm8ijhu-EgjbFSHWgNGr62aGbtCA',
    authDomain: 'compositionproject-52a49.firebaseapp.com',
    databaseURL: 'https://compositionproject-52a49.firebaseio.com',
    projectId: 'compositionproject-52a49',
    storageBucket: 'compositionproject-52a49.appspot.com',
    messagingSenderId: '38966190004'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
