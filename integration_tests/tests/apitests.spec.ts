import { describe, expect, test } from '@jest/globals';
import {
  getRequest,
  postRequest,
  putRequest,
  patchRequest,
  deleteRequest,
} from '../consts/methods_functions';
import {
  bodyPost,
  bodyComments,
  fullValidBodyToPost,
  ValidBodyWithoutTitle,
  ValidBodyWithoutBody,
  ValidBodyWithoutUserId,
  fullInvalidBodyToPost,
  fullValidBodyToPut,
  fullValidBodyToPutBigData,
  differentTypesForBodyToPut,
  bodytWithIdtoPatch,
  bodytWithUserIdtoPatch,
  bodytWithTitletoPatch,
  bodytWithBodytoPatch,
  emptyBodytoPatch,
  randomPost,
} from '../consts/consts';

describe('GET TESTS', () => {
  describe('GetApiTests. POSITIVE', () => {
    test('./posts', async () => {
      const response = await getRequest('https://jsonplaceholder.typicode.com/posts');
      expect(response.status).toBe(200);
    });
    test('GET./posts/{post_number}', async () => {
      const response = await getRequest(`https://jsonplaceholder.typicode.com/posts/${randomPost}`);
      expect(response).toMatchObject({
        status: 200,
        body: bodyPost,
      });
    });
    test('./posts/{post_id}/comments', async () => {
      const response = await getRequest(
        `https://jsonplaceholder.typicode.com/posts/${randomPost}/comments`,
      );
      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(5);
    });
    test('./comments?postId=1', async () => {
      const response = await getRequest(
        `https://jsonplaceholder.typicode.com/comments?postId=${randomPost}`,
      );
      expect(response.status).toBe(200);
      expect(response.body[0]).toMatchObject(bodyComments);
    });
  });
  describe('GetApiTests. NEGATIVE', () => {
    test('./posts/{post_number}.Non-existent post', async () => {
      const response = await getRequest('https://jsonplaceholder.typicode.com/posts/1000');
      expect(response.status).toBe(404);
      expect(response.body).toBeUndefined();
    });
  });
});

describe('POST TESTS', () => {
  describe('PostApiTests. POSITIVE', () => {
    test('Creating post full valid. /posts', async () => {
      const response = await postRequest(
        `https://jsonplaceholder.typicode.com/posts`,
        fullValidBodyToPost,
      );
      expect(response.status).toBe(201);
      expect(response.body.title).toEqual(fullValidBodyToPost.title);
      expect(response.body.body).toEqual(fullValidBodyToPost.body);
      expect(response.body.userId).toEqual(fullValidBodyToPost.userId);
    });
    test('Creating without title. /posts', async () => {
      const response = await postRequest(
        `https://jsonplaceholder.typicode.com/posts`,
        ValidBodyWithoutTitle,
      );
      expect(response.status).toBe(201);
      expect(response.body.body).toEqual(ValidBodyWithoutTitle.body);
      expect(response.body.userId).toEqual(ValidBodyWithoutTitle.userId);
    });
    test('Creating without body. /posts', async () => {
      const response = await postRequest(
        `https://jsonplaceholder.typicode.com/posts`,
        ValidBodyWithoutBody,
      );
      expect(response.status).toBe(201);
      expect(response.body.title).toEqual(ValidBodyWithoutBody.title);
      expect(response.body.userId).toEqual(ValidBodyWithoutBody.userId);
    });
    test('Creating without UserId. /posts', async () => {
      const response = await postRequest(
        `https://jsonplaceholder.typicode.com/posts`,
        ValidBodyWithoutUserId,
      );
      expect(response.status).toBe(201);
      expect(response.body.body).toEqual(ValidBodyWithoutUserId.body);
      expect(response.body.title).toEqual(ValidBodyWithoutUserId.title);
      expect(typeof response.body.body).toBe('string');
      expect(typeof response.body.title).toBe('string');
    });
    describe('PostApiTests. NEGATIVE', () => {
      test('Creating post with incorrect types. /posts', async () => {
        const response = await postRequest(
          `https://jsonplaceholder.typicode.com/posts`,
          fullInvalidBodyToPost,
        );
        expect(response.status).toBe(201);
      });
    });
  });
});

