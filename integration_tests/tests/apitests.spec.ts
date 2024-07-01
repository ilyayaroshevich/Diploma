import { describe, expect, test } from '@jest/globals'
import {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
} from '../consts/methods_functions'

describe('GET TESTS', () => {
  describe('GetApiTests. POSITIVE', () => {
    test('GET./posts', async () => {
      const response = await getRequest('https://jsonplaceholder.typicode.com/posts')
      expect(response.status).toBe(200)
    })
    test('GET./posts/{post_number}', async () => {
      const response = await getRequest(`https://jsonplaceholder.typicode.com/posts/1`)
      expect(response.status).toBe(200)
      // expect(response.body.data).toEqual(expectedDataObject)
      // expect(response.body.support).toEqual(expectedSupportObject)
    })
    test('GET. /posts/{post_id}/comments', async () => {
      const response = await getRequest(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      expect(response.status).toBe(200)
    })
    test('GET. /comments?postId=1', async () => {
      const response = await getRequest(`https://jsonplaceholder.typicode.com/comments?postId=1`)
      expect(response.status).toBe(200)
    })
  })
  describe('GetApiTests. NEGATIVE', () => {
    test('GET./posts/{post_number}.Non-existent post', async () => {
      const response = await getRequest('https://jsonplaceholder.typicode.com/posts')
      expect(response.status).toBe(200)
    })
  })
})
