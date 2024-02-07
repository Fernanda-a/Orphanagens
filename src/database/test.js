const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    //insert data on forms
    await saveOrphanage(db, {
        lat: "-36.9443557",
        lng: "174.7625083",
        name: "Grace Field House",
        about: "Assist children from 6 to 15 years of age who are at risk and/or socially vulnerable.",
        whatsapp: "2178695043",
        images: [
            "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1574647267419-cd3adf200aed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Come as you feel comfortable and bring a lot of love and patience to give.",
        opening_hours: "Visiting hours from 6p.m to 8p.m",
        open_on_weekends: "1"
    })
    
    //consult data on forms
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages) 

    //consult only one orphanage, pelo id //node src/database/test.js
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id= "1"')
    console.log(orphanage)

    //delete data from tables
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
})