import axios from 'axios';

export default function fetchPhoto(searchThis) {
 BASE_URL = 'https://pixabay.com/api/';

option = {
key = '24522625-682bca817ecb73336eef5fcc0',
q = searchThis,
image_type = 'photo',
orientation = "horizontal",
page = 1,
per_page = 40,
safesearch = true,
}; 

axios.get(BASE_URL, option).then(response => response.json)


}
