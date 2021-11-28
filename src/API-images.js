import axios from 'axios';

export default async function fetchPhoto(searchQuery, page) {

  const BASE_URL = 'https://pixabay.com/api/';
  
  const option = {
    params: {
      key: '24522625-682bca817ecb73336eef5fcc0',
      q: searchQuery,
      image_type: 'photo',
      orientation: "horizontal",
      page,
      per_page: 40,
      safesearch: true,
    },
  }; 

const response = await axios.get(BASE_URL, option);
return await response.data;
}
