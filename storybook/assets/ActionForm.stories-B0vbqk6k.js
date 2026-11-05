import{j as t,g as n}from"./iframe-22sgaWxv.js";import{A as r}from"./action-form-n_ZO2h61.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-B0HjgQSf.js";import"./debounce-ASo6GI3m.js";import"./useOsdkClient-B3I5yVwR.js";import"./index-BHBAGN-s.js";import"./Input-kE2itjKl.js";import"./useBaseUiId-CUViOtvX.js";import"./useControlled-9hZ525gD.js";import"./index-C-ayeZqv.js";import"./index-H6bUqLk6.js";import"./isObject-DGvkKeJp.js";import"./InternalBackdrop-QEZTLwT8.js";import"./composite-BTcqQx01.js";import"./index-BCMcuhrC.js";import"./getDisabledMountTransitionStyles-p4mAODiY.js";import"./ToolbarRootContext-D1WVL4z4.js";import"./tick-DS5XO6DI.js";import"./svgIconContainer-BsVzcm6E.js";import"./small-cross-BwMnv4hk.js";import"./search-D5hLmpm3.js";import"./cross-BCwFnrJl.js";import"./useValueChanged-Cvkbwiqt.js";import"./getPseudoElementBounds-BLk4lSoh.js";import"./CompositeItem-C3Np8qjM.js";import"./makeExternalStore-D5ROsNAp.js";import"./BaseForm-DMPvzELR.js";import"./ActionButton-Boe4PNYh.js";import"./Button-Tlz3cekG.js";import"./SkeletonBar-DOTAFrq-.js";import"./Tooltip-CX0Gi3dR.js";import"./info-sign-BV945MYz.js";import"./chevron-up-DQ25MapY.js";import"./chevron-down-BNxx7PXr.js";import"./useEventCallback-C-98vcNs.js";import"./iconLoader-BsgwWXtp.js";import"./Switch-BnRKzQfi.js";import"./CompositeRoot-B7CSn7Mo.js";import"./TimePicker-CMCUgfu6.js";import"./CollapsiblePanel-CUWh3so1.js";import"./error-DkFYgz--.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BykLiONE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
