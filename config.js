"use strict";

const CONFIGURATION = {
  locations: [
    {
      title: "Home",
      address1: "3 Spode Pl",
      address2: "Umgeni Park, Durban North, 4051, South Africa",
      startTime: "18h00",
      endTime: "20h00",
      url: "https://ucarecdn.com/e53472ef-dc06-41c5-aedc-154710328ac9/PExLogo1.png",
      day: "Monday",
      coords: { lat: -29.80727668625581, lng: 31.01880276123809 },
      placeId: "ChIJQU55ixoH9x4RxINAdsj16LM",
    },

    {
      title: "Anthem House",
      address1: "125 Adelaide Tambo Dr",
      address2: "Durban North, 4051, South Africa",
      coords: { lat: -29.775788184924796, lng: 31.04373165340767 },
      placeId: "ChIJ4eILmFwG9x4RfNC-EPj3XJY",
    },

    {
      url: "../group-logos/anthem-logo.webp",
      title: "Anthem Church",
      address1: "37 Mackeurtan Ave",
      address2: "Durban North, Durban, 4051, South Africa",
      contactEmail: "maxevans.dev@gmail.com",
      startTime: "18h45",
      endTime: "20h15",
      url: "https://ucarecdn.com/e53472ef-dc06-41c5-aedc-154710328ac9/PExLogo1.png",
      day: "Wednesday",
      coords: { lat: -29.776585744954467, lng: 31.045096106745905 },
      placeId: "ChIJx_DvskQG9x4RlnU3H0Pa34A",
    },
  ],
  mapOptions: {
    center: { lat: 38.0, lng: -100.0 },
    fullscreenControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    zoom: 4,
    zoomControl: true,
    maxZoom: 17,
    mapId: "b9f5280014bac665",
  },
  mapsApiKey: "AIzaSyBULz8OaS5-O6b8R8HjCtZkePq0z9UAMHk",
  capabilities: {
    input: true,
    autocomplete: true,
    directions: true,
    distanceMatrix: true,
    details: true,
    actions: false,
  },
};

function initMap() {
  new LocatorPlus(CONFIGURATION);
}
