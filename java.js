const songs = [
    { image: "assets/images/song1.jpg", song: "song1.mp3" },
    { image: "assets/images/song2.jpg", song: "song2.mp3" },
    // Add more songs here
];

const musicPlayer = document.querySelector(".music-player");
const images = musicPlayer.querySelectorAll("img");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        // Play the song corresponding to the image
        const audio = new Audio(songs[index].song);
        audio.play();
    });
});