const images = [
  "lofi-bg-1.jpg",
  "lofi-bg-2.jpg",
  "lofi-bg-3.jpg",
  "lofi-bg-4.jpg",
  "lofi-bg-5.jpg",
  "lofi-bg-6.jpg",
  "lofi-bg-7.jpg",
  "lofi-bg-8.jpg",
  "lofi-bg-9.jpg",
  "lofi-bg-10.jpg",
  "lofi-bg-11.jpg",
  "lofi-bg-12.jpg",
  "lofi-bg-13.jpg",
];

const gifs = [
  "lofi-1.gif",
  "lofi-2.gif",
  "lofi-3.gif",
  "lofi-4.gif",
  "lofi-5.gif",
  "lofi-6.gif",
];

export const getRandomBg = () => {
  const randomBg = `/assets/${
    images[Math.floor(Math.random() * images.length)]
  }`;
  return randomBg;
};

export const getRandomGif = () => {
  const randomGif = `/gifs/${gifs[Math.floor(Math.random() * gifs.length)]}`;
  return randomGif;
};
