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

export const fullValidBodyToPost = {
  title: 'TestTitle',
  body: 'TestBody',
  userId: 555,
}

export const ValidBodyWithoutTitle = {
  body: 'R',
  userId: 61,
}

export const ValidBodyWithoutBody = {
  title: 'T',
  userId: 10000,
}

export const ValidBodyWithoutUserId = {
  title: 'TestTestTestTestTestTestTestTestTitle',
  body: 'TestTestTestTestTestTestTestTestBODY',
}

export const fullInvalidBodyToPost = {
  title: true,
  body: null,
  userId: undefined,
}

export const fullValidBodyToPut = {
  id: 55,
  title: 'q',
  body: 'w',
  userId: 1,
}

export const fullValidBodyToPutBigData = {
  id: 100,
  title: 'TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST',
  body: 'TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST',
  userId: 100000,
}

export const differentTypesForBodyToPut = {
  id: 1,
  title: null,
  body: null,
  userId: null,
}

export const bodytWithIdtoPatch = {
  id: 1,
}

export const bodytWithUserIdtoPatch = {
  userId: 1,
}

export const bodytWithTitletoPatch = {
  title: 'test',
}

export const bodytWithBodytoPatch = {
  body: 'test',
}

export const emptyBodytoPatch = {}
export const randomPost = _.random(1, 100)
