import{j as t,g as n}from"./iframe-CCVL4Idp.js";import{A as r}from"./action-form-BcEyBqRX.js";import"./preload-helper-Bfdvow4t.js";import"./DropdownField-B-zXvzEE.js";import"./debounce-DHu_JVgk.js";import"./useOsdkClient-C1izoF8E.js";import"./index-CqRYjhYr.js";import"./Input-Cn7fB1Ph.js";import"./useBaseUiId-CNDNQCax.js";import"./useControlled-wuiuTdj_.js";import"./index-f-mV_Lh2.js";import"./index-CuMFdNkD.js";import"./PopoverPopup-ChuxaA1C.js";import"./InternalBackdrop-BOLrYZlT.js";import"./composite-8_zPWC08.js";import"./index-D1XSNP8S.js";import"./getDisabledMountTransitionStyles-DsWKjHfV.js";import"./ToolbarRootContext-B9eib1V0.js";import"./tick-BXHEK5fI.js";import"./svgIconContainer-DLYZviFk.js";import"./small-cross-D_IDVYYi.js";import"./search-C00pZ1Ly.js";import"./cross-Bpaou5px.js";import"./useValueChanged-B0V7HCrV.js";import"./getPseudoElementBounds-B1H8xoBN.js";import"./CompositeItem-BVwr5vb2.js";import"./makeExternalStore-Bx0vFg8y.js";import"./BaseForm-CH5t-fjD.js";import"./ActionButton-BoQK0oCg.js";import"./Button-DYSDt2wl.js";import"./SkeletonBar-BQkCbvbz.js";import"./Tooltip-155_4Sip.js";import"./info-sign-D0iYkOBi.js";import"./chevron-up-BnRVROxV.js";import"./chevron-down-Ve2FZYZx.js";import"./useEventCallback-DNycK2kG.js";import"./iconLoader-CzXTWAkB.js";import"./CompositeRoot-Ye2awaYZ.js";import"./Switch-CENag9et.js";import"./TimePicker-C5VFAcGB.js";import"./CollapsiblePanel-BdSR7VOY.js";import"./error-DNOpGdYX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BTy9Ees1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
