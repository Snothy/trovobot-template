module.exports = setcategory = async (client, commandArgs, message) => {
  //check for permissions first
  const allowedRoles = ['supermod', 'streamer'];
  const allowed = allowedRoles.some(role => message.roles.includes(role));
  if(!allowed) {
    return;
  }

  let category = commandArgs.join(' ');
  if(category === "" ) {
    return;
  }

  const categorySearch = await client.searchCategories(category);
  if(categorySearch.category_info.length === 0) {
    await client.sendMessage("Category not found.");
    return;
  }


  const response = await client.performCommand("setcategory " + categorySearch.category_info[0].name)

  if(response.is_success) {
    await client.sendMessage('Category set: ' + categorySearch.category_info[0].name);
  }
  
}
