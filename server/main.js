import LiveDev from 'meteor/rafaelcr:live-dev';

import { Meteor } from 'meteor/meteor';

import { Accounts } from 'meteor/accounts-base';

if (Meteor.users.find().count() === 0) {

	console.log('There are no users. Creating an admin...')
	Accounts.createUser({username: 'admin', password:'admin'})	
}

if (LiveDev.Modules.find().count() === 0){

	console.log('There are no LiveDev modules. Creating initial modules');

    var modules = [
        {name: "Client: main", file: "client-main.pluri"},
        {name: "Client: jsx", file: "client-jsx.pluri"},
        {name: "Client: style", file: "client-style.pluri"}
    ];

    _.each(modules, function(module){
        LiveDev.Modules.insert({
            "module": module.name,
            "scope": Assets.getText(module.file)
        })
    })

}

Meteor.startup(() => {
	LiveDev();
})
