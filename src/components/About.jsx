import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 8rem 0;
  background-color: var(--white);
  position: relative;

  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--primary-navy);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--secondary-aqua), var(--accent-gold));
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: var(--text-dark);
  opacity: 0.7;
  margin-bottom: 4rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 3px solid var(--secondary-aqua);
    border-radius: 10px;
    z-index: 0;
  }
`;

const ProfileImage = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, var(--primary-navy), var(--secondary-aqua));
  border-radius: 10px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 6rem;
  font-weight: 700;
  font-family: var(--font-heading);

  @media (max-width: 968px) {
    height: 300px;
    font-size: 4rem;
  }
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-dark);
  text-align: justify;

  &:first-of-type {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--primary-navy);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;

    &:first-of-type {
      font-size: 1.1rem;
    }
  }
`;

const HighlightBox = styled.div`
  background-color: var(--background-light);
  padding: 1.5rem;
  border-left: 4px solid var(--secondary-aqua);
  border-radius: 5px;
  margin-top: 1rem;

  p {
    margin: 0;
    font-style: italic;
    color: var(--text-dark);
  }
`;

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <AboutSection id="about" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionTitle variants={fadeInUp}>
            About Me
          </SectionTitle>
          <SectionSubtitle variants={fadeInUp}>
            Who I am and what drives me
          </SectionSubtitle>

          <ContentWrapper>
            <ImageContainer
              variants={fadeInLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <ProfileImage>
                HX
              </ProfileImage>
            </ImageContainer>

            <TextContent
              variants={fadeInRight}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <AboutText>
                I'm an analytical and detail-oriented professional with experience in research, data analysis, and project management. Currently completing my Master of Sciences in Computer Science at the University of Washington (GPA: 3.85/4.0), I'm passionate about strategy consulting and helping clients make data-driven decisions.
              </AboutText>
              <AboutText>
                My approach combines structured problem-solving with stakeholder engagement to deliver actionable insights. Through my work as a Project Manager at the University Research Lab, I've led research analyzing local market trends, conducting interviews with 30+ stakeholders, and synthesizing findings into strategic recommendations for industry partners.
              </AboutText>
              <AboutText>
                During my internship at TechStart Consulting, I analyzed operational metrics for startup clients, created visual dashboards using Excel and Tableau, and assisted senior consultants in client presentations. I excel at breaking down complex problems, collecting and analyzing data, and presenting insights in clear, compelling formats.
              </AboutText>
              <HighlightBox>
                <p>
                  "I believe the best consulting insights emerge at the intersection of quantitative rigor and qualitative understanding of stakeholder needs."
                </p>
              </HighlightBox>
            </TextContent>
          </ContentWrapper>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
