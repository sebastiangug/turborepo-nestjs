import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType({ description: "status response" })
export class HealthResponse {
  @Field()
  public status: "HEALTHY";
}
