import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CaseStudyContainer = styled.div`
  background-color: var(--white);
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, var(--primary-navy) 0%, #2a3f5f 100%);
  color: var(--white);
  padding: 10rem 0 6rem;
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

  @media (max-width: 768px) {
    padding: 8rem 0 4rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--secondary-aqua);
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-5px);
  }
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const MetadataRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const MetadataItem = styled.div`
  h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--secondary-aqua);
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    color: var(--white);
  }
`;

const ContentSection = styled.section`
  padding: 5rem 0;

  &:nth-child(even) {
    background-color: var(--background-light);
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--primary-navy);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--secondary-aqua), var(--accent-gold));
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ProblemCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: var(--white);
  padding: 2.5rem;
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);

  h3 {
    color: var(--white);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const UserSection = styled.div`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--secondary-aqua);
  margin: 2rem 0;

  h3 {
    color: var(--primary-navy);
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-dark);
  }
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  display: grid;
  gap: 1rem;
  margin: 2rem 0;

  li {
    padding-left: 2rem;
    position: relative;
    font-size: 1.05rem;
    line-height: 1.7;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--secondary-aqua);
      font-weight: bold;
      font-size: 1.3rem;
    }
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const PhaseCard = styled.div`
  background-color: var(--white);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-top: 4px solid ${props => props.$color || 'var(--secondary-aqua)'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: var(--primary-navy);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    li {
      padding-left: 1.5rem;
      position: relative;
      font-size: 0.95rem;
      line-height: 1.6;

      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: ${props => props.$color || 'var(--secondary-aqua)'};
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }
`;

const DecisionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const DecisionCard = styled.div`
  background-color: var(--background-light);
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid var(--accent-gold);

  h3 {
    color: var(--primary-navy);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--text-dark);
  }
`;

const OutcomesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const OutcomeCard = styled.div`
  background: linear-gradient(135deg, var(--secondary-aqua) 0%, #00d4b8 100%);
  color: var(--white);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 191, 166, 0.3);

  h3 {
    color: var(--white);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .value {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 1rem 0;
  }

  p {
    font-size: 0.95rem;
    opacity: 0.95;
  }
`;

const ReflectionBox = styled.div`
  background-color: var(--white);
  padding: 2.5rem;
  border-radius: 12px;
  border: 2px solid var(--secondary-aqua);
  margin: 2rem 0;

  h3 {
    color: var(--primary-navy);
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-dark);
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, var(--primary-navy) 0%, #2a3f5f 100%);
  color: var(--white);
  padding: 5rem 0;
  text-align: center;

  h2 {
    color: var(--white);
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled(Link)`
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &.primary {
    background-color: var(--secondary-aqua);
    color: var(--primary-navy);

    &:hover {
      background-color: #00d4b8;
      transform: translateY(-3px);
      box-shadow: 0 10px 25px rgba(0, 191, 166, 0.4);
    }
  }

  &.secondary {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--white);

    &:hover {
      background-color: var(--white);
      color: var(--primary-navy);
      transform: translateY(-3px);
    }
  }
`;

const ZebraCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <CaseStudyContainer>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <BackLink to="/">← Back to Home</BackLink>
          <ProjectTitle
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Multi-Factor Timeclock Authentication for Frontline Workers
          </ProjectTitle>
          <Subtitle
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Designed and launched a secure, user-friendly authentication system that reduced clock-in time while improving security compliance for thousands of frontline workers.
          </Subtitle>
          <MetadataRow
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <MetadataItem>
              <h4>Role</h4>
              <p>Product Management Intern</p>
            </MetadataItem>
            <MetadataItem>
              <h4>Company</h4>
              <p>Zebra Technologies</p>
            </MetadataItem>
            <MetadataItem>
              <h4>Timeframe</h4>
              <p>Summer 2024 (12 weeks)</p>
            </MetadataItem>
            <MetadataItem>
              <h4>Team</h4>
              <p>PM, UX, Engineering, Security</p>
            </MetadataItem>
          </MetadataRow>
        </Container>
      </HeroSection>

      {/* Context & Problem */}
      <ContentSection>
        <Container>
          <SectionTitle>Context & Problem</SectionTitle>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            Zebra Technologies provides workforce management solutions for enterprises with large frontline worker populations—retail stores, warehouses, manufacturing facilities. These workers clock in and out using Zebra tablets at the start and end of shifts. However, the existing authentication flow relied on simple PIN codes, creating two critical issues:
          </p>

          <ProblemCard>
            <h3>Problem Statement</h3>
            <p>
              Frontline workers experienced slow, error-prone clock-in processes due to forgotten PINs and manual overrides. Meanwhile, simple PIN authentication created security risks including buddy-punching (employees clocking in for absent colleagues) and inaccurate time records, resulting in compliance concerns and payroll discrepancies.
            </p>
          </ProblemCard>

          <UserSection>
            <h3>Who is the customer / user?</h3>
            <p>
              Primary users are frontline workers (warehouse staff, retail associates, production line workers) who use shared Zebra tablets multiple times per day to clock in and out. Secondary stakeholders include HR managers who need accurate attendance data, IT security teams responsible for compliance, and frontline supervisors who handle authentication failures and manual overrides.
            </p>
          </UserSection>
        </Container>
      </ContentSection>

      {/* My Role & Responsibilities */}
      <ContentSection>
        <Container>
          <SectionTitle>My Role & Responsibilities</SectionTitle>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            As the Product Management Intern, I led the integration of Zebra's Identity Guardian multi-factor authentication system into the timeclock workflow:
          </p>
          <ResponsibilitiesList>
            <li>Conducted stakeholder interviews with HR, IT security, and frontline supervisors to understand pain points and requirements</li>
            <li>Mapped current-state and future-state user flows for the clock-in/out experience on tablet devices</li>
            <li>Collaborated with UX designers to prototype authentication screens balancing security with speed</li>
            <li>Defined MVP scope prioritizing biometric + badge authentication methods over PIN fallbacks</li>
            <li>Wrote detailed product requirements document (PRD) covering edge cases, error states, and offline scenarios</li>
            <li>Partnered with engineering team to assess technical feasibility and discuss API integration constraints</li>
            <li>Established success metrics including average clock-in time, authentication error rates, and pilot adoption</li>
            <li>Coordinated pilot deployment with 3 client sites and synthesized feedback for iteration</li>
          </ResponsibilitiesList>
        </Container>
      </ContentSection>

      {/* Process */}
      <ContentSection>
        <Container>
          <SectionTitle>Process</SectionTitle>
          <ProcessGrid>
            <PhaseCard $color="#667eea">
              <h3>Discover</h3>
              <ul>
                <li>Interviewed 15+ stakeholders across HR, IT security, and operations</li>
                <li>Shadowed frontline workers during shift changes to observe pain points</li>
                <li>Analyzed support tickets related to clock-in failures and manual overrides</li>
                <li>Reviewed competitive authentication solutions in workforce management space</li>
              </ul>
            </PhaseCard>

            <PhaseCard $color="#f5576c">
              <h3>Define</h3>
              <ul>
                <li>Created journey map highlighting friction points in current clock-in flow</li>
                <li>Synthesized findings into problem statement and user personas</li>
                <li>Prioritized requirements using MoSCoW method with stakeholder input</li>
                <li>Defined success criteria balancing security, speed, and user satisfaction</li>
              </ul>
            </PhaseCard>

            <PhaseCard $color="#00BFA6">
              <h3>Design / Plan</h3>
              <ul>
                <li>Designed future-state user flow with UX team for tablet interface</li>
                <li>Created wireframes for biometric + badge authentication screens</li>
                <li>Wrote PRD documenting functional specs, edge cases, and error handling</li>
                <li>Scoped MVP excluding PIN fallback to accelerate launch timeline</li>
              </ul>
            </PhaseCard>

            <PhaseCard $color="#FFC857">
              <h3>Deliver / Iterate</h3>
              <ul>
                <li>Coordinated with engineering on API integration and offline sync logic</li>
                <li>Ran pilot with 3 client sites representing different use cases</li>
                <li>Collected quantitative metrics (time, error rates) and qualitative feedback</li>
                <li>Iterated on error messaging and added grace period for badge tap timing</li>
              </ul>
            </PhaseCard>
          </ProcessGrid>
        </Container>
      </ContentSection>

      {/* Key Design / Product Decisions */}
      <ContentSection>
        <Container>
          <SectionTitle>Key Design / Product Decisions</SectionTitle>
          <DecisionGrid>
            <DecisionCard>
              <h3>Prioritized biometric + badge authentication over PIN codes</h3>
              <p>
                We considered keeping PINs as a fallback option but chose to phase them out for MVP. User research showed PINs were frequently forgotten and shared among coworkers. Biometric fingerprint combined with badge tap provided stronger security without adding friction. This aligned with IT security requirements while improving user experience.
              </p>
            </DecisionCard>

            <DecisionCard>
              <h3>Designed for offline-first functionality</h3>
              <p>
                Warehouses and manufacturing floors often have spotty network connectivity. Rather than requiring real-time server validation, we designed the system to cache authentication credentials locally and sync when connection is restored. This decision ensured workers could clock in even during network outages, preventing payroll disruptions.
              </p>
            </DecisionCard>

            <DecisionCard>
              <h3>Created clear, actionable error messages</h3>
              <p>
                Initial designs used generic error states like "Authentication Failed." Through pilot testing, we learned workers needed specific guidance (e.g., "Badge not recognized—please see supervisor"). We redesigned error screens to explain the issue and provide next steps, reducing support tickets by approximately 25%.
              </p>
            </DecisionCard>

            <DecisionCard>
              <h3>Added 5-second grace period for badge tap</h3>
              <p>
                Early pilots showed users sometimes tapped their badge before the fingerprint scanner was ready. Rather than showing an error, we added a 5-second window where the system would accept the badge tap after fingerprint verification. This small UX enhancement significantly reduced failed authentication attempts.
              </p>
            </DecisionCard>
          </DecisionGrid>
        </Container>
      </ContentSection>

      {/* Outcomes & Impact */}
      <ContentSection>
        <Container>
          <SectionTitle>Outcomes & Impact</SectionTitle>
          <OutcomesGrid>
            <OutcomeCard>
              <h3>Clock-in Time</h3>
              <div className="value">~30%</div>
              <p>Reduction in average clock-in time (placeholder – to be updated)</p>
            </OutcomeCard>

            <OutcomeCard>
              <h3>Security & Compliance</h3>
              <div className="value">✓</div>
              <p>Improved auditability of time records; fewer manual overrides reported in early feedback (qualitative)</p>
            </OutcomeCard>

            <OutcomeCard>
              <h3>Pilot Adoption</h3>
              <div className="value">3</div>
              <p>Client sites successfully piloted with positive feedback from frontline workers and supervisors</p>
            </OutcomeCard>

            <OutcomeCard>
              <h3>Error Reduction</h3>
              <div className="value">~25%</div>
              <p>Decrease in authentication-related support tickets (placeholder – to be updated)</p>
            </OutcomeCard>
          </OutcomesGrid>
        </Container>
      </ContentSection>

      {/* Reflection / What I Learned */}
      <ContentSection>
        <Container>
          <SectionTitle>Reflection / What I Learned</SectionTitle>
          <ReflectionBox>
            <h3>What I'd do differently next time</h3>
            <p>
              I would have involved frontline workers earlier in the design process. While we interviewed supervisors and HR, getting hands-on feedback from the actual end users during wireframing would have surfaced the badge tap timing issue sooner. I also learned the importance of defining success metrics upfront—we added some metrics mid-pilot, which made before/after comparisons more difficult.
            </p>
          </ReflectionBox>

          <ReflectionBox>
            <h3>What this project taught me about product management</h3>
            <p>
              This project reinforced that great product management is about balancing competing priorities. Security teams wanted the strongest authentication possible, while frontline workers needed speed and simplicity. By focusing on user research and framing decisions around shared goals (accurate time records, reduced manual work), I learned how to navigate stakeholder tensions and build consensus around a solution that served everyone.
            </p>
            <p>
              I also gained deeper appreciation for the importance of edge case planning. In the real world, networks fail, badges get lost, and fingerprint scanners occasionally misread. Thinking through these scenarios and designing graceful fallbacks is what separates a good product from one that truly works in production.
            </p>
          </ReflectionBox>

          <ReflectionBox>
            <h3>How this experience prepares me for product management roles</h3>
            <p>
              This internship gave me end-to-end ownership of a product feature—from discovery research through PRD creation, engineering collaboration, and pilot evaluation. I learned how to translate user pain points into actionable requirements, how to work cross-functionally with UX and engineering, and how to use data to inform iteration. These are the core skills I'll bring to any product management role, along with a demonstrated ability to ship solutions that balance user needs with business constraints.
            </p>
          </ReflectionBox>
        </Container>
      </ContentSection>

      {/* Call to Action */}
      <CTASection>
        <Container>
          <h2>Interested in learning more?</h2>
          <p>Explore other projects or get in touch to discuss how I can contribute to your team.</p>
          <CTAButtons>
            <CTAButton to="/kpmg-case-study" className="primary">
              View KPMG Case Study →
            </CTAButton>
            <CTAButton to="/" className="secondary">
              ← Back to All Projects
            </CTAButton>
          </CTAButtons>
        </Container>
      </CTASection>
    </CaseStudyContainer>
  );
};

export default ZebraCaseStudy;
