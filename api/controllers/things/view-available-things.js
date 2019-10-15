module.exports = {


  friendlyName: 'View available things',


  description: 'Display "Available things" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/things/available-things'
    }

  },


  fn: async function () {
    // var things = [
    //   { id:1, label:'Sweet Red Drill'},
    //   { id:2, label:'Red Mountain Bike'},
    //   { id:3, label:'Tea Mug'},
    // ]
    // TODO: come back to this and only fetch things that current user is allowed to see
    var things = await Thing.find();
    // Respond with view.
    return { things }

  }


};
