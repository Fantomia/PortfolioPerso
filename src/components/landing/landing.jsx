import { motion } from "framer-motion";

const Home = () => {
    const text = "B I E N V E N U E".split(""); // Séparer chaque lettre

    return (
        <div className="Welcome" id="home">
            {/* Animation de l'affichage lettre par lettre */}
            <motion.h1 
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { delay: 2, staggerChildren: 0.1 } }
                }}
            >
                {text.map((letter, index) => (
                    <motion.span 
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.h1>

            {/* Animation du contenu après l'affichage du texte */}
            <motion.div className="contentHome"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
            >
                <p>Moi c&#39;est Jonathan, je suis <strong><em>Développeur Web</em></strong> en formation chez OpenClassRooms.</p>
                <p>Je me spécialise dans le développement front-end avec une passion pour la création d&#39;interfaces utilisateur modernes, fluides et dynamiques.</p>
                <p>J&#39;utilise des technologies comme React, JavaScript, HTML5 et CSS3 pour vous offrir une expérience web intuitive et performante.</p>
                <p>Envie de voir mes projets ? <a href="/Project">Découvre mes réalisations !</a></p>
            </motion.div>
        </div>
    );
}

export default Home;
