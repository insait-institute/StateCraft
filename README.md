# StateCraft: Augmenting Video World Models with Abstract-State Reasoning

Source of the StateCraft project page, live at <https://insait-institute.github.io/StateCraft/>.
Paper: <https://arxiv.org/abs/2610.19795>.

Static HTML in the
[Nerfies](https://github.com/nerfies/nerfies.github.io) style (Bulma, no build step); every asset is
self-hosted, with no analytics and no third-party requests.

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
./serve.sh    # http://127.0.0.1:8000
```

## Layout

- `index.html`: the page.
- `static/videos`, `static/images`: clips and figures.
- `static/scrub/rollout`: frames for the rollout slider.
- `static/player`: the recorded runs behind the two step-through players (`static/js/player.js`).

## License

Website template adapted from Nerfies, licensed under
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
Bundled libraries: Bulma (MIT), bulma-carousel / bulma-slider (MIT), Font Awesome Free
(icons CC BY 4.0, code MIT), Academicons (SIL OFL 1.1), jQuery (MIT).
Google Sans and Noto Sans are self-hosted copies from Google Fonts (latin subsets), under the
SIL Open Font License 1.1 (`static/fonts/OFL-GoogleSans.txt`, `static/fonts/OFL-NotoSans.txt`).
