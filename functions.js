let ordersExamples =  [ {
		id: 1,
        object: "order",
		fee: "0.2",
		amount: 1000,
		PaymentMethod: "spei",
		type: "OneTimePurchase",
		id_intern: "id_interno_1",
		custom_data: {
			id_custom_random: ["uno","dos"]
		}
	},
	{
		id: 2,
		object: "order",
		fee: "0.3",
		amount: 3000,
		PaymentMethod: "card",
		type: "TwoTimePurchase",
		id_intern: "id_interno_2",
		custom_data: {
			id_custom_random: ["tres","cuatro"]
		}
	},
	{
		id: 3,
		object: "order",
		fee: "0.4",
		amount: 4000,
		PaymentMethod: "oxxo",
		type: "ThreeTimePurchase",
		id_intern: "id_interno_3",
		custom_data: {
			id_custom_random: ["cinco","seis"]
		}
	}

]



let customersExamples =  [ {
	id: 1,
	name: "Lolo Arrabel",
	phone: "553512349876",
	mail: "lolo@yahoo.com"
	},
    {
	id: 2,
	name: "Hernan Hernandez",
	phone: "55351232746",
	mail: "hernan@hotmail.com"
	},
    {
	id: 3,
	name: "Manuel Gomez",
	phone: "553512638876",
	mail: "manuel@yahoo.com"
	}
]



module.exports = {
	showAll: function(req, res) {
		res.send(ordersExamples)
	},
	byID: function(req, res) {
		//Validate if the order is beeing find by id or internal id
		id= parseInt(req.params.id)
		if(Number.isInteger(id)){
			for (var i in ordersExamples){
				if (id == ordersExamples[i].id){
					res.send(ordersExamples[i])
					return
				}
			}
			res.send("order_id not found")
		}else{
			console.log(req.params.id)
			for (var i in customersExamples){
				if (req.params.id == ordersExamples[i].id_intern){
					res.send(ordersExamples[i])
					return
				}
			}
			res.send("intern_id not found")
		}
			
	
	},
	getCustomers: function(req, res) {
		for (var i in customersExamples){
			if (req.params.id == customersExamples[i].id){
				res.send(customersExamples[i])
				return
			}
		}
		res.send("customer_id not found")
	} 

}