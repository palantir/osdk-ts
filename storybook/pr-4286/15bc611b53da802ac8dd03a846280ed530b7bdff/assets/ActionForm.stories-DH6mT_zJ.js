import{j as t,g as n}from"./iframe-C5CLXfWS.js";import{A as r}from"./action-form-DUup4oxT.js";import"./preload-helper-CmQDAWyb.js";import"./DropdownField-DaRMR6LA.js";import"./debounce-CAC4DZOe.js";import"./useOsdkClient-lAi3FL1U.js";import"./index-DtGlOU-M.js";import"./Input-D-cxIIFp.js";import"./useBaseUiId-CqeeK3OI.js";import"./useControlled-CzKtgw0j.js";import"./index-BXJypcxy.js";import"./index-DGZrjFba.js";import"./PopoverPopup-Dll2LQIE.js";import"./InternalBackdrop-KXNey9yS.js";import"./composite-B3s1Z_B-.js";import"./index-Bj1EDllN.js";import"./getDisabledMountTransitionStyles-CS5zUVVl.js";import"./ToolbarRootContext-Bvt9zfPy.js";import"./tick-BDZpZu1S.js";import"./svgIconContainer-BIzzh223.js";import"./small-cross-B2iIdYeI.js";import"./search-aAg3Ft0P.js";import"./cross-B3o49gy1.js";import"./useValueChanged-CJyGnTsK.js";import"./getPseudoElementBounds-DjH8mNuQ.js";import"./CompositeItem-Dx1-4fNK.js";import"./makeExternalStore-BfuCy0xW.js";import"./BaseForm-wUsk7uSY.js";import"./ActionButton-DJweMjUH.js";import"./Button-W3Mp6JlA.js";import"./SkeletonBar-DJb7Lu6W.js";import"./Tooltip-ClnzFWaz.js";import"./info-sign-nF0h_jZh.js";import"./chevron-up-Ceu2kqXI.js";import"./chevron-down-k0OiGtOZ.js";import"./useEventCallback-CYKoO3bJ.js";import"./iconLoader-CEWIj1EK.js";import"./Switch-gNdeOHv9.js";import"./CompositeRoot-D3v7mylM.js";import"./TimePicker-UQDO6Glc.js";import"./CollapsiblePanel-SGmn3J0J.js";import"./error-aTWH99uz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BjF1sUNW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
