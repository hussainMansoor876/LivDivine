import React from 'react';
import gql from 'graphql-tag';

const SIGN_UP = gql`
        mutation($email: String!, $userName: String!, $password: String!){
            signUp(email: $email, userName: $userName, password: $password, isVerified: true) {
                token, message, success, user{
                  id, userName, email, role, image, isVerified, isLogin, authType, title, image,
                  aboutService, aboutMe, isApproved
                   }
            }
          }
        `;

const LOGIN = gql`
mutation($email: String!, $password: String!){
    signIn(login: $email, password: $password){
      token, message, success,user {
         id, userName, email, role, image, isVerified, isLogin, authType, title,
        aboutService, aboutMe, isAdvisor, isApproved
      }
    }
  }
`

const SOCIAL_LOGIN = gql`
mutation($email: String, $name: String!, $authType: String!, $id: String!, $image: String){
  socialSignUp(
    email: $email,
    userName: $name,
    authType: $authType,
    authId: $id,
    image: $image
    ){
     token, message, success, user{
     id, userName, email, role, image, isVerified, isLogin, authType, title,
      aboutService, aboutMe
    }
  }
}
`
const UPDATE_PASSWORD = gql`
mutation($email: String!, $pasword: String!){
  updatePassword(email: $email, password: $pasword){
    token, message, success,user {
       id, userName, email, role, image, isVerified, isLogin, authType, title,
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