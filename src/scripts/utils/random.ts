import k from "../kaboom";

export const getRandomPosition = () => {
  const x = k.rand(0, 1600);
  const y = k.rand(0, 780);

  return { x, y };
};