const eventLinks = document.querySelectorAll('.event-nav a');

function openLinkedEvent() {
  const id = window.location.hash.slice(1);
  const event = document.getElementById(id);

  if (event instanceof HTMLDetailsElement) {
    event.open = true;
  }

  for (const link of eventLinks) {
    if (link.hash === window.location.hash) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
}

for (const link of document.querySelectorAll('a[href^="#"]')) {
  link.addEventListener('click', () => {
    const event = document.getElementById(link.hash.slice(1));
    if (event instanceof HTMLDetailsElement) {
      event.open = true;
    }
  });
}

openLinkedEvent();
window.addEventListener('hashchange', openLinkedEvent);
