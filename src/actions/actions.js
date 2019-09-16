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

            dispatch(_getBooks(books));

        });
    };
};

const _addbook = (book) => ({
    type: 'ADD',
    book
});


export const addbook = (item = {
    title: ''

}) => {
    return (dispatch) => {
        const book = {
            title: item.title,
        };

        return axios.post('books/create', book).then(result => {
            dispatch(_addbook(result.data));

        })

    };
};

const _editBook = (id, updates) => ({
    type: 'EDIT',
    id,
    updates
});

export const editBook = (id, updates) => {
    console.log(id,updates);
    return (dispatch) => {

        return axios.put(`books/${id}`, updates).then(() => {
            console.log (id,updates);
            dispatch(_editBook(id, updates));
        });
    }
};

const _removeBook = ({ id } = {}) => ({
    type: 'REMOVE',
    id
});

export const removeBook = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`books/${id}`).then(() => {
            dispatch(_removeBook({ id }));
        })
    }
};