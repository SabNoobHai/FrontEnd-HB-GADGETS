function Homepage() {
  return (
    <>
      <style>{`
        /* Gradient background with subtle animated shapes */
        body, html, #root {
          margin: 0; padding: 0; height: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          overflow-x: hidden;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .background-shapes {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;
          overflow: hidden;
          z-index: -1;
        }
        
        .shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255 255 255 / 0.15);
          animation: float 15s infinite ease-in-out alternate;
        }
        
        .shape1 {
          width: 200px; height: 200px;
          top: 10%; left: 15%;
          animation-delay: 0s;
        }
        
        .shape2 {
          width: 300px; height: 300px;
          top: 60%; left: 70%;
          animation-delay: 5s;
        }
        
        .shape3 {
          width: 150px; height: 150px;
          top: 30%; left: 80%;
          animation-delay: 3s;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          100% {
            transform: translateY(-40px) translateX(20px) scale(1.1);
          }
        }
      `}</style>

      <div className="background-shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
      </div>

      <div className="First">
        <nav className="bg-blue-600 px-6 py-4 flex">
          <div className="text-white text-6xl font-bold">Socialsuite</div>
        </nav>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-60 p-6 bg-white/40 backdrop-blur-md rounded-r-lg shadow-md dark:text-gray-800">
          <nav className="space-y-8 text-xl">
            <div className="space-y-2">
              <a
                href="#"
                className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block"
              >
                Homepage
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">All Post</a>
                <a href="#">Analytics</a>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href="#"
                className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block"
              >
                Post
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">Scheduling Post</a>
                <a href="#">Posts</a>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href="#"
                className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block"
              >
                Analytics
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">Likes</a>
                <a href="#">Followers</a>
                <a href="#">Comments</a>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href="#"
                className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block"
              >
                Earning
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">Views Per Video</a>
                <a href="#">Likes Per Post</a>
              </div>
            </div>

            <div className="space-y-2">
              <a
                href="#"
                className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block"
              >
                Trending
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">Trending Reels</a>
                <a href="#">Trending Post</a>
              </div>
            </div>
          </nav>
        </aside>

        <main
          style={{
            flex: 1,
            padding: '32px',
            background: 'rgba(255 255 255 / 0.4)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            margin: '16px',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          }}
        >
          <div
            style={{
              height: '350px',
              border: '2px solid rgba(0,0,0,0.2)',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginBottom: '40px',
              background: 'rgba(255 255 255 / 0.6)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>INSTAGRAM</h2>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                View All
              </a>
            </div>
          </div>

          <div
            style={{
              height: '350px',
              border: '2px solid rgba(0,0,0,0.2)',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'rgba(255 255 255 / 0.6)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>FACEBOOK</h2>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                View All
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Homepage;
