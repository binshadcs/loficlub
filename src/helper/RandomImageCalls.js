const gifs = [
  "lofi-1.gif",
  "lofi-2.gif",
  "lofi-3.gif",
  "lofi-4.gif",
  "lofi-5.gif",
  "lofi-6.gif",
];

export const getRandomGif = () => {
  const randomGif = `/gifs/${gifs[Math.floor(Math.random() * gifs.length)]}`;
  return randomGif;
};
