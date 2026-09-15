import{j as t,g as n}from"./iframe-DFW0mMZ1.js";import{A as r}from"./action-form-VpW_IR8n.js";import"./preload-helper-Qawhc3UJ.js";import"./DropdownField-UijvkKFV.js";import"./debounce-OIwexpuG.js";import"./useOsdkClient-DekGKRLB.js";import"./index-o6yCYR6Q.js";import"./Input-Bw8rrVtq.js";import"./useBaseUiId-CXLWSjxr.js";import"./useControlled-CgydVt6m.js";import"./index-Ntq27F76.js";import"./index-CJTfQw-N.js";import"./PopoverPopup-CzvtrhU_.js";import"./InternalBackdrop-CuZzUJfU.js";import"./composite-C9QpehYt.js";import"./index-COaiIhBP.js";import"./getDisabledMountTransitionStyles-C9arfdOC.js";import"./ToolbarRootContext-BwtTYckl.js";import"./tick-DsrTm1u4.js";import"./svgIconContainer-VOBSJ15n.js";import"./small-cross-B_2v8d0f.js";import"./search-B2NWGFRm.js";import"./cross-BkPI5BMI.js";import"./useValueChanged-Dudyqn1D.js";import"./getPseudoElementBounds-Ds-CW1SQ.js";import"./CompositeItem-CKYwdTed.js";import"./makeExternalStore-DQcTHSYH.js";import"./BaseForm-BlcdZq7V.js";import"./ActionButton-v9LYexkg.js";import"./Button-6FT0QBh6.js";import"./SkeletonBar-DShy_z54.js";import"./Tooltip-BX7Zc18a.js";import"./info-sign-BMkqNyEQ.js";import"./chevron-up-BHMBK8jh.js";import"./chevron-down-s8opNKgU.js";import"./useEventCallback-CNw5BQ-r.js";import"./iconLoader-CaxOfIqM.js";import"./CompositeRoot-C3XNL3G3.js";import"./Switch-C4MdRXhw.js";import"./TimePicker-B-tKMtFs.js";import"./CollapsiblePanel-qGqB2tFy.js";import"./error-B3Dge2Yv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CjCOoV_f.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
