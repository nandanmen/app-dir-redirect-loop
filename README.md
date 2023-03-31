Long loop when exclusively redirecting from `app` to `pages` — does not happen when redirecting from `app` to `app`:

https://user-images.githubusercontent.com/31267630/229208590-34fe3478-9002-4060-8023-17a20d8909e2.mp4

## Reproduction Steps

1. Visit [https://app-dir-redirect-loop.vercel.app](https://app-dir-redirect-loop.vercel.app) (this should take a while to load)
2. Redirect to `/pages` by visiting `/`
3. Redirect to `/app` by visiting `/?app=1`
