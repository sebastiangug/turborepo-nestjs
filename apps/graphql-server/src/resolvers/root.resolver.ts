import { Query, Resolver } from "@nestjs/graphql";
import { HealthResponse } from "@myapp/entities";

@Resolver()
export class RootResolver {
  @Query((returns) => HealthResponse)
  public getHealth(): HealthResponse {
    return { status: "HEALTHY" };
  }
}
