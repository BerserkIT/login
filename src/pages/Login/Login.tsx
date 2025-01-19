import React, { useState } from 'react';
import './Login.css';
import groupImg from './img/groupimg.png';
import { motion } from 'framer-motion';

const Login: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const textVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="login-page">
            {/* Левая секция с фоновым изображением */}
            <section className="login-page__bg">
                <motion.img
                    src={groupImg}
                    alt="Background"
                    className="login-page__bg-img"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 },
                    }}
                    transition={{
                        ease: 'easeOut',
                        duration: 1,
                        delay: 1
                    }}
                />
            </section>

            {/* Правая секция с формой входа */}
            <motion.section
                className="login-page__form"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
                transition={{
                    ease: 'easeOut',
                    duration: 1,
                }}
            >
                <div className="login-page__form-container">
                    <motion.h1
                        className="login-page__title"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{
                            ease: 'easeOut',
                            duration: 1,
                            delay: 0.2,
                        }}
                    >
                        PettyPat
                    </motion.h1>
                    <motion.h2
                        className="login-page__description"
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{
                            ease: 'easeOut',
                            duration: 1,
                            delay: 0.4,
                        }}
                    >
                        Войти в аккаунт
                    </motion.h2>
                    <motion.form
                        className="login-page__form-content"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{
                            ease: 'easeOut',
                            duration: 1,
                            delay: 0.6,
                        }}
                    >
                        <motion.div
                            className="login-page__form-group"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{
                                ease: 'easeOut',
                                duration: 1,
                                delay: 0.8,
                            }}
                        >
                            <label htmlFor="login" className="login-page__label"></label>
                            <input
                                type="text"
                                id="login"
                                placeholder="Логин"
                                className="login-page__input"
                            />
                        </motion.div>
                        <motion.div
                            className="login-page__form-group"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{
                                ease: 'easeOut',
                                duration: 1,
                                delay: 1,
                            }}
                        >
                            <label htmlFor="password" className="login-page__label"></label>
                            <div className="login-page__password-wrapper">
                                <input
                                    type={isPasswordVisible ? "text" : "password"}
                                    id="password"
                                    placeholder="Пароль"
                                    className="login-page__input"
                                />
                                <button
                                    type="button"
                                    className="login-page__password-toggle"
                                    onClick={togglePasswordVisibility}
                                >
                                    {isPasswordVisible ? "👁️" : "🙈"}
                                </button>
                            </div>
                        </motion.div>
                        <motion.div
                            className="login-page__form-options"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{
                                ease: 'easeOut',
                                duration: 1,
                                delay: 1.2,
                            }}
                        >
                            <label className={`switch ${isChecked ? 'checked' : ''}`}>
                                <input
                                    type="checkbox"
                                    className="switch__input"
                                    checked={isChecked}
                                    onChange={handleToggle}
                                />
                                <span className="switch__slider"></span>
                            </label>
                            <span className="login-page__checkbox-label">Запомнить пароль</span>
                        </motion.div>
                        <motion.button
                            type="submit"
                            className="login-page__btn"
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            transition={{
                                ease: 'easeOut',
                                duration: 1,
                                delay: 1.4,
                            }}
                        >
                            Войти
                        </motion.button>
                    </motion.form>
                </div>
            </motion.section>
        </div>
    );
};

export default Login;
