import {  u_roles } from "./u_roles";

export class TerminalUsers {

       user_id ! : string ; 

       user_name ! : string ; 

       user_code ! : string ; 

       status !: string ; 

       staff_indicateur !: string ; 

       role !: u_roles;     

       email !: string ; 

       activ_email! : string ; 

       employe_num !: number ;


       id_User ! : number ; 


       

       Account_startingDate ! : Date ; 

       Account_endingDate ! : Date ; 

       access_by!: string ; 

       privilege_start_date! : Date ;

       privilege_ending_date !: Date ; 

       privilege_last_connection !: Date ; 

       acess_restriction !: String ; 

       dis_notification_type ! : string ; 

       browser_disconnection ! : string ; 

       timer_browser_disc ! : number ;

       pwc_disconnection ! : number ; 

       connection_status ! : Boolean ; 

       collection_process ! : string ; 

       collection_dispatch ! :  string ; 

       user_collection_list !: string ; 

       dba_privilege ! : string ; 

       last_db_connect ! : Date ; 

       bank_card_batch ! :  string ; 

       date_cur_card_batch ! : string ; 

       current_card_batch ! : string ; 

       ip_adress ! : number ; 

        user_blocking ! : string ; 

        user_unblocking ! : string ; 

        unblocking_date ! : Date ; 

        user_create! : string ; 

        user_modify !: string ; 

        Date_create! : Date ; 
        
        Date_Modify ! : Date ; 



}
