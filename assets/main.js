const API = 'https://restcountries.com/v3.1/all';

const content = null || document.getElementById('content');

async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();

  return data;
}

(async () => {
  try {
    const countries = await fetchData(API);
    const offset = 10;
    const randFlagIndex = Math.floor(Math.random() * 245);
    const view = `
    ${countries.map(country => `
        <div class="group relative">
          <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${country.flags.png}" alt="${country.name.common} flag" class="w-full">
          </div>

          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${country.name.official}
            </h3>
          </div>
        </div>
        `).slice(randFlagIndex, randFlagIndex + offset).join('')
      }`;

    content.innerHTML = view;

  } catch (error) {
    console.log(error);
  }
})()
