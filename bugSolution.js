import { onAuthStateChanged, auth } from './firebase'; //Import firebase config

let unsubscribe;

useEffect(() => {
unsubscribe = onAuthStateChanged(auth, (user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // ...
} else {
  // User is signed out
  // ...
}});

return () => {
if (unsubscribe) {
unsubscribe();
}
};
}, []);