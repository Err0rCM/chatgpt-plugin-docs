<template>
    <div>
      <h1>Release Log</h1>
      <ul>
        <li v-for="release in releases" :key="release.id">
          <h2>{{ release.name }}</h2>
          <p>{{ release.body }}</p>
          <p>Published at: {{ release.published_at }}</p>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
data() {
    return {
    releases: []
    };
},
async created() {
    const response = await fetch(
    "https://api.github.com/repos/:owner/:repo/releases"
    );
    this.releases = await response.json();
},
};
</script>
  