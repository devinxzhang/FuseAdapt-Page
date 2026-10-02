# FuseAdapt

**FuseAdapt: Parameter-Efficient Multimodal Fusion for Semantic Segmentation with Missing Modalities**  
Xin Zhang and Robby T. Tan · National University of Singapore · NeurIPS 2026 (Poster)

[Project page](https://devinxzhang.github.io/FuseAdapt-Page/) · [Paper PDF](https://devinxzhang.github.io/FuseAdapt-Page/paper/fuseadapt.pdf) · [OpenReview](https://openreview.net/forum?id=SWGx6oxOoy)

FuseAdapt combines modality-private Q/V low-rank adaptation, cross-modal routing of FFN residual activations, and Predictive Modality Modeling for missing-modality semantic segmentation. Evaluation covers MCubeS, DELIVER, and MUSES. PMM's teacher and predictor are removed at inference.

This repository contains the **project website**, not the training implementation. A training-code release link has not yet been supplied. The author revision uses the title above; the OpenReview record may retain the original title, “FuseAdapt: Adaptation-Space Fusion for Multi-Modal Semantic Segmentation with Missing Modalities.”

## Website maintenance

The site is plain HTML/CSS/JavaScript, with no build step or runtime dependencies. GitHub Pages publishes the root of `main`.

```sh
python3 -m http.server 8000
```

Update `index.html`, `citation.bib`, `CITATION.cff`, and the JSON-LD / citation metadata together when changing the title or publication details. Replace `paper/fuseadapt.pdf` when updating the author manuscript. All quantitative results are transcribed from the authors' final rebuttal and manuscript; no new experiments are implied by this website.

The site provides a canonical URL, scholarly citation metadata, ScholarlyArticle JSON-LD, a sitemap, semantic static HTML, meaningful figure descriptions, and downloadable BibTeX. These support discovery and accurate attribution but do not guarantee search indexing or citations. Funding and competing-interest text is omitted pending author confirmation.

## Citation

See [citation.bib](citation.bib) or use:

```bibtex
@inproceedings{zhang2026fuseadapt,
  title = {FuseAdapt: Parameter-Efficient Multimodal Fusion for Semantic Segmentation with Missing Modalities},
  author = {Zhang, Xin and Tan, Robby T.},
  booktitle = {Advances in Neural Information Processing Systems},
  year = {2026},
  url = {https://openreview.net/forum?id=SWGx6oxOoy}
}
```
