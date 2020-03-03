export const groupActionNames = {
  ADD_GROUP: 'ADD_GROUP'
}

export const groupActions = {
  addGroup: (data) => {
    return {
      type: groupActionNames.ADD_GROUP,
      payload: {
        data: data
      }
    }
  }
}
