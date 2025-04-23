// Simplified interface
export interface Marker {
  position: google.maps.LatLngLiteral;
  title: string;
  label?: string;
  icon?: string;
  data?: any;
}