describe('PUT TESTS', () => {
  describe('PutApiTests. POSITIVE', () => {
    test('Min boundery in values', async () => {
      const response = await putRequest(
        `https://jsonplaceholder.typicode.com/posts/55`,
        fullValidBodyToPut,
      );
      expect(response.status).toBe(200);
      expect(response.body.id).toEqual(fullValidBodyToPut.id);
      expect(response.body.userId).toEqual(fullValidBodyToPut.userId);
      expect(response.body.body).toEqual(fullValidBodyToPut.body);
      expect(response.body.title).toEqual(fullValidBodyToPut.title);
    });
    test('Big data in values', async () => {
      const response = await putRequest(
        `https://jsonplaceholder.typicode.com/posts/100`,
        fullValidBodyToPutBigData,
      );
      expect(response.status).toBe(200);
      expect(response.body.id).toEqual(fullValidBodyToPutBigData.id);
      expect(response.body.userId).toEqual(fullValidBodyToPutBigData.userId);
      expect(response.body.body).toEqual(fullValidBodyToPutBigData.body);
      expect(response.body.title).toEqual(fullValidBodyToPutBigData.title);
    });
    test('Null in values', async () => {
      const response = await putRequest(
        `https://jsonplaceholder.typicode.com/posts/1`,
        differentTypesForBodyToPut,
      );
      expect(response.status).toBe(200);
      expect(response.body.id).toEqual(differentTypesForBodyToPut.id);
      expect(response.body.userId).toBeNull();
      expect(response.body.body).toBeNull();
      expect(response.body.title).toBeNull();
    });
  });
  describe('PutApiTests. NEGATIVE', () => {
    test('Non-existed post', async () => {
      const response = await putRequest(
        `https://jsonplaceholder.typicode.com/posts/101`,
        fullValidBodyToPut,
      );
      expect(response.status).toBe(500);
    });
    test('Without posts', async () => {
      const response = await putRequest(
        `https://jsonplaceholder.typicode.com/posts/`,
        fullValidBodyToPut,
      );
      expect(response.status).toBe(404);
    });
  });
});

describe('PATCH TESTS', () => {
  describe('PatchApiTests. POSITIVE', () => {
    test('Only id', async () => {
      const response = await patchRequest(
        `https://jsonplaceholder.typicode.com/posts/${randomPost}`,
        bodytWithIdtoPatch,
      );
      expect(response.status).toBe(200);
      expect(response.body.id).toEqual(bodytWithIdtoPatch.id);
    });
    test('Only userId', async () => {
      const response = await patchRequest(
        `https://jsonplaceholder.typicode.com/posts/${randomPost}`,
        bodytWithUserIdtoPatch,
      );
      expect(response.status).toBe(200);
      expect(response.body.userId).toEqual(bodytWithUserIdtoPatch.userId);
    });
    test('Only title', async () => {
      const response = await patchRequest(
        `https://jsonplaceholder.typicode.com/posts/${randomPost}`,
        bodytWithTitletoPatch,
      );
      expect(response.status).toBe(200);
      expect(response.body.title).toEqual(bodytWithTitletoPatch.title);
    });
    test('Only body', async () => {
      const response = await patchRequest(
        `https://jsonplaceholder.typicode.com/posts/55`,
        bodytWithBodytoPatch,
      );
      expect(response.status).toBe(200);
      expect(response.body.body).toEqual(bodytWithBodytoPatch.body);
    });
    test('Non-existed post', async () => {
      const response = await patchRequest(
        `https://jsonplaceholder.typicode.com/posts/10000`,
        emptyBodytoPatch,
      );
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.title).toBeUndefined();
    });
    test('Text in request', async () => {
      const response = await patchRequest(
        `https://jsonplaceholder.typicode.com/posts/test`,
        emptyBodytoPatch,
      );
      expect(response.status).toBe(200);
      expect(response.body).toBeDefined();
      expect(response.title).toBeUndefined();
    });
  });
});

describe('DELETE TESTS', () => {
  test('Delete existed post', async () => {
    const response = await deleteRequest(`https://reqres.in/api/users/${randomPost}`);
    expect(response.status).toBe(204);
  });
  test('Incorrect request', async () => {
    const response = await deleteRequest(`https://reqres.in/apsi/users/100`);
    expect(response.status).toBe(404);
  });
});
