let a = 'Hi';

if (typeof a == 'string') {

}

let b: typeof a;

type Coord = {
  lat: number,
  long: number;
};

type P = keyof Coord;

let c: P = 'lat';

/* function log(a: string | null): void {
  if (a == null) {
  } else {
    a.toUpperCase();
  }
  a?.toUpperCase();
} */
function log(a: string | null): void {
  a!.toUpperCase();
}

const d: bigint = BigInt(100);
const e: symbol = Symbol('abc');
const f: symbol = Symbol('abc');
