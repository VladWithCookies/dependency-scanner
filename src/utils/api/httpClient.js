import axios from 'axios';

import { API_URL, ACCESS_TOKEN } from '@/constants';

export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});
