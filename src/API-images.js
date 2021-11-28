import axios from 'axios';

// export default async function fetchPhoto(searchQuery, page) {

  const BASE_URL = 'https://pixabay.com/api/';
  
//   const option = {
//     params: {
//       key: '24522625-682bca817ecb73336eef5fcc0',
//       q: searchQuery,
//       image_type: 'photo',
//       orientation: "horizontal",
//       page,
//       per_page: 40,
//       safesearch: true,
//     },
//   }; 

// const response = await axios.get(BASE_URL, option);
// return await response.data;
// }
 export default {
  searchQuery: '', 
  page: 1,
  per_page: 40,

  async fetchPhoto() {
    const response = await axios.get(`${BASE_URL}?key=24522625-682bca817ecb73336eef5fcc0&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.per_page}`);
    const data = await response.data;

    this.incrementPage();

    return {hits: data.hits, isTheNextPage: (this.page <= data.totalHits/this.per_page)};
  },
  incrementPage () {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(newQuery) {
    this.searchQuery = newQuery;
  },
}