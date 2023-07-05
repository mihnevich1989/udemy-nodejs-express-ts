import 'reflect-metadata';

function Injectable(key: string) {
  return (target: Function) => {
    Reflect.defineMetadata(key, 1, target);
    const meta = Reflect.getMetadata(key, target);
    console.log(meta);
  };
}

function Inject(key: string) {
  return (target: Function) => {
    Reflect.defineMetadata(key, 1, target);
    const meta = Reflect.getMetadata(key, target);
    console.log(meta);
  };
}

function Prop(target: Object, name: string) {
  Reflect.defineMetadata('a', 1, target);
  const meta = Reflect.getMetadata('a', target);
  console.log(meta);
}

@Inject('C')
export class C {
  @Prop prop: number;
}

@Injectable('D')
export class D {
  @Prop prop: number;
  constructor(@Inject('C') c: C){}
}
