import { motion } from 'framer-motion';
import styled from 'styled-components';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, var(--primary-navy) 0%, #2a3f5f 100%);
  color: var(--white);
  padding: 4rem 0 2rem;
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
      radial-gradient(circle at 20% 50%, rgba(0, 191, 166, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 200, 87, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ContactSection = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: var(--white);
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    opacity: 0.9;
    margin-bottom: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--white);
  opacity: 0.9;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    opacity: 1;
    color: var(--secondary-aqua);
    transform: translateX(5px);
  }

  span:first-child {
    font-size: 1.2rem;
  }
`;

const LinksSection = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
    color: var(--white);
    font-weight: 600;
  }
`;

const LinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  li a {
    color: var(--white);
    opacity: 0.8;
    transition: all 0.3s ease;
    font-size: 0.95rem;

    &:hover {
      opacity: 1;
      color: var(--secondary-aqua);
      padding-left: 5px;
    }
  }
`;

const SocialSection = styled.div`
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
    color: var(--white);
    font-weight: 600;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: var(--white);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--secondary-aqua);
    transform: translateY(-3px);
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  opacity: 0.7;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: var(--white);
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-aqua);
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--secondary-aqua);
  color: var(--primary-navy);
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00d4b8;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 191, 166, 0.3);
  }
`;

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <FooterSection id="contact">
      <Container>
        <FooterContent>
          <ContactSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new opportunities, collaborations, or just having a conversation about strategy and consulting.
              </p>
              <ContactInfo>
                <ContactItem href="mailto:eric.wu@email.com">
                  <span>📧</span>
                  <span>eric.wu@email.com</span>
                </ContactItem>
                <ContactItem href="tel:+15551234567">
                  <span>📱</span>
                  <span>(555) 123-4567</span>
                </ContactItem>
                <ContactItem href="#" onClick={(e) => e.preventDefault()}>
                  <span>📍</span>
                  <span>Seattle, WA</span>
                </ContactItem>
              </ContactInfo>
              <DownloadButton href="/Eric_Wu_Res.pdf" download>
                <span>📄</span>
                <span>Download Resume</span>
              </DownloadButton>
            </motion.div>
          </ContactSection>

          <LinksSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4>Quick Links</h4>
              <LinksList>
                <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About Me</a></li>
                <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
                <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
                <li><a href="/Eric_Wu_CL.pdf" download>Cover Letter</a></li>
              </LinksList>
            </motion.div>
          </LinksSection>

          <SocialSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>Connect</h4>
              <SocialLinks>
                <SocialIcon href="https://linkedin.com/in/ericwu" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  💼
                </SocialIcon>
                <SocialIcon href="https://github.com/ericwu" target="_blank" rel="noopener noreferrer" title="GitHub">
                  💻
                </SocialIcon>
                <SocialIcon href="https://twitter.com/ericwu" target="_blank" rel="noopener noreferrer" title="Twitter">
                  🐦
                </SocialIcon>
                <SocialIcon href="mailto:eric.wu@email.com" title="Email">
                  ✉️
                </SocialIcon>
              </SocialLinks>
            </motion.div>
          </SocialSection>
        </FooterContent>

        <Divider />

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Eric Wu. All rights reserved.
          </Copyright>
          <BottomLinks>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms of Use</a>
          </BottomLinks>
        </FooterBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
