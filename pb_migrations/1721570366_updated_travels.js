/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwvnjvlpbbnc9se")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g5hspxb6",
    "name": "snippet",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fwvnjvlpbbnc9se")

  // remove
  collection.schema.removeField("g5hspxb6")

  return dao.saveCollection(collection)
})
