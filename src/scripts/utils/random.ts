import k from "../kaboom";

export const getRandomPosition = () => {
  const x = k.rand(0, k.width());
  const y = k.rand(0, k.height());

  return { x, y };
};