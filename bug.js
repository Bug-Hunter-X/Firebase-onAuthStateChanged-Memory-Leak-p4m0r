const unsubscribe = onAuthStateChanged(auth, (user) => {if (user) {  // User is signed in, see docs for a list of available properties
  // ...
} else {  // User is signed out
  // ...
}});

// unsubscribe is never called in this case, causing a memory leak
// To fix, unsubscribe from the listener when it's no longer needed (e.g., when the component unmounts)