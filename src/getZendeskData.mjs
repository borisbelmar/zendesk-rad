import axios from 'axios'

const getZendeskData = (subdomain, auth) => entity => page => {
  return axios.get(`https://${subdomain}.zendesk.com/api/v2/${entity}?page=${page}`, {
    headers: {
      Authorization: auth,
      'Content-Type': 'application/json'
    }
  })
}

export default getZendeskData
