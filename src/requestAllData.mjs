import getZendeskData from './getZendeskData.mjs'

async function requestAllData (subdomain, entity, auth) {
  const getEntityZendeskData = getZendeskData(subdomain, auth)(entity)
  const res = await getEntityZendeskData(1)
  console.log('RateLimitRemaining:', res.headers['x-rate-limit-remaining'])
  const resData = res.data
  const totalPendingPages = Math.ceil(resData.count / resData[entity].length) - 1
  let data = resData[entity]
  let totalRequested = 1
  const allPageRequests = Array(totalPendingPages)
    .fill(null)
    .map(async (_, idx) => {
        const page = idx + 2
        const pageRes = await getEntityZendeskData(page)
        const pageResData = pageRes.data
        totalRequested += 1
        data = [...data, ...pageResData[entity]]
      }
    )
  await Promise.all(allPageRequests)
  console.log('Requested pages:', totalRequested, '/' , totalPendingPages + 1)
  return data
}

export default requestAllData
