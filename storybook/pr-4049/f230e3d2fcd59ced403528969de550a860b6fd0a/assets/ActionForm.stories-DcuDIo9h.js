import{j as t,g as n}from"./iframe-CxxM9p3K.js";import{A as r}from"./action-form-Cyvxn5JS.js";import"./preload-helper-Clfhc9e2.js";import"./DropdownField-nXSmGKVx.js";import"./debounce-CX8zVuen.js";import"./useOsdkClient-CYTSjB1o.js";import"./index-BFBsPuy5.js";import"./Input-BEL6yzPH.js";import"./useBaseUiId-6hcgy7hR.js";import"./useControlled-BM7wy7zH.js";import"./index-Cmw2FWOc.js";import"./index-U9rL3bD6.js";import"./PopoverPopup-DAq0-7NO.js";import"./InternalBackdrop-CLXXO-pE.js";import"./composite-DnTfWsZ7.js";import"./index-ChdzrcBL.js";import"./getDisabledMountTransitionStyles-DTSBvSw4.js";import"./ToolbarRootContext-DrjoHCqu.js";import"./tick-BPFcYePS.js";import"./svgIconContainer-BDX64ThR.js";import"./small-cross-BeQrGWQ3.js";import"./search-BLctbnBP.js";import"./cross-DVlZmvQu.js";import"./useValueChanged-DOWNQBb0.js";import"./getPseudoElementBounds-DYfgqtqr.js";import"./CompositeItem-D91fXLRV.js";import"./makeExternalStore-Ryz_3n-W.js";import"./BaseForm-IUxbz3Ka.js";import"./ActionButton-VAbO0Pky.js";import"./Button-BSoYYLdN.js";import"./SkeletonBar-BmxyWPnR.js";import"./Tooltip-CDs-lAuM.js";import"./info-sign-DRf369K3.js";import"./chevron-up-Drv3ABkA.js";import"./chevron-down-jQiKIGSz.js";import"./useEventCallback-twJMSJh5.js";import"./iconLoader-CBvCzpus.js";import"./Switch-CM4QmDoK.js";import"./CompositeRoot-BECvqUHm.js";import"./TimePicker-DJDF4H0b.js";import"./CollapsiblePanel-BS-lVxoG.js";import"./error-CFTb0-g7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-axCUhS1P.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
