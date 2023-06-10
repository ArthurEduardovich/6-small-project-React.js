export default function randomGenerateColor() {
  const generator = () => Math.trunc(Math.random() * 256);
  return `rgb(${generator()}, ${generator()}, ${generator()})`;
}
