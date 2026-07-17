---
"@osdk/react-components": minor
---

Add an `isLoading` prop to `CbacBanner`/`BaseCbacBanner` that renders an animated skeleton placeholder matching the banner's width and height. On the OSDK `CbacBanner`, it is OR'd with the banner query's own loading state so the skeleton also shows automatically while marking data is being fetched.
