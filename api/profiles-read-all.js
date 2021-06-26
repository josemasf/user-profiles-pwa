/* Import faunaDB sdk */
const faunadb = require('faunadb')
const q = faunadb.query


exports.handler = (event, context) => {
  console.log('Function `profile-read-all` invoked')
  /* configure faunaDB Client with our secret */
  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
  }) 
  return client.query(q.Paginate(q.Match(q.Ref('indexes/all_profiles'))))
    .then((response) => {
      const profileRefs = response.data
      return {
        statusCode: 200,
        body: JSON.stringify(profileRefs)
      }
      /*console.log('profile refs', profileRefs)
      console.log(`${profileRefs.length} profiles found`)
      // create new query out of profile refs. http://bit.ly/2LG3MLg
      const getAllprofileDataQuery = profileRefs.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllprofileDataQuery).then((ret) => {
        return {
          statusCode: 200,
          body: JSON.stringify(ret)
        }
      })*/
    }).catch((error) => {
      console.log('error', error)
      return {
        statusCode: 400,
        body: JSON.stringify(error)
      }
    })
}
