import{j as t,g as n}from"./iframe-QP8DFwwe.js";import{A as r}from"./action-form-BPp3vhWW.js";import"./preload-helper-DZ_jViir.js";import"./DropdownField-BgIEC6qN.js";import"./debounce-ftvaY34_.js";import"./useOsdkClient-D0i8Jm78.js";import"./index-BNJVHiwE.js";import"./Input-CHlmHTWZ.js";import"./useBaseUiId-D1NpMsZt.js";import"./useControlled-206lJMjs.js";import"./index-CaTuEA2R.js";import"./index-BtfIDQW-.js";import"./PopoverPopup-D8FRxbTU.js";import"./InternalBackdrop-Df-z6WHD.js";import"./composite-Ikyj3NkG.js";import"./index-CDGaQ0T_.js";import"./getDisabledMountTransitionStyles-IaA4KMEY.js";import"./ToolbarRootContext-CahY9HEa.js";import"./tick-CXRziisf.js";import"./svgIconContainer-CfQEGbE2.js";import"./small-cross-DE9wbwSK.js";import"./search-BhbGsmDO.js";import"./cross-CwXi3gtQ.js";import"./useValueChanged-DoeB4fKz.js";import"./getPseudoElementBounds-B5MkDbXv.js";import"./CompositeItem-BUsTT35Y.js";import"./makeExternalStore-8VCBcpFX.js";import"./BaseForm-DEbx_SK9.js";import"./ActionButton-DEbkrteD.js";import"./Button-B0j0zDqq.js";import"./SkeletonBar-CXyCFZte.js";import"./Tooltip-CJE-g1wt.js";import"./info-sign-oFT2vujm.js";import"./chevron-up-CChhUu3_.js";import"./chevron-down-_zkKmv-U.js";import"./useEventCallback-D15NkIZA.js";import"./iconLoader-CsOC6LCv.js";import"./CompositeRoot-CV9hNkEo.js";import"./Switch-C3Bfoa3K.js";import"./TimePicker-iEZ1Fb3U.js";import"./CollapsiblePanel-BDw9e-7-.js";import"./error-CwAuvkpD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B4sVoh8c.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
