const services = [
  {
    title: 'Business Consulting',
    text: 'Strategy, transformation, operating models, project execution, and advisory support for organizations that need practical results.',
  },
  {
    title: 'Educational Technology',
    text: 'Smart classrooms, learning platforms, assessment systems, teacher enablement, and technology adoption for schools and ministries.',
  },
  {
    title: 'AI & Digital Transformation',
    text: 'AI readiness, automation, workflow redesign, data-driven operations, and modern digital systems for public and private institutions.',
  },
  {
    title: 'IT Infrastructure',
    text: 'Cloud, device management, cybersecurity planning, enterprise networks, managed services, and scalable deployment support.',
  },
];

const products = [
  {
    title: 'ExamSphere',
    subtitle: 'AI-powered examination and learning platform',
    points: ['Adaptive testing', 'WAEC, JAMB & NECO readiness', 'Weak-topic analysis', 'Parent progress reports', 'AI tutor support'],
  },
  {
    title: 'National Education Device Management Platform',
    subtitle: 'Device visibility, control, and protection for large education deployments',
    points: ['Device enrollment', 'GPS tracking', 'Remote lock and wipe', 'Classroom mode', 'Ministry dashboard'],
  },
];

const industries = ['Federal Government', 'State Governments', 'Schools', 'Universities', 'NGOs', 'Corporate Organizations', 'Financial Institutions', 'Development Partners'];

export default function HomePage() {
  return (
    <main>
      <header className="nav">
        <div className="brand"><span className="mark">B</span><span>BestBean Ltd</span></div>
        <nav>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Business Consulting • AI Solutions • Educational Technology</p>
          <h1>Transforming education, business and government through technology.</h1>
          <p className="lead">BestBean Ltd helps institutions design, deploy and scale practical technology solutions that improve learning, productivity and operational excellence.</p>
          <div className="actions">
            <a className="primary" href="#contact">Request a Consultation</a>
            <a className="secondary" href="#products">Explore Solutions</a>
          </div>
        </div>
        <div className="heroCard">
          <h3>Flagship Focus</h3>
          <p>Education platforms, AI-driven assessment, device management, digital strategy, and enterprise technology execution.</p>
          <div className="metrics">
            <div><strong>AI</strong><span>Learning & automation</span></div>
            <div><strong>Gov</strong><span>Deployment ready</span></div>
            <div><strong>Edu</strong><span>Student outcomes</span></div>
          </div>
        </div>
      </section>

      <section className="section about">
        <p className="eyebrow">About BestBean</p>
        <h2>Built for serious institutions that need serious execution.</h2>
        <p>BestBean Ltd works with schools, universities, enterprises and public sector organizations to turn strategy into working systems. Our approach combines business advisory, technology architecture, implementation discipline and long-term support.</p>
      </section>

      <section id="services" className="section">
        <p className="eyebrow">Our Services</p>
        <h2>Consulting and technology services</h2>
        <div className="grid four">
          {services.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="section dark">
        <p className="eyebrow">Products</p>
        <h2>BestBean flagship platforms</h2>
        <div className="grid two">
          {products.map((product) => (
            <article className="product" key={product.title}>
              <h3>{product.title}</h3>
              <p>{product.subtitle}</p>
              <ul>{product.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Industries Served</p>
        <h2>Solutions for education, enterprise and government</h2>
        <div className="chips">{industries.map((x) => <span key={x}>{x}</span>)}</div>
      </section>

      <section className="section why">
        <div>
          <p className="eyebrow">Why Choose BestBean</p>
          <h2>Technology leadership with implementation discipline.</h2>
        </div>
        <div className="whyList">
          <p>✓ Proven technology and consulting expertise</p>
          <p>✓ Education-sector specialization</p>
          <p>✓ AI-driven solutions with practical use cases</p>
          <p>✓ Government and enterprise deployment mindset</p>
          <p>✓ Long-term support and partnership focus</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Request a consultation</h2>
          <p>Tell us about your organization, project or technology need. BestBean will respond with a practical next step.</p>
        </div>
        <form className="form">
          <input placeholder="Full Name" />
          <input placeholder="Organization" />
          <input placeholder="Email Address" />
          <input placeholder="Phone Number" />
          <textarea placeholder="How can BestBean help?" rows="5" />
          <button type="button">Submit Request</button>
        </form>
      </section>

      <footer>
        <strong>BestBean Ltd</strong>
        <span>Business Consulting • AI Solutions • Educational Technology • Digital Transformation</span>
      </footer>
    </main>
  );
}
