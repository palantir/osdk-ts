import{j as t,g as n}from"./iframe-2CZ5tyet.js";import{A as r}from"./action-form-2gxEJ2HL.js";import"./preload-helper-PdhlwSnk.js";import"./DropdownField-dfStdW8W.js";import"./debounce-C66p6rWC.js";import"./useOsdkClient-CiuR1H2l.js";import"./index-BEbGGmzC.js";import"./Input-nyDT7hKf.js";import"./useBaseUiId-DmeaPkXN.js";import"./useControlled-Dh1VVbb0.js";import"./index-DJ2zkz4W.js";import"./index-BzLD7IFo.js";import"./PopoverPopup-BaNCTG4D.js";import"./InternalBackdrop-AEMlst0F.js";import"./composite-D3k21xgh.js";import"./index-BLLQpwjF.js";import"./getDisabledMountTransitionStyles-Gd7L8Xae.js";import"./ToolbarRootContext-C-QqQ4cn.js";import"./tick-BDMTisIM.js";import"./svgIconContainer-CNOiLZ-C.js";import"./small-cross-DldLH4C7.js";import"./search-DVGk6bce.js";import"./cross-L_JwSQIU.js";import"./useValueChanged-B3VhTAWV.js";import"./getPseudoElementBounds-Xqurqd99.js";import"./CompositeItem-_M4T2kN5.js";import"./makeExternalStore-47_tyIYI.js";import"./BaseForm-rrr0NQlF.js";import"./ActionButton-Bj84kgPY.js";import"./Button-eNpy85xj.js";import"./SkeletonBar-CZIrexgF.js";import"./Tooltip-BmclmkMF.js";import"./info-sign-qZnfeZ55.js";import"./chevron-up-C0GYKdBI.js";import"./chevron-down-9zPbKgFH.js";import"./useEventCallback-BSE4SjR3.js";import"./iconLoader-Xxp4jAqx.js";import"./Switch-ChoZQjG8.js";import"./CompositeRoot-76cTM_3o.js";import"./TimePicker-CJ4GYbA6.js";import"./CollapsiblePanel-DSL9tbZc.js";import"./error-_JBSJ8K6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CV77OAmc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
