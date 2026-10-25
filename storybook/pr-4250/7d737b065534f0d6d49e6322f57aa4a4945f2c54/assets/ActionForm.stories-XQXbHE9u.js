import{j as t,g as n}from"./iframe-C9eTmg5F.js";import{A as r}from"./action-form-BqZna1im.js";import"./preload-helper-MBuTZogN.js";import"./DropdownField-Cf4e64fv.js";import"./debounce-C6FqpP08.js";import"./useOsdkClient-CNiGT0YI.js";import"./index-Cl06-CY3.js";import"./Input-RYWRwt9M.js";import"./useBaseUiId-CarAhcX4.js";import"./useControlled-D63t172P.js";import"./index-DawaRm_6.js";import"./index-UInLMRBx.js";import"./PopoverPopup-D9bH8toe.js";import"./InternalBackdrop-CEAB_Tl8.js";import"./composite-BG0FW9Gv.js";import"./index-2Dxqnc05.js";import"./getDisabledMountTransitionStyles-BTqLOmVB.js";import"./ToolbarRootContext-MN-0Ldxt.js";import"./tick-CF6J7PUl.js";import"./svgIconContainer-B8-j9zbf.js";import"./small-cross-BTCn6zZs.js";import"./search-BBX0widz.js";import"./cross-BNf72m15.js";import"./useValueChanged-BVHy35zR.js";import"./getPseudoElementBounds-CgTJwG5C.js";import"./CompositeItem-QTP5J2AO.js";import"./makeExternalStore-CAiiZnZr.js";import"./BaseForm-BivLjlgM.js";import"./ActionButton-VZlfdBm7.js";import"./Button-CrIJmJlm.js";import"./SkeletonBar-jvvHiVWk.js";import"./Tooltip-qg3PMoFt.js";import"./info-sign-DIhckBu0.js";import"./chevron-up-UDJ4VimO.js";import"./chevron-down-BJBNlRqs.js";import"./useEventCallback-CaSNRWxA.js";import"./iconLoader-DSH4lIR4.js";import"./Switch-gx2XW5vC.js";import"./CompositeRoot-rlPU3saq.js";import"./TimePicker-Dcf_heq1.js";import"./CollapsiblePanel-B1UPkWfl.js";import"./error-BYbnYzlx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dy0OWLdL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
