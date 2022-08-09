import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType({ description: 'status response' })
export class HealthResponse {
  @Field()
  public status: 'HEALTHY';
}

@Resolver()
export class RootResolver {
  @Query((returns) => HealthResponse)
  public getHealth(): HealthResponse {
    return { status: 'HEALTHY' };
  }
}
