import { ref } from 'vue'

const API_URL = 'http://127.0.0.1:4000/api'

export const useProject = () => {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const createProject = async (
    name: string,
    locationId: number,
    detail: string,
    images: File[]
  ) => {
    try {
      isLoading.value = true
      error.value = null

      const formData = new FormData()
      formData.append('name', name)
      formData.append('locationId', locationId.toString())
      formData.append('detail', detail)
      
      // Append multiple images
      images.forEach(image => {
        formData.append('images', image)
      })

      const response = await fetch(`${API_URL}/projects`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to create project')
      }

      const data = await response.json()
      return data
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Something went wrong'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    createProject
  }
} 