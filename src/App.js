import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";
import Categories from "./components/categories";
import ShowFullItem from "./components/showFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул Синий",
          img: "stul.webp",
          desc: "samoe luchee v mire opisaniye!!!",
          category: "chairs",
          price: "1000",
        },
        {
          id: 2,
          title: "Стол каменный",
          img: "stol-kamenniy.jpg",
          desc: "samoe luchee v mire opisaniye!!!",
          category: "tables",
          price: "30000",
        },
        {
          id: 3,
          title: "Лампа настольная",
          img: "nastol-lampa.jpeg",
          desc: "samoe luchee v mire opisaniye!!!",
          category: "lamps",
          price: "1500",
        },
        {
          id: 4,
          title: 'ЧВК "Вагнер"',
          img: "chvk.webp",
          desc: "samoe luchee v mire opisaniye!!!",
          category: "chvk",
          price: "100",
        },
        {
          id: 5,
          title: "Шкаф деревянный",
          img: "shkaf.jpg",
          desc: "samoe luchee v mire opisaniye!!!",
          category: "coapboards",
          price: "10000",
        },
        {
          id: 6,
          title: "Подушка-акула",
          img: "shark.jpg",
          desc: "samoe luchee v mire opisaniye!!!",
          category: "toys",
          price: "1000",
        },
        {
          id: 7,
          title: 'Чвк "Редан"',
          img: "Redan.jpg",
          desc: "samoe luchee v mire opisaniye!!!",
          category: "chvk",
          price: "100",
        },
        {
          id: 8,
          title: 'Стол-раскладушка',
          img: "Raskladushka.jpg",
          desc: "samoe luchee v mire opisaniye!!!",
          category: "tables",
          price: "7000",
        },
      ],
      showFullItem: false,
      fullItem: {}
    };

    //todo Добавление возьожноссти работы с конкретным this
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}/> }
        <Footer />
      </div>
    );
  }

  //todo показ карточек товара

  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  //todo сщртировка по категориям

  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  //todo удаление товара

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el=> el.id !== id)})
  }

  //todo проверка на повторный товар

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true; 
    });
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] }, () => {}); //todo собирает нужный элемент в пустоц массив
  }
}

export default App;
