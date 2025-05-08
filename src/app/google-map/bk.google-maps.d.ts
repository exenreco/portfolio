declare global {
  interface Window {
    google?: {
      maps: {
        Map: any;
        Marker: any;
        LatLng: any;
        MapTypeId: any;
        event: any;
        importLibrary: (name: string) => Promise<any>;
      };
    };
  }
}
