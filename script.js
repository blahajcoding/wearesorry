var links = [
    "https://griddesign.cc",
    "https://ultramarine-linux.org/",
    "https://helium.computer",
    "https://voltradio.lol",
    "https://github.com/niri-wm/niri"
]

function randomLink() {
    window.open(links[Math.floor(Math.random() * links.length)], "_blank");
}