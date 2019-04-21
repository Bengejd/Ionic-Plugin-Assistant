<div align="center">
  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-experimental-orange.svg"
      alt="API stability" />
  </a>
  <!-- NPM version -->
  <a href="https://npmjs.org/package/nols">
    <img src="https://img.shields.io/npm/v/nols.svg"
      alt="NPM version" />
  </a>
    <!-- NPM DOWNLOADS -->
  <a href="https://www.npmjs.com/package/nols">
    <img src="https://img.shields.io/npm/dw/nols.svg"
      alt="NPM version" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/Bengejd/NOLS">
    <img src="https://img.shields.io/travis/Bengejd/NOLS/master.svg"
      alt="Build Status" />
  </a>
  <!-- CodeCov -->
  <a href="https://codecov.io/gh/Bengejd/NOLS">
   <img src="https://codecov.io/gh/Bengejd/NOLS/branch/master/graph/badge.svg" />
  </a>
    <!-- GreenKeeper -->
  <a href="https://badges.greenkeeper.io/Bengejd/NOLS.svg">
    <img src="https://badges.greenkeeper.io/Bengejd/NOLS.svg" />
  </a>
      <!-- License -->
  <a href="#">
    <img alt="undefined" src="https://img.shields.io/npm/l/nols.svg" />
  </a>
</div>

_____________________________________________________________________________________

<p align="left">
NOLS is a NodeJs package meant to be used during hybrid mobile app development. Other Node packages allow you to calculate a viewport conversion, but none of them actually help you streamline your development process by applying that conversion in your stylesheets for you. <strong>Until NOLS</strong>.
</p>

<p align="left">
This replaces the need for media queries, if all you want is a uniform UI across any mobile device.
</p>

<p align="left">
You can now write your stylesheet with one device in mind (such as Ionic Lab), and NOLS handles making it pixel perfect (<strong>within reason</strong>) everywhere else.
</p>

## Project Status

NOLS is currently under development and **NOT RECOMMENDED** for production use at this time. 

<h3>About NOLS</h3>

I don't know about you, but I typically write my CSS with one device in mind. During development I work with a 
device that has a view height of `812px` and a view width of `375px`. 

Afterwards, I would always go back, and manually make the conversions, so that the CSS that looks good on my device, looks good on any device. 

This takes a lot of effort on my part because there are a lot of little calculations to be done. So I wanted to streamline this process. Since no one likes stylesheets, NOLS came to life.

What started out as a way to help myself out, has now become a pivotal part of my development process. As a result, I opened-sourced NOLS under the MIT license. So others could benefit as well.

## Example

Still unsure? Check out this [visual example](https://github.com/Bengejd/NOLS/blob/master/.github/NOLS-EXAMPLE.md) of what NOLS does in a real project.

## Important Notes

> It is **HIGHLY RECOMMENDED**  that you commit any files before using NOLS.

### No One Likes Dirty Repos
 
NOLS changes your project level stylesheet files. As a result of this, some changes may be **irreversible** if you do not
commit files before using NOLS or have an IDE with the ability to revert historical changes.
 
If you knowingly use NOLS before backing up your project, you accept all risks associated with NOLS potentially 
breaking your code.

This does not happen often, but it's always a possibility.

## Install

First make sure you have installed the latest version of [node.js](http://nodejs.org/)
(You may need to restart your computer after this step).

Install NOLS From NPM:

    npm install nols -g
    
## Usage

If you have installed NOLS from npm, then from terminal in your project directory, run the command

    nols
    
> Note: `nols` is meant to be run before any minification / compression is done. Running it on minified / compressed files will have adverse effects. Don't say I didn't warn you.
    
### Optional Parameters

|       Parameter       | Default | Explanation                                                                                                                                                       |
|:---------------------:|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  `--entry=` or `--e=` | `./src` | A relative path of the directory you would like NOLS to start in.  Unfortunately, NOLS cannot target specific files, it has to be a parent directory of the file. |
| `--height=` or `--h=` | `N/A`   | The device viewport height you would like NOLS to use in it's conversions.                                                                                        |
|  `--width=` or `--w=` | `N/A`   | The viewport width you would like NOLS to use in it's conversions.                                                                                                |
    
### Modes
|    Mode   | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|:---------:|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Default` | This is the bread and butter of the package. This will ask you a couple questions, such as the directory you would like to target and the viewport height & viewport width that you're working with. By default NOLS targets your `./src/` folder as an entry point, unless one is provided via the prompt, or passed as a parameter in the `nols` command. Afterwards, it reads & converts all stylesheets in your project entry folder (default or provided) to use `vh` and `vw`. |
|  `Revert` | Reverts all changes made by NOLS. This is currently dependent on the assumption that you did not remove any comments left behind by NOLS.  So if you remove a comment, it will skip that value reversion.                                                                                                                                                                                                                                                                           |
|  `Clean`  | This removes all conversion comments left behind by NOLS in your project. This will make it impossible to reverse a conversion in the future. This command depends on the comments left behind by `nols`, so do not remove or alter them unless you're sure that the conversion worked correctly. Only run this command **AFTER VERRIFICATION** that the conversions ran correctly, and did not break your application code.                                               |                                                                                                                                                                                                                      |

## Supported Attributes
These are the attributes that NOLS will attempt to convert for you. If you would like something to be supported by NOLS 
that isn't currently, or estabilished as known in the **unsupported attributtes** list, add it to 
[our attributes request-list](https://github.com/Bengejd/NOLS/issues/3).

| X Attributes                     | Y Attributes                  | XY Attributes                  |
|----------------------------------|-------------------------------|--------------------------------|
| height / min-height / max-height | width / min-width / max-width |                                |
| top / bottom                     | left / right                  |                                |
| margin-top / margin-bottom       | margin-left / margin-right    | margin                         |
| padding-top / padding-bottom     | padding-left / padding-right  | padding                        |
| transform: translateY            | transform: translateX         | transform: translate           |
| line-height                      | word-spacing / letter-spacing |                                |
|                                  | outline-width                 |                                |
|                                  | column-width                  |                                |

## Unsupported Attributes

Nols has a few attributes that are not currently supported in this version. Some of them are because of usage 
limitations, others are because I simply haven't gotten around them yet.

| MISC                                  |
|---------------------------------------|
| outline - `outline: 5px solid green;` |
| font-size - `font-size: 12px;`        |
| border-radius - All types             |

### Unit Compatibility 
NOLS is only compatible with pixel (`px`) unit values at this time. That means NOLS will **skip** over any value 
containing the following:

#### Absolute Units
`cm, mm, in, pt, pc`

#### Relative Units
`em, ex, ch, rem, vh, vw, vmin, vmax, %`

## Test Todo: 
- [x] Implement unit tests as much as possible.
- [x] Create more manual file tests.
- [x] Run package on fresh project to test non-linked package.

## TODO:
- [x] Include JSDocs for all appropriate functions.
- [ ] Optimize project code.
- [ ] Convert parser to use AST style parsing.
- [ ] Utilize RegEx where appropriate.
- [ ] Reduce Bundle Size (250kb gzipped isn't that bad is it?).

**Copyright © 2018 Jordan Benge**
