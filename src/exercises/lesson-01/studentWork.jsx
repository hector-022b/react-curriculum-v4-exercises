//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  let name = 'Hector Barahona';
  let age = 27;
  const myHobbies = [
    'Playing Soccer',
    'Working Out',
    'Hiking',
    'Traveling',
    'Anime',
    'Horror Movies',
  ];

  return (
    <div>
      <h1>About Me</h1>

      <p>
        Hello! My name is {name}, I am {age} years old. I enjoy staying active
        and spending time outdoors.
      </p>

      <h2>My Hobbies and Interests:</h2>
      <ul>
        {myHobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
