const author =[{
    author_name:"Amit Garg",
    dob:"25-06-1992",
    biography:"Amit Garg is a Professor in Computer Science at the University of Washington. ... He is a co-author of two books Data on the Web"
    
  },
  {
    author_name:"Sharad Kumar Verma",
    dob:"13-04-1990",
    biography:"What has Donald Knuth done for computer science? the TeX typesetting language Donald Knuth is an American mathematician and computer scientist most famous for his contributions to the study of algorithms and inventing the TeX typesetting language."
    
  }];
  
export function AuthorRecord(){
    
    return(

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
                {author.map((data) => {
                  return (
                    <tr>
                      <td>{data.author_name}</td>
                      <td>{data.dob}</td>
                      <td>{data.biography}</td>
                      <td><button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Edit</button></td>
                      <td><button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
</div>
<h1 className="h3 mb-3 text-gray-800">Add Author Record</h1>
<input class="form-control" type="text" placeholder="Author Name" id="name" name="name" /><br/>
<input class="form-control" type="text" placeholder="DOB" id="dob" name="dob" /><br/>
<input class="form-control" type="text" placeholder="Biography" id="biography" name="biography" /><br/>
<button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" type="submit">
 <i className="fas fa-download fa-sm text-white-50"></i> Add Author
 </button>
</div>
    );
}