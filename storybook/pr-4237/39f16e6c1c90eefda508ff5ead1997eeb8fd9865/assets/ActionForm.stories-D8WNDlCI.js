import{j as t,g as n}from"./iframe-BVgEXOM0.js";import{A as r}from"./action-form-DpIUMksx.js";import"./preload-helper-CactQ6nb.js";import"./DropdownField-DQ-dTX_I.js";import"./debounce-BtRqgR_f.js";import"./useOsdkClient-BrFIlZ12.js";import"./index-8aR2Ioa8.js";import"./Input-odv82aFx.js";import"./useBaseUiId-D5ZxfDH3.js";import"./useControlled-BIcpHOeT.js";import"./index-DQzPD5cl.js";import"./index-DwR3j9NI.js";import"./PopoverPopup-BcZfo8D_.js";import"./InternalBackdrop-Bh6vJ7HZ.js";import"./composite-CZzw119W.js";import"./index-DwnOMM-g.js";import"./getDisabledMountTransitionStyles-DQpr4Tpg.js";import"./ToolbarRootContext-Cn0yRgUL.js";import"./tick-CiLURy-F.js";import"./svgIconContainer-CDZ82EYf.js";import"./small-cross-BdrFqIIe.js";import"./search-CxzK3q4z.js";import"./cross-D1T8VNxn.js";import"./useValueChanged-SWdGVnir.js";import"./getPseudoElementBounds-Ba7Ut1tY.js";import"./CompositeItem-DmERPWlX.js";import"./makeExternalStore-aQWgWKmj.js";import"./BaseForm-Dm6Vo49b.js";import"./ActionButton-CfAm7XVr.js";import"./Button-WKXKQ1tY.js";import"./SkeletonBar-HB-1xzv6.js";import"./Tooltip-D3jGIJfs.js";import"./info-sign-8ucuZYGH.js";import"./chevron-up-D3mBBAI9.js";import"./chevron-down-CrDZIThJ.js";import"./useEventCallback-DvGf3XkN.js";import"./iconLoader-DMdXK9U5.js";import"./Switch-87Zw9oP5.js";import"./CompositeRoot-DfmXFzEj.js";import"./TimePicker-BPjHQVEn.js";import"./CollapsiblePanel-C2JZHC-G.js";import"./error-B5TbSbWu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C2GPaHST.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
