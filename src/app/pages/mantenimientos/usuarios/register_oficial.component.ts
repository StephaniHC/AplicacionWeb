import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'
import { UsuarioService } from 'src/app/services/usuario.service';
import { FileUploadService } from 'src/app/services/file-upload.service';



interface Genero {
  value: string;
}

@Component({
  selector: 'app-register-oficial',
  templateUrl: './register_oficial.component.html',
  styleUrls: [ './register_oficial.component.css' ]
})
export class RegisterOficialComponent {

  public formSubmitted = false;
  public formComplete = false;
  isLinear = true;

  files: File[] = [];

  generos: Genero[] = [
    {value: 'Hombre'},
    {value: 'Mujer'},
    {value: 'Otro'}
  ];




  public registerFormUsuario = this.fb.group({
    nombre: ['', Validators.required ],
    email: ['', [ Validators.required, Validators.email ] ],
    role: ['OFICIAL_ROLE', Validators.required ],
    password: '' ,
    password2: '' ,
    apellido: ['', Validators.required ],
    ci: ['', Validators.required ],
    direccion: '',
    celular: ['', Validators.required ],
    fecha_nac: ['', Validators.required ],
  }, {
    // validators: this.passwordsIguales('password', 'password2')
  });

  public registerFormOficial = this.fb.group({
    descripcion: ['', Validators.required ],
    codigo: ['', Validators.required ],
    disponible: true,
    DTM: ['', Validators.required ],
    denuncias:Array,
  });

  constructor( private fb: FormBuilder,
               private usuarioService: UsuarioService,
              //  private OficialService: OficialService,
               private fileUploadService :FileUploadService,
               private router: Router ) { }


onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


  test(cpt){
    this.formSubmitted = cpt;

    console.log(this.formComplete);
    console.log(cpt);
  }

  crearUsuario(cpt) {
    this.formSubmitted = cpt;

    if ( this.registerFormUsuario.invalid  || this.registerFormOficial.invalid) {
      return;
    }
    const mergedObject = {
      ...this.registerFormUsuario.value,
      ...this.registerFormOficial.value,
    };

    console.log(mergedObject);

    // Realizar el posteo
    this.usuarioService.crearUsuario( mergedObject )
        .subscribe( resp => {
                  Swal.fire('Guardado', 'Usuario Creado', 'success');

          const { nombre } = this.registerFormUsuario.value;
          const persona = resp.persona._id;
          const usuario = resp.usuario.uid;
          this.registerFormOficial.patchValue({persona:persona});
                      this.router.navigateByUrl(`/dashboard/usuarios`)

        }, (err) => {
            Swal.fire('Error', 'No se pudo registrar al oficial ', 'error');
          })
      }

          // this.MedicoService.crearMedico(this.registerFormOficial.value).subscribe((resp:any)=>{
          //   Swal.fire('Creado', `${ nombre } creado correctamente`, 'success');
      //       this.fileUploadService
      // .subirArchivo( this.files[0], 'medicos',usuario  )
      // .then( img => {
      //   Swal.fire('Guardado', 'Imagen de usuario actualizada', 'success');

      // }).catch( err => {
      //   console.log(err);
      //   Swal.fire('Error', 'No se pudo subir la imagen', 'error');
      // })
            // this.router.navigateByUrl(`/dashboard/estudio/${ resp.estudio._id }`)




  campoNoValido( formGroup: FormGroup,campo: string ): boolean {
    // if(this.registerFormUsuario.get(campo).value ==="")
    // return false;
    if ( formGroup.get(campo).invalid && this.formSubmitted ) {
      return true;
    } else {
      return false;
    }

  }

  // contrasenasNoValidas() {
  //   const pass1 = this.registerFormUsuario.get('password').value;
  //   const pass2 = this.registerFormUsuario.get('password2').value;

  //   if ( (pass1 !== pass2) && this.formSubmitted ) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // }


  passwordsIguales(pass1Name: string, pass2Name: string ) {


    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null)
      } else {
        pass2Control.setErrors({ noEsIgual: true })
      }


    }
  }


}
