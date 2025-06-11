import { useEffect, useState } from "react";
import axios from "axios";

export default function FacebookPosts() {
  const [posts, setPosts] = useState([]);
  const pageId = "YOUR_PAGE_ID"; // Replace with actual Page ID
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with valid access token

  useEffect(() => {
    async function fetchTopPosts() {
      try {
        const res = await axios.get("/facebook/getallpostsfilter", {
          params: {
            pageId,
            accessToken,
            sortBy: "likes",
            order: "desc",
          },
        });

        setPosts(res.data.slice(0, 3)); // Only top 3
      } catch (err) {
        console.error("Error fetching Facebook posts:", err);
      }
    }

    fetchTopPosts();
  }, []);

  return (
    <div className="bg-[#181818] text-white rounded-xl p-6 shadow-lg backdrop-blur-md">
      <h2 className="text-xl font-bold mb-4">Top Facebook Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-700 pb-4">
            <p className="text-sm">{post.message || "No text content"}</p>
            {post.full_picture && (
              <img
                src={post.full_picture}
                alt="Facebook post"
                className="w-full rounded-lg mt-2"
              />
            )}
            <p className="text-sm text-gray-400 mt-1">
              👍 {post.likes?.summary?.total_count || 0} Likes
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
