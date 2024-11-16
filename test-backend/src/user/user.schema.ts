/* eslint-disable prettier/prettier */
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
class NationalId {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: string;
}

@ObjectType()
class LocalizedName {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
class Country {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;
}

@ObjectType()
class Nationality {
  @Field(() => Country)
  country: Country;
}

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => [Nationality])
  nationalities: Nationality[];
}

// @ObjectType()
// export class Query {
//   @Field(() => User)
//   getUser(): User {
//     // Return user data here
//   }
// }

