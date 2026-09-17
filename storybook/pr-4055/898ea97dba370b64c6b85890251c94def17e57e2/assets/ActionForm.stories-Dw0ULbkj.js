import{j as t,g as n}from"./iframe-OjM1fGhD.js";import{A as r}from"./action-form-TezMLfQF.js";import"./preload-helper-D7fi2uvl.js";import"./DropdownField-DQutHIXJ.js";import"./debounce-3PyN9UKe.js";import"./useOsdkClient-CG8rDO26.js";import"./index-CI4sblvN.js";import"./Input-DeCvr9l5.js";import"./useBaseUiId-CUWfCekV.js";import"./useControlled-DrzgK2A0.js";import"./index-DdpkN4AB.js";import"./index-DYYqOieW.js";import"./PopoverPopup-WCSstPUg.js";import"./InternalBackdrop-CvX7eefS.js";import"./composite-B2Qeod66.js";import"./index-DZJYZ9CR.js";import"./getDisabledMountTransitionStyles-CmzrHyFb.js";import"./ToolbarRootContext-zAO6OvY5.js";import"./tick-CLWn7BNG.js";import"./svgIconContainer-oX_Dupxj.js";import"./small-cross-tNWYly7S.js";import"./search-BhAcVZf9.js";import"./cross-D69HQ2f-.js";import"./useValueChanged-BQlQj-qd.js";import"./getPseudoElementBounds-CRHH2PCz.js";import"./CompositeItem-Ddy0SGDP.js";import"./makeExternalStore-C6aI4llN.js";import"./BaseForm-rmIBuMPT.js";import"./ActionButton-Dab2pn_s.js";import"./Button-BtiOWDEe.js";import"./SkeletonBar-WHULGdS8.js";import"./Tooltip-nVrA_o7L.js";import"./info-sign-CPiumQ1P.js";import"./chevron-up-Spox3mii.js";import"./chevron-down-7rWKu4_j.js";import"./useEventCallback-DPU1VIdY.js";import"./iconLoader-Fc8C-uWi.js";import"./Switch-B_a3cNvO.js";import"./CompositeRoot-CQCSvNox.js";import"./TimePicker-CPZFR53S.js";import"./CollapsiblePanel-CG8OLXdZ.js";import"./error-q3Etsg6o.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DE164d5t.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
