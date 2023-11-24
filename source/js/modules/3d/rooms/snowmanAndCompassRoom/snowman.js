import * as THREE from 'three';
import {BaseObject} from '../../components/baseObject';
import {COLORS_MAP} from '../../config/colors';
import {MATERIAL_REFLECTIVITY} from '../../config/material-reflectivity';
import {degreesToRadians} from '../../utils';

class Snowman extends BaseObject {
  constructor() {
    super();

    this.nose = {
      radius: 18,
      height: 75,
      radialSegments: 20,
      material: {
        color: COLORS_MAP.Orange,
        ...MATERIAL_REFLECTIVITY.soft
      }
    };

    this.smallBall = {
      radius: 44,
      segments: 20,
      material: {
        color: COLORS_MAP.SnowColor,
        ...MATERIAL_REFLECTIVITY.strong
      }
    };
    this.bigBall = {
      radius: 75,
      segments: 20,
      material: {
        color: COLORS_MAP.SnowColor,
        ...MATERIAL_REFLECTIVITY.strong
      }
    };

    this.addObjects();
  }

  getSmallBallMesh() {
    const sphere = new THREE.SphereGeometry(
      this.smallBall.radius,
      this.smallBall.segments,
      this.smallBall.segments
    );
    const material = this.createMaterial(this.smallBall.material);
    const mesh = new THREE.Mesh(
      sphere,
      material
    );

    mesh.castShadow = true;

    return mesh;
  }

  getNoseMesh() {
    const cone = new THREE.ConeGeometry(
      this.nose.radius,
      this.nose.height,
      this.nose.radialSegments
    );
    const material = this.createMaterial(this.nose.material);
    const mesh = new THREE.Mesh(
      cone,
      material
    );

    mesh.castShadow = true;

    return mesh;
  }

  addHead() {
    const head = new THREE.Group();

    const smallBallMesh = this.getSmallBallMesh();
    const noseMesh = this.getNoseMesh();

    noseMesh.rotation.x = degreesToRadians(90);
    noseMesh.position.set(0, 0, 43);

    head.add(smallBallMesh, noseMesh);
    head.position.set(0, 108, 0);

    this.add(head);
  }

  addBigBall() {
    const sphere = new THREE.SphereGeometry(
      this.bigBall.radius,
      this.bigBall.segments,
      this.bigBall.segments
    );
    const material = this.createMaterial(this.bigBall.material);
    const mesh = new THREE.Mesh(
      sphere,
      material
    );
    mesh.castShadow = true;

    this.add(mesh);
  }

  addObjects() {
    this.addBigBall();
    this.addHead();
  }
}

export const snowMan = new Snowman();
