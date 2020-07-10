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
        misisonPatch(size: PatchSize): String
    }

    type TripsUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
    }

    enum PatchSize {
        SMALL
        MEDIUM
        LARGE
    }


    type Query {
        launches: [Launch]!
        launch(id: ID!): Launch
        me: User
    }


    type Mutation {
        bootTrips(launchIds: [ID]!): TripsUpdateResponse!
        cancelTrip(launchId: ID!): TripsUpdateResponse!
        login(email: String): String # login token
    }
`;

module.exports = typeDefs;