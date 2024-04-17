exports.getAllProducts= (req, res)=>{
    res.status(200)
    res.json([
        {
            productName : "Iphone 15",
            productPrice : "$1200",
        },
        {
            productName : "Iphone 13",
            productPrice : "$1100",
        }
    ])
}

exports.getSingleProducts = (req, res)=>{
    res.status(200)
    res.json({
        productName : "Iphone 15",
        productPrice : "$1200",
    })
}

exports.createAProduct = (req, res)=>{
    res.status(200)
    res.json({
        message: "Product updated successfully"
    })
}

exports.updateAProduct = (req, res)=>{
    res.status(200)
    res.json({
        message: "Product updated successfully"
    })
}

exports.deleteAProduct = (req, res)=>{
    res.status(200)
    res.json({
        message: "product deleted successfully"
    })
}