function getTotalItemSales(sales, id){
    return sales.filter(sale => sale.itemId === id).map(sale => sale.quantity).reduce((a, b) => a + b, 0) 
}

function addTotalSalesToItems(sales, items){
    return items.map(item =>{
        return {
            ...item,
            quantity: getTotalItemSales(sales, item.id)
        }
    })
}

function addTotalValueToItems(sales, items) {
    return addTotalSalesToItems(sales, items).map(item => {
        item.totalValue = (item.quantity * item.price).toFixed(2)
        return item;
    })
}



module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}
