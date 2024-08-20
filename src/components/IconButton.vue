import IconButton from './components/IconButton.vue';

<template>
<div><font-awesome-icon :icon="['fas', 'person']" />
    <IconButton iconName="coffee" label="Take a Break" />
  </div>
  <button class="icon-button">
    <font-awesome-icon :icon="['fas', 'person']" />
    <span>{{ label }}</span>
  </button>
  <button class="icon-button">
    <font-awesome-icon :icon="['fas', 'address-card']" />
    <span>{{ label }}</span>
  </button>
  <button class="icon-button">
<font-awesome-icon :icon="['fas', 'paw']" />
    <span>{{ label }}</span>
  </button>
  <button class="icon-button">
<font-awesome-icon :icon="['fas', 'house']" />
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  components: {
    IconButton,
  },
};
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.icon-button {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.icon-button:hover {
  background-color: #45a049;
}

.icon-button span {
  margin-left: 10px;
}
</style>
