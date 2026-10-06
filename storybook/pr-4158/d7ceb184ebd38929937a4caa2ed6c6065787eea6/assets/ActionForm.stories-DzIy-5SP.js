import{j as t,g as n}from"./iframe-DVVKVAtA.js";import{A as r}from"./action-form-C6p4soKk.js";import"./preload-helper-CiYdp8rh.js";import"./DropdownField-BqTmBzOD.js";import"./debounce-D2AF5q98.js";import"./useOsdkClient-CYarTsyR.js";import"./index-B7XCjnpr.js";import"./Input-CmJfNxcc.js";import"./useBaseUiId-INTXcr8e.js";import"./useControlled-D1zZrG1z.js";import"./index-ClEpMZhJ.js";import"./index-CWl4XwMi.js";import"./PopoverPopup-Ca-inkaL.js";import"./InternalBackdrop-j5nDH9EK.js";import"./composite-BRLZiHQF.js";import"./index-CX83dS7O.js";import"./getDisabledMountTransitionStyles-t3inJXqq.js";import"./ToolbarRootContext-C9Nw85K8.js";import"./tick-Br1MB05S.js";import"./svgIconContainer-CP95Aflu.js";import"./small-cross-DSgENzFy.js";import"./search-DlCF-cVw.js";import"./cross-CjD5OAho.js";import"./useValueChanged-Den7cLID.js";import"./getPseudoElementBounds-3KQzg8f9.js";import"./CompositeItem-D9SUAP6f.js";import"./makeExternalStore-BOpkq9BC.js";import"./BaseForm-BMQDJKWV.js";import"./ActionButton-DacVQn36.js";import"./Button-Ckc4gi75.js";import"./SkeletonBar-FP5PV7dU.js";import"./Tooltip-Cbb54XuP.js";import"./info-sign-B1cKW1LK.js";import"./chevron-up-BfIFZ9w8.js";import"./chevron-down-D2RihN-5.js";import"./useEventCallback-DbYW2vCo.js";import"./iconLoader-BrCZDL-k.js";import"./Switch-gC9XTiQu.js";import"./CompositeRoot-BYpuXlsA.js";import"./TimePicker-B6WMb5g1.js";import"./CollapsiblePanel-Bndv3s1q.js";import"./error-DNT5rqeV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DnEy29Gp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
