import{j as t,g as n}from"./iframe-BXxdMdy7.js";import{A as r}from"./action-form-BYEHq8bB.js";import"./preload-helper-CzdKpJOA.js";import"./DropdownField-B_3SnluF.js";import"./debounce-B5PrGahk.js";import"./useOsdkClient-9NpW0bp7.js";import"./index-BD4H0T12.js";import"./Input-CqSjd8ip.js";import"./useBaseUiId-CWV-_dal.js";import"./useControlled-BP-Dvf9O.js";import"./index-CHD8ML8j.js";import"./index-Bnop5Sxj.js";import"./isObject-FTD3a_NI.js";import"./InternalBackdrop-DlV4ogxj.js";import"./composite-D8jBtBX-.js";import"./index-C1UlsJzQ.js";import"./getDisabledMountTransitionStyles-DvVBqQ0t.js";import"./ToolbarRootContext-CIB517xc.js";import"./tick-BiqOz0tA.js";import"./svgIconContainer-Cxa1Q93_.js";import"./small-cross-D4fjM2kv.js";import"./search-BBZ4C5jZ.js";import"./cross-IC7VDHMx.js";import"./useValueChanged-CsAG0mUs.js";import"./getPseudoElementBounds-By8aQjXl.js";import"./CompositeItem-DWha1o73.js";import"./makeExternalStore-BdrikpT6.js";import"./BaseForm-C7k9j88T.js";import"./ActionButton-ILi5qKYn.js";import"./Button--SPNZNsz.js";import"./SkeletonBar-wwZqpQeQ.js";import"./Tooltip-BqajjhQu.js";import"./info-sign-Cp89n6oU.js";import"./chevron-up-a9EH8Scq.js";import"./chevron-down-CYALw_cH.js";import"./useEventCallback-B6HVMKXw.js";import"./iconLoader-DXt8SwrX.js";import"./Switch-BINICFyN.js";import"./CompositeRoot-D9V5NfAC.js";import"./TimePicker-BYR8ClNc.js";import"./CollapsiblePanel-DueIufvn.js";import"./error-xwnNQugq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LqvHVeDk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
