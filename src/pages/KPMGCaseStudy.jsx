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
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: var(--white);
  padding: 2.5rem;
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 10px 30px rgba(240, 147, 251, 0.3);

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

const KPMGCaseStudy = () => {
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
            Retail Operations Transformation
          </ProjectTitle>
          <Subtitle
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Led analytical workstreams and stakeholder coordination to help a retail client streamline operations, reduce costs, and improve customer experience.
          </Subtitle>
          <MetadataRow
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <MetadataItem>
              <h4>Role</h4>
              <p>Project Management Intern</p>
            </MetadataItem>
            <MetadataItem>
              <h4>Company</h4>
              <p>KPMG</p>
            </MetadataItem>
            <MetadataItem>
              <h4>Timeframe</h4>
              <p>Summer 2023 (10 weeks)</p>
            </MetadataItem>
            <MetadataItem>
              <h4>Team</h4>
              <p>Consulting team, Client stakeholders</p>
            </MetadataItem>
          </MetadataRow>
        </Container>
      </HeroSection>

      {/* Context & Problem */}
      <ContentSection>
        <Container>
          <SectionTitle>Context & Problem</SectionTitle>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            A mid-sized retail client was experiencing declining profitability despite stable revenue. They engaged KPMG to diagnose operational inefficiencies and recommend a transformation roadmap. The client's operations spanned inventory management, fulfillment, customer service, and in-store operations across 50+ locations.
          </p>

          <ProblemCard>
            <h3>Problem Statement</h3>
            <p>
              The client faced rising operational costs, inconsistent processes across locations, and increasing customer complaints about slow fulfillment and out-of-stock items. Leadership needed a data-driven assessment of where inefficiencies existed and a prioritized set of initiatives to improve margins while maintaining customer satisfaction.
            </p>
          </ProblemCard>

          <UserSection>
            <h3>Who is the customer / user?</h3>
            <p>
              The primary client stakeholders were the COO and VP of Operations, who needed actionable recommendations to present to the board. Secondary stakeholders included regional managers responsible for implementing changes, and the finance team tracking cost reduction targets. Ultimately, changes would impact store employees and end customers experiencing improved service.
            </p>
          </UserSection>
        </Container>
      </ContentSection>

      {/* My Role & Responsibilities */}
      <ContentSection>
        <Container>
          <SectionTitle>My Role & Responsibilities</SectionTitle>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            As the Project Management Intern on the engagement, I supported analytical workstreams and coordinated deliverables across the consulting team:
          </p>
          <ResponsibilitiesList>
            <li>Collected and synthesized operational data from client systems, internal reports, and stakeholder interviews</li>
            <li>Analyzed inventory turnover, fulfillment times, and labor productivity across 50+ store locations</li>
            <li>Mapped current-state processes for order fulfillment and identified bottlenecks using process flow diagrams</li>
            <li>Built financial models to quantify the impact of proposed initiatives on cost savings and revenue</li>
            <li>Coordinated weekly status meetings with client leadership and managed project timeline and milestone tracking</li>
            <li>Synthesized findings into executive presentation decks with clear, data-driven recommendations</li>
            <li>Facilitated workshops with regional managers to gather ground-level insights and validate hypotheses</li>
            <li>Supported the senior consultant in prioritizing initiatives using an impact-feasibility matrix</li>
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
                <li>Interviewed 20+ stakeholders including store managers, regional directors, and corporate leadership</li>
                <li>Analyzed 2 years of operational data covering inventory, sales, and labor costs</li>
                <li>Conducted site visits to 5 representative store locations to observe workflows</li>
                <li>Researched industry benchmarks and competitive best practices</li>
              </ul>
            </PhaseCard>

            <PhaseCard $color="#f5576c">
              <h3>Define</h3>
              <ul>
                <li>Built hypothesis tree to structure investigation of cost drivers and inefficiencies</li>
                <li>Created customer journey map highlighting pain points in the purchase and fulfillment experience</li>
                <li>Identified 3 primary opportunity areas: inventory optimization, fulfillment speed, and labor allocation</li>
                <li>Defined KPIs for success including cost per order, stock-out rate, and customer satisfaction</li>
              </ul>
            </PhaseCard>

            <PhaseCard $color="#00BFA6">
              <h3>Design / Plan</h3>
              <ul>
                <li>Developed future-state process maps for optimized fulfillment workflow</li>
                <li>Built financial models projecting impact of each initiative over 3 years</li>
                <li>Prioritized 8 initiatives using impact-effort matrix in collaboration with client</li>
                <li>Created implementation roadmap with phased rollout across pilot and full-scale deployment</li>
              </ul>
            </PhaseCard>

            <PhaseCard $color="#FFC857">
              <h3>Deliver / Iterate</h3>
              <ul>
                <li>Presented final recommendations to C-suite in executive steering committee meeting</li>
                <li>Delivered detailed playbook with step-by-step implementation guidance</li>
                <li>Facilitated feedback sessions with regional managers to refine rollout plan</li>
                <li>Supported client transition team in scoping pilot for top-priority initiatives</li>
              </ul>
            </PhaseCard>
          </ProcessGrid>
        </Container>
      </ContentSection>

      {/* Key Design / Product Decisions */}
      <ContentSection>
        <Container>
          <SectionTitle>Key Strategic Decisions</SectionTitle>
          <DecisionGrid>
            <DecisionCard>
              <h3>Prioritized inventory optimization over headcount reduction</h3>
              <p>
                Initial analysis suggested labor costs were high, but deeper investigation revealed the root cause was inefficient inventory allocation forcing employees to spend time searching for stock. We recommended reallocating inventory based on sales patterns rather than cutting staff. This aligned with leadership's goal to maintain service quality while reducing waste.
              </p>
            </DecisionCard>

            <DecisionCard>
              <h3>Focused on quick wins to build momentum</h3>
              <p>
                The engagement included both short-term and long-term initiatives. We structured the roadmap to prioritize 2-3 quick wins (e.g., standardized fulfillment SOP, inventory dashboard) that could be implemented within 90 days. Early success built stakeholder confidence and secured buy-in for more complex, longer-term initiatives like warehouse automation.
              </p>
            </DecisionCard>

            <DecisionCard>
              <h3>Used pilot approach to de-risk implementation</h3>
              <p>
                Rather than recommending a full rollout, we proposed piloting the top 3 initiatives in 5 stores representing different volume profiles. This allowed the client to test assumptions, gather feedback, and refine the approach before scaling. The pilot-first strategy reduced risk and made the C-suite more comfortable approving the investment.
              </p>
            </DecisionCard>

            <DecisionCard>
              <h3>Designed executive presentations for storytelling, not data dumps</h3>
              <p>
                Early drafts of our presentations included dense tables and detailed appendices. Senior leadership feedback indicated they wanted clear takeaways, not exhaustive analysis. We restructured decks to lead with the "So what?"—starting with business impact, then supporting with data. This storytelling approach made recommendations more compelling and actionable.
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
              <h3>Projected Cost Savings</h3>
              <div className="value">~$2M</div>
              <p>Annual cost reduction projected from implemented initiatives (placeholder – to be updated)</p>
            </OutcomeCard>

            <OutcomeCard>
              <h3>Fulfillment Improvement</h3>
              <div className="value">~20%</div>
              <p>Expected reduction in average order fulfillment time based on pilot results (placeholder – to be updated)</p>
            </OutcomeCard>

            <OutcomeCard>
              <h3>Client Approval</h3>
              <div className="value">✓</div>
              <p>C-suite approved roadmap and allocated budget for pilot implementation</p>
            </OutcomeCard>

            <OutcomeCard>
              <h3>Stakeholder Satisfaction</h3>
              <div className="value">High</div>
              <p>Positive feedback from client leadership on clarity of recommendations and quality of deliverables</p>
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
              I would have spent more time upfront aligning with the client on success criteria and decision-making frameworks. Midway through the project, we realized the CFO and COO had different priorities—CFO wanted pure cost reduction, while COO prioritized customer experience. Earlier alignment would have streamlined our analysis and reduced rework. I also learned the value of building relationships with middle management, not just executives. Regional managers had critical insights that we didn't surface until late in the engagement.
            </p>
          </ReflectionBox>

          <ReflectionBox>
            <h3>What this project taught me about consulting and project management</h3>
            <p>
              This engagement showed me that great consulting is about structured problem-solving and clear communication. Breaking down a complex, ambiguous problem (declining profitability) into discrete, testable hypotheses made the work manageable and our recommendations credible. I also learned that the best analysis is useless if stakeholders don't understand or believe it—storytelling and stakeholder management are just as important as technical rigor.
            </p>
            <p>
              On the project management side, I saw firsthand how critical it is to keep teams aligned on timelines, deliverables, and dependencies. Coordinating workstreams across data collection, analysis, and presentation required constant communication and proactive identification of blockers.
            </p>
          </ReflectionBox>

          <ReflectionBox>
            <h3>How this experience prepares me for product and project management roles</h3>
            <p>
              This internship gave me deep experience in analytical reasoning, stakeholder management, and translating insights into actionable plans—skills that are core to both product and project management. I learned how to synthesize complex data, prioritize initiatives based on impact and feasibility, and communicate recommendations to diverse audiences. Whether I'm defining a product roadmap or coordinating a cross-functional project, the structured problem-solving and communication skills from this engagement will be directly applicable.
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
            <CTAButton to="/zebra-case-study" className="primary">
              View Zebra Technologies Case Study →
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

export default KPMGCaseStudy;
