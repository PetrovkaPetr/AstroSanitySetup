import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '65t7hsvt',
  dataset: 'production',    
  apiVersion: '2026-01-01',    
  useCdn: true,               
})