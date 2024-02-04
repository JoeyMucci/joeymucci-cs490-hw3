import { adminPost, createPost, updatePost, deletePost } from './adminPosts'

describe('posts', () => {
  scenario('creates a post', async () => {
    mockCurrentUser({ roles: 'admin' })
    const result = await createPost({
      input: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            id: 10,
            name: 'Karenlmao',
            email: 'bruh@lmao.org',
            hashedPassword:
              'ad9tttttttttt54419361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
            salt: '1c99de412b219ttttf4665293211adce',
            resetToken: null,
            resetTokenExpiresAt: null,
            roles: 'admin',
          },
        },
      },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a post', async (scenario) => {
    mockCurrentUser({ roles: 'admin' })
    const original = await adminPost({ id: scenario.post.one.id })
    const result = await updatePost({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a post', async (scenario) => {
    mockCurrentUser({ roles: 'admin' })
    const original = await deletePost({ id: scenario.post.one.id })
    const result = await adminPost({ id: original.id })

    expect(result).toEqual(null)
  })
})
