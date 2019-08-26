
export const typeDefs = /* GraphQL */ `type AggregateHero {
  count: Int!
}

type AggregateStory {
  count: Int!
}

type AggregateTopic {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum BindingType {
  HERO
  STORY
  TOPIC
}

scalar DateTime

type Hero {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type HeroConnection {
  pageInfo: PageInfo!
  edges: [HeroEdge]!
  aggregate: AggregateHero!
}

input HeroCreateInput {
  id: ID
  name: String!
}

type HeroEdge {
  node: Hero!
  cursor: String!
}

enum HeroOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HeroPreviousValues {
  id: ID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type HeroSubscriptionPayload {
  mutation: MutationType!
  node: Hero
  updatedFields: [String!]
  previousValues: HeroPreviousValues
}

input HeroSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HeroWhereInput
  AND: [HeroSubscriptionWhereInput!]
  OR: [HeroSubscriptionWhereInput!]
  NOT: [HeroSubscriptionWhereInput!]
}

input HeroUpdateInput {
  name: String
}

input HeroUpdateManyMutationInput {
  name: String
}

input HeroWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [HeroWhereInput!]
  OR: [HeroWhereInput!]
  NOT: [HeroWhereInput!]
}

input HeroWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createHero(data: HeroCreateInput!): Hero!
  updateHero(data: HeroUpdateInput!, where: HeroWhereUniqueInput!): Hero
  updateManyHeroes(data: HeroUpdateManyMutationInput!, where: HeroWhereInput): BatchPayload!
  upsertHero(where: HeroWhereUniqueInput!, create: HeroCreateInput!, update: HeroUpdateInput!): Hero!
  deleteHero(where: HeroWhereUniqueInput!): Hero
  deleteManyHeroes(where: HeroWhereInput): BatchPayload!
  createStory(data: StoryCreateInput!): Story!
  updateStory(data: StoryUpdateInput!, where: StoryWhereUniqueInput!): Story
  updateManyStories(data: StoryUpdateManyMutationInput!, where: StoryWhereInput): BatchPayload!
  upsertStory(where: StoryWhereUniqueInput!, create: StoryCreateInput!, update: StoryUpdateInput!): Story!
  deleteStory(where: StoryWhereUniqueInput!): Story
  deleteManyStories(where: StoryWhereInput): BatchPayload!
  createTopic(data: TopicCreateInput!): Topic!
  updateTopic(data: TopicUpdateInput!, where: TopicWhereUniqueInput!): Topic
  updateManyTopics(data: TopicUpdateManyMutationInput!, where: TopicWhereInput): BatchPayload!
  upsertTopic(where: TopicWhereUniqueInput!, create: TopicCreateInput!, update: TopicUpdateInput!): Topic!
  deleteTopic(where: TopicWhereUniqueInput!): Topic
  deleteManyTopics(where: TopicWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  hero(where: HeroWhereUniqueInput!): Hero
  heroes(where: HeroWhereInput, orderBy: HeroOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Hero]!
  heroesConnection(where: HeroWhereInput, orderBy: HeroOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HeroConnection!
  story(where: StoryWhereUniqueInput!): Story
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story]!
  storiesConnection(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoryConnection!
  topic(where: TopicWhereUniqueInput!): Topic
  topics(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Topic]!
  topicsConnection(where: TopicWhereInput, orderBy: TopicOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TopicConnection!
  node(id: ID!): Node
}

type Story {
  id: ID!
  title: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StoryConnection {
  pageInfo: PageInfo!
  edges: [StoryEdge]!
  aggregate: AggregateStory!
}

input StoryCreateInput {
  id: ID
  title: String
}

type StoryEdge {
  node: Story!
  cursor: String!
}

enum StoryOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StoryPreviousValues {
  id: ID!
  title: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type StorySubscriptionPayload {
  mutation: MutationType!
  node: Story
  updatedFields: [String!]
  previousValues: StoryPreviousValues
}

input StorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoryWhereInput
  AND: [StorySubscriptionWhereInput!]
  OR: [StorySubscriptionWhereInput!]
  NOT: [StorySubscriptionWhereInput!]
}

input StoryUpdateInput {
  title: String
}

input StoryUpdateManyMutationInput {
  title: String
}

input StoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [StoryWhereInput!]
  OR: [StoryWhereInput!]
  NOT: [StoryWhereInput!]
}

input StoryWhereUniqueInput {
  id: ID
}

type Subscription {
  hero(where: HeroSubscriptionWhereInput): HeroSubscriptionPayload
  story(where: StorySubscriptionWhereInput): StorySubscriptionPayload
  topic(where: TopicSubscriptionWhereInput): TopicSubscriptionPayload
}

type Topic {
  id: ID!
  title: String!
  sourceType: BindingType!
  source: Int!
  targetType: BindingType!
  target: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TopicConnection {
  pageInfo: PageInfo!
  edges: [TopicEdge]!
  aggregate: AggregateTopic!
}

input TopicCreateInput {
  id: ID
  title: String!
  sourceType: BindingType!
  source: Int!
  targetType: BindingType!
  target: Int!
}

type TopicEdge {
  node: Topic!
  cursor: String!
}

enum TopicOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  sourceType_ASC
  sourceType_DESC
  source_ASC
  source_DESC
  targetType_ASC
  targetType_DESC
  target_ASC
  target_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TopicPreviousValues {
  id: ID!
  title: String!
  sourceType: BindingType!
  source: Int!
  targetType: BindingType!
  target: Int!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TopicSubscriptionPayload {
  mutation: MutationType!
  node: Topic
  updatedFields: [String!]
  previousValues: TopicPreviousValues
}

input TopicSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TopicWhereInput
  AND: [TopicSubscriptionWhereInput!]
  OR: [TopicSubscriptionWhereInput!]
  NOT: [TopicSubscriptionWhereInput!]
}

input TopicUpdateInput {
  title: String
  sourceType: BindingType
  source: Int
  targetType: BindingType
  target: Int
}

input TopicUpdateManyMutationInput {
  title: String
  sourceType: BindingType
  source: Int
  targetType: BindingType
  target: Int
}

input TopicWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  sourceType: BindingType
  sourceType_not: BindingType
  sourceType_in: [BindingType!]
  sourceType_not_in: [BindingType!]
  source: Int
  source_not: Int
  source_in: [Int!]
  source_not_in: [Int!]
  source_lt: Int
  source_lte: Int
  source_gt: Int
  source_gte: Int
  targetType: BindingType
  targetType_not: BindingType
  targetType_in: [BindingType!]
  targetType_not_in: [BindingType!]
  target: Int
  target_not: Int
  target_in: [Int!]
  target_not_in: [Int!]
  target_lt: Int
  target_lte: Int
  target_gt: Int
  target_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TopicWhereInput!]
  OR: [TopicWhereInput!]
  NOT: [TopicWhereInput!]
}

input TopicWhereUniqueInput {
  id: ID
}
`
