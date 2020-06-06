const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    color: {type: 'string', default: '#fff'},
    isDefault: {type: 'bool', dafault: false},
    isCredit: {type: 'bool', dafault: false},
    isDebit: {type: 'bool', dafault: false},
    order: {type: 'int', default: 0},
    entries: 'Entry[]',
  },
};

export default CategorySchema;
