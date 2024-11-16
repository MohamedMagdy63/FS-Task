/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './user.schema';

@Resolver(() => User)
export class UserResolver {
  private user: User = {
    id: '1',
    firstName: 'Zaria',
    fatherName: 'Edward',
    grandfatherName: 'Ernest',
    familyName: 'Willie',
    nationalId: {
      idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
      expiryDate: '2024-07-24T22:45:29.864Z'
    },
    localizedName: {
      firstName: 'صفوان',
      fatherName: 'حمدان',
      grandfatherName: 'هشام',
      familyName: 'عباس'
    },
    nationalities: [
      { country: { id: '1016', name: 'Bolivia' } },
      { country: { id: '1117', name: 'Latvia' } },
      { country: { id: '1225', name: 'Virgin Islands, U.S.' } }
    ]
  };

  @Query(() => User)
  getUser(): User {
    return this.user;
  }

  @Mutation(() => User)
  updateUser(
    @Args('id') id: string,
    @Args('firstName') firstName: string,
    @Args('fatherName') fatherName: string,
    @Args('grandfatherName') grandfatherName: string,
    @Args('familyName') familyName: string
  ): User {
    if (this.user.id === id) {
      this.user.firstName = firstName;
      this.user.fatherName = fatherName;
      this.user.grandfatherName = grandfatherName;
      this.user.familyName = familyName;
    }
    return this.user;
  }
}
