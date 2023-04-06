import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import ImageOne from '../assets/mb1.jpg';
import ImageTwo from '../assets/mb2.jpg';
import ImageThree from '../assets/mb3.jpg';

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
    <div className="flex md:justify-between mt-16 ml-10 gap-32 h-full w-full">
                    
                    {/* TECHNOLOGY */}
                    <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -60 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="relative h-32">
                            <div className="w-300 h-500 right-50 mb-40 overflow-auto">
                                <p className="absolute font-crafty font-semibold text-3xl mt-3 z-1">Events</p>
                                <img className="w-200 h-400 bg-yellow z-0" 
                                alt="imageone" src={ImageOne}
                                />  
                            </div>
                        </div>
                    </motion.div>

                     {/* PEOPLE */}
                  <motion.div
                      className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 60 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="relative h-32">
                            <div className="w-300 h-500 right-50 mb-40 overflow-auto">
                            <p className="absolute font-crafty font-semibold text-3xl mt-3 z-1">Fooood</p>
                                <img className="w-200 h-400 bg-yellow z-0" 
                           alt="imagetwo" src={ImageTwo}
                             />   
                           </div>
                          </div>
                    </motion.div>
                    <div className="w-50 h-100 bg-orange absolute right-10 top-10" />

                  {/*  CREATIVITY */}
                    <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -60 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="relative h-32">
                            <div className="w-300 h-500 right-50 mb-40 overflow-auto">
                                <p className="absolute font-crafty font-semibold text-3xl mt-3 z-1 ">Sweet Stuff</p>
                            <img className="w-300 h-400 bg-yellow z-[0]" 
                            alt="imagethree" src={ImageThree}
                            />   
                        </div>
                    </div>
                    </motion.div>
            </div> 
    )
}

export default Landing