import axios from '../axios/axios';

const _getBooks = (books) => ({
    type: 'GET',
    books
});

export const getBooks = () => {
    return (dispatch) => {
        return axios.get('books').then(result => {
            const books = [];

            result.data.forEach(item => {
                books.push(item);
            });
            console.log(books);
            dispatch(_getBooks(books));

        });
    };
};