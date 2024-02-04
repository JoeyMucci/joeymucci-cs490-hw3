// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        name: 'Rudolph Wilson',
        body: 'This is a blog post of superior quality',
        createdAt: '2024-02-02T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    id: 1,
    email: 'fortran@ada.net',
    roles: 'moderator',
  })

  return (
    <Comment
      comment={{
        name: 'Rudolph Wilson',
        body: 'This is a blog post of superior quality',
        createdAt: '2024-02-02T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}
