const backblaze = {
    storagePrice: 0.005,
    transferPrice: 0.01,
    minPrice: 7,
    price: 0
}

const vultr = {
    storagePrice: 0.01,
    transferPrice: 0.01,
    minPrice: 5,
    price: 0
}

const bunnyHDD = {
    storagePrice: 0.01,
    transferPrice: 0.01,
    maxPrice: 10,
}

const bunnySSD = {
    storagePrice: 0.02,
    transferPrice: 0.01,
    maxPrice: 10,
}

const scalewayMulty = {
    storagePrice: 0,
    transferPrice: 0,
}

const scalewaySingle = {
    storagePrice: 0,
    transferPrice: 0,
}




class Calcucator{


    storagePrice=0
    transferPrice=0
    bunnyRadio='hdd'
    scalewayRadio='multi'

    constructor(storagePrice, transferPrice){
        this.storagePrice=storagePrice;
        this.transferPrice=transferPrice;
        this.priceChangers={} 
        this.bunnyRadio='hdd'
        this.scalewayRadio='multi'
    }
    setBunnyRadio(value){
        this.bunnyRadio=value
        this.calculateRaiting()
    }

    setScalewayRadio(value){
        this.scalewayRadio=value
        this.calculateRaiting()
    }



    setStoragePrice(value){
        this.storagePrice=value
        this.calculateRaiting()
    }
    setTransferPrice(value){
        this.transferPrice=value
        this.calculateRaiting()
    }

    culcScalewayMulty(){
        let storage = this.storagePrice;
       
        let transfer = this.transferPrice;
         
        if (storage > 75) {
            storage = (storage - 75) * 0.06
        } else {
            storage *= 0
        }

        if (transfer > 75){
            transfer = (transfer - 75) * 0.02
        } else {
            transfer *= 0
        }

        return storage + transfer
    }

    culcScalewaySingle(){
        let storage = this.storagePrice;
       
        let transfer = this.transferPrice;
         
        if (storage > 75) {
            storage = (storage - 75) * 0.03
        } else {
            storage *= 0
        }

        if (transfer > 75){
            transfer = (transfer - 75) * 0.02
        } else {
            transfer *= 0
        }

        return storage + transfer
    }





    calculateRaiting(){
        backblaze.price = Math.max(backblaze.minPrice,(backblaze.storagePrice*this.storagePrice) + (backblaze.transferPrice*this.transferPrice))
        bunnyHDD.price = Math.min((bunnyHDD.storagePrice*this.storagePrice)+(bunnyHDD.transferPrice*this.transferPrice),bunnyHDD.maxPrice)
        bunnySSD.price = Math.min((bunnySSD.storagePrice*this.storagePrice)+(bunnySSD.transferPrice*this.transferPrice),bunnySSD.maxPrice)
        scalewayMulty.price = this.culcScalewayMulty()
        scalewaySingle.price = this.culcScalewaySingle()
        vultr.price = Math.max(vultr.minPrice,(vultr.storagePrice*this.storagePrice) + (vultr.transferPrice*this.transferPrice))
        console.log('backblaze: ', backblaze.price)
        console.log('bunnySSD: ', bunnySSD.price)
        console.log('scalewayMulty: ', scalewayMulty.price)
        this.priceChangers['backblaze'](backblaze.price.toFixed(2))
        if (this.bunnyRadio==='hdd') {
            this.priceChangers['bunny'](bunnyHDD.price.toFixed(2))
        } else {
            this.priceChangers['bunny'](bunnySSD.price.toFixed(2))
        }
        if (this.scalewayRadio==='multi') {
            this.priceChangers['scaleway'](scalewayMulty.price.toFixed(2))
        } else {
            this.priceChangers['scaleway'](scalewaySingle.price.toFixed(2))
        }
        this.priceChangers['vultr'](vultr.price.toFixed(2))
        
        
    }


    setProviderpriceChange(providerName, priceChanger) {
        this.priceChangers[providerName]=priceChanger
    }
}



const calculator=new Calcucator(0,0)

export default calculator;



