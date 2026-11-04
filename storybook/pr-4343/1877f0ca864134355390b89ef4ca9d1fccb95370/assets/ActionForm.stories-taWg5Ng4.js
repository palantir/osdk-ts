import{j as t,g as n}from"./iframe-C_XIQRaj.js";import{A as r}from"./action-form-CUzUya6M.js";import"./preload-helper-yovbOiJH.js";import"./DropdownField-oiVuVzvB.js";import"./debounce-C9ttcPrX.js";import"./useOsdkClient-DX8nswLQ.js";import"./index-BeXNZw_x.js";import"./Input-DAnQbmer.js";import"./useBaseUiId-8inAF2n-.js";import"./useControlled-Ch9SndTb.js";import"./index-BLFOZToo.js";import"./index-BLHmTRj_.js";import"./PopoverPopup-tjx05EUI.js";import"./InternalBackdrop-CVa7hO1U.js";import"./composite-DGI-ix3e.js";import"./index-BBWBYdHe.js";import"./getDisabledMountTransitionStyles-BNbLHEBU.js";import"./ToolbarRootContext-gbYyGpWk.js";import"./tick-C4shc0EI.js";import"./svgIconContainer-BNlRuGAK.js";import"./small-cross-38kc_Q0Y.js";import"./search-BE01uCTT.js";import"./cross-CUZU2tfy.js";import"./useValueChanged-DzcQQ31i.js";import"./getPseudoElementBounds-17tz2fhi.js";import"./CompositeItem-BQROqFNc.js";import"./makeExternalStore-CTMv2DMh.js";import"./BaseForm-yvuvVhpt.js";import"./ActionButton-D6EEbVJD.js";import"./Button-dB7_sFTC.js";import"./SkeletonBar-yWafqoD-.js";import"./Tooltip-C9o7ip4U.js";import"./info-sign-Dr0Vy_HP.js";import"./chevron-up-sVD5NXy-.js";import"./chevron-down-9VTaJsMC.js";import"./useEventCallback-DLCeib9r.js";import"./iconLoader-BqKtgUvO.js";import"./Switch-D2ZsXHbP.js";import"./CompositeRoot-CX9I95ju.js";import"./TimePicker-Dz8YCUgT.js";import"./CollapsiblePanel-DHt-foUT.js";import"./error-B-SAi68c.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CVYgQ3H4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
