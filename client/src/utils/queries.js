import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      games{
        _id
        title
      }
      consoles {
        _id
        name
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
        _id
        username
        email
        games{
          _id
          title
        }
        consoles {
          _id
          name
        }
    }
  }
`;

export const QUERY_GAME = gql`
query game($Id: ID!){
    addGame(gameId: $gameId){
        _id
        title
        releaseYear
        link
        console
        description
    }
}
`

export const QUERY_CONSOLE = gql`
query console($consoleId: ID!){
    addConsole(consoleId: $consoleId){
        _id
        name
        releaseYear
        link
        developer
    }
}
`