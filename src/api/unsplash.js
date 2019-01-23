
import axios from 'axios';
export default axios.create ({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID ce79047931a5b361c568e2edc5a38b9add86ce780fa8e718cd8ca21f1005dedd'
    }
});
