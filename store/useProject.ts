import { defineStore } from 'pinia'
import { useNuxtApp } from 'nuxt/app';
interface Project {
  id: number;
}

export const useProjectStore = defineStore('project', {
  state: () => ({
    project: null as Project | null,
    projects: [] as Project[],
    loading: false,
    error: null as string | null,
    menuPage: null as string | null,
    projectId: null as number | null,
    areaId: null as number | null,
    totalItems: 0,
  }),

  actions: {
    async fetchProjectById(id: number) {
      this.loading = true;
      this.error = null;
      const { $env } = useNuxtApp() as any;
      const urlBe = $env.URL_BE;
      try {
        const response = await fetch(`${urlBe}/api/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
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

    async fetchProjects(page = 1, pageSize = 10) {
      this.loading = true;
      this.error = null;
      const { $env } = useNuxtApp() as any;
      const urlBe = $env.URL_BE;
      try {
        const response = await fetch(`${urlBe}/api/projects?page=${page}&pageSize=${pageSize}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.projects = data.data;
        this.totalItems = data.pagination.total;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred while fetching the projects';
        console.error('Error fetching projects:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProjectsByArea(areaId) {
      this.loading = true;
      this.error = null;
      const { $env } = useNuxtApp() as any;
      const urlBe = $env.URL_BE;
      try {
        const response = await fetch(`${urlBe}/api/projects?areas=${areaId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.projects = data;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'An error occurred while fetching the projects by area';
        console.error('Error fetching projects by area:', error);
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
  persist: true,
}); 