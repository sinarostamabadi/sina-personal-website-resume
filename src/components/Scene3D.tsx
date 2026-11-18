"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

function ParticleNetwork({ light }: { light: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const { positions, linePositions } = useMemo(() => {
    const count = light ? 120 : 140;
    const positions = new Float32Array(count * 3);
    const pts: THREE.Vector3[] = [];

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      pts.push(new THREE.Vector3(x, y, z));
    }

    const connections: number[] = [];
    const maxDist = light ? 2.7 : 2.8;
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          connections.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
        }
      }
    }

    return {
      positions,
      linePositions: new Float32Array(connections),
    };
  }, [light]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mouse.current.x += (state.pointer.x * 0.6 - mouse.current.x) * 0.04;
    mouse.current.y += (state.pointer.y * 0.4 - mouse.current.y) * 0.04;

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.04 + mouse.current.x * 0.15;
      pointsRef.current.rotation.x = mouse.current.y * 0.12;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = t * 0.04 + mouse.current.x * 0.15;
      linesRef.current.rotation.x = mouse.current.y * 0.12;
    }
  });

  return (
    <group position={[0, 0.2, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={light ? 0.042 : 0.045}
          color={light ? "#0891b2" : "#67e8f9"}
          transparent
          opacity={light ? 0.55 : 0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={light ? "#0e7490" : "#22d3ee"}
          transparent
          opacity={light ? 0.12 : 0.14}
        />
      </lineSegments>
    </group>
  );
}

function Orb({ light }: { light: boolean }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.15;
    mesh.current.rotation.y = t * 0.22;
    mesh.current.position.x = 3.2 + Math.sin(t * 0.35) * 0.25;
    mesh.current.position.y = 0.4 + Math.cos(t * 0.4) * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={mesh} position={[3.2, 0.4, -1.5]}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial
          color="#0891b2"
          emissive="#22d3ee"
          emissiveIntensity={light ? 0.18 : 0.35}
          metalness={light ? 0.35 : 0.55}
          roughness={light ? 0.35 : 0.25}
          wireframe
          transparent
          opacity={light ? 0.4 : 0.55}
        />
      </mesh>
    </Float>
  );
}

function SceneContent({ light }: { light: boolean }) {
  const bg = light ? "#eef2f7" : "#030712";

  return (
    <>
      <color attach="background" args={[bg]} />
      <fog attach="fog" args={[bg, light ? 9 : 8, 18]} />
      <ambientLight intensity={light ? 0.75 : 0.35} />
      <pointLight position={[4, 3, 5]} intensity={light ? 0.9 : 1.2} color={light ? "#22d3ee" : "#67e8f9"} />
      <pointLight
        position={[-5, -2, 2]}
        intensity={light ? 0.45 : 0.55}
        color={light ? "#94a3b8" : "#0891b2"}
      />
      {!light && <Stars radius={60} depth={40} count={1200} factor={3} saturation={0} fade speed={0.4} />}
      <ParticleNetwork light={light} />
      <Orb light={light} />
    </>
  );
}

export function Scene3D() {
  const { theme } = useTheme();
  const light = theme === "light";

  return (
    <div className="canvas-wrap" aria-hidden>
      <Canvas
        key={theme}
        camera={{ position: [0, 0, 7.5], fov: 52 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent light={light} />
      </Canvas>
    </div>
  );
}
