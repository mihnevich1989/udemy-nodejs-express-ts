let universalId: number | string = 5;
universalId = '5';
function prinId(id: number | string) {
  if (typeof id == 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

function helloUser(user: string | string[]) {
  if (Array.isArray(user)) {
    console.log(user.join(', ') + 'hi');
  } else {
    console.log(user + ' hi');

  }
}
