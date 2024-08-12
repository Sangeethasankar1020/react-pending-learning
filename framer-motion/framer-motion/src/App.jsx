import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.div animate={{ x: 200, y: 400, rotate: 20, scale: 1.5 }}>
        <img
          src="../public/nature.jpg"
          alt="pic"
          height={500}
          width={500}
        ></img>
      </motion.div>
    </div>
  );
}

export default App;
