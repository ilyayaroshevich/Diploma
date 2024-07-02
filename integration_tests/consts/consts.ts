import * as _ from 'lodash'

export const bodyPost = {
  userId: expect.any(Number),
  id: expect.any(Number),
  title: expect.any(String),
  body: expect.any(String),
}

export const bodyComments = {
  postId: expect.any(Number),
  id: expect.any(Number),
  name: expect.any(String),
  email: expect.any(String),
  body: expect.any(String),
}

export const randomPost = _.random(1, 100)
