import{j as t,g as n}from"./iframe-CuaBTThM.js";import{A as r}from"./action-form-DNVmJ1zR.js";import"./preload-helper-BgQMGQD9.js";import"./DropdownField-Es7JKCIb.js";import"./debounce-C6OjGsRu.js";import"./useOsdkClient-jDqaMA4t.js";import"./index-GgZf0ymo.js";import"./Input-CPr8OQD6.js";import"./useBaseUiId-BS0XPI08.js";import"./useControlled-BV5LNAXf.js";import"./index-oUfyUaR2.js";import"./index-CpY0VuZR.js";import"./PopoverPopup-DCxI2WDv.js";import"./InternalBackdrop-Clzk9XeE.js";import"./composite-CR2xOePv.js";import"./index-M-I7sgYK.js";import"./getDisabledMountTransitionStyles-CDB_t-dK.js";import"./ToolbarRootContext-ChhVj2PO.js";import"./tick-Dm48v928.js";import"./svgIconContainer-CzPEr09G.js";import"./small-cross-BK9Py7ht.js";import"./search-D87DQ5KE.js";import"./cross-CR1o8CWA.js";import"./useValueChanged-CFw9gLVH.js";import"./getPseudoElementBounds-ChIjHzI9.js";import"./CompositeItem-BGC4JuuI.js";import"./makeExternalStore-pp23vOCb.js";import"./BaseForm-DEfXve2Z.js";import"./ActionButton-m1-HZ51Y.js";import"./Button-CkWuBE5W.js";import"./SkeletonBar-DSN2gcPw.js";import"./Tooltip-HTpDMf45.js";import"./info-sign-DOGYkIa-.js";import"./chevron-up-Biv5NG56.js";import"./chevron-down-Bk4mo7mA.js";import"./useEventCallback-m_NUBECY.js";import"./iconLoader-Drg9YBGV.js";import"./Switch-DqOOXyrc.js";import"./CompositeRoot-B9Nlhs0j.js";import"./TimePicker-B0sC8Ntd.js";import"./CollapsiblePanel-XiNOh9Gj.js";import"./error-B4mawlQh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DEQltQtw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
