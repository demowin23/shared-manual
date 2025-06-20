import { useNuxtApp } from 'nuxt/app';
import { ref } from 'vue'

export function useProject() {
  const { $env } = useNuxtApp() as any;
  const urlBe = $env.URL_BE;
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const createProject = async (
    name: string,
    areas: number,
    detail: string,
    images: File[]
  ) => {
    try {
      isLoading.value = true
      error.value = null

      const formData = new FormData()
      formData.append('name', name)
      formData.append('areas', areas.toString())
      formData.append('detail', detail)
      
      // Append multiple images
      images.forEach(image => {
        formData.append('images', image)
      })

      const response = await fetch(`${urlBe}/api/projects`, {
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
    urlBe,
    isLoading,
    error,
    createProject
  }
} 