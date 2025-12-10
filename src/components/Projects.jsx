import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--background-light);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: ${props => props.$hasLink ? 'pointer' : 'default'};

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ProjectHeader = styled.div`
  height: 200px;
  background: ${props => props.$gradient};
  display: flex;
  align-items: center;
  justify-content: center;
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
      radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  }
`;

const ProjectIcon = styled.div`
  font-size: 4rem;
  position: relative;
  z-index: 1;
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background-color: var(--secondary-aqua);
  color: var(--white);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  align-self: flex-start;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-navy);
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ProjectMetrics = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Metric = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  span:first-child {
    font-size: 0.85rem;
    color: var(--text-dark);
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  span:last-child {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary-navy);
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const Tag = styled.span`
  background-color: var(--white);
  color: var(--primary-navy);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(26, 42, 58, 0.1);
`;

const ViewCaseStudyBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--secondary-aqua);
  color: var(--white);
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    background-color: #00d4b8;
    transform: translateX(5px);
  }
`;

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projectsData = [
    {
      icon: '⚡',
      category: 'Product Management',
      title: 'Multi-Factor Authentication for Frontline Workers',
      description: 'Led product management for integrating secure authentication into Zebra\'s workforce timeclock system. Balanced security requirements with user experience to deliver a solution that reduced clock-in time while improving compliance and eliminating buddy-punching.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      metrics: [
        { label: 'Clock-in Time', value: '~30% faster' },
        { label: 'Pilot Sites', value: '3' }
      ],
      tags: ['Product Management', 'User Research', 'Cross-functional Leadership', 'Requirements Definition'],
      link: '/zebra-case-study'
    },
    {
      icon: '📊',
      category: 'Consulting',
      title: 'Retail Operations Transformation',
      description: 'Supported KPMG consulting engagement to diagnose operational inefficiencies for a retail client. Led analytical workstreams, built financial models, and coordinated stakeholder communication to deliver data-driven recommendations that reduced costs while improving customer experience.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      metrics: [
        { label: 'Projected Savings', value: '~$2M annually' },
        { label: 'Initiatives', value: '8' }
      ],
      tags: ['Management Consulting', 'Process Optimization', 'Stakeholder Management', 'Strategic Analysis'],
      link: '/kpmg-case-study'
    },
    {
      icon: '🌐',
      category: 'Market Strategy',
      title: 'Market Entry Analysis',
      description: 'Conducted market research on competitors, pricing, and customer behavior for a tech startup evaluating entry into the Seattle/Pacific Northwest market. Interviewed 20+ potential customers and industry experts, analyzed data, and created financial projections and market sizing.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      metrics: [
        { label: 'Report Pages', value: '20' },
        { label: 'Interviews', value: '20+' }
      ],
      tags: ['Market Research', 'Data Analysis', 'Financial Projections', 'Structured Problem-Solving']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <SectionTitle variants={fadeInUp}>
            Featured Projects
          </SectionTitle>
          <SectionSubtitle variants={fadeInUp}>
            Strategic initiatives that delivered measurable impact
          </SectionSubtitle>

          <ProjectsGrid>
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.15 }}
                $hasLink={!!project.link}
              >
                {project.link ? (
                  <ProjectCardLink to={project.link}>
                    <ProjectHeader $gradient={project.gradient}>
                      <ProjectIcon>{project.icon}</ProjectIcon>
                    </ProjectHeader>
                    <ProjectContent>
                      <ProjectCategory>{project.category}</ProjectCategory>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <ProjectMetrics>
                        {project.metrics.map((metric, metricIndex) => (
                          <Metric key={metricIndex}>
                            <span>{metric.label}</span>
                            <span>{metric.value}</span>
                          </Metric>
                        ))}
                      </ProjectMetrics>
                      <ProjectTags>
                        {project.tags.map((tag, tagIndex) => (
                          <Tag key={tagIndex}>{tag}</Tag>
                        ))}
                      </ProjectTags>
                      <ViewCaseStudyBadge>
                        View Case Study →
                      </ViewCaseStudyBadge>
                    </ProjectContent>
                  </ProjectCardLink>
                ) : (
                  <>
                    <ProjectHeader $gradient={project.gradient}>
                      <ProjectIcon>{project.icon}</ProjectIcon>
                    </ProjectHeader>
                    <ProjectContent>
                      <ProjectCategory>{project.category}</ProjectCategory>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>{project.description}</ProjectDescription>
                      <ProjectMetrics>
                        {project.metrics.map((metric, metricIndex) => (
                          <Metric key={metricIndex}>
                            <span>{metric.label}</span>
                            <span>{metric.value}</span>
                          </Metric>
                        ))}
                      </ProjectMetrics>
                      <ProjectTags>
                        {project.tags.map((tag, tagIndex) => (
                          <Tag key={tagIndex}>{tag}</Tag>
                        ))}
                      </ProjectTags>
                    </ProjectContent>
                  </>
                )}
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </motion.div>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
