import classNames from 'classnames';
import styles from './portfolio.module.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

import quanticShopImg from '../../assets/projects-img/quantic_shop_home.png';
import quanticPromptopiaImg from '../../assets/projects-img/promptopia_quantic.png';
import quanticdashboardImg from '../../assets/projects-img/quantic_dashboard.png';
import quanticSwrtodoImg from '../../assets/projects-img/quantic_swrtodo.png';

export interface PortfolioProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Portfolio = ({ className }: PortfolioProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['portfolio-wrapper']}>
                <h3 className={styles.h3}>My Portfolio</h3>
                <motion.svg
                    height="4"
                    viewBox="0 0 204 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames(styles.line, styles.path)}
                >
                    <motion.path
                        d="M2 2L202 1.99998"
                        stroke="url(#paint0_linear_6_519)"
                        stroke-width="3"
                        stroke-linecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        className={styles['path-line']}
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_6_519"
                            x1="202.5"
                            y1="2"
                            x2="0.999995"
                            y2="2"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#371A45" />
                            <stop offset="1" stopColor="#a15aca" />
                        </linearGradient>
                    </defs>
                </motion.svg>
                <p className={styles['portfolio-paragraph']}>
                    I am a front-end developer with 5+ years of experience building user interfaces
                    for websites and web applications using{' '}
                    <span className={styles['portfolio-span']}> React and Next.js</span>. I have a
                    deep understanding of both frameworks and I am proficient in using them to
                    create fast, scalable, and SEO-friendly applications.
                </p>
                <div className={styles['grid-items']}>
                    <div className={styles['grid-item']}>
                        <div className={styles['grid-img-div']}>
                            <img src={quanticShopImg} alt="" className={styles['grid-img']} />
                        </div>
                        <a
                            className={styles['visit-portfolio']}
                            href="https://quantic-shop.netlify.app/"
                            target="_blank"
                        >
                            <h4>Online shop</h4>
                        </a>
                    </div>
                    <div className={styles['grid-item']}>
                        <div className={styles['grid-img-div']}>
                            <img src={quanticPromptopiaImg} alt="" className={styles['grid-img']} />
                        </div>
                        <a
                            className={styles['visit-portfolio']}
                            href="https://promptopia-quantic.vercel.app/"
                            target="_blank"
                        >
                            <h4>Blog</h4>
                        </a>
                    </div>
                    <div className={styles['grid-item']}>
                        <div className={styles['grid-img-div']}>
                            <img src={quanticdashboardImg} alt="" className={styles['grid-img']} />
                        </div>
                        <a
                            className={styles['visit-portfolio']}
                            href="https://quantic-dashboard.vercel.app/"
                            target="_blank"
                        >
                            <h4>Dashboard</h4>
                        </a>
                    </div>
                    <div className={styles['grid-item']}>
                        <div className={styles['grid-img-div']}>
                            <img src={quanticSwrtodoImg} alt="" className={styles['grid-img']} />
                        </div>
                        <a
                            className={styles['visit-portfolio']}
                            href="https://quantic-swrtodo.netlify.app/"
                            target="_blank"
                        >
                            <h4>SWR todo</h4>
                        </a>
                    </div>
                </div>
                <div className={styles.socials}>
                    <a href="https://github.com/sksbkt" target="_blank">
                        <FaGithub className={styles['social-svg']} />
                    </a>
                    <a href="https://github.com/sksbkt" target="_blank">
                        <FaInstagram href="/" className={styles['social-svg']} />
                    </a>
                    <a href="https://github.com/sksbkt" target="_blank">
                        <FaLinkedin
                            href="https://www.linkedin.com/in/ali-khoshbakht/"
                            className={styles['social-svg']}
                        />
                    </a>
                </div>
            </div></div>
    );
};
