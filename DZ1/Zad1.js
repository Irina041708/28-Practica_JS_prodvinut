// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция",
// который можно итерировать. Каждая итерация должна возвращать следующий
//  альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов
//  и имеет свойство-символ Symbol.iterator. Каждый альбом имеет
//  следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection.
// Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной
// коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const collections = [
  {
    title: "Thriller",
    artist: "Майкл Джексон",
    year: "1982",
  },
  {
    title: "Back In Black ",
    artist: "Ac/Dc",
    year: "1980",
  },
  {
    title: "The Dark Side Of The Moon",
    artist: "Pink Floyd",
    year: "1973",
  },
];

const musicСollection = {
  collections: [...collections], //распарсили и взяли обратно в массив
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.collections.length) {
          return { value: this.collections[index++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const collection of musicСollection) {
  console.log(collection.title,'-', collection.artist,'(',collection.year,')');
}
