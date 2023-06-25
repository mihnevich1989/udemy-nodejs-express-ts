let a = 'asd';
let b: 'hi' = 'hi';
type direction = 'left' | 'right';

function moveDog(direction: direction): -1 | 0 | 1 {
  switch (direction) {
    case 'left':
      return -1;
    case 'right':
      return 1;
    default:
      return 0;
  }
}

let c: any = 5;
//let d: number = <number>c;
let d: number = c as number;

const connection = {
  host: 'localhost',
  protocol: 'https' as 'https'
};

function connect(host: string, protocol: 'http' | 'https') {

}

connect(connection.host, connection.protocol);
