import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 8rem 0;
  background-color: var(--background-light);
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SkillCard = styled(motion.div)`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-top: 3px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border-top-color: var(--secondary-aqua);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--secondary-aqua), var(--accent-gold));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const SkillTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary-navy);
  margin-bottom: 0.8rem;
  font-weight: 700;
`;

const SkillDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-dark);
  opacity: 0.8;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: var(--background-light);
  color: var(--primary-navy);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
`;

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillsData = [
    {
      icon: '📊',
      title: 'Data Analysis & Visualization',
      description: 'Analyze complex datasets and create compelling visual dashboards using industry-standard tools to communicate insights effectively.',
      tags: ['Excel', 'Tableau', 'Data Visualization', 'Quantitative Modeling']
    },
    {
      icon: '🔍',
      title: 'Structured Problem-Solving',
      description: 'Apply analytical frameworks to break down ambiguous business challenges into clear, actionable recommendations.',
      tags: ['Analytical Thinking', 'Research Methods', 'Case Analysis']
    },
    {
      icon: '💼',
      title: 'Stakeholder Interviews & Research',
      description: 'Conduct in-depth interviews and synthesize findings from diverse stakeholders to uncover insights and build consensus.',
      tags: ['Interviews', 'Qualitative Research', 'Synthesis', 'Active Listening']
    },
    {
      icon: '📈',
      title: 'Presentation & Communication',
      description: 'Create executive-ready presentations and reports that translate complex analysis into clear, persuasive narratives.',
      tags: ['PowerPoint', 'Executive Reporting', 'Storytelling']
    },
    {
      icon: '⚙️',
      title: 'Process & Operations Analysis',
      description: 'Map workflows, identify bottlenecks, and propose data-driven improvements to enhance operational efficiency.',
      tags: ['Process Mapping', 'Gap Analysis', 'Workflow Optimization']
    },
    {
      icon: '🎯',
      title: 'Project Management',
      description: 'Lead cross-functional research projects from inception to delivery, managing timelines, stakeholders, and deliverables.',
      tags: ['Project Leadership', 'Collaboration', 'Client Management']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionTitle variants={fadeInUp}>
            Core Competencies
          </SectionTitle>
          <SectionSubtitle variants={fadeInUp}>
            Skills that drive strategic impact
          </SectionSubtitle>

          <SkillsGrid>
            {skillsData.map((skill, index) => (
              <SkillCard
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.1 }}
              >
                <IconWrapper>{skill.icon}</IconWrapper>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
                <SkillTags>
                  {skill.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </SkillTags>
              </SkillCard>
            ))}
          </SkillsGrid>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
