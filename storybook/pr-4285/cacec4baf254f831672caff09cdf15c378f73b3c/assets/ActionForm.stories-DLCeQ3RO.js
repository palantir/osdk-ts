import{j as t,g as n}from"./iframe-CjqaNb_6.js";import{A as r}from"./action-form-DIL2GJuE.js";import"./preload-helper-CGa3vgnS.js";import"./DropdownField-B6TBtxf2.js";import"./debounce-CS5Zky73.js";import"./useOsdkClient-KzXi1Mfu.js";import"./index-vq-4ZEFu.js";import"./Input-BvVBd0y-.js";import"./useBaseUiId-BlK4VlOb.js";import"./useControlled-DENE4AVf.js";import"./index-CicBoOrA.js";import"./index-_mZt-hWo.js";import"./PopoverPopup-DLqc0nMK.js";import"./InternalBackdrop-t0TxIlY7.js";import"./composite-C2vCaoMT.js";import"./index-Cuh_ZcBo.js";import"./getDisabledMountTransitionStyles-DpBysH4p.js";import"./ToolbarRootContext-BkN7DcjO.js";import"./tick-DFEtV6b8.js";import"./svgIconContainer-DjFXNtcD.js";import"./small-cross-CwlKy0u0.js";import"./search-DVbD0a3n.js";import"./cross-BpdOGJyJ.js";import"./useValueChanged-BhQo8aRa.js";import"./getPseudoElementBounds-CAI6qpMe.js";import"./CompositeItem-DdNr1E7d.js";import"./makeExternalStore-DymPkA7f.js";import"./BaseForm-89dKUZHx.js";import"./ActionButton-BJGjBTpO.js";import"./Button-d7ygQEjr.js";import"./SkeletonBar-BNDqBgQ7.js";import"./Tooltip-DP0dSQE1.js";import"./info-sign-DNsVlobt.js";import"./chevron-up-DWov7Pwm.js";import"./chevron-down-DCYjYXHO.js";import"./useEventCallback-DpCsUsma.js";import"./iconLoader-zR6ZSCYR.js";import"./Switch-DsMZRuTj.js";import"./CompositeRoot-CK-TwHMb.js";import"./TimePicker-TDFIrodp.js";import"./CollapsiblePanel-DowHk0nd.js";import"./error-CICrjBQf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DqLs3Yq6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
