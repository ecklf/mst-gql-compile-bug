import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class ExampleResolver {
  @Query(() => String)
  async helloWorld() {
    return "hello world!";
  }

  @Mutation(() => Boolean)
  async testMutation() {
    // Do something
    return true;
  }
}
