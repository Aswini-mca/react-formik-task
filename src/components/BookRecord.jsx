import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

//Array of objects
const books = [{
  title: "Introduction to Computer",
  author: "Amit Garg",
  isbn_no: "978-93-5019-561-1",
  date: 2011
},
{
  title: "Client Server Computing",
  author: "Sharad Kumar Verma",
  isbn_no: "978-93-8067-432-2",
  date: 2012
}];

//form validation schema

const formValidationSchema = yup.object({
  title: yup.string().min(5, "Need minimum 5 characters for title")
    .required("Required to fill title"),
  author: yup.string().min(5, "Need minimum 5 characters for author name").max(15, "Maximum charcters exceeds for author")
    .required("Required to fill author"),
  isbn_no: yup.string().min(10, "Need minimum 5 characters for isbn_no").max(17, "Maximum charcters exceeds for isbn_no")
    .required("Required to fill isbn_no"),
  date: yup.string().min(4, "Provide publication year alone")
    .required("Required to fill year of publication")
})

// book record component
export function BookRecord() {
  const [book, setBook] = useState(books)

  const formik = useFormik({
    initialValues: { title: "", author: "", isbn_no: "", date: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
      setBook([...book, values]);
    },
  });

  // delete function
  const deleteBook = (index) => {
    const updatedBooks = book.filter((_, id) => id !== index);
    setBook(updatedBooks);
  }

  //edit function
  const editBook = (index, newtitle, newauthor, newisbin, newdate) => {
    setBook(prevData => prevData.map((row, id) =>
      id === index ? { ...row, title: newtitle, author: newauthor, isbn_no: newisbin, date: newdate } : row
    ));
  }

  return (
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
              {book.map((data, index) => {
                return (
                  <tr>
                    <td>{data.title}</td>
                    <td>{data.author}</td>
                    <td>{data.isbn_no}</td>
                    <td>{data.date}</td>
                    <td key={index}><button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      onClick={() => {
                        const newtitle = prompt('Enter title:', data.title);
                        const newauthor = prompt('Enter author:', data.author);
                        const newisbin = prompt('Enter isbn_no:', data.isbn_no);
                        const newdate = prompt('Enter publication year:', data.date);
                        if (newtitle !== null && newauthor !== null && newisbin !== null && newdate !== null) {
                          editBook(index, newtitle, newauthor, newisbin, newdate);
                        }
                      }}>Edit</button></td>
                    <td key={index}><button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                      onClick={() => deleteBook(index)}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="h3 mb-3 text-gray-800">Add book record</h1>
      <form onSubmit={formik.handleSubmit}>
        <input class="form-control" type="text" placeholder="Title" id="title" name="title" onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.title} /><br />
        {formik.touched.title && formik.errors.title ? formik.errors.title : ""}

        <input class="form-control" type="text" placeholder="Author" id="author" name="author" onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.author} /><br />
        {formik.touched.author && formik.errors.author ? formik.errors.author : ""}

        <input class="form-control" type="text" placeholder="ISBN_no" id="isbn_no" name="isbn_no" onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.isbn_no} /><br />
        {formik.touched.isbn_no && formik.errors.isbn_no ? formik.errors.isbn_no : ""}

        <input class="form-control" type="number" placeholder="Enter year" id="date" name="date" onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.date} /><br />
        {formik.touched.date && formik.errors.date ? formik.errors.date : ""}<br />

        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" type="submit" >
          <i className="fas fa-download fa-sm text-white-50"></i> Add Book
        </button>
      </form>
    </div>
  );
}