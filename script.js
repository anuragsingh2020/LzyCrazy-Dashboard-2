
async function fetchDashboardData() {
  try {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    const users = await usersResponse.json();
    const posts = await postsResponse.json();

    document.getElementById('totalUsers').innerText = users.length;
    document.getElementById('realtimeUsers').innerText = Math.floor(Math.random() * users.length);

    document.getElementById('totalUserAds').innerText = posts.length;
    document.getElementById('businessProfile').innerText = 5;
    document.getElementById('bannerAds').innerText = 3;
    document.getElementById('videoAds').innerText = 1;
    document.getElementById('homeAds').innerText = 2;

  } catch (error) {
    console.error('Error loading dashboard data:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchDashboardData();

  const stateSelect = document.getElementById('stateSelect');
  const citySelect = document.getElementById('citySelect');

  document.getElementById('countrySelect').addEventListener('change', function () {
    if (this.value === 'India') {
      stateSelect.innerHTML = '<option>Select State</option><option>Uttar Pradesh</option><option>Maharashtra</option>';
    }
  });

  stateSelect.addEventListener('change', function () {
    if (this.value === 'Uttar Pradesh') {
      citySelect.innerHTML = '<option>Select City</option><option>Lucknow</option><option>Kanpur</option>';
    } else if (this.value === 'Maharashtra') {
      citySelect.innerHTML = '<option>Select City</option><option>Mumbai</option><option>Pune</option>';
    }
  });
});

function logout() {
  alert('Signed out!');
  location.reload();
}
