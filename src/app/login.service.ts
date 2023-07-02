import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Terminal } from './terminal';
import { Terminalusers } from './terminalusers';
import{Merchant}from './merchant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl2 = "http://localhost:9090/registerUser";
  private baseUrl3 = "http://localhost:8080/api/read";
  //private baseurl1 =" http://localhost:8080/api/read";
  private baseUrl="http://localhost:8080/api/login";
  private baseUrl4 ="http://localhost:9090/deleteUser?id="
  private baseurl5="http://localhost:9090"
  private baseurl6 = "http://localhost:8080/currentUser?rollnumber="
  private baseurl7 = "http://localhost:8080/api/addterminal"
  private baseurl8 = "http://localhost:8080/api/addmerchant"
  private baseurl9 = "http://localhost:8080/api/blockedterminal"
  private baseurl10 = "http://localhost:8080/api/readterminal"
  private baseurl11="http://localhost:8080/api/deleteterminal?id="
  private baseurl12 = "http://localhost:8080/api/ValiderTerminal"
  private baseurl13="http://localhost:8080/api/Annulerterminal"
  private baseurl14 = "http://localhost:8080/api/adduserterminal "
  private baseurl15 = "http://localhost:8080/api/ValiderTerminalUser"
  private baseurl16 = "http://localhost:8080/api/BlockedTerminalUser"
  private baseurl17 = "http://localhost:8080/unlockterminaluser"
  private baseurl18 = "http://localhost:8080/api/annulerTerminaluser"
     private baseurl19 = "http://localhost:8080"
     private baseurl20 = "http://localhost:8080/api/modifyterminal"
     private baseurl21= " http://localhost:8080/api/readuserterminal"
     private baseurl22 = "http://localhost:8080"
     private baseurl23= "http://localhost:8080/api/deletemerchant?id="
     private baseurl24= " http://localhost:8080/api/readmerchant"
     private baseurl25= "http://localhost:8080/api/modifymerchant "
     private baseurl26= " http://localhost:8080/api/approvermerchant"
     private baseurl27 = "http://localhost:8080p "
     private baseurl28 ="http://localhost:8080"
     private baseurl29="http://localhost:8080"
 

  constructor(private httpClient: HttpClient) { }

  Login(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post<User>(this.baseUrl, user);
  }  
  public getcurrentuser(rollnumber?: number) :Observable<object> {
    return this.httpClient.get<User>(this.baseurl6 + rollnumber);
  }
  

  public getUsers(): Observable<object>  {
    const headers = new HttpHeaders().set('ngrok-skip-browser-warning', 'true');
    return this.httpClient.get<object>(this.baseUrl3)
     
  }
     public deleteuser(id?:any){

           return this.httpClient.delete(this.baseUrl4 + id);
     }
    

        public updateuser(user:object){
            
             return this.httpClient.put(this.baseurl5 + '/updateuser' , user);  
        }
        public registerUser(userDATA:object){

             return this.httpClient.post( this.baseUrl2 , userDATA )
        }
        public addterminal(terminal:Terminal):Observable<object>{
        

          
      console.log(terminal);
          return this.httpClient.post<any>(this.baseurl7, terminal);

        }
        public addmerchant(merchant:Merchant):Observable<object>
{
    console.log(merchant);
      return this.httpClient.post<any>(this.baseurl8,merchant);
}       
 //les terminaux
   public blockTerminal(terminal:Terminal):Observable<object>{
    const options = { headers : new HttpHeaders().set('ngrok-skip-browser-warning', 'true')};
        return this.httpClient.post<Terminal>(this.baseurl9 , options);
    }
    public getTerminalDetails(): Observable<object> {

      const options  = { headers : new HttpHeaders().set('ngrok-skip-browser-warning', 'true')};
     return  this.httpClient.get<object>(this.baseurl10 , options);

         
    }
   
    public deleteterminal(Id?:any){
       
        return   this.httpClient.delete(this.baseurl11 + Id);
    }
    public validerterminal(terminal:Terminal) : Observable<object>{
      return this.httpClient.post<Terminal>(this.baseurl12 , terminal);
       
    }
    public annulerterminal(terminal:Terminal) : Observable<object>{

         return this.httpClient.post<Terminal>(this.baseurl13,terminal)
    }
      public unlockterminal(terminal:Terminal):Observable<object>{
             return this.httpClient.post<Terminal>(this.baseurl19 , terminal);
      }
          public ModifyTerminal(terminal:object){

             return this.httpClient.put<object>(this.baseurl20 , terminal)
          }
          //terminalUSERS
       public addterminaluser (terminaluser:Terminalusers):Observable<object>{

            return this.httpClient.post<Terminalusers>(this.baseurl14,terminaluser) ; 
       }
          public deleteterminaluser (id?:any){
              return this.httpClient.get(this.baseurl28 + id) ; 
          }  
     public validerterminaluser(terminaluser:Terminalusers):Observable<object>{

          return this.httpClient.post<Terminalusers>(this.baseurl15 , terminaluser);

       }
        public getterminalusers ():Observable<object>{
          const options  = { headers : new HttpHeaders().set('ngrok-skip-browser-warning', 'true')};
               return this.httpClient.get<Terminalusers>(this.baseurl21 , options);
        }

        public blockedterminalusers(terminaluseer:Terminalusers):Observable<object> {

             return this.httpClient.post<Terminalusers>(this.baseurl16,terminaluseer);
        }
        public unlockterminaluser(terminaluser:Terminalusers):Observable<object>{

           return this.httpClient.post<Terminalusers>(this.baseurl17 , terminaluser);

              
        }
           public modifyterminalusers(terminaluser:Terminalusers):Observable<object>{

                 return this.httpClient.post<Terminalusers>(this.baseurl22 , terminaluser);
           }
         public annulerterminaluser(terminaluser:Terminalusers):Observable<object>{

           
                  return this.httpClient.post<Terminalusers>(this.baseurl18 , terminaluser); 
                  
         } 
          //Merchant

               public deletemerchant(id?:any){
                const options  = { headers : new HttpHeaders().set('ngrok-skip-browser-warning', 'true')};
                    return this.httpClient.delete<any>(this.baseurl23 + id , options);
                 
               }
                public readmerchant():Observable<object>{

                  const options  = { headers : new HttpHeaders().set('ngrok-skip-browser-warning', 'true')};
                     return this.httpClient.get<Merchant>(this.baseurl24 , options);
                }

                  public modifymerchant(merchant :Merchant):Observable<Object>{

                     return this.httpClient.post<Merchant>(this.baseurl25 , merchant);
                  }
                  public approvemerchant (merchant:Merchant):Observable<object>{

                       return this.httpClient.post<Merchant>(this.baseurl26 , merchant );
                  }
                  public declinemerchant (merchant : Merchant):Observable<object> {

                    return this.httpClient.post<Merchant>(this.baseurl27 , merchant);
                     
                  }
                  public blockmerchant (merchant:Merchant):Observable<object>{
                     return this.httpClient.post<Merchant>(this.baseurl29 , merchant)
                  }
}  
