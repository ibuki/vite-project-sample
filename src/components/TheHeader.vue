<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">EXAMPLE PAGE</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'home' }">
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" :to="{ name: 'page1' }">
              Page1
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
