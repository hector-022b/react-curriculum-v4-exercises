//Do not change this component
//Update Parent and Child component so that the button increments the counter in Parent.

import Parent from './Parent';

export default function BugChildParentCommunication() {
  return <Parent />;
}

// Write your explanation
/*
State is kept in the Parent component because it owns the counter. The Parent
passes its increment function to the Child as a prop. When the Child's button
is clicked, it calls the function, which updates the Parent's state and causes
the counter to re-render with the new value.
*/
