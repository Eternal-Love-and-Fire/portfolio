import { motion } from 'framer-motion';

type MainProps = {
  layoutStyle: string;
};

const Main = (props: MainProps) => {
  const { layoutStyle } = props;

  return (
    <div className={`${layoutStyle} flex flex-col items-center justify-center`}>
      <motion.h1
        className="-mt-36 text-4xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Yevhen Kotyk
      </motion.h1>
      <motion.p
        className="text-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Web developer
      </motion.p>
      <motion.p
        className="mt-2 text-sm opacity-50"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Javascript, Typescript, React, NodeJS, Laravel
      </motion.p>
      <a href="projects" className='mt-4 py-2 px-4 border-2 border-black dark:border-white rounded-xl hover:bg-teal-400 duration-300 tracking-widest'>Check my projects</a>
    </div>
  );
};

export { Main };
