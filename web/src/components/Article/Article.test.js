import { render, screen, waitFor } from '@redwoodjs/testing'

import { standard } from 'src/components/CommentsCell/CommentsCell.mock'

import Article from './Article'

const ARTICLE = {
  id: 1,
  title: 'First post',
  body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
  user: {
    create: {
      id: 33,
      name: 'bullylmao',
      email: 'throh@lmao.org',
      hashedPassword:
        'ad9tttttttttt54449361eeeb775d8a12f3975a3722953fd8e326dd108d5645',
      salt: '1c99de412b219ttttf4665296211adce',
      resetToken: null,
      resetTokenExpiresAt: null,
      roles: 'admin',
    },
  },
  createdAt: new Date().toISOString(),
}

describe('Article', () => {
  it('renders a blog post', () => {
    render(<Article article={ARTICLE} />)

    expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
    expect(screen.getByText(ARTICLE.body)).toBeInTheDocument()
  })

  it('renders comments when displaying a full blog post', async () => {
    const comment = standard().comments[0]
    render(<Article article={ARTICLE} />)

    await waitFor(() =>
      expect(screen.getByText(comment.body)).toBeInTheDocument()
    )
  })

  it('renders a summary of a blog post', () => {
    render(<Article article={ARTICLE} summary={true} />)

    expect(screen.getByText(ARTICLE.title)).toBeInTheDocument()
    expect(
      screen.getByText(
        'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Str...'
      )
    ).toBeInTheDocument()
  })

  it('does not render comments when displaying a summary', async () => {
    const comment = standard().comments[0]
    render(<Article article={ARTICLE} summary={true} />)

    await waitFor(() =>
      expect(screen.queryByText(comment.body)).not.toBeInTheDocument()
    )
  })
})
