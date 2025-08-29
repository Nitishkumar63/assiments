"use server"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"


const API_URL = process.env.NEXT_PUBLIC_API_URL as string


export async function apiRequest<T = unknown>(
  endpoint: string,
  options: Omit<AxiosRequestConfig, "url"> = {}
): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios({
      url: `${API_URL}${endpoint}`,
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      data: options.data || null,
      timeout: 10000,
      ...options,
    })

    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status, data } = error.response
        throw {
          status,
          message: (data as { message?: string })?.message || "API request failed",
          data: data || null,
        }
      } else if (error.request) {
        throw {
          status: 0,
          message: "Network error - please check your connection",
          data: null,
        }
      }
    }

    throw {
      status: 0,
      message: (error as Error).message || "Request failed",
      data: null,
    }
  }
}
