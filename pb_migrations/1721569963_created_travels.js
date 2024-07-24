/// <reference path="../pb_data/types.d.ts" />
migrate(
  (db) => {
    const collection = new Collection({
      id: 'fwvnjvlpbbnc9se',
      created: '2024-07-21 13:52:43.339Z',
      updated: '2024-07-21 13:52:43.339Z',
      name: 'travels',
      type: 'base',
      system: false,
      schema: [
        {
          system: false,
          id: 'ncfwt7pn',
          name: 'title',
          type: 'text',
          required: true,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
        {
          system: false,
          id: 'uuihxcw3',
          name: 'slug',
          type: 'text',
          required: true,
          presentable: false,
          unique: false,
          options: {
            min: null,
            max: null,
            pattern: '',
          },
        },
        {
          system: false,
          id: 't95vcry6',
          name: 'content',
          type: 'editor',
          required: true,
          presentable: false,
          unique: false,
          options: {
            convertUrls: false,
          },
        },
        {
          system: false,
          id: 'dtdkf6fh',
          name: 'travelled',
          type: 'date',
          required: true,
          presentable: false,
          unique: false,
          options: {
            min: '',
            max: '',
          },
        },
        {
          system: false,
          id: '141li294',
          name: 'hero',
          type: 'file',
          required: true,
          presentable: false,
          unique: false,
          options: {
            mimeTypes: [],
            thumbs: [],
            maxSelect: 1,
            maxSize: 5242880,
            protected: false,
          },
        },
        {
          system: false,
          id: '6slwqwpm',
          name: 'carousel',
          type: 'file',
          required: false,
          presentable: false,
          unique: false,
          options: {
            mimeTypes: [],
            thumbs: [],
            maxSelect: 99,
            maxSize: 5242880,
            protected: false,
          },
        },
      ],
      indexes: [
        'CREATE INDEX `idx_UsqfxKD` ON `travels` (`travelled`)',
        'CREATE UNIQUE INDEX `idx_Ym6FTnR` ON `travels` (`slug`)',
      ],
      listRule: null,
      viewRule: null,
      createRule: null,
      updateRule: null,
      deleteRule: null,
      options: {},
    })

    return Dao(db).saveCollection(collection)
  },
  (db) => {
    const dao = new Dao(db)
    const collection = dao.findCollectionByNameOrId('fwvnjvlpbbnc9se')

    return dao.deleteCollection(collection)
  },
)
