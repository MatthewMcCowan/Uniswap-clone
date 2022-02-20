import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'uscwt6jy',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skUulaLI1RuU3V0jt9F4ISfSeVXDOQzikHSbMs2uwrKjHXkAHwu1W3TiLSKSSCM0rOwKhvp76Te2lZgVL6rJGFeXMNDA0iOvr4rOa6KIrEzNU8J1bUsBBv1lne6MQAB7o8YUaKTWLwTAnEOuwdOZgRLSEyfMqy2ya06MrQMX9A1pmDkj1OUh',
  useCdn: false,
})
