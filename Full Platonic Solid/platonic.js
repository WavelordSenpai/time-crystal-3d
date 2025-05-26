// platonic.js
import * as THREE from "three";

export const solids = {
  Tetrahedron: new THREE.TetrahedronGeometry(1),
  Cube:       new THREE.BoxGeometry(1,1,1),
  Octahedron: new THREE.OctahedronGeometry(1),
  Dodecahedron: new THREE.DodecahedronGeometry(1),
  Icosahedron: new THREE.IcosahedronGeometry(1),
};

export const descriptions = {
  Tetrahedron: "4 faces, 4 vertices — the simplest 3D solid, symbolizing stability.",
  Cube:        "6 square faces, 8 vertices — the Platonic ‘earth’ element.",
  Octahedron:  "8 triangular faces — represents air and balance.",
  Dodecahedron:"12 pentagonal faces — associated with the universe.",
  Icosahedron: "20 triangular faces — fluidity and the water element."
};
