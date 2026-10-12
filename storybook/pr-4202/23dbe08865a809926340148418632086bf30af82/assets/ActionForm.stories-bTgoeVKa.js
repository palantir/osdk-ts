import{j as t,g as n}from"./iframe-S84xAba9.js";import{A as r}from"./action-form-53u1Dj0S.js";import"./preload-helper-DJNCezcd.js";import"./DropdownField-BpqWh6Kr.js";import"./debounce-CR__6nn4.js";import"./useOsdkClient-CZfvkz-K.js";import"./index-8j0T478k.js";import"./Input-Cif3XMX5.js";import"./useBaseUiId-YpbERV6F.js";import"./useControlled-BfYdfQhZ.js";import"./index-DUM3Z7TI.js";import"./index-DafAAkcf.js";import"./PopoverPopup-DT5g8jR4.js";import"./InternalBackdrop-BIkzYyEP.js";import"./composite-BPZV-Yhr.js";import"./index-Wol--mzF.js";import"./getDisabledMountTransitionStyles-BSS3-xui.js";import"./ToolbarRootContext-Dx--qbfa.js";import"./tick-CGcvAYvI.js";import"./svgIconContainer-BlYa3pTV.js";import"./small-cross-ClUWXpO2.js";import"./search-DhFsI6Pf.js";import"./cross-D931JdRi.js";import"./useValueChanged-Dr5883-C.js";import"./getPseudoElementBounds-B4-e1zAI.js";import"./CompositeItem-D1oKuNmK.js";import"./makeExternalStore-CaEUyt0v.js";import"./BaseForm-Chjxo3cn.js";import"./ActionButton-CWjWbtqS.js";import"./Button-BASBXCLw.js";import"./SkeletonBar-T2RkLi5-.js";import"./Tooltip-C6MYNiME.js";import"./info-sign-CdCPmYi9.js";import"./chevron-up-CJ-ExJ1Z.js";import"./chevron-down-B21hEOy9.js";import"./useEventCallback-CvUbQ2M2.js";import"./iconLoader-DsLtGjqm.js";import"./Switch-DF1hA7-u.js";import"./CompositeRoot-CcrZrJVC.js";import"./TimePicker-qRaIW6A1.js";import"./CollapsiblePanel-CxmwbUpy.js";import"./error-CTVY3lwb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-3ZtUgCqV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
