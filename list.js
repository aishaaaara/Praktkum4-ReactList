import React, {Component} from "react";  
import $ from "jquery";


class list extends Component { 
     bind = (event) => {  
          this.setState({[event.target.name]: event.target.value});  
        }  
        SaveSiswa = (event) =>{  
          event.preventDefault();  
        
          let temp = this.state.siswa;   
          
          if (this.state.action === "insert") {  
            
            temp.push({  
              nis: this.state.nis,  
              nama: this.state.nama,  
              alamat: this.state.alamat  
            });  
          } else if (this.state.action === "update") {  
            let index = temp.findIndex(item => item.nis === this.state.nis);  
            
            temp[index].nama = this.state.nama;  
            temp[index].alamat = this.state.alamat;  
          }  
           this.setState({siswa: temp});  
         $("#modal").modal('hide');  
        }  
          
        Add = () => {  
          this.setState({  
            nis: "",  
            nama: "",  
            alamat: "",  
            action: "insert"  
          });  
        }  
          
        Edit = (item) => {  
          this.setState({  
            nis: item.nis,  
            nama: item.nama,  
            alamat: item.alamat,  
            action: "update"  
          });  
        }  
          
        Drop = (index) => {  
          let temp = this.state.siswa;  
          temp.splice(index,1);  
          this.setState({siswa: temp});
        }  



  constructor(){  
      super();  
      this.state = {  
        siswa : [  
          {nis: "100", nama: "Musthofa", alamat: "Surabaya"},  
          {nis: "101", nama: "Nurul", alamat: "Malang"},  
          {nis: "102", nama: "Misbah", alamat: "Pasuruan"},  
        ],  
        nis: "",  
        nama: "",  
        alamat: "",
        action: "" 
    }
}
    
//Render
     render(){  
    return (  
         <div className="container" style={{width:'800px'}}>  
            { /* generate list */ }  
            <ul className="list-group">  
              {this.state.siswa.map((item,index) => {  
                return (  
                  <li className="list-group-item" key={index}>  
                    <h5 className="text-info">{item.nama}</h5>  
                    <h6>NIS: {item.nis}</h6>  
                    <h6>Alamat: {item.alamat}</h6>  
          
                <button type="button" class="btn btn-primary" onClick={() => this.Edit(item)}  
                data-toggle="modal" data-target="#modal">  
                  Edit  
                </button>  
                <button type="button" class="btn btn btn-danger"onClick={() => this.Drop(index)}>  
                  Hapus  
                </button>  

              </li>  
            );  
          })}
        </ul>  
       <button type="button" class="btn btn-success btn-lg" onClick={this.Add}
         data-toggle="modal" data-target="#modal">
          Tambah Data
         </button>
       
         <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
         <div class="modal-dialog" role="document" style={{width: '900px'}}>
         <div class="modal-content">
         <div class="modal-header bg-success text-white"><h5>Form Siswa</h5></div>
    <form onSubmit={this.SaveSiswa}>  
    <div className="modal-body"> 
          <div class="form-group">
          <label><h5>NIS</h5></label>
          <input  type="text" name="nis" className="form-control" onChange={this.bind} value={this.state.nis}  />
          <label><h5>Nama</h5></label>
          <input  type="text" name="nama" className="form-control" onChange={this.bind} value={this.state.nama}  />
          <label><h5>Alamat</h5></label>
          <input  type="text" name="alamat" className="form-control" onChange={this.bind} value={this.state.alamat}  />
          </div> 
             </div>  
              <div className="modal-footer">  
                 <button type="submit" class="btn btn-primary btn-lg" >Simpan</button> 
              </div>  
              </form>  
            </div>  
          </div>  
        </div> 

      </div>  

    );  
  }  
}  
export default list; 