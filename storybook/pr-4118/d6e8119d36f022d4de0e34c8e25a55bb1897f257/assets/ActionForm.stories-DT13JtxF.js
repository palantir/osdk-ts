import{j as t,g as n}from"./iframe-B_S0EqMa.js";import{A as r}from"./action-form-Cd7TXOCU.js";import"./preload-helper-VT4tRblm.js";import"./DropdownField-BqwO7jwV.js";import"./debounce-DkO2AOLz.js";import"./useOsdkClient-BgQED0Kw.js";import"./index-omwonnY8.js";import"./Input-Dc-QK3C6.js";import"./useBaseUiId-BlWO7UtN.js";import"./useControlled-HSy2N_AY.js";import"./index-DIzgx3sP.js";import"./index-b4QG9WWh.js";import"./PopoverPopup-DvC1XwGt.js";import"./InternalBackdrop-B96Tkp15.js";import"./composite-PIV4lDcc.js";import"./index-5NQkvcqq.js";import"./getDisabledMountTransitionStyles-C4jU6be9.js";import"./ToolbarRootContext-zpUnsunT.js";import"./tick-cfCmRgVv.js";import"./svgIconContainer-D37wr4aE.js";import"./small-cross-4s57bvQI.js";import"./search-B1fKCW94.js";import"./cross-CQGje-Eb.js";import"./useValueChanged-BNRB7Ano.js";import"./getPseudoElementBounds-Cf8_zdKL.js";import"./CompositeItem-C2Mv02sz.js";import"./makeExternalStore-CvSwbGtd.js";import"./BaseForm-D7voIRRB.js";import"./ActionButton-BC0COhhV.js";import"./Button-Bt2kiQIM.js";import"./SkeletonBar-DgL1EZY6.js";import"./Tooltip-wkX9ODyR.js";import"./info-sign-D3bvXr9B.js";import"./chevron-up-GXPV9SW8.js";import"./chevron-down-kik4znnV.js";import"./useEventCallback-Bt8CFa_6.js";import"./iconLoader-D71QZfPU.js";import"./Switch-CO6jJ3Ag.js";import"./CompositeRoot-C1wGXlQY.js";import"./TimePicker-CHixcSNL.js";import"./CollapsiblePanel-BTNt_fsv.js";import"./error-BnUCzbEn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CXFFSRl8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
