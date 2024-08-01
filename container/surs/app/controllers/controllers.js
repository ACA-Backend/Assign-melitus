
const getAllBooks = function (req, res) {
    return res.json({succes: true, message : "Get all books"});

};

const getBookById = function (req, res) {
    const {id} = req.params;
    return res.json({ succes: true, message: "Book with ${id} "})

};


const updateBooksById = function (req, res) {
    const {id} = req.params;
    return res.json({ succes: true, message: "Book with ${id} updated"})
};

const createBook = function (req, res) {
    return res.json({ succes: true, message: "Book created",
      data:{
        Titles,
        author,
        Body
      }  
    });
};

const deleteBookById = function (req, res) {
    const { id } = req.params;
    return res.json({ success: true, message: " Book with ${id} deleted"})
};


export {
    getAllBooks,
    createBook,
    updateBooksById,
    deleteBookById,
    getBookById,
}

