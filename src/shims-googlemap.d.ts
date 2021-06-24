declare module 'leaflet';
declare module 'google-maps-api-loader';

type D = Icon.Default & {
    _getIconUrl?: string;
  };
  
  delete (Icon.Default.prototype as D)._getIconUrl;