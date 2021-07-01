# Listify

Listify is a browser-based tool used for generating HTML listing descriptions for eBay. It was developed for use in
Blues Angel Music's e-commerce department.

## Configuration

Configuration is managed through two files, both located in the `src/static` directory.

### `template.pug`

This template is used to generate the final HTML output. The documentation for pug can be found at (https://pugjs.org).
The variable names inserted into the template come from the `label` property inside `form.json`, which is outlined
below.

### `form.json`

This configuration file sets up the form fields used in the editor. There are seven input types defined:

- (Text Input)[#text-input]
- (Number Input)[#number-input]
- (Select Box)[#select-box]
- (Checkbox)[#checkbox]
- (Radio Buttons)[#radio-buttons]
- (Text Area)[#text-area]
- (Text Array)[#text-array]

#### Text Input

```json
{
  "type": "text",
  "label": string,
  "default": string | undefined,
  "placeholder": string | undefined
}
```

#### Number Input

```json
{
  "type": "number",
  "label": string,
  "default": number | undefined,
  "placeholder": number | undefined
}
```

#### Select Box

```json
{
  "type": "select",
  "label": string,
  "options": [
    {
      "value": string,
      "label": string | undefined
    }
  ],
  "default": string | undefined
}
```

#### Checkbox

```json
{
  "type": "check",
  "label": string,
  "options": [
    {
      "value": string,
      "label": string | undefined,
      "checked": boolean | undefined
    }
  ]
}
```

#### Radio Buttons

```json
{
  "type": "radio",
  "label": string,
  "options": [
    {
      "value": string,
      "label": string | undefined
    }
  ],
  "default": string | undefined
}
```

#### Text Area

```json
{
  "type": "textarea",
  "label": string,
  "default": string | undefined,
  "placeholder": string | undefined
}
```

#### Text Array

```json
{
  "type": "text-array",
  "label": string,
  "defaults": string[] | undefined,
  "placeholder": string | undefined
}
```
