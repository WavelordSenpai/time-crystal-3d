// platonic.js
import * as THREE from "https://unpkg.com/three@0.152.2/build/three.module.js";

export const solids = {
  Tetrahedron: new THREE.TetrahedronGeometry(1),
  Cube: new THREE.BoxGeometry(1, 1, 1),
  Octahedron: new THREE.OctahedronGeometry(1),
  Dodecahedron: new THREE.DodecahedronGeometry(1),
  Icosahedron: new THREE.IcosahedronGeometry(1),
};

export const descriptions = {
  Tetrahedron: "🔺 4 faces, 4 vertices — the simplest 3D solid, symbolizing fire and stability.",
  Cube: "🧊 6 square faces — symbol of Earth, structure, and grounding.",
  Octahedron: "⛤ 8 triangular faces — air element, balance, and integration.",
  Dodecahedron: "🔷 12 pentagonal faces — representing ether, spirit, and cosmic harmony.",
  Icosahedron: "💧 20 triangular faces — fluidity, the water element, emotion, and intuition.",
};
