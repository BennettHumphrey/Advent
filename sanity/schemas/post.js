import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
    }),
    defineField({
      name: 'artistImage',
      title: 'Artist Image',
      type: 'image',
    }),
    defineField({
      name: 'workTitle',
      title: 'Work Title',
      type: 'string',
    }),
    defineField({
      name: 'work',
      title: 'Work',
      type: 'image',
    }),
  ],
})
