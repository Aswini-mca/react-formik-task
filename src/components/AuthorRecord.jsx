import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

//Array of objects
const authors = [{
  author_name: "Amit Garg",
  dob: "25-06-1992",
  biography: "Amit Garg is a Professor in Computer Science at the University of Washington. ... He is a co-author of two books Data on the Web"

},
{
  author_name: "Sharad Kumar Verma",
  dob: "13-04-1990",
  biography: "What has Donald Knuth done for computer science? the TeX typesetting language Donald Knuth is an American mathematician and computer scientist most famous for his contributions to the study of algorithms and inventing the TeX typesetting language."

}];

//form validation schema
const formValidationSchema = yup.object({
  author_name: yup.string().min(5, "Need minimum 5 characters for author name")
    .required("Required to fill author name"),
  dob: yup.string().min(10, "Enter dd-mm-yyyy format").max(10, "Format dd-mm-yyyy, you crossed maximum charcters")
    .required("Required to fill dob"),
  biography: yup.string().min(15, "Need minimum 15 characters for biography").max(100, "Maximum charcters exceeds for biography")
    .required("Required to fill short biography"),

})

// author record component
export function AuthorRecord() {
  const [author, setAuthor] = useState(authors);

  const formik = useFormik({
    initialValues: { author_name: "", dob: "", biography: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
      setAuthor([...author, values]);
    },
  });

  // delete function
  const deleteAuthor = (index) => {
    const updatedAuthor = author.filter((_, id) => id !== index);
    setAuthor(updatedAuthor);
  }

  //edit function
  const editAuthor = (index, newauthor, newdob, newbio) => {
    setAuthor(prevData => prevData.map((row, id) =>
      id === index ? { ...row, author_name: newauthor, dob: newdob, biography: newbio } : row
    ));
  }
  return (

    <div className="container-fluid">
      <div>
        <h1 className="h3 mb-0 text-gray-800">Author Records</h1>
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
                <th>Author Name</th>
                <th>DOB</th>
                <th>Biography</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {author.map((data,index) => {
                return (
                  <tr>
                    <td>{data.author_name}</td>
                    <td>{data.dob}</td>
                    <td>{data.biography}</td>
                    <td key={index}><button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                     onClick={()=>{
                      const newauthor = prompt('Enter author name',data.author_name);
                      const newdob = prompt('Enter DOB dd--mm--yyyy format',data.dob);
                      const newbio = prompt('Enter Biography',data.biography);
                      if(newauthor !== null && newdob !== null && newbio !== null){
                        editAuthor(index,newauthor,newdob,newbio)
                      }
                     }}
                    >Edit</button></td>
                    <td key={index}><button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                    onClick={() => deleteAuthor(index)}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <h1 className="h3 mb-3 text-gray-800">Add Author Record</h1>
      <form onSubmit={formik.handleSubmit}>
        <input class="form-control" type="text" placeholder="Author Name" id="author_name" name="author_name" onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.author_name} /><br />
        {formik.touched.author_name && formik.errors.author_name ? formik.errors.author_name : ""}

        <input class="form-control" type="text" placeholder="DOB" id="dob" name="dob" onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.dob} /><br />
        {formik.touched.dob && formik.errors.dob ? formik.errors.dob : ""}

        <input class="form-control" type="text" placeholder="Biography" id="biography" name="biography" onChange={formik.handleChange}
          onBlur={formik.handleBlur} value={formik.values.biography} /><br />
        {formik.touched.biography && formik.errors.biography ? formik.errors.biography : ""}

        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" type="submit">
          <i className="fas fa-download fa-sm text-white-50"></i> Add Author
        </button>
      </form>
    </div>
  );
}