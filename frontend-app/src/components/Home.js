import React from 'react';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img src="/images/teamwitchristucker.jpg" alt="Team with Chris Tucker" className="hero-image smaller-hero-image" />
        <div className="hero-text">
          <h1 className="hero-title">Take Your Track & Field Performance to the Next Level</h1>
          <p className="hero-subtitle">With Elite Coaching in Hurdles, Long Jump, and Triple Jump</p>
          <a href="#programs" className="cta-btn">Get Started Today</a>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <h2 className="section-title">Track & Field Programs</h2>
        <div className="programs-grid">
          <div className="program-item">
            <img src="/images/hurdles.jpg" alt="Hurdles" className="program-image"/>
            <h3 className="program-title">Hurdles</h3>
            <p className="program-description">Master the art of hurdling with personalized coaching tailored to your performance level.</p>
            <a href="#schedule" className="cta-btn-small">Schedule a Hurdle Session</a>
          </div>
          <div className="program-item">
            <img src="/images/longjump.jpg" alt="Long Jump" className="program-image"/>
            <h3 className="program-title">Long Jump</h3>
            <p className="program-description">Develop your long jump technique with elite coaching.</p>
            <a href="#schedule" className="cta-btn-small">Schedule a Long Jump Session</a>
          </div>
          <div className="program-item">
            <img src="/images/triplejump.jpg" alt="Triple Jump" className="program-image"/>
            <h3 className="program-title">Triple Jump</h3>
            <p className="program-description">Achieve champion-level performance in the triple jump.</p>
            <a href="#schedule" className="cta-btn-small">Schedule a Triple Jump Session</a>
          </div>
        </div>
      </section>

      {/* Become a Champion Section */}
      <section className="become-champion-section">
        <div className="champion-image-wrapper">
          <img src="/images/longjump2.jpg" alt="Longjump2" className="champion-section-image"/>
        </div>
        <div className="champion-text">
          <h2 className="section-title">Become a Champion</h2>
          <p>With the right guidance and dedication, you can reach your full potential. Train with the best to be the best.</p>
          <a href="#contact" className="cta-btn">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
}

export default Home;

