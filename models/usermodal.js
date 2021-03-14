const rootDir=require('../util/path');
const path=require('path');
const fs=require('fs');

const file=path.join(rootDir,'Database','user.json');

const getUser=(callback) => {
    fs.readFile(file,(err,fileContent) => {
        if(!err)
        {
            callback(JSON.parse(fileContent));
        }
        else
        {
            callback([]);
        }
    });
};


module.exports=class User {
    constructor(name,email,password,mobilenumber) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.mobilenumber=mobilenumber;
    }


    saveRegister() {
        getUser(users => {
            // console.log("U" ,users);
            const value=users.filter(user =>  user.email===this.email && user.mobilenumber===this.mobilenumber);
            // console.log("v",value);
            if(value.length===0)
            {
                users.push(this);
                fs.writeFile(file,JSON.stringify(users),(error) => {
                    if(error)
                    {
                        console.log(error);
                    }
                });  
            }
        });
    }

    
}
