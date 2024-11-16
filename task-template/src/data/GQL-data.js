import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query GetUser {
    getUser {
      id
      firstName
      fatherName
      grandfatherName
      familyName
      nationalId {
        idNumber
        expiryDate
      }
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalities {
        country {
          id
          name
        }
      }
    }
  }
`;


// Define the GraphQL mutation to update user data
export const UPDATE_USER = gql`
  mutation UpdateUser(
    $id: String!,
    $firstName: String!,
    $fatherName: String!,
    $grandfatherName: String!,
    $familyName: String!
  ) {
    updateUser(
      id: $id,
      firstName: $firstName,
      fatherName: $fatherName,
      grandfatherName: $grandfatherName,
      familyName: $familyName
    ) {
      id
      firstName
      fatherName
      grandfatherName
      familyName
    }
  }
`;
