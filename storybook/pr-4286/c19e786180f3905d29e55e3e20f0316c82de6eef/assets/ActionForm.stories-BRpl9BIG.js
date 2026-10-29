import{j as t,g as n}from"./iframe-U_ccsXOa.js";import{A as r}from"./action-form-BSSrHXtU.js";import"./preload-helper-65xl7bLJ.js";import"./DropdownField-DkE0n-zM.js";import"./debounce-BKzmkk5O.js";import"./useOsdkClient-DMSQnpj7.js";import"./index-BOhpqcbq.js";import"./Input-W79UZ-Qi.js";import"./useBaseUiId-CsjkwTP2.js";import"./useControlled-CXjwM6_M.js";import"./index-CPxksT-G.js";import"./index-CZOfpX0o.js";import"./PopoverPopup-B1HFntX8.js";import"./InternalBackdrop-CzMDIOGh.js";import"./composite-jcTrqHdY.js";import"./index-DZLzj8Gd.js";import"./getDisabledMountTransitionStyles-BAfvW3aU.js";import"./ToolbarRootContext-D5-PfmM6.js";import"./tick-y5pUQKDJ.js";import"./svgIconContainer-Bdip5v4Z.js";import"./small-cross-B3RKx4IS.js";import"./search-V9O-Ezy9.js";import"./cross-Dx8cyWlu.js";import"./useValueChanged-C_srctpf.js";import"./getPseudoElementBounds-BvimzBGn.js";import"./CompositeItem-6mTD-F3x.js";import"./makeExternalStore-CBJBG8Ns.js";import"./BaseForm-D3aPs_pO.js";import"./ActionButton-CTTQu7QA.js";import"./Button-6VeiZu2O.js";import"./SkeletonBar-jdk0Bs2q.js";import"./Tooltip-BIBIqrVp.js";import"./info-sign-C1ahEb2b.js";import"./chevron-up-CAF9G4DN.js";import"./chevron-down-B2jqRAv_.js";import"./useEventCallback-C1NlRVeF.js";import"./iconLoader-DT-g5vMu.js";import"./Switch-CZZ2ghn7.js";import"./CompositeRoot-Bj3sKbob.js";import"./TimePicker-DmW6uRQJ.js";import"./CollapsiblePanel-DDwW0VQA.js";import"./error-DWlA1yK3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DkeqZkcw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
