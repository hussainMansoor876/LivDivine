import React from 'react';
import gql from 'graphql-tag';

const SIGN_UP = gql`
        mutation($email: String!, $userName: String!, $password: String!){
            signUp(email: $email, userName: $userName, password: $password, isVerified: true) {
                token, message, success, user{
                    id, userName, email, role, image, isVerified, isLogin,authType,title,advisorImage,
                     aboutService, aboutMe, categories
                   }
            }
          }
        `;

const LOGIN = gql`
mutation($email: String!, $password: String!){
    signIn(login: $email, password: $password){
      token, message, success,user {
         id, userName, email, role, image, isVerified, isLogin,authType,title,advisorImage,
        aboutService, aboutMe, messages{
          text
        }
      }
    }
  }
`

export {
    SIGN_UP,
    LOGIN
}