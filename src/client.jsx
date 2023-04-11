import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const SanityClient = sanityClient({
    projectId: 'jd0psnud',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2021-10-21',
})

const builder = imageUrlBuilder(SanityClient)

export const urlFor = (source) => {
    return builder.image(source)
  }