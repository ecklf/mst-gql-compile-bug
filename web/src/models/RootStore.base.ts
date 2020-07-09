/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */
import { ObservableMap } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLStore, configureStoreMixin, QueryOptions, withTypedRefs } from "mst-gql"



/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {

}


/**
* Enums for the names of base graphql actions
*/
export enum RootStoreBaseQueries {
queryHelloWorld="queryHelloWorld"
}
export enum RootStoreBaseMutations {
mutateTestMutation="mutateTestMutation"
}

/**
* Store, managing, among others, all the objects received through graphQL
*/
export const RootStoreBase = withTypedRefs<Refs>()(MSTGQLStore
  .named("RootStore")
  .extend(configureStoreMixin([], [], "js"))
  .props({

  })
  .actions(self => ({
    queryHelloWorld(variables?: {  }, resultSelector: string | ((qb: StringModelSelector) => StringModelSelector) = stringModelPrimitives.toString(), options: QueryOptions = {}) {
      return self.query<{ helloWorld: StringModelType}>(`query helloWorld { helloWorld {
        ${typeof resultSelector === "function" ? resultSelector(new StringModelSelector()).toString() : resultSelector}
      } }`, variables, options)
    },
    mutateTestMutation(variables?: {  }, resultSelector: string | ((qb: BooleanModelSelector) => BooleanModelSelector) = booleanModelPrimitives.toString(), optimisticUpdate?: () => void) {
      return self.mutate<{ testMutation: BooleanModelType}>(`mutation testMutation { testMutation {
        ${typeof resultSelector === "function" ? resultSelector(new BooleanModelSelector()).toString() : resultSelector}
      } }`, variables, optimisticUpdate)
    },
  })))
