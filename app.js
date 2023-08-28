const songList = ['PachaMama', 'Gra', 'Options', 'Paparazzi', 'MadMax'];

const addSongToList = (song) => {
    songList.push(song);
}

const removeFirstSong = () => {
  const song = songList.shift();
  
  return song;
}

const removeSongFromList = (song) => {
  const songIsInQueue = isSongInQueue(song);

  if (songIsInQueue) {
    delete song;
  } else {
    console.log(`${song} is not in the queue`)
  }
}

removeFirstSongFromQueue = () => {
  songList.shift();
}; // 'Song queue is empty. Please add more songs'
removeFirstSongFromQueue()

console.log(songList);

// addSongToQueue('I WANT IT THATTTT WAYYYY'); 

// console.log(isSongInQueue('I WANT IT THATTTT WAYYYY')) // true

// printQueue();
// /*
// 1. I WANT IT THATTTT WAYYYY
// */

// removeSongFromQueue('YES'); // YES is not in the queue

// addSongToQueue('ill be dreaminggggg of you tonightt~')

// printQueue();
// /*
// 1. I WANT IT THATTTT WAYYYY
// 2. ill be dreaminggggg of you tonightt~
// */

// console.log(removeFirstSongFromQueue()); // 'I WANT IT THATTTT WAYYYY'

// console.log(isSongInQueue('I WANT IT THATTTT WAYYYY')) // false

// printQueue();
// /*
// 1. ill be dreaminggggg of you tonightt~
// */

// addSongToQueue('TAKEEEEEEEE ONNNNNNNNNN MEEEEEEEEEEEEE')

// printQueue();
// /*
// 1. ill be dreaminggggg of you tonightt~
// 2. TAKEEEEEEEE ONNNNNNNNNN MEEEEEEEEEEEEE
// */

// addSongToQueue("I DONT CARE WHOOOO YOUUU AREEEEE, WHERE YOU'RE FROMMMMM, WHAT YOU DID")

// printQueue();
// /*
// 1. ill be dreaminggggg of you tonightt~
// 2. TAKEEEEEEEE ONNNNNNNNNN MEEEEEEEEEEEEE
// 3. I DONT CARE WHOOOO YOUUU AREEEEE, WHERE YOU'RE FROMMMMM, WHAT YOU DID
// */

// removeSongFromQueue('TAKEEEEEEEE ONNNNNNNNNN MEEEEEEEEEEEEE');

// console.log(isSongInQueue('TAKEEEEEEEE ONNNNNNNNNN MEEEEEEEEEEEEE')) // false

// printQueue();
// /*
// 1. ill be dreaminggggg of you tonightt~
// 2. I DONT CARE WHOOOO YOUUU AREEEEE, WHERE YOU'RE FROMMMMM, WHAT YOU DID
// */