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
  // if it is between 10 and 200 km (or above) return an exponential function growing from 1 to 2
  if (distance >= 10 && distance <= 200) {
    return 1 + (distance / 200) * (distance / 200);
  }

  // if it is between 0 and 10 km return a linear function growing from 0.45 to 1
  if (distance >= 0 && distance < 10) {
    return 0.45 + (distance / 10) * (distance / 10);
  }

  return 1;
};

export const getDistance = (
  userLocation: Location,
  eventLocation: Location
): number => {
  const earthRadius = 6371; // Radius of the Earth in kilometers

  console.log(userLocation, eventLocation);

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
