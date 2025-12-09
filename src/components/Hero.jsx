import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-navy) 0%, #2a3f5f 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(circle at 20% 50%, rgba(0, 191, 166, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 200, 87, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  color: var(--white);
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  color: var(--secondary-aqua);
  margin-bottom: 1.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.a`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &.primary {
    background-color: var(--secondary-aqua);
    color: var(--primary-navy);

    &:hover {
      background-color: #00d4b8;
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 191, 166, 0.3);
    }
  }

  &.secondary {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--white);

    &:hover {
      background-color: var(--white);
      color: var(--primary-navy);
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 0.95rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const ScrollArrow = styled(motion.div)`
  width: 24px;
  height: 24px;
  border-left: 2px solid rgba(255, 255, 255, 0.7);
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
  transform: rotate(-45deg);
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <HeroContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Name variants={itemVariants}>
            Eric Wu
          </Name>
          <Title variants={itemVariants}>
            Analyst | Strategy Consulting
          </Title>
          <Subtitle variants={itemVariants}>
            Passionate about structured problem-solving, data analysis, and human-centered insights.
          </Subtitle>
          <CTAButtons variants={itemVariants}>
            <Button href="#contact" className="primary">
              Get in Touch
            </Button>
            <Button href="/Eric_Wu_Res.pdf" className="secondary" download>
              Download Resume
            </Button>
          </CTAButtons>
        </motion.div>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToAbout}
        style={{ cursor: 'pointer' }}
      >
        <span>Scroll to explore</span>
        <ScrollArrow
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
