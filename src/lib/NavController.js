
function closeAllSections(filter) {
  document.querySelectorAll('section').forEach(section => {
    if (section.id != filter) {
      section.classList.add('not-active');
    } else {
      document.getElementById(filter).classList.remove('not-active');
    }
  });
}
export function home() {
 closeAllSections('home')
  return undefined;
}
export function blog() {
  closeAllSections('blog')
   return undefined;
 }
 export function people() {
  closeAllSections('people')
   return undefined;
 }
export function books() {
  console.log("books")
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))
  return undefined;
}

export function pills() {
  console.log("pills")
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))
  return undefined;
}

export function consult() {
  closeAllSections("consult");

  // window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ2BT8N0GkxL0xPnzOnsWTsO75WsudYhgt1cVilc3PLlDTBmDpsh02L6dnFGvvE7VlT8XHRyQ3Yz?gv=true', '_blank').focus();
  return undefined;
}

export function podcasts() {
  closeAllSections('podcasts')
}

export function patrons() {
  closeAllSections("patrons");
}

export function run(name) {

  if (name === "podcasts") {
    podcasts();
  } else if (name === "home") {
    home();
  } else if (name === "books") {
    books();
  } else if (name === "blog") {
    blog();
  } else if (name === "people") {
    people();
  } else if (name === "consult") {
    consult();
  } else if (name === "patrons") {
    patrons();
  } else {
    return undefined;
  }
}
