import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const fetchImages = async (query, page) => {
  const params = new URLSearchParams({
    key: '39286260-36ff99979e0a23a42f4451b46',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: 12,
  });

  const responce = await axios.get(`?${params}`);
  return await responce.data;
};