import{j as t,g as n}from"./iframe-BgMdPl3C.js";import{A as r}from"./action-form-fiW0MAyl.js";import"./preload-helper-sBnEI_Ig.js";import"./DropdownField-E-id6n8_.js";import"./debounce-CPxVN93o.js";import"./useOsdkClient-D3kLb---.js";import"./index-CpB1FxHm.js";import"./Input-3QA4m500.js";import"./useBaseUiId-CxT5YLyS.js";import"./useControlled-Byq8R2zI.js";import"./index-BXH-jRmH.js";import"./index-0YWULKcm.js";import"./PopoverPopup-DnrKPeJ4.js";import"./InternalBackdrop-BN-4yFF3.js";import"./composite-sAuyKpQi.js";import"./index-Bz057Fgu.js";import"./getDisabledMountTransitionStyles-DvbK_Xe3.js";import"./ToolbarRootContext-D7J-gn0d.js";import"./tick-NEjLld8Y.js";import"./svgIconContainer-DMmYLpy9.js";import"./small-cross-BU2y1cKB.js";import"./search-CWQDb4l_.js";import"./cross-D6oplnX9.js";import"./useValueChanged-pacesa_7.js";import"./getPseudoElementBounds-BNISWdkv.js";import"./CompositeItem-D5EZoP9q.js";import"./makeExternalStore-CU4m9b0Z.js";import"./BaseForm-1jmkv_uN.js";import"./ActionButton-DlS31NmR.js";import"./Button-tnOg-ckf.js";import"./SkeletonBar-CojPQo60.js";import"./Tooltip-ByGWv4u-.js";import"./info-sign-Baoe3A3n.js";import"./chevron-up-DtE6yvZn.js";import"./chevron-down-CpM76MZN.js";import"./useEventCallback-Cmb84_X1.js";import"./iconLoader-XaMjFqyr.js";import"./Switch-C_CaAB0r.js";import"./CompositeRoot-CxsspvJM.js";import"./TimePicker-DgkuSds_.js";import"./CollapsiblePanel-CzwDlkcV.js";import"./error-CThhHbJ9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-iUwzYuQQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
