import React from 'react'
import { FakeBrute } from './FakeBrute'

export const HomeHeader = () => {
  return (
    <>
      <h1>
        Hi 👋, I&#39;m <span style={{ color: 'blue' }}>Alex</span>.
      </h1>

      <h3>
        I am a <FakeBrute word='HACKER' keySpace='HACKERS347#' />,
        <a
          style={{ color: 'red' }}
          href={`https://www.youtube.com/channel/UCbHYwhbarpO6vXgbIYmcXnQ`}
          title={`YouTube`}
          target='_blank'
          rel='noopener noreferrer'
        >
          YouTuber
        </a>
        , Chief Innovation Officer, coffee snob, kilt-wearer, DEF CON goon,
        <a
          style={{ color: 'green' }}
          href={`https://dcdark.net/`}
          title={`DC Darknet`}
          target='_blank'
          rel='noopener noreferrer'
        >
          DarkNet staff
        </a>
        , and a few other things.
        {/* <Navigation items={attachSocialIcons(social)} iconOnly /> */}
        <p />
        On this site we explore the ideas, strategies, and
        <a
          style={{ color: 'violet' }}
          href={`https://vault.alexchaveriat.com/`}
          title={`Obsidian Vault`}
          target='_blank'
          rel='noopener noreferrer'
        >
          tools
        </a>
        that help us as hackers live happier, healthier, and more innovative
        lives.
        <p />
        And over at
        <a
          style={{ color: 'orange' }}
          href={`https://newsletter.alexchaveriat.com`}
          title={`Newsletter`}
          target='_blank'
          rel='noopener noreferrer'
        >
          Pursuing Failure
        </a>
        - my sporadic newsletter - I share stories and practical life advice.
        Sign up below if you want to join a tiny community of friendly readers.
        {/* <Navigation items={attachSocialIcons(social)} iconOnly wrapperStyle={{ justifyContent: 'left' }}/> */}
      </h3>

      {/* <Box variant='buttons.group'>
        <ThemeLink href='https://newsletter.alexchaveriat.com' target="_blank" rel="noopener noreferrer">
          <Button>
            My Newsletter
          </Button>
        </ThemeLink>
        <Button variant='white' as={Link} to='/contact'>
          Contact Me
        </Button>
      </Box> */}
    </>
  )
}
