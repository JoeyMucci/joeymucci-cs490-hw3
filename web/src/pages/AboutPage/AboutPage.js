import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p className="font-light">
        Hi this is Joey&apos;s Donut Blog. I am continuing my journey to become
        <strong> the strongest </strong> web developer.
      </p>
    </>
  )
}

export default AboutPage
