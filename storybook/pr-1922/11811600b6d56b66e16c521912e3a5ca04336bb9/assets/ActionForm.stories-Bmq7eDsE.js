import{j as t,g as n}from"./iframe-Cudgp9Yf.js";import{A as r}from"./action-form-CrOcbwx9.js";import"./preload-helper-4hrz9kvN.js";import"./DropdownField-CSgsAkCS.js";import"./debounce-Crn7KrL-.js";import"./useOsdkClient-zsU2AVrV.js";import"./index-81BYSLtR.js";import"./Input-Bh8eu1mD.js";import"./useBaseUiId-XTaLWo4v.js";import"./useControlled-CwtIgUOg.js";import"./index-CbHdBm0Y.js";import"./index-CSHUtoE8.js";import"./PopoverPopup-LJZGYOwd.js";import"./InternalBackdrop-DxBXy5tl.js";import"./composite-Cva0Dc4a.js";import"./index-HepSRimU.js";import"./getDisabledMountTransitionStyles-55j4z-MY.js";import"./ToolbarRootContext-B8H-v8xY.js";import"./tick-C8BQHCqe.js";import"./svgIconContainer-DHLyM821.js";import"./small-cross-ChbJVPJX.js";import"./search-D0hS-0xo.js";import"./cross-revkGSiW.js";import"./useValueChanged-CUGYJ1mb.js";import"./getPseudoElementBounds-DtfdtuS3.js";import"./CompositeItem-DmRElDN_.js";import"./makeExternalStore-DJw3BgKy.js";import"./BaseForm-B-H5IHY5.js";import"./ActionButton-Du3E86TK.js";import"./Button-tVyqWp8F.js";import"./SkeletonBar-yGKH_f6h.js";import"./Tooltip-BxRrglwZ.js";import"./info-sign-DRu8d3jN.js";import"./chevron-up-ZjwIfeAv.js";import"./chevron-down-DyPkH6YY.js";import"./useEventCallback-DzHSKCot.js";import"./iconLoader-z8oejxFx.js";import"./CompositeRoot-BnnvNKjS.js";import"./Switch-DUE7kRaI.js";import"./TimePicker-DG5lAKUr.js";import"./CollapsiblePanel-D77NNtaO.js";import"./error-I8BNM1L0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BT2RZEDY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
