import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation AddUser($name: String!, $email: String!, $password: String!) {
        addUser(name: $name, email: $email, password: $password) {
            _id
            username
            email
        }
    }
`;

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation SaveBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
        saveBook(title: $title, author: $author, published: $published, genres: $genres) {
            _id
            title
            image
            link
            description
            author
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation RemoveBook($id: ID!) {
        removeBook(id: $id) {
            _id
            title
            image
            link
            description
            author
        }
    }
`;