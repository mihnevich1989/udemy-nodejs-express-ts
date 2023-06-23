type coord = { lat: number, long: number }

interface ICoord {
  lat: number,
  long: number
}

type ID = number | string;

function compute(coord: ICoord) {

}

interface IAnimal {
  name: string,
}

interface IDog extends IAnimal {
  tail?: boolean,
  tooth: boolean
}

/* const dog: IDog = {
  tail: true,
  name: 'Chak',
  tooth: false
} */

type Animal = {
  name: string
}

type Dog = Animal & {
  tail: boolean
}

const anotherDog: Dog = {
  name: 'Mud',
  tail: false
}

interface IDog {
  hair: boolean
}

const thirdDog: IDog = {
  name: 'Jack',
  tail: true,
  hair: true,
  tooth: false
}
