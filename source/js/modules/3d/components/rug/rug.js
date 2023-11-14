import * as THREE from 'three';
import {LatheObject} from '../latheObject';
import {RugMaterial} from './rug-material';
import {COLORS_MAP} from '../../config/colors';

export class Rug extends LatheObject {
  constructor(isDark) {
    super();

    this.data = {
      width: 180,
      height: 3,
      radius: 763,
      degree: {
        from: 16,
        to: 74,
      },
      firstColor: isDark ? COLORS_MAP.ShadowedLightPurple : COLORS_MAP.LightPurple,
      secondColor: isDark ? COLORS_MAP.ShadowedAdditionalPurple : COLORS_MAP.AdditionalPurple,
      segments: 30,
    };

    this.addObject();
  }

  addObject() {
    const material = new RugMaterial({firstColor: this.data.firstColor, secondColor: this.data.secondColor});
    const geometry = this.createLatheGeometry(this.data);
    const mesh = new THREE.Mesh(
        geometry,
        material);
    this.addAxisToNode(mesh);
    this.add(mesh);
  }
}
