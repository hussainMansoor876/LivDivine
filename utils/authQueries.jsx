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

const SOCIAL_LOGIN = gql`
mutation($email: String, $userName: String!, $authType: String!){
  socialSignUp(
    email: $email,
    userName: userName,
    authType: $authType
	  isVerified: true){
     token, message, success, user{
     id, userName, email, role, image, isVerified, isLogin,authType,title,advisorImage,
      aboutService, aboutMe
    }
  }
}
`
const UPDATE_PASSWORD = gql`
mutation($email: String, $pasword: String!){
  updatePassword(email: $email, password: $pasword){
    token, message, success,user {
       id, userName, email, role, image, isVerified, isLogin,authType,title,advisorImage,
      aboutService, aboutMe
    }
  }
}
`

export {
  SIGN_UP,
  LOGIN,
  SOCIAL_LOGIN,
  UPDATE_PASSWORD
}