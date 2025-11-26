import React, { useState, useEffect } from 'react';

import './S_Count.css';

const albums = 1;

const SCount = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [instagram, setInstagram] = useState({
    followers: '0',
    following: '0',
  });

  const fetchInstagramData = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('action', 'get_instagram_data_for_follower');
      formData.append('account_handle', 'mwesin');
      formData.append(
        'source',
        '무료 라이브 Instagram 팔로워 수 | Path Social'
      );
      const response = await fetch(
        'https://www.pathsocial.com/wp-admin/admin-ajax.php',
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();

      setInstagram(responseData.data);
    } catch (e) {
      setInstagram({ followers: 'N/A', following: 'N/A' });
      console.error('Error fetching Instagram data:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramData();
  }, []);

  return (
    <section className="profile-stats">
      <div className="stat-item">
        <h3>{albums}</h3>
        <p>Albums</p>
      </div>
      <div className="stat-item">
        <h3>{isLoading ? '...' : instagram.followers}</h3>
        <p>Followers</p>
      </div>
      <div className="stat-item">
        <h3>{isLoading ? '...' : instagram.following}</h3>
        <p>Following</p>
      </div>
    </section>
  );
};

export default SCount;
