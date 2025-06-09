function Homepage() {
  return (
    <>
      <div className="First">
        <nav className="bg-blue-600 px-6 py-4 flex">
          <div className="text-white text-6xl font-bold">Socialsuite</div>
        </nav>
      </div>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-60 p-6 dark:bg-gray-50 dark:text-gray-800">
          <nav className="space-y-8 text-xl">
            <div className="space-y-2">
              <a href="#" className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block">
                Homepage
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">All Post</a>
                <a href="#">Analytics</a>
              </div>
            </div>

            <div className="space-y-2">
              <a href="#" className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block">
                Post
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">Scheduling Post</a>
                <a href="#">Posts</a>
              </div>
            </div>

            <div className="space-y-2">
              <a href="#" className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block">
                Analytics
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">Likes</a>
                <a href="#">Followers</a>
                <a href="#">Comments</a>
              </div>
            </div>

            <div className="space-y-2">
              <a href="#" className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block">
                Earning
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">Views Per Video</a>
                <a href="#">Likes Per Post</a>
              </div>
            </div>

            <div className="space-y-2">
              <a href="#" className="text-2xl font-semibold tracking-widest uppercase dark:text-gray-600 block">
                Trending
              </a>
              <div className="flex flex-col space-y-2">
                <a href="#">Trending Reels</a>
                <a href="#">Trending Post</a>
              </div>
            </div>
          </nav>
        </aside>

        <main style={{ flex: 1, padding: '32px' }}>
          <div
            style={{
              height: '350px',
              border: '2px solid black',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginBottom: '40px',
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
              border: '2px solid black',
              padding: '24px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
    
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
