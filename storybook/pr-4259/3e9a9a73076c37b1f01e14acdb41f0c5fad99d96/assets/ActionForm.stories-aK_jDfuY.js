import{j as t,g as n}from"./iframe-DOyQxJvH.js";import{A as r}from"./action-form-Kuag8Dpo.js";import"./preload-helper-b99Wj4jj.js";import"./DropdownField-BqmCeBVH.js";import"./debounce-Blq-yKsA.js";import"./useOsdkClient-9mLaoDY9.js";import"./index-DohetWl-.js";import"./Input-1EVSbUy3.js";import"./useBaseUiId-DieRYZnL.js";import"./useControlled-D5_WZpq_.js";import"./index-BPvIlRyU.js";import"./index-Bj0URVYm.js";import"./PopoverPopup-aigE3Okr.js";import"./InternalBackdrop-ByEBsKrq.js";import"./composite-ZJn0pY0h.js";import"./index-BkqZ1wLV.js";import"./getDisabledMountTransitionStyles-C53WijiN.js";import"./ToolbarRootContext-CL9w8adf.js";import"./tick-Z9gea7hj.js";import"./svgIconContainer-B_aagRLN.js";import"./small-cross-DHIK5OPW.js";import"./search-CFvqb_6m.js";import"./cross-Clcl0FW-.js";import"./useValueChanged-BcjC7Q7U.js";import"./getPseudoElementBounds-veJLu94H.js";import"./CompositeItem-CClLQtRU.js";import"./makeExternalStore-C8fED8Be.js";import"./BaseForm-DKAgRDwO.js";import"./ActionButton-Cj8YJ3F7.js";import"./Button-Siw5hwdL.js";import"./SkeletonBar-ySgrjMCk.js";import"./Tooltip-CycvzHTs.js";import"./info-sign-B9LRbWgh.js";import"./chevron-up-C-SNZvwn.js";import"./chevron-down-CHciOX2j.js";import"./useEventCallback-jKGT4Pcx.js";import"./iconLoader-COGWFZ5v.js";import"./Switch-DJ6jkqGd.js";import"./CompositeRoot-wSabjYIu.js";import"./TimePicker-C1wjhVAn.js";import"./CollapsiblePanel-Amuq13yP.js";import"./error-CImoxm8w.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CkKOCKYX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
