import { defineStore } from 'pinia'

interface Project {
  id: number;
  // Add other project properties here based on your API response
}

export const useProjectStore = defineStore('project', {
  state: () => ({
    project: null as Project | null,
    loading: false,
    error: null as string | null,
    menuPage: null as string | null,
  }),

  actions: {
    async fetchProjectById(id: number) {
      this.loading = true;
      this.error = null;
      console.log(process.env);
      try {
        const response = await fetch(`http://127.0.0.1:4000/api/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        this.project = data;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred while fetching the project';
        console.error('Error fetching project:', error);
      } finally {
        this.loading = false;
      }
    },

    setMenuPage(text: string) {
      this.menuPage = text;
    },
  },

  getters: {
    getProject: (state) => state.project,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
    getMenuPage: (state) => state.menuPage,
  },
}); 