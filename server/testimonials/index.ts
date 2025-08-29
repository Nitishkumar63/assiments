"use server"
import { apiRequest } from "@/config/axios-config"

export async function Testimonials() {
  try {
    const data = await apiRequest("/api/testimonials")
    // Return JSON data
    return data
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    throw error
  }
}
