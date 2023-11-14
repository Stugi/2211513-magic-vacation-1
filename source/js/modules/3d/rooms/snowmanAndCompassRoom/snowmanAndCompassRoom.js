import * as THREE from 'three';
import {snowMan} from './snowman';
import {BaseSceneItem} from '../baseSceneItem';
import {road} from './road/road';
class SnowmanAndCompassRoom extends BaseSceneItem {
  constructor() {
    super();
    this.addObjects();
  }

  addObjects() {
    snowMan.position.set(-130, -115, -770);
    snowMan.rotation.copy(
        new THREE.Euler(20 * THREE.Math.DEG2RAD, 60 * THREE.Math.DEG2RAD, 0),
        `XYZ`
    );
    road.scale.set(0.7, 0.7, 0.7);
    road.position.set(-10, -100, -720);
    road.rotation.copy(new THREE.Euler(15 * THREE.Math.DEG2RAD, 45 * THREE.Math.DEG2RAD, 180 * THREE.Math.DEG2RAD), `XYZ`);
    this.add(snowMan, road);
  }
}

export const snowmanAndCompassRoom = new SnowmanAndCompassRoom();
