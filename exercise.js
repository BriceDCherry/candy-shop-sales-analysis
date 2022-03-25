function getTotalItemSales(sales, id){
    return sales.filter(sale => sale.itemId === id).map(sale => sale.quantity).reduce((a, b) => a + b, 0) 
}

module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    //addTotalSalesToItems,
    //addTotalValueToItems
}
