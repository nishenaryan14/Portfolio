import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const HologramImage = ({ imageUrl }) => {
  const containerRef = useRef();
  const textureRef = useRef(null); // Initialize textureRef.current to null

  useEffect(() => {
    const init = () => {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current.offsetWidth / containerRef.current.offsetHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setSize(
        containerRef.current.offsetWidth,
        containerRef.current.offsetHeight
      );
      containerRef.current.appendChild(renderer.domElement);

      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(imageUrl, (texture) => {
        textureRef.current = texture;
        const hologramImage = createHologramImage(texture);
        scene.add(hologramImage);

        animate();
      });

      const createHologramImage = (texture) => {
        const geometry = new THREE.PlaneGeometry(1, 1);
        const material = new THREE.ShaderMaterial({
          uniforms: {
            texture: { value: texture },
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform sampler2D texture;
            varying vec2 vUv;
            void main() {
              vec4 texColor = texture2D(texture, vUv);
              gl_FragColor = texColor;
            }
          `,
          transparent: true,
        });
        return new THREE.Mesh(geometry, material);
      };

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      camera.position.z = 5;
    };

    init();

    return () => {
      if (textureRef.current) {
        textureRef.current.dispose();
      }
    };
  }, [imageUrl]);

  return <div ref={containerRef} />;
};

export default HologramImage;
