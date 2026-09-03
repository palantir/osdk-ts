import{j as t,g as n}from"./iframe-CK5D4Vrc.js";import{A as r}from"./action-form-BhC5-lTd.js";import"./preload-helper--rfFAAg9.js";import"./DropdownField-C2vkPRGk.js";import"./debounce-BESlaVbz.js";import"./useOsdkClient-DQg5y7FA.js";import"./index-DTCKW3FC.js";import"./Input-BkbLF__D.js";import"./useBaseUiId-ChiwJHU0.js";import"./useControlled-EjNIu-gh.js";import"./index-B0VFCsPS.js";import"./index-Bf8FWlfU.js";import"./PopoverPopup-Wqv_QtzO.js";import"./InternalBackdrop-Dbr5rYW1.js";import"./composite-EY5o54z0.js";import"./index-vAIMW8Pw.js";import"./getDisabledMountTransitionStyles-CKHIKkcN.js";import"./ToolbarRootContext-fQ8fBJNz.js";import"./tick-Dc4uWMLG.js";import"./svgIconContainer-B-9rvjfq.js";import"./small-cross-CvPfbhzU.js";import"./search-CQswBcjf.js";import"./cross-DqRqsA-Z.js";import"./useValueChanged-Bmru0ySn.js";import"./getPseudoElementBounds-D8b8g-_9.js";import"./CompositeItem-GR3Crn-r.js";import"./makeExternalStore-BGHIEiJx.js";import"./BaseForm-I4ng2JtX.js";import"./ActionButton-CMbHUj5v.js";import"./Button-QI0ogqOo.js";import"./SkeletonBar-DauQo2dk.js";import"./Tooltip-L8rEht9z.js";import"./info-sign-PLUzPvjb.js";import"./chevron-up-CuroaEn3.js";import"./chevron-down-Bfelo19f.js";import"./useEventCallback-CDnpJnS0.js";import"./iconLoader-BYVqHJnE.js";import"./CompositeRoot-DrRPcyji.js";import"./Switch-BsvWmBbQ.js";import"./TimePicker-B2Qel9Q8.js";import"./CollapsiblePanel-B9cQatbS.js";import"./error-BTGDM8SC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BNMaUBqJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
