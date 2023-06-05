export default function makeListMarker(x: number) {
  if (x === 0) {
    return "left: 15px; top: 15px;";
  }
  return "right:15px; top:15px;";
}
