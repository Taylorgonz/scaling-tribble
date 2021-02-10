// music should be an object with title, artist, and album properties
const music = {
  title: "hello",
  artist: "adele",
  album: "25"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
  <h1> ${music.title}</h1>
  <p> ${music.artist} ${music.album}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

