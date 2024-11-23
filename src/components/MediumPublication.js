// src/components/MediumPublication.js
// import React from 'react';

// const MediumPublication = () => {
//   return (
//     <div>
//       <h1>Medium Publication</h1>
//       <p>
//         Check out my Medium publication <a href="https://medium.com/@masterrajpatel" target="_blank" rel="noopener noreferrer">here</a>.
//       </p>
//     </div>
//   );
// };

// export default MediumPublication;
// src/components/MediumPublication.js
import React from 'react';

const MediumPublication = () => {
  return (
    <div className="publication-container">
      <h1>Medium Publication</h1>
      <div className="publication-content">
        <h2>Join Our Growing Tech Community</h2>
        <p>
          Welcome to our thriving tech publication! We're building a space where:
        </p>
        <ul>
          <li>✨ Passionate developers share their journey</li>
          <li>💡 Industry experts reveal best practices</li>
          <li>🚀 Innovators discuss cutting-edge technologies</li>
        </ul>
        
        <div className="cta-section">
          <p className="highlight-text">
            <strong>Ready to become part of something extraordinary?</strong>
          </p>
          <p>
            Join our community of tech enthusiasts and share your valuable insights with thousands of eager readers!
          </p>
          <div className="action-buttons">
            <a 
              href="https://medium.com/from-code-to-cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="primary-button"
            >
              <strong>Explore Our Publication</strong>
            </a>
          </div>
          <p className="feature-text">
            <strong>Featured writers get exclusive benefits:</strong>
          </p>
          <ul>
            <li>📈 Exposure to our growing tech audience</li>
            <li>🤝 Networking opportunities with industry leaders</li>
            <li>💪 Support from our editorial team</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MediumPublication;
