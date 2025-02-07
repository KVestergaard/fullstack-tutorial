const { gql } = require('apollo-server');

const typeDefs = gql`
    type Launch {
        id: ID!
        site: String
        mission: Mission
        rocket: Rocket
        isBooked: Boolean!
    }

    type Rocket {
        id: ID!
        name: String
        type: String
    }

    type User {
        id: ID!
        email: String!
        trips: [Launch]
    }

    type Mission {
        name: String
        missionPatch(size: PatchSize): String
    }

    type TripsUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }

    enum PatchSize {
        SMALL
        LARGE
    }


    type Query {
        launches(
            pageSize: Int
            after: String
        ): LaunchConnection!
        launch(id: ID!): Launch
        me: User
    }


    type LaunchConnection {
        cursor: String!
        hasMore: Boolean!
        launches: [Launch]!
    }

    type Mutation {
        bootTrips(launchIds: [ID]!): TripsUpdateResponse!
        cancelTrip(launchId: ID!): TripsUpdateResponse!
        login(email: String): String # login token
    }
`;

module.exports = typeDefs;