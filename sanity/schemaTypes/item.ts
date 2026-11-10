import { defineType, defineField } from 'sanity'

export const item = defineType({
    name: "item",
    title: "Položka",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Titulek",
            type: "string",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "paragraph",
            title: "Odstavec",
            type: "string"
        })
    ]
})