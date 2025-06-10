import React from 'react';
import { Link } from 'react-router-dom';
function Homepage() {
  const containerStyle = {
    minHeight: '100%',
    margin: 0,
    padding: 0,
    fontFamily: 'Poppins, sans-serif',
    background: 'linear-gradient(to bottom right, #121212, #1e1e1e)',
    color: '#eaeaea',
    overflowX: 'hidden',
  };

  const navStyle = {
    background: 'linear-gradient(to right, #0d0d0d, #2c2c2c)',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
  };

  const titleStyle = {
    color: '#f5f5f5',
    fontSize: '2.5rem',
    fontWeight: '800',
    letterSpacing: '0.1em',
    animation: 'pulse 2s infinite',
  };

  const subtitleStyle = {
    color: '#aaa',
    fontStyle: 'italic',
    fontWeight: '300',
  };

  const sidebarStyle = {
    position: 'absolute',
    height: '100%',
    width: '16rem',
    padding: '1.5rem',
    background: 'linear-gradient(to bottom, #1a1a1a, #111111)',
    backdropFilter: 'blur(10px)',
    borderTopRightRadius: '1.5rem',
    borderBottomRightRadius: '1.5rem',
    boxShadow: '0 0 20px rgba(0,0,0,0.2)',
    transform: 'translateX(-80%)',
    transition: 'transform 0.3s ease-in-out',
    zIndex: 10,
  };

  const sidebarHoverStyle = {
    ...sidebarStyle,
    transform: 'translateX(0)',
    boxShadow: '0 0 25px rgba(255, 255, 255, 0.15)',
  };

  const sectionTitleStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#a78bfa',
    marginBottom: '0.25rem',
  };

  const linkStyle = {
    color: '#ccc',
    fontSize: '0.9rem',
    marginLeft: '0.5rem',
    display: 'block',
    marginBottom: '0.25rem',
    textDecoration: 'none',
  };

  const linkHoverStyle = {
    ...linkStyle,
    color: '#fff',
    textDecoration: 'underline',
  };

  const cardStyle = {
    height: '350px',
    background: 'rgba(31,31,31,0.6)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease-in-out',
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: 'scale(1.05)',
  };

  const backgroundStarsStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
    backgroundSize: 'cover',
    zIndex: -1,
    opacity: 0.08,
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }

          aside.sidebar:hover {
            transform: translateX(0) !important;
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
          }

          a:hover {
            color: white !important;
            text-decoration: underline !important;
          }
        `}
      </style>

      <div style={containerStyle}>
        <div style={backgroundStarsStyle}></div>

        {/* Navigation Bar */}
        <nav style={navStyle}>
          <div style={titleStyle}>Socialsuite</div>
          <div style={subtitleStyle}>Empower your social presence</div>
        </nav>

        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Sidebar */}
          <aside className="sidebar" style={sidebarStyle}>
            <nav>
              {[
                { title: 'Homepage', href: '#homepage', links: ['All Post', 'Analytics'] },
                { title: 'Post', href: '#post', links: [
  { text: 'Your Post', href: '#' },
  { text: 'Post Scheduling', href: '/schedulePost' } // change here
] },

                { title: 'Analytics', href: '#analytics', links: ['Likes', 'Followers', 'Comments'] },
                { title: 'Earning', href: '#earning', links: ['Views Per Video', 'Likes Per Post'] },
                { title: 'Trending', href: '#trending', links: ['Trending Reels', 'Trending Post'] },
              ].map(section => (
                <div key={section.title} style={{ marginBottom: '1.5rem' }}>
                  <a href={section.href} style={sectionTitleStyle}>
                    {section.title}
                  </a>
                  <div>
                    {section.links.map(link => (
  <Link
    key={typeof link === 'string' ? link : link.text}
    to={typeof link === 'string' ? '#' : link.href}
    style={linkStyle}
  >
    {typeof link === 'string' ? link : link.text}
  </Link>
))}

                  </div>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main style={{ flex: 1, padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', marginLeft: '4rem' }}>
            {[
              { id: 'homepage', name: 'INSTAGRAM' },
              { id: 'post', name: 'FACEBOOK' },
            ].map(platform => (
              <div
                key={platform.name}
                id={platform.id}
                style={cardStyle}
                onMouseEnter={e => Object.assign(e.currentTarget.style, cardHoverStyle)}
                onMouseLeave={e => Object.assign(e.currentTarget.style, cardStyle)}
              >
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'white' }}>{platform.name}</h2>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <a href="#" style={{ color: '#60a5fa', textDecoration: 'underline' }}>
                    View All
                  </a>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}

export default Homepage;
