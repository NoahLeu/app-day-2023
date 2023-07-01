import { type Location } from "@prisma/client";

export const distanceScore = (
  score: number,
  userLocation: Location,
  eventLocation: Location
) => {
  const distance: number = getDistance(userLocation, eventLocation);

  const multiplier: number = getDistanceMultiplier(distance);

  return score * multiplier;
};

const getDistanceMultiplier = (distance: number): number => {
  // exponential function that grows from 0 to 1 between 0 and 10km and goes up to 2 between 10 and 200km
  // if it is above 200km it will return 2
  const mathFunction = (x: number) => {
    if (x >= 0 && x <= 10) {
      return 0.7 + (x / 10) * 0.3;
    } else if (x >= 10 && x <= 200) {
      return Math.pow(2, (x - 10) / 190) * 1;
    } else if (x > 200) {
      return 2;
    } else return 1;
  };

  return mathFunction(distance);
};

export const getDistance = (
  userLocation: Location,
  eventLocation: Location
): number => {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  // Convert latitude and longitude from degrees to radians
  const lat1Rad = (userLocation.latitude * Math.PI) / 180;
  const lon1Rad = (userLocation.longitude * Math.PI) / 180;
  const lat2Rad = (eventLocation.latitude * Math.PI) / 180;
  const lon2Rad = (eventLocation.longitude * Math.PI) / 180;

  // Calculate the differences between the latitudes and longitudes
  const latDiff = lat2Rad - lat1Rad;
  const lonDiff = lon2Rad - lon1Rad;

  // Calculate the distance using the Haversine formula
  const a =
    Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
    Math.cos(lat1Rad) *
      Math.cos(lat2Rad) *
      Math.sin(lonDiff / 2) *
      Math.sin(lonDiff / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
};
