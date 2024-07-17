import { useEffect, useRef, useMemo } from "react";

const verticesCount = 10 * 3; // 10 vertices with 3 coordinates each

export default function CustomObject() {
  const geometryRef = useRef();
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3); // 3 points per vertex
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={verticesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}
