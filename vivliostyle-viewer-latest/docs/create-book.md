# Create Book

## Introduction

Create Book makes an environment for creating a book. Write your manuscript using a template, customize it, and then use [Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli) to generate your book. You do not need specialized HTML or CSS knowledge.

In this document, a PDF file that contains multiple pages is collectively referred to as a “book”. Vivliostyle is a library for making books of various formats. Create Book is a product that makes it easier to deliver Vivliostyle technology to more users.

## Versions covered by this document

- [v0.1.x]

## Target readers of this document

- Have some basic familiarity with running commands in a terminal
- Have some basic knowledge about markdown notation
- Would like to make the following types of books without any hassle:
    - technical books
    - academic articles
    - novels (vertical text is possible)
    - Slides

## Create Book operating environment

- macOS 10.13 (High Sierra) or higher
- Windows 10
- The following must be installed.
    - [node.js](https://nodejs.org/) (v10 or higher, except v14.0.0)
- The following installations are also required to output PDF file for printing.
    - [ghostscript](https://www.ghostscript.com/)
    - [Xpdf](https://www.xpdfreader.com/)

## Steps to create a book

You can create a book by following these steps:

1. Run Create Book and make a project folder.
2. Move to the created project folder.
3. Edit an existing markdown file and write a manuscript.
4. Edit and customize `vivliostyle.config.js`.
5. Npm runs [Vivliostyle CLI](https://github.com/vivliostyle/vivliostyle-cli) to generate a book.

Because the project folders that are created are managed in git, git clients such as [SourceTree](https://www.sourcetreeapp.com/ ) allow you to make version-controlled work, such as comparing and reverting to the current version with the previous version (If versioning is unnecessary, it is perfectly safe to ignore it).  Note that git is not discussed in this document. Please refer to various manuals and commentary sites.

## About installation

The installation commands are as follows.  `<directory>` is the name of the book's project folder that you want to create. Non-ASCII characters are not allowed.

```
npm create book <directory>
```

If the specified project folder already exists and the folder is not empty, Create Book will fail (the installation succeeds if the folder is empty).

In addition to [npm](https://www.npmjs.com/ ), [yarn](https://classic.yarnpkg.com/ ) is also available, but we will use the more common npm in this document.

During installation, you can specify the following items (fig-1). You don't have to specify everything here. If you do not want to specify it, you can skip to the next item by the return key (You can make changes later by editing `vivliostyle.config.js` below).

<figure>

![](./images/tutorial-CB-fig1.png)
<figcaption>fig-1. Installing Create Book. You specify mybook as the project folder name. Although a warning comes out from npm, there is no effect on the user.</figcaption>
</figure>

- description (A brief description of the contents of the book. In addition to alphanumeric characters, kanji katakana hiragana can also be used)
- author name (In addition to alphanumeric characters, kanji, katakana, and hiragana are also available)
- author email
- license (Select the type of distribution license with the up and down arrow keys)
- choose theme (Select the type of theme package with the up and down arrow keys)
    - `@vivliostyle/theme-bunko`……Japanese novel style (vertical text).
    - `@vivliostyle/theme-techbook`……Technical books.
    - `@vivliostyle/theme-slide`……Slide document.
    - `@vivliostyle/theme-academic`……Academic articles.

In addition, the theme package is also [OSS development](https://github.com/vivliostyle/themes). As development progresses, it may be added to other additions.

## How Create Book works

The fig-2 below shows the contents of the actual folder installed (in this case, `mybook`) . Edit files from ❶ to ❸, to make a book to suit your own intentions.

<figure>

![](./images/tutorial-CB-fig2.png)
<figcaption>fig-2 The contents of the mybook folder generated by the installation. Gray files and folders are invisible attributes.</figcaption>
</figure>

- ❶ `manuscript.md` ……Manuscript of the book in markdown format.
- ❷ `vivliostyle.config.js` ……Setting files that customize books such as adding a format, table of contents, or a colophon.
- ❸ `package.json` ……Configuration file for the entire project folder.

Create Book uses [npm](https://www.npmjs.com/ ), a command line interface that comes with [Node.js](https://nodejs.org/ ), one of the JavaScript execution environments, to made a book. During installation, Create Book does the following:

- Create `vivliostyle.config.js` and  `package.json`, which are configuration files referenced by npm.
- Create a template for the manuscript, `manuscript.md`.
- Install various libraries used by npm in the `node_modules` folder.

Npm refers to the above configuration file and, using the above library, drives  Vivliostyle CLI to typesetting the manuscript.md, then output  to a PDF file.

## Writing manuscripts

You can write your manuscript by editing the "manuscript.md" (fog-2❶) file that is created when you install it as a template. The notation is [VFM (Vivliostyle Flavored Markdown)](https://vivliostyle.github.io/vfm/#/vfm#table-of-contents) that extends the standard Markdown [GFM  (GitHub Flavored Markdown)](https://github.github.com/gfm/ ) for books.

VFM is upward compatible with GFM. Therefore, if you are familiar with GFM, you can use GFM for the basic notation and you only need to learn VFM.

###  GFM (GitHub Flavored Markdown)

See the external site below.

- [Basic writing and formatting syntax /GitHub](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax) (However, [Using emoji](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax#using-emoji) in the article is not supported by Create Book)
-  [Working with advanced formatting /GitHub](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting)

### VFM (Vivliostyle Flavored Markdown)

For detailed specifications, please refer to the following.

- [Vivliostyle Flavored Markdown: Working Draft](https://vivliostyle.github.io/vfm/#/vfm)

However, only the following items are implemented in the current version:

- [Hard new line](https://vivliostyle.github.io/vfm/#/vfm#hard-new-line)
- [Code](https://vivliostyle.github.io/vfm/#/vfm#code)
    - [with caption](https://vivliostyle.github.io/vfm/#/vfm#with-caption)
- [Image (and its size specification)](https://vivliostyle.github.io/vfm/#/vfm#image)

    In addition, although it has not been written in the specification yet, you can specify the size of the image by the following notation. The image file is specified as a relative path in (  ). xxx is a number, the unit is px, but omitted. You can use `width` as well as `height`.

    ```md
    ![fig-n](./foo.png){width=xxx}
    ```
    - [with caption](https://vivliostyle.github.io/vfm/#/vfm#with-caption-2)
- [Ruby](https://vivliostyle.github.io/vfm/#/vfm#ruby)
- [Raw HTML](https://vivliostyle.github.io/vfm/#/vfm#raw-html)
- [Frontmatter](https://vivliostyle.github.io/vfm/#/vfm#frontmatter) (Specify the title of a book)

### Other notation

#### Notes

It is not specified by GFM and VFM, but Endnotes are  available in the notation of the following external sites.

- [remark-footnotes](https://www.npmjs.com/package/remark-footnotes)

Also, if you select the theme package '@vivliostyle/theme-techbook', footnotes are available using the following notation: However, it is a little cumbersome:

```md
 <span class="footnote">text</span>
```

#### Tate-chu-yoko (Horizontal-in-Vertical)

If you select the theme package `@vivliostyle/theme-bunko`, you will be able to write Tate-chu-yoko (Horizontal-in-Vertical) by the following notation. For information on selecting a theme package, see Specify theme package below.

```md
ええと<span class="tcy">4</span>×<span class="tcy">5</span>＝<span class="tcy">12</span>、<span class="tcy">4</span>×<span class="tcy">6</span>＝<span class="tcy">13</span>、<span class="tcy">4</span>×<span class="tcy">7</span>——ああ、もう！　そんな調子じゃいつまでも<span class="tcy">20</span>にならなくてよ！
```

## Book customization

By editing `vivliostyle.config.js` (fig-2❷), you can customize the following:

### Specify a title of a book

Specify `title` as follows to become a title of a book (the value is wrapped in single quotes: same as below).

```js
title: 'mybook',
```

### Specify a author name and e-mail address

The `author name` entered with author name during installation is the default, but if you specify the following, it takes precedence.

```js
author: 'yamada <yamadataro@example.com>',
```

### Specify a language to use

You can specify a language used in the book by removing the `language` comment-out (slash portion). The default English is `en`, and Japanese is `ja`. You can also specify the two-character code specified in [ISO 639-1](https://www.loc.gov/standards/iso639-2/php/code_list.php ).

```js
// language: 'ja',
```
↓
```js
language: 'ja',
```

### Specifying a format

You can specify the format by removing the `size` comment-out.[CSS Paged Media Module Level 3 (7.1. Page size)](https://drafts.csswg.org/css-page-3/#page-size-prop ) can specify a following values. Note that a general B5 in Japan is `JIS-B5` (as well as B4).

- `A5`
- `A4` (default)
- `A3`
- `B5`
- `B4`
- `JIS-B5`
- `JIS-B4`
- `letter`
- `legal`
- `ledger`

```js
// size: 'A4',
```
↓
```js
size: 'JIS-B5',
```

### Specify a theme package

A theme package specified as `theme` during installation is loaded by default, but if you specify any theme package here, it will be overridden.

```js
theme: 'sample.css',
```
A theme package contains a CSS file that defines the style of the book. Please refer to A specification below.

- [Theme Design Guideline (Draft)](https://github.com/vivliostyle/themes/blob/master/DESIGN.md)

The theme package can be obtained from the following.

- [npm: keywords / vivliostyle-theme](https://www.npmjs.com/search?q=keywords:vivliostyle-theme)

### Publication of multiple manuscripts

You can combine multiple markdown files into one book by specifying the following in the `entry` part as follows.

```js
entry: [
    "filename1.md",
    "filename2.md",
    "filename3.md",
],
```

### Add a table of contents

You can add a table of contents by following these steps.

1. Prepare a markdown file for the following table of contents in advance, and save the file name as `index.md` in the project folder: Note that there must be an empty line between the line with the HTML tag and the markdown line. Otherwise, an error will occur.

```md
# title of the book

<nav id="toc" role="doc-toc">

## table of contents

- [Article title1](filename1.html)
- [Article title2](filename2.html)
- [Article title3](filename3.html)

</nav>
```
2. On the first line of `entry` in `vivliostyle.config.js`, specify the `index.md` that you provided.

```js
entry: [
    "index.md",
    "filename1.md",
    "filename2.md",
    "filename3.md",
],
```

### Add a colophon

You can add a colophon by following these steps.

1. Prepare the following markdown file in advance and save the file name as `colophon.md` in the project folder: Note that there must be an empty line between the line with the HTML tag and the markdown line. Otherwise, an error will occur.

```md
<section id="colophon" role="doc-colophon">

## 私が書いた本
20xx年x月x日　初版発行
- 発行　私が書いた本刊行会
- 編集　山田太郎
- 印刷　Sample Printing
© My Book Publishing, 20xx

</section>
```
2. In the last line of entry in `vivliostyle.config.js`, specify the `colophon.md` that you provided.

```js
entry: [
    "index.md",
    "filename1.md",
    "filename2.md",
    "filename3.md",
    "colophon.md",
],
```

### Generation of a book

Npm scripts will generate a book using Vivliostyle CLI. The following command will output a PDF file with a same name as the project folder.

If you continue to run a same command, a last generated PDF file will be overwritten without warning. If you want to keep it, please be careful to evacuate to another place in advance.

```
npm run build
```

<figure>

![](./images/tutorial-CB-fig3.png)
<figcaption>fig-3 Generating books using Vivliostyle CLI.</figcaption>
</figure>

### Generation of PDF files for four-color printing

You can create a four-color printable PDF file that conforms to the PDF/X-1a standard by editing `package.json` (fig-2❸) and adding the `--press-ready` option to the `"vivliostyle build"` section as follows.

```js
"build": "vivliostyle build",
```
↓
```js
"build": "vivliostyle build --press-ready",
```
When this option is specified, the entire image is rasterized only if the data contains transparent images such as drop shadows, resulting in a slight bleeding on the edges of the characters. It is not a big problem, but if you are worried, please consult with the printing office in advance. [Acrobat Pro DC](https://acrobat.adobe.com/jp/ja/acrobat/acrobat-pro.html ), etc. can be used to avoid this behavior by converting to PDF/X-4.

The following is a capture at the time of generation (fig-4).

<figure>

![](./images/tutorial-CB-fig4.png)
<figcaption>fig-4 PDF file conforming to PDF/x-1a standard (4 colors).</figcaption>
</figure>

## limitations

The current version has the following limitations:

- It is not possible to output to a PDF file including any cover image. If you want to use this feature, please use a PDF editor, such as [Acrobat Pro DC](https://acrobat.adobe.com/us/en/acrobat/acrobat-pro.html )and [Preview (mac)](https://support.apple.com/guide/preview/add-delete-or-move-pdf-pages-prvw11793/mac ).
- Grayscale print PDF file cannot be output. This problem can be avoided by converting it with [Acrobat Pro DC](https://acrobat.adobe.com/us/en/acrobat/acrobat-pro.html).
- If the directory name contains non-ASCII characters, an error occurs.

## Afterword

As you can see from the version number, Create Book is still under development. And all Vivliostyle products are open source software. Please send us your thoughts and reports on how it should be done, what features are missing, or what errors you encountered. Of course, if you want to participate in development, you are welcome. For more information, please see the following page.

- [Community /Vivliostyle](https://vivliostyle.org/community/)