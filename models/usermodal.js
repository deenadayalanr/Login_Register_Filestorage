const rootDir=require('../util/path');
const path=require('path');
const fs=require('fs');

const file=path.join(rootDir,'Database','user.json');
// const users=[];

const getUser= {
    status:true
};


class User {
    constructor(name,email,password,mobilenumber) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.mobilenumber=mobilenumber;
    }

    // static status(a) {
    //     return a;
    // }

    saveRegister() {
        fs.readFile(file,async(err,fileContent) => {
           if(!err) 
            {
              const users=JSON.parse(fileContent);
              const value=users.filter(user =>  user.email===this.email && user.mobilenumber===this.mobilenumber);
              console.log(value);
              if(value.length===0)
              {
                   users.push(this);
                   fs.writeFile(file,JSON.stringify(users),(err) => {
                        if(err)
                        {
                            return;
                        }
                        getUser.status=true;
                   });
              }
              else
              {
                  getUser.status=false;
              }
            }
        });
    }
    
}

module.exports={
    User,
    getUser
}



















// getUser(users => {
//     // console.log("U" ,users);
//     const value=users.filter(user =>  user.email===this.email && user.mobilenumber===this.mobilenumber);
//     // console.log("v",value);
//     if(value.length===0)
//     {
//         users.push(this);
//         fs.writeFile(file,JSON.stringify(users),(error) => {
//             if(error)
//             {
//                 console.log(error);
//             }
//         });  
//     }
// });


// const getUser=(callback) => {
//     fs.readFile(file,(err,fileContent) => {
//         if(!err)
//         {
//             callback(JSON.parse(fileContent));
//         }
//         else
//         {
//             callback([]);
//         }
//     });
// };