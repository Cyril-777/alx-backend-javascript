import ClassRoom from './0-classroom';

export default function initializeRooms() {
  // Create three objects of ClassRoom with different sizes
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Return the array of the three objects
  return [room1, room2, room3];
}
