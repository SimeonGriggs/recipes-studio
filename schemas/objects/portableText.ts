import { defineType } from "sanity";

export default defineType({
    title: 'Portable Text',
    name: 'portableText',
    type: 'array',
    of: [
      {
        type: 'block',
        styles: [
          { title: 'Normal', value: 'normal' },
          { title: 'H2', value: 'h2' },
          { title: 'H3', value: 'h3' },
          { title: 'Quote', value: 'blockquote' },
        ],
        lists: [],
        marks: {
          decorators: [
            { title: 'Strong', value: 'strong' },
            { title: 'Emphasis', value: 'em' },
          ],
        //   annotations: [
        //     { type: 'temperature' },
        //   ],
        },
      },
    ],
  })