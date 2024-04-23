import React, {useEffect} from 'react'

export default function Test1() {
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://api.unsplash.com/photos/random?count=10&client_id=wxFE-eV4eaT1N27OsKq5N8Kt9riF36G9Dy_KSPZenqQ');
        const data = await response.json();
        console.log(data);
        // setImageList(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
    // COMMIT TO GITHUB
  },[]);

  return (
    <div>Test1</div>
  )
}
