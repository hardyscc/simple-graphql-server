# The most simple GraphQL Server for Testing

## Quick start

- npm install
- npm start

Open browser with http://localhost:3000/graphiql for Testing

Or use CURL command line tool
```
curl -X POST \
-H "Content-Type: application/json" \
-d '{"query": "{ viewer { id name } }"}' \
http://localhost:3000/graphql
```
