import Shaurma from '/work/example/src/assets/icons/01.jpg'
import ShaurmaDom from '../assets/icons/02.jpg'
import ShaurmaVeg from '../assets/icons/03.jpg'
import BurgerGurman from '../assets/icons/04.jpg'
import Chizburger from '../assets/icons/05.jpg'
import Fri from '../assets/icons/06.jpg'
import Kolca from '../assets/icons/07.jpg'
import Krilya from '../assets/icons/08.jpg'
import Nagets from '../assets/icons/09.jpg'
import Tako from '../assets/icons/10.jpg'
import Cheese from '../assets/icons/11.jpg'
import Limonad from '../assets/icons/12.jpg'



const menuData = [
  {
    id: 1,
    name: "Классическая шаурма",
    description: "Куриное филе, свежие овощи, соус 'Тахини', лаваш",
    price: "50₽",
    image: Shaurma
  },
  {
    id: 2,
    name: "Шаурма по-домашнему",
    description: "Свинина, солёные огурцы, кетчуп, майонез, зелень",
    price: "55₽",
    image: ShaurmaDom
  },
  {
    id: 3,
    name: "Вегетарианская шаурма",
    description: "Хумус, грибы, обжаренные овощи, микс салата",
    price: "53₽",
    image: ShaurmaVeg
  },
  {
    id: 4,
    name: "Бургер Гурман",
    description: "Говяжья котлета, сыр чеддер, бекон, томаты, соус BBQ",
    price: "80₽",
    image: BurgerGurman
  },
  {
    id: 5,
    name: "Двойной чизбургер",
    description: "Две котлеты, двойной сыр, маринованный лук, фирменный соус",
    price: "95₽",
    image: Chizburger
  },
  {
    id: 6,
    name: "Картофель фри",
    description: "Хрустящий картофель с морской солью и зеленью",
    price: "20₽",
    image: Fri
  },
  {
    id: 7,
    name: "Луковые кольца",
    description: "Пикантная панировка, подаются с соусом 'Сладкий Чили'",
    price: "30₽",
    image: Kolca
  },
  {
    id: 8,
    name: "Куриные крылья",
    description: "Остро-сладкий маринад, кунжут, зелень",
    price: "40₽",
    image: Krilya
  },
  {
    id: 9,
    name: "Наггетсы",
    description: "Куриные наггетсы в хрустящей панировке, под соусом 'Барбекю'",
    price: "35₽",
    image: Nagets
  },
  {
    id: 10,
    name: "Техасский тако",
    description: "Говядина, фасоль, авокадо, сыр, сальса",
    price: "78₽",
    image: Tako
  },
  {
    id: 11,
    name: "Чизстейк ролл",
    description: "Говяжья вырезка, плавленый сыр, перец, лук, чесночный соус",
    price: "85₽",
    image: Cheese
  },
  {
    id: 12,
    name: "Лимонад домашний",
    description: "Сок лимона, мята, тростниковый сахар, газированная вода",
    price: "20₽",
    image: Limonad
  }
];

export default menuData;
