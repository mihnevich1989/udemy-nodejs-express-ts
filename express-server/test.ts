class Coord {
  message = '1';
  lat: number;
  long: number;

  protected test() {
    if (this.lat > 0) {
    }
  }

  computeDistance(newLat: number, newLong: number): number {
    return 0;
  }

  constructor(lat: number, long: number) {
    this.lat = lat;
    this.long = long;
    console.log(this.message);
  }
}

const point = new Coord(10, 10);

class MapLocation extends Coord {
  _name: string;
  message: "2";

  public get name() {
    return this._name;
  }

  public set name(v: string) {
    this._name = v + '_cool!';
  }

  override computeDistance(newLat: number, newLong: number): number {
    console.log(this._name);
    return 1;
  }

  constructor(lat: number, long: number, name: string) {
    super(lat, long);
    this._name = name;
  }
}

interface LoggerService {
  log: (s: string) => void;
}

class Logger implements LoggerService {
  public log(s: string) {
    console.log(s);
  };

  private error() {
  }
}

const l = new Logger();
l.log('d');

class MyClass {
  static a = '1';
}
MyClass.a;

class MyClass2<T> {
  a: T;
}

const MyCls = new MyClass2<string>();
MyCls.a;

abstract class Base {
  print(s: string) {
    console.log(s);
  }
  abstract error(s: string): void;
}

class BaseExtended extends Base {
  error(s: string): void {
    throw new Error(s);
  }
}

const be = new BaseExtended();
be.print('test');

class Animal {
  name: string;
}

class Dog {
  name: string;
  tail: boolean;
}

const puppy: Animal = new Dog();
