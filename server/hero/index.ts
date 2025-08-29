"use server"
import { apiRequest } from "@/config/axios-config"

export async function HeroApi() {
  try {
    const data = await apiRequest("/api/hero")
    // Return JSON data
    return data
  } catch (error) {
    console.error("Hero:", error)
    throw error
  }
}
