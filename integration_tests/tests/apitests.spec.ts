import { describe, expect, test } from '@jest/globals'
import {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
} from '../consts/methods_functions'
import { bodyPost, bodyComments, randomPost } from '../consts/consts'

describe('GET TESTS', () => {
  describe('GetApiTests. POSITIVE', () => {
    test('./posts', async () => {
      const response = await getRequest('https://jsonplaceholder.typicode.com/posts')
      expect(response.status).toBe(200)
    })
    test('GET./posts/{post_number}', async () => {
      const response = await getRequest(`https://jsonplaceholder.typicode.com/posts/${randomPost}`)
      expect(response).toMatchObject({
        status: 200,
        body: bodyPost,
      })
    })
    test('./posts/{post_id}/comments', async () => {
      const response = await getRequest(
        `https://jsonplaceholder.typicode.com/posts/${randomPost}/comments`,
      )
      expect(response.status).toBe(200)
      expect(response.body).toHaveLength(5)
    })
    test('./comments?postId=1', async () => {
      const response = await getRequest(
        `https://jsonplaceholder.typicode.com/comments?postId=${randomPost}`,
      )
      expect(response.status).toBe(200)
      expect(response.body[0]).toMatchObject(bodyComments)
    })
  })
  describe('GetApiTests. NEGATIVE', () => {
    test('./posts/{post_number}.Non-existent post', async () => {
      const response = await getRequest('https://jsonplaceholder.typicode.com/posts/1000')
      expect(response.status).toBe(404)
      expect(response.body).toBeUndefined()
    })
  })
})
