@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #000000;
  color: #ffffff;
}

.glass {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
}

.border-white-10 {
  border-color: rgba(255, 255, 255, 0.1);
}

.card-hover {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  background: rgba(255, 255, 255, 0.03);
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.3);
}

.btn-white {
  background-color: #ffffff;
  color: #000000;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-white:hover {
  background-color: #e5e5e5;
  transform: scale(1.03);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.btn-outline {
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #ffffff;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-outline:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.05);
  transform: scale(1.03);
}

html {
  scroll-behavior: smooth;
}

.logo-img {
  height: 40px;
  width: auto;
  border-radius: 4px;
}

.text-glow {
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
}

.section-fade {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* Animated SVG Rocket Styles */
@keyframes rocket-float {
  0%, 100% {
    transform: translateY(0) translateX(0) rotate(-5deg) scale(1.5);
  }
  50% {
    transform: translateY(-80px) translateX(40px) rotate(8deg) scale(1.6);
  }
}

@keyframes rocket-flap {
  0%, 100% {
    transform: rotate(0deg) scaleY(1);
  }
  50% {
    transform: rotate(-15deg) scaleY(0.5);
  }
}

.rocket-background {
  position: fixed;
  top: 15%;
  right: -5%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.12;
  animation: rocket-float 8s ease-in-out infinite;
  filter: invert(1) drop-shadow(0 0 40px rgba(255, 255, 255, 0.3));
  transform-origin: center;
}

.rocket-asa {
  transform-origin: 170px 150px;
  animation: rocket-flap 0.7s ease-in-out infinite;
}

/* Bird Animation */
@keyframes flap {
  0%, 100% {
    transform: rotate(0deg) scaleY(1);
  }
  50% {
    transform: rotate(-8deg) scaleY(0.7);
  }
}

.bird-asa {
  transform-origin: 170px 150px;
  animation: flap 0.8s ease-in-out infinite;
}
