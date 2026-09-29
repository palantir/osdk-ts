import{j as t,g as n}from"./iframe-ALAQwSfV.js";import{A as r}from"./action-form-Bb1I1SVY.js";import"./preload-helper-fLSKrq12.js";import"./DropdownField-DixIy5fE.js";import"./debounce-CCGKB1Tj.js";import"./useOsdkClient-KB4bH-DF.js";import"./index-nJZFwjBY.js";import"./Input-CFWd2gLa.js";import"./useBaseUiId-BtuLk_tP.js";import"./useControlled-f6wr2N38.js";import"./index-BYTfgmte.js";import"./index-DvjPzKHT.js";import"./PopoverPopup-BM1vQM5s.js";import"./InternalBackdrop-iwn5b5gf.js";import"./composite-TYYt2fCx.js";import"./index-DCw12hpD.js";import"./getDisabledMountTransitionStyles-_fn-AZLs.js";import"./ToolbarRootContext-B_pgtouG.js";import"./tick-D6R52cs_.js";import"./svgIconContainer-CsyrjEXm.js";import"./small-cross-Bymv6dJ6.js";import"./search-6F7M3AuK.js";import"./cross-CTj2uYDt.js";import"./useValueChanged-Cmuhto8a.js";import"./getPseudoElementBounds-nAdQbUQj.js";import"./CompositeItem-DbwrFgnX.js";import"./makeExternalStore-BU7UI9Bv.js";import"./BaseForm-B9dw-DEV.js";import"./ActionButton-CThDEtCo.js";import"./Button-Be4ab6Ld.js";import"./SkeletonBar-tY7bgNdB.js";import"./Tooltip-BJAwvsAX.js";import"./info-sign-Cx4ioLOe.js";import"./chevron-up-B02-dzWz.js";import"./chevron-down-nwzUELg0.js";import"./useEventCallback-D7Z-udTV.js";import"./iconLoader-Doxkvd5-.js";import"./Switch-H0ZpjZlV.js";import"./CompositeRoot-DR9VUNAY.js";import"./TimePicker-D30MqAxt.js";import"./CollapsiblePanel-BbDUb0xg.js";import"./error-fdu9cH2p.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bz9MfpUK.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
