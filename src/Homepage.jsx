import React, { useState } from 'react';

function Homepage() {
  const [selectedPage, setSelectedPage] = useState('');
  const pages = ['Page One', 'Page Two', 'Page Three'];

  return (
    <>
      <style>{`
        body, html, #root {
          margin: 0; padding: 0; height: 100%;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(to bottom right, #121212, #1e1e1e);
          color: #eaeaea;
          overflow-x: hidden;
        }

        .background-stars {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background: url('https://grainy-gradients.vercel.app/noise.svg');
          background-size: cover;
          z-index: -1;
          opacity: 0.08;
        }

        .sidebar {
          transform: translateX(-80%);
        }

        .sidebar:hover {
          transform: translateX(0);
          box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
        }
      `}</style>

      <div className="background-stars"></div>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#0d0d0d] to-[#2c2c2c] px-8 py-4 flex justify-between items-center shadow-md">
        <div className="text-[#f5f5f5] text-5xl font-extrabold tracking-wider animate-pulse">
          Socialsuite
        </div>
        <div className="text-gray-400 font-light italic">Empower your social presence</div>
      </nav>

      <div className="flex h-full">
        {/* Sidebar */}
        <aside className="sidebar transition-transform duration-300 absolute h-full z-10 w-64 p-6 bg-gradient-to-b from-[#1a1a1a] to-[#111111] backdrop-blur-md rounded-r-3xl shadow-lg">
          <nav className="space-y-8 text-lg text-white">
            {[
              { title: 'Homepage', href: '#homepage', links: ['All Post', 'Analytics'] },
              { title: 'Post', href: '#post', links: ['Scheduling Post', 'Posts'] },
              { title: 'Analytics', href: '#analytics', links: ['Likes', 'Followers', 'Comments'] },
              { title: 'Earning', href: '#earning', links: ['Views Per Video', 'Likes Per Post'] },
              { title: 'Trending', href: '#trending', links: ['Trending Reels', 'Trending Post'] },
            ].map(section => (
              <div key={section.title}>
                <a href={section.href} className="text-xl font-bold uppercase tracking-wide text-purple-400 mb-1 block hover:text-purple-300">
                  {section.title}
                </a>
                <div className="flex flex-col space-y-1 pl-2 text-sm text-gray-300">
                  {section.links.map(link => (
                    <a key={link} href="#" className="hover:text-white hover:underline">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 ml-16 flex flex-col gap-10">
          {/* Facebook Section */}
          <div
            id="post"
            className="min-h-[350px] bg-[#1f1f1f]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-8 flex flex-col transition-transform duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">FACEBOOK</h2>

            <label className="text-sm mb-2 text-gray-300">Select Page:</label>
            <select
              className="p-2 rounded-md bg-[#2b2b2b] text-white mb-4"
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
            >
              <option value="">-- Choose a page --</option>
              {pages.map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>

            {selectedPage && (
              <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden w-full max-w-md mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-300">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <div className="font-semibold">Page: {selectedPage}</div>
                    <div className="text-xs text-gray-500">Today at 10:00</div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 py-2 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <strong> Nam id convallis leo</strong>, a cursus velit.
                  Donec congue dignissim nisi vitae dapibus...
                </div>

                {/* Image */}
                <img
                  src="https://img.freepik.com/free-photo/group-young-people-posing-selfie_53876-101918.jpg?w=740"
                  alt="Post"
                  className="w-full object-cover h-48"
                />

                {/* Reactions */}
                <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-500 border-t border-b border-gray-300">
                  <div>
                    <span role="img" aria-label="like">👍</span> You and 99 others
                  </div>
                  <div>100 Comments</div>
                </div>

                {/* Actions */}
                <div className="flex justify-around py-2">
                  <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600">
                    👍 Like
                  </button>
                  <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-blue-600">
                    💬 Comment
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Instagram Section */}
          <div
            id="homepage"
            className="h-[350px] bg-[#1f1f1f]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold text-white">INSTAGRAM</h2>
            <div className="flex justify-end">
              <a href="#" className="text-blue-400 hover:text-blue-200 underline">
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
