---
title: 'Home'
date: 2023-10-24
type: landing

sections:
  - block: hero
    content:
      eyebrow: The open-source page builder
      title: Build your landing page with [Hugo Blox]
      text: Production-grade blocks. Edit in Markdown and YAML. Deploy anywhere — for free.
      primary_action:
        text: Get Started
        url: https://hugoblox.com/templates/
        icon: rocket-launch
        style: gradient
      secondary_action:
        text: Read the docs
        url: https://docs.hugoblox.com
        icon: book-open
        style: ghost
      announcement:
        badge:
          text: NEW
          color: primary
        text: Hugo Blox v1 is here.
        link:
          text: Read more
          url: "/blog/"
      trust:
        stars: 5
        text: Loved by **10,000+** developers · Trusted by teams at Google, OpenAI, NVIDIA
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      css_class: "dark"
      section_break: fade-bottom
      background:
        # Deep navy base; radial glow paints a soft violet spotlight from above
        color: "#0a0e27"
        gradient:
          type: radial
          start: "rgba(124,58,237,0.45)"
          end: "transparent"
          position: "50% -10%"
          shape: ellipse
          size: "80% 80%"
        # Mesh orbs add depth and atmosphere on top of the radial glow
        gradient_mesh:
          enable: true
          style: orbs
          intensity: medium
          animation: pulse
          colors: ["primary-500/25", "secondary-500/25"]
          orb_count: 2
          positions: ["top-1/3 left-1/4", "bottom-1/3 right-1/4"]
          sizes: ["w-[32rem] h-[32rem]", "w-[26rem] h-[26rem]"]
  - block: logos
    content:
      title: Trusted by teams at
      items:
        - icon: brands/github
          name: GitHub
        - icon: brands/google
          name: Google
        - icon: brands/microsoft
          name: Microsoft
        - icon: brands/nvidia
          name: NVIDIA
        - icon: brands/openai
          name: OpenAI
        - icon: brands/anthropic
          name: Anthropic
        - icon: brands/stripe
          name: Stripe
        - icon: brands/vercel
          name: Vercel
    design:
      layout: marquee
      logo_style: grayscale
      logo_size: md
      marquee_speed: 35
      css_class: "bg-gray-50 dark:bg-gray-900"
      spacing:
        padding: ["2rem", 0, "2rem", 0]

  - block: stats
    content:
      items:
        - statistic: "1M+"
          description: |
            Websites built  
            with Hugo Blox
        - statistic: "10k+"
          description: |
            GitHub stars  
            since 2016
        - statistic: "3k+"
          description: |
            Discord community  
            for support
    design:
      layout: minimal
      numbers_gradient: true
      css_class: "bg-white dark:bg-gray-900"
      spacing:
        padding: ["3rem", 0, "3rem", 0]
  - block: steps
    content:
      title: Get started in minutes
      text: No credit card required. Deploy to GitHub Pages in one click.
      items:
        - title: Choose a template
          text: Pick from our library of production-ready templates — academic CV, startup landing page, research lab, and more.
          icon: rectangle-stack
        - title: Customise your content
          text: Edit in simple YAML and Markdown. No coding required — everything configured through intuitive parameters.
          icon: pencil-square
        - title: Deploy everywhere
          text: Push to GitHub and your site deploys automatically. Free hosting on GitHub Pages, Netlify, or Vercel.
          icon: rocket-launch
    design:
      layout: horizontal
      marker_style: icon
      connector: none

  - block: features
    id: features
    content:
      subtitle: Why Hugo Blox
      title: Build sites in blocks, not code
      text: Production-grade page-building blocks. Edit in Markdown and YAML. Deploy anywhere.
      items:
        - name: Swappable blocks
          icon: rectangle-group
          description: Compose pages from a curated catalog of pre-designed sections — heroes, pricing, FAQs, comparison tables, testimonials, and more. Mix, match, and customise without touching the underlying HTML.
        - name: Lightning fast
          icon: bolt
          description: Sub-3-second builds and 100/100 Lighthouse scores by default — Tailwind CSS plus Hugo's native speed.
        - name: No-code editing
          icon: code-bracket
          description: Edit content in Markdown and configure with readable YAML. No JavaScript required.
        - name: SEO out of the box
          icon: magnifying-glass
          description: Automatic sitemaps, RSS feeds, JSON-LD, and rich metadata — SEO and syndication handled.
        - name: Deploy anywhere
          icon: rocket-launch
          description: Push to GitHub and deploy to Pages, Netlify, Vercel, or Cloudflare in minutes.
        - name: Loved by the community
          icon: star
          description: 10,000+ GitHub stars and 3,000+ Discord members. Rated 5-stars by the community.
    design:
      layout: bento
      css_class: "bg-gray-50 dark:bg-gray-900/50"
  - block: comparison-table
    id: compare
    content:
      subtitle: How we compare
      title: Why teams switch to Hugo Blox
      text: We picked the categories that matter to teams shipping today.
      competitors:
        - name: Hugo Blox
          tagline: Open-source page builder
          highlight: true
          badge: Recommended
        - name: WordPress
          tagline: Self-hosted CMS
        - name: Squarespace
          tagline: Hosted website builder
        - name: Webflow
          tagline: Visual web builder
      rows:
        - feature: Performance
          category: true
        - feature: Build time
          note: 100 pages, cold cache
          values: ["<3s", "60s+", "—", "20s+"]
        - feature: Lighthouse score
          values: ["100", "70", "90", "95"]
        - feature: Cost & ownership
          category: true
        - feature: Free tier
          values: [true, true, false, false]
        - feature: Self-hosted
          values: [true, true, false, false]
        - feature: Source code access
          values: [true, true, false, false]
          highlight: true
        - feature: Monthly cost
          values: ["Free", "$5+ hosting", "$23/mo", "$29/mo"]
        - feature: Developer experience
          category: true
        - feature: Git-based content
          values: [true, false, false, false]
        - feature: AI site builder
          values: [true, false, false, "partial"]
        - feature: Custom code
          values: [true, true, "limited", "limited"]
      cta:
        text: Start free
        url: https://hugoblox.com/templates/
        icon: hero/arrow-right
    design:
      row_striping: true
      css_class: "bg-gray-50 dark:bg-gray-900/50"

  - block: pricing
    id: pricing
    content:
      title: "Simple, transparent pricing"
      subtitle: "Start for free. Upgrade when you're ready. No credit card required."
      billing_toggle:
        enabled: true
        monthly_label: Monthly
        yearly_label: Yearly
        yearly_discount: "Save 20%"
      tiers:
        - name: Starter
          description: "Perfect for personal projects and portfolios."
          price:
            monthly: "0"
            yearly: "0"
            currency: "$"
          price_note: "Free forever"
          highlight: false
          cta:
            text: Get started free
            url: https://hugoblox.com/templates/
            icon: hero/arrow-right
            style: outline
          features:
            - text: "5 pages"
              included: true
            - text: "1 GB storage"
              included: true
            - text: "Custom domain"
              included: false
            - text: Analytics dashboard
              included: false
            - text: Priority support
              included: false
        - name: Pro
          badge: Most popular
          description: "For freelancers and teams building seriously."
          price:
            monthly: "19"
            yearly: "15"
            currency: "$"
          price_suffix: /month
          price_note_monthly: "Billed monthly"
          price_note_yearly: "Billed annually"
          highlight: true
          cta:
            text: Start free trial
            url: https://hugoblox.com/templates/
            icon: hero/arrow-right
            style: primary
          features:
            - text: Unlimited pages
              included: true
            - text: "10 GB storage"
              included: true
            - text: Custom domain
              included: true
            - text: Analytics dashboard
              included: true
            - text: Priority support
              included: false
        - name: Business
          description: "Scale with confidence and dedicated support."
          price:
            monthly: "49"
            yearly: "39"
            currency: "$"
          price_suffix: /month
          price_note_monthly: "Billed monthly"
          price_note_yearly: "Billed annually"
          highlight: false
          cta:
            text: Start free trial
            url: https://hugoblox.com/templates/
            icon: hero/arrow-right
            style: outline
          features:
            - text: Unlimited pages
              included: true
            - text: "100 GB storage"
              included: true
            - text: Custom domain
              included: true
            - text: Analytics dashboard
              included: true
            - text: Priority support
              included: true

  - block: cta-image-paragraph
    id: solutions
    content:
      items:
        - title: Build your future-proof website
          text: As easy as 1, 2, 3!
          feature_icon: check
          features:
            - "Future-proof - edit your content in text files"
            - "Website is generated by a single app, Hugo"
            - "No JavaScript knowledge required"
          # Upload image to `assets/media/` and reference the filename here
          image: build-website.png
          button:
            text: Get Started
            url: https://hugoblox.com/templates/
        - title: Large Community
          text: Join our large community on Discord - ask questions and get live responses
          feature_icon: bolt
          features:
            - "Dedicated support channel"
            - "3,000+ users on Discord"
            - "Share your site and get feedback"
          # Upload image to `assets/media/` and reference the filename here
          image: coffee.jpg
          button:
            text: Join Discord
            url: https://discord.gg/z8wNYzb
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
  - block: testimonials
    content:
      title: ""
      text: ""
      items:
        - name: "Hugo Smith"
          role: "Marketing Executive at X"
          # Upload image to `assets/media/` and reference the filename here
          image: "testimonial-1.jpg"
          text: "Awesome, so easy to use and saved me so much work with the swappable pre-designed sections!"
    design:
      spacing:
        # Reduce bottom spacing so the testimonial appears vertically centered between sections
        padding: ["6rem", 0, 0, 0]

  - block: faq
    id: faq
    content:
      title: Frequently asked questions
      subtitle: Everything you need to know before getting started.
      items:
        - question: Do I need to know how to code?
          answer: |
            No. Hugo Blox is designed for everyone — edit your site in plain Markdown and YAML. If you do know code, every block is open source and customisable down to the CSS.
        - question: Where is my site hosted?
          answer: |
            Anywhere you like. Hugo Blox builds a static site you can deploy to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host — many on a free tier.
        - question: Can I migrate from WordPress, Squarespace, or Webflow?
          answer: |
            Yes. Your content lives in Markdown files, so you own it and can move it freely. We provide migration guides for the most common platforms.
        - question: Is it really free?
          answer: |
            The framework, blocks, and starter templates are MIT-licensed and free forever. Premium templates and the AI site builder are optional paid upgrades that fund continued development.
        - question: Can I use my own domain?
          answer: |
            Yes — every host we recommend (GitHub Pages, Netlify, Vercel, Cloudflare) supports custom domains for free.
        - question: How does the AI site builder work?
          answer: |
            Describe what you want and the AI assembles a full site from our block catalog — copy, layout, theme, and content scaffolding included. Everything generated is yours to edit, version, and deploy.

  - block: cta-card
    content:
      title: Ready to ship your site?
      text: Free, open source, and production-grade. Deploy your first site in minutes.
      button:
        text: Get Started Free
        url: https://hugoblox.com/templates/
    design:
      section_break: fade-top
      card:
        # Brand-coloured card with subtle gradient depth
        css_class: "bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white shadow-2xl"
        css_style: ""
---
