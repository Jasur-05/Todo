let value: string = 'Вася';
let val1 : number = 100;
let val2: boolean = true;
let val3: null = null;
let val4: undefined = undefined;
let val5: object ={};
let val6: string | number = 10;
val6 = 'Петя';

let arr: string[] = ['html', 'css', ]
// arr.push(10)
let arr2: Array<number | string | boolean> = ['sdsdasd',1000, 'sadasaaa', 10, 100 , true];

let truple: [string, number,boolean]= ['fsfasaa', 100, true]
type strType = string | string [];
let text: strType = 'asasdasd'
text = ['asdasdasd', 'asldkaspl;dk']

type User = {
      id: number;
      name: string;
      alive?: boolean;
      age: number;
}

type Prof = {
      skills: string[],
      exp: number
}

type Abmin = User & Prof

let vasya: User = {
      id: 2,
      name: 'Вася',
      age: 15,
      exp: 8,
      skills: ['window', 'mac']
      // alive: true,
}

interface IProduct {
      id: number;
      title: string;
      desc: string;
      price: number;
      info: ()=>void
}

interface IBonus {
      discount: number;
}

interface ISale extends IBonus, IProduct {}

let apple:  ISale = {
      id: 5,
      title: 'Яблока',
      desc: 'Голден',
      price: 20000,
      info() {
            console.log(this.price * this.discount);
      },
      discount: 0.2
}

// function find(value:string): string[] {
//       return [value]
// }
function find <T /* Type */>(value:T): T[] {
      return [value]
}

find<string>('ts')
find<number>(100)
find<boolean>(true)