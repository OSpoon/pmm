import { Transformer } from 'markmap-lib'
import type { ITransformResult } from 'markmap-lib'
import { Markmap, deriveOptions } from 'markmap-view'
import type { IMarkmapJSONOptions } from 'markmap-common'
import { Toolbar } from 'markmap-toolbar'

export const loadGithubMarkdown = (username: string, resp: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fetch(`https://raw.githubusercontent.com/${username}/${resp}/master/README.md`)
      .then((response) => response.text())
      .then((text) => resolve(text))
      .catch((error) => reject(error))
  })
}

export const transform = (
  svg: string | SVGElement,
  makrdownContent: string,
  jsonOptions?: IMarkmapJSONOptions | undefined
): Markmap => {
  const transformer: Transformer = new Transformer()
  const transformResult: ITransformResult = transformer.transform(makrdownContent)
  const markmapOptions = deriveOptions(jsonOptions)
  return Markmap.create(svg, markmapOptions, transformResult.root)
}

export const setToolbar = (app: string, markmap: Markmap) => {
  const toolbar: Toolbar = Toolbar.create(markmap)
  toolbar.setBrand(false)
  document.querySelector(`#${app}`)?.append(toolbar?.el)
}

export const parseQueryParams = (paramContent: string) => {
  const params = paramContent
    .slice(1)
    .split('&')
    .map((v) => {
      const [key, value] = v.split('=')
      return {
        [key]: value
      }
    })
  const result = params.reduce((preValue, currentValue) => {
    const key = Object.keys(currentValue)[0]
    const value = currentValue[key]
    preValue[key] = value
    return preValue
  }, {})
  return result
}
