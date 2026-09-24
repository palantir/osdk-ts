import{j as t,g as n}from"./iframe-DW6PMPsi.js";import{A as r}from"./action-form-CmZey6C3.js";import"./preload-helper-BlWs9PqI.js";import"./DropdownField-BD6s7Nxw.js";import"./debounce-DNGh4uNI.js";import"./useOsdkClient-DKTAeEoU.js";import"./index-D66c38lk.js";import"./Input-CpyRhfdw.js";import"./useBaseUiId-Ddck3Zgv.js";import"./useControlled-DHdXh0yp.js";import"./index-FqdShp73.js";import"./index-DqyvE86A.js";import"./PopoverPopup-jZqoMExH.js";import"./InternalBackdrop-X_yjMxAR.js";import"./composite-n7_MOsSq.js";import"./index-CNbWk23J.js";import"./getDisabledMountTransitionStyles-BvAhgIN_.js";import"./ToolbarRootContext-097dpJrh.js";import"./tick-Dfo8VcHX.js";import"./svgIconContainer-DIp-XZwm.js";import"./small-cross-DYlbnTj3.js";import"./search-C1KQWKmH.js";import"./cross-DYQhBJHJ.js";import"./useValueChanged-Cw-uGmYM.js";import"./getPseudoElementBounds-CkD-GcmM.js";import"./CompositeItem-Cs1O47Aq.js";import"./makeExternalStore-D3FsvLmH.js";import"./BaseForm-BVp0ODP2.js";import"./ActionButton-DAhZ0C2F.js";import"./Button-B-NFgFRe.js";import"./SkeletonBar-Crz7mTXk.js";import"./Tooltip-D6WhT4El.js";import"./info-sign-C2sLZ9lZ.js";import"./chevron-up-C50MppHG.js";import"./chevron-down-DJEtRyIF.js";import"./useEventCallback-BUhR7Jsv.js";import"./iconLoader-BSzAxg8E.js";import"./Switch-DkIsRxdh.js";import"./CompositeRoot-Dh-8gF8y.js";import"./TimePicker-BE8Trxhu.js";import"./CollapsiblePanel-DhvG3pSs.js";import"./error-DYDpYg5Z.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-M_tvK9si.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
