import React from 'react';
import styles from '../../styles/CybersecuritySlide.module.css';

const CybersecuritySlide = () => {
  return (
    <div className={styles.CybersecuritySlide}>
      <div className={styles.container}>
        <h2>Intermediate Cybersecurity</h2>
        <section className={styles.content}>
          <iframe 
            src="https://docs.google.com/presentation/d/e/2PACX-1vQXXSAZsIVkeQOvuDL6C1rfOTFwpPW4d1IXRkeystwYQShzobttlyeU2PBFRAt23PIWEQw29G4qVVM9/embed?start=false&loop=false&delayms=3000"
            allowfullscreen="true" 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true">
          </iframe>
          <article>
            <h3>Incident Response</h3>
            <p>In collaboration with my groupmates, I developed an incident response presentation focused on a data breach in the AWS Cloud Bank. Throughout the Intermediate Cybersecurity course from CodePath, we explored various essential topics and tools, including:</p>
            <ul>
              <li><strong>Network Analysis</strong>: Wireshark, EInspect PCAP files, and email traffic inspection</li>
              <li><strong>Security Monitoring</strong>: Wazuh, integrity monitoring, and the identification of modifications</li>
              <li><strong>Attack Vectors</strong>: Understanding FTP, directory traversal attacks, DoS attacks, and utilizing proxy servers like nginx</li>
              <li><strong>Incident Management</strong>: Leveraging SIEM systems, event log correlation, and creating malware event timelines</li>
              <li><strong>Frameworks and Analysis</strong>: Applying the NIST IR Framework, utilizing Splunk for threat feeds, and analyzing TTPs (Tactics, Techniques, and Procedures)</li>
            </ul>
            <p>For our project, we utilized tools such as Splunk, Python, Wireshark, Snort, and Catalyst to log and track identified assets. We adapted Amazon's Data Access Playbook to align with our specific needs and dataset, identifying prevention methods and mitigation strategies for potential risks.</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default CybersecuritySlide;
