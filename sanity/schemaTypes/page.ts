import { defineType, defineField } from 'sanity'

export const page = defineType({
    name: "page",
    title: "Hlavní stránka",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Hlavní titulek",
            type: "string",
            validation: (Rule) => Rule.required()
        })
    ]
})