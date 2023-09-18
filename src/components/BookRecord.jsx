import { Link } from "react-router-dom";
import { useState } from "react";
const book =[{
  title:"Introduction to Computer",
  author:"Amit Garg",
  isbn_no:"978-93-5019-561-1",
  date:2011
},
{
  title:"Client Server Computing",
  author:"Sharad Kumar Verma",
  isbn_no:"978-93-8067-432-2",
  date:2012
}];
 export function BookRecord(){
// const[book,setBook]=useState(book)
    return(
<div className="container-fluid">
<div>
<h1 className="h3 mb-0 text-gray-800">Book Records</h1>
</div>
<div className="card-body m-3">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              style={{ width: "100%", cellspacing: "0" }}
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>ISBN Number</th>
                  <th>Publication Date</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {book.map((data) => {
                  return (
                    <tr>
                      <td>{data.title}</td>
                      <td>{data.author}</td>
                      <td>{data.isbn_no}</td>
                      <td>{data.date}</td>
                      <td><button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Edit</button></td>
                      <td><button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
</div>
<h1 className="h3 mb-3 text-gray-800">Add book record</h1>
<input class="form-control" type="text" placeholder="Title" id="title" name="title"/><br/>
<input class="form-control" type="text" placeholder="Author" id="author" name="author" /><br/>
<input class="form-control" type="text" placeholder="ISBN_no" id="isbn" name="isbn" /><br/>
<input class="form-control" type="text" placeholder="Date" id="date" name="date" /><br/>
<button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" type="submit" >
 <i className="fas fa-download fa-sm text-white-50"></i> Add Book
 </button>
</div>
    );
}