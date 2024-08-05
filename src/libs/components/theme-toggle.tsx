import { useContext } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ThemeContext } from './theme-provider';

const ThemeToggle = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeToggle must be used within a ThemeProvider');
  }

  const { darkMode, toggleTheme } = context;
  const controls = useAnimation();

  const darkStyles = "icon-sun text-white";
  const lightStyles = "icon-moon text-black";

  const handleClick = () => {
    toggleTheme();
    controls
      .start({
        opacity: 0,
        transition: { duration: 0.3 },
      })
      .then(() => {
        controls.start({
          opacity: 1,
          transition: { duration: 0.3 },
        });
      });
  };

  return (
    <button onClick={handleClick} className="focus:outline-none">
      <motion.span
        animate={controls}
        className={`${darkMode ? darkStyles : lightStyles} text-2xl`}
      ></motion.span>
    </button>
  );
};

export { ThemeToggle };
