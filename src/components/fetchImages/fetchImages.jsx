import axios from 'axios';

const API_KEY = '36501043-81ad10453f0c142b16e03b30f';
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;

export async function fetchImages(inputData, page) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: inputData,
        page,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: PICS_ON_PAGE,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Something went wrong with the request');
  }
}
