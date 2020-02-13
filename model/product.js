const products=
{
    category:[],
    products:[],
    bestSeller:[],
    init()
    {
        /**generate the data category */
        this.category.push({name:'Electronics',description:'Learn more>>',IMGsource:'img/electronics.jpg',Link:'/'});
        this.category.push({name:'Book',description:'Learn more>>',IMGsource:'img/category_book.jpg',Link:'/'});
        this.category.push({name:'Decoration',description:'Learn more>>',IMGsource:'img/category_decoration.jpg',Link:'/'});
        this.category.push({name:'Toy for kids',description:'Learn more>>',IMGsource:'img/category_toy.jpg',Link:'/'});
        /**generate product */
        this.products.push({name:'PlayStation 5',category:'Electronics',description:'The PlayStation 5 is an upcoming home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 4 in 2019, it will be launched in late 2020 in North America, Europe, South America, Australia, and Japan',price:400,IMGsource:'ele_ps5.jpg',bestSeller: false});
        this.products.push({name:'Samsung S10',category:'Electronics',description:'You’re ready for photos day or night with dual aperture providing day to night light control — adjusting and optimizing light before you tap the shutter. Plus, the powerful processor automatically combines multiple frames of the same low-light moment into one beautiful shot.',price:799,IMGsource:'ele_s10.jpg',bestSeller: true});
        this.products.push({name:'Type C wired',category:'Electronics',description:'Connect USB Type-C enabled devices (MacBook, Chromebook Pixel, Galaxy Note 7, etc.) with standard USB Type-A enabled devices (car/wall charger, external battery power bank, etc.)',price:20,IMGsource:'ele_typeC.jpg',bestSeller: true});
        this.products.push({name:'Iphone 11 Pro Max',category:'Electronics',description:'A transformative triple‑camera system that adds tons of capability without complexity. An unprecedented leap in battery life. And a mind‑blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',price:1599,IMGsource:'ele_ip11promax.jpg',bestSeller: false});
        this.products.push({name:'Lenovo Laptop',category:'Electronics',description:'Based on ThinkPad customer feedback we understand that mechanical docking is important to many of our customers.  The latest T-Series business laptop offers the same mechanical docking experience you prefer with a new USB-C side docking connector.  It also has a range of convenient ports, including the lightning-quick Intel® Thunderbolt™ 3 port and full-sized RJ45 Ethernet connector. In addition, should you need to work in low-light conditions, the renowned ThinkPad keyboard has a backlit option.',price:899,IMGsource:'ele_laptop.jpg',bestSeller: false});
        this.products.push({name:'Macbook Pro',category:'Electronics',description:'The all new MacBook Pro 16-inch and the MacBook Pro 13-inch. Shop now. Touch ID. Force touch trackpad. Retina display. Backlit keyboard. Touch bar. FaceTime HD camera. Services: Free delivery, AppleCare+, Personal setup, Special financing, Fast and free delivery.',price:2499,IMGsource:'ele_macPro.jpg',bestSeller: true});
        /**generate bestSeller */
        this.products.forEach(element => {
            if (element.bestSeller == true) {
                this.bestSeller.push(element);
            }
        });
    },

    getAllProducts()
    {
        return this.products;
    },
    getcategory_list() {
        return this.category;
    },
    getbestseller_list() {
        return this.bestSeller;
    }

}

products.init();
module.exports=products;