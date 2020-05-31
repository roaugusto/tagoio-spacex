import Mission from './Mission';

class Ship {
  id: string;

  image: string;

  name: string;

  active: boolean;

  missions: Mission[];

  missionNames: string;
}

export default Ship;
