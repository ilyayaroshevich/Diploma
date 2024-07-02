import * as superagent from 'superagent'

export async function getRequest(url: string): Promise<any> {
  try {
    const response = await superagent.get(url)
    return response
  } catch (error: any) {
    return error
  }
}

export async function postRequest(
  url: string,
  sentObject: { title?: any; body?: any; userId?: any },
): Promise<any> {
  try {
    const response: any = await superagent
      .post(url)
      .set('Content-Type', 'application/json')
      .send(sentObject)
    return response
  } catch (error: any) {
    return error
  }
}

export async function putRequest(
  url: string,
  postForUpdating: { id?: any; title?: any; body?: any; userId?: any },
): Promise<any> {
  try {
    const response: any = await superagent.put(url).send(postForUpdating)
    return response
  } catch (error: any) {
    return error
  }
}

export async function patchRequest(
  url: string,
  postForPatching: { id?: any; title?: any; body?: any; userId?: any },
): Promise<any> {
  try {
    const response: any = await superagent.patch(url).send(postForPatching)
    return response
  } catch (error: any) {
    return error
  }
}

export async function deleteRequest(url: string): Promise<any> {
  try {
    const response: any = await superagent.delete(url)
    return response
  } catch (error: any) {
    return error
  }
}
