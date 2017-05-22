import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
export interface User {
    userId: number;
    firstName:string;
    lastName:string;
}

@Injectable()
export class UserService {
    private _users: User[];
    private _list: BehaviorSubject<User[]>; 
    public list$: Observable<User[]>;

    constructor() {
        this._users = [
            { userId: 1, firstName: 'John', lastName: 'Smith'},
            { userId: 2, firstName: 'Mike', lastName: 'Doe'},
            { userId: 3, firstName: 'Tom', lastName: 'Edison'},
        ];

        for(var i = 4; i < 300; ++i) {
            this._users.push(
                {
                    userId: i,
                    firstName: this.getRandomName(),
                    lastName: this.getRandomName()
                }
            );
        }
        
        this._list = new BehaviorSubject(this._users);
        this.list$ = this._list.asObservable();
        
    }

    getRandomName():string {
        return getName(4,10,'','');
    }

    getUsers():User[] {
        return this._users;
    }

    addUser(user:User) {
        user.userId = this._users.map(t=>t.userId).reduce((p,c)=> c > p ? c : p, 0)+1;
        this._users.push(user);
        this._list.next(this._users);
    }

    removeUser(user:User) {
        var users = this._users.filter(t=>t.userId == user.userId);
        users.forEach(user=> {
            this._users.splice(this._users.indexOf(user),1);
        });
        this._list.next(this._users);
    }

    findUser(userId: number) {
        var users = this._users.filter(t=>t.userId == userId);
        return users.length > 0 ? users[0] : null;
    }

    updateUser(user:User) {
        var tmp = this.findUser(user.userId);
        if (tmp != null) {
            Object.assign(tmp, user);
        }
        this._list.next(this._users);

    }

    
}

function rnd(minv, maxv){
	if (maxv < minv) return 0;
	return Math.floor(Math.random()*(maxv-minv+1)) + minv;
}

function getName(minlength, maxlength, prefix, suffix)
{
	prefix = prefix || '';
	suffix = suffix || '';
	//these weird character sets are intended to cope with the nature of English (e.g. char 'x' pops up less frequently than char 's')
	//note: 'h' appears as consonants and vocals
	var vocals = 'aeiouyh' + 'aeiou' + 'aeiou';
	var cons = 'bcdfghjklmnpqrstvwxz' + 'bcdfgjklmnprstvw' + 'bcdfgjklmnprst';
	var allchars = vocals + cons;
	//minlength += prefix.length;
	//maxlength -= suffix.length;
	var length = rnd(minlength, maxlength) - prefix.length - suffix.length;
	if (length < 1) length = 1;
	//alert(minlength + ' ' + maxlength + ' ' + length);
	var consnum = 0;
	//alert(prefix);
	/*if ((prefix.length > 1) && (cons.indexOf(prefix[0]) != -1) && (cons.indexOf(prefix[1]) != -1)) {
		//alert('a');
		consnum = 2;
	}*/
	if (prefix.length > 0) {
		for (var i = 0; i < prefix.length; i++) {
			if (consnum == 2) consnum = 0;
			if (cons.indexOf(prefix[i]) != -1) {
				consnum++;
			}
		}
	}
	else {
		consnum = 1;
	}
	
	var name = prefix;
	
	for (var i = 0; i < length; i++)
	{
        var touse,c;
		//if we have used 2 consonants, the next char must be vocal.
		if (consnum == 2)
		{
			touse = vocals;
			consnum = 0;
		}
		else touse = allchars;
		//pick a random character from the set we are goin to use.
		c = touse.charAt(rnd(0, touse.length - 1));
		name = name + c;
		if (cons.indexOf(c) != -1) consnum++;
	}
	name = name.charAt(0).toUpperCase() + name.substring(1, name.length) + suffix;
	return name;
}