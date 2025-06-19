import { defineStore } from 'pinia';

interface ProjectFormData {
  name: string;
  developer: string;
  location: string;
  area: number | null;
  buildingDensity: string;
  projectScale: string;
  amenities: string;
  architecture: string;
  images: string[];
  price: string;
  paymentMethod: string;
}

export const useProjectFormStore = defineStore('projectForm', {
  state: () => ({
    formData: {
      name: '',
      developer: '',
      location: '',
      area: null,
      buildingDensity: '',
      projectScale: '',
      amenities: '',
      architecture: '',
      images: [],
      price: '',
      paymentMethod: ''
    } as ProjectFormData,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    setFormData(data: Partial<ProjectFormData>) {
      this.formData = { ...this.formData, ...data };
    },

    async saveProject() {
      this.loading = true;
      this.error = null;

      try {
        // Implement your API call here
        const response = await fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred while saving the project';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    resetForm() {
      this.formData = {
        name: '',
        developer: '',
        location: '',
        area: null,
        buildingDensity: '',
        projectScale: '',
        amenities: '',
        architecture: '',
        images: [],
        price: '',
        paymentMethod: ''
      };
      this.error = null;
    },
  },

  getters: {
    getFormData: (state) => state.formData,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
}); 