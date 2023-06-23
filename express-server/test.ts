let a: number = 5;
let b: string = "1";
let c: number = a + Number(b);
let d: boolean = true;
let e: number[] = [1, 2, 3];
let f: string[] = ['str1', 'str2'];
let tup: [number, string] = [1, 'str'];

function greet(name: string): string {
  return name + 'hi';
}

f.map((x: string) => x)

function coord(coord: { lat: number, long?: number }) {
  if (coord.long) {
    return coord.lat + coord.long;
  }
}
