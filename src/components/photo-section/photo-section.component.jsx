import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { albumService } from '../../service/albumService';

const PhotoSection = () => {
  const [photos, setPhotos] = useState(null);
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();

  useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      console.log(userId)
      const albums = await albumService.fetchAlbums(userId);
      console.log(albums);
      setPhotos(albums);
      setLoading(false);
    };

    getPhotos();
  }, [userId])

  if (loading) {
    return <div>Loading...</div>
  }
  return photos && <div>There is {photos.length} albums from this user</div>


}

export default PhotoSection;