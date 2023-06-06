import { markerData } from "../constants/markerData";

export default function makeListMarker(x: number) {
  const filtered_marker = markerData.filter((marker) => marker.id === x);
  return filtered_marker.length === 1 ? filtered_marker[0].path : "";
}
