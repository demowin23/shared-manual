<template>
  <div class="quill-editor-wrapper">
    <client-only>
      <QuillEditor
        theme="snow"
        toolbar="full"
        v-model:content="content"
        contentType="html"
        class="custom-quill-editor"
      />
    </client-only>
    <button class="export-btn" @click="showHtml = !showHtml">
      {{ showHtml ? "Ẩn HTML" : "Xuất HTML" }}
    </button>

    <div v-if="showHtml" class="custom-quill-editor ql-container ql-snow">
      <div class="ql-editor" data-gramm="false" contenteditable="true">
        <div v-if="showHtml" class="html-output">
          <h3>HTML Output:</h3>
          <pre>{{ content }}</pre>
          <div class="html-preview" v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref, watch } from "vue";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const content = ref(props.modelValue);

// Watch for external changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== content.value) {
      content.value = newValue;
    }
  }
);

// Watch for internal changes
watch(content, (newValue) => {
  emit("update:modelValue", newValue);
});

const showHtml = ref(false);
</script>

<style scoped>
.quill-editor-wrapper {
  margin: 40px auto;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}
.custom-quill-editor {
  min-height: 220px;
  border-radius: 8px;
  background: #fafbfc;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  margin-bottom: 16px;
}
.export-btn {
  display: inline-block;
  margin: 12px 0 20px 0;
  padding: 8px 20px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
}
.export-btn:hover {
  background: #0056b3;
}
.html-output {
  background: #f6f8fa;
  border-radius: 8px;
  padding: 18px 16px;
  margin-top: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}
.html-output h3 {
  margin-top: 0;
  font-size: 17px;
  color: #333;
}
.html-output pre {
  background: #23272f;
  color: #e6e6e6;
  padding: 10px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 13px;
  margin-bottom: 12px;
}
.html-preview {
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 12px;
  background: #fff;
  min-height: 60px;
}
</style>
