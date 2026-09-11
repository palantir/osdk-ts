import{j as t,g as n}from"./iframe-Bw13kIxi.js";import{A as r}from"./action-form-DLczfEhg.js";import"./preload-helper-BzOLmTcY.js";import"./DropdownField-QqZNyAQs.js";import"./debounce-BaVRg2vf.js";import"./useOsdkClient-ysIV4O88.js";import"./index-MMxGRtZu.js";import"./Input-2zOhGHVv.js";import"./useBaseUiId-BD7FpPox.js";import"./useControlled-DefJa1NZ.js";import"./index-CUU4Y7hn.js";import"./index-BqWGwO84.js";import"./PopoverPopup-Fr35LjTY.js";import"./InternalBackdrop-A7BWoqb_.js";import"./composite-BFCFgZut.js";import"./index-BFk6o5Yc.js";import"./getDisabledMountTransitionStyles-Dm6t4Qzi.js";import"./ToolbarRootContext-IHMHRzml.js";import"./tick-vVehnAOz.js";import"./svgIconContainer-CHQSAFNt.js";import"./small-cross-jMKjsjhb.js";import"./search-DC1ogqGn.js";import"./cross-Bot7O1S5.js";import"./useValueChanged-qKqnNGu6.js";import"./getPseudoElementBounds-BbQB3o-0.js";import"./CompositeItem-B4j9mPKG.js";import"./makeExternalStore-BPlb4pia.js";import"./BaseForm-DBPQZGLj.js";import"./ActionButton-DXMkOznn.js";import"./Button-CE0Z6ey5.js";import"./SkeletonBar-CpAUSAEn.js";import"./Tooltip-C2VUAIPR.js";import"./info-sign-C3dBDVha.js";import"./chevron-up-B2KSviuP.js";import"./chevron-down-hwQFkKEa.js";import"./useEventCallback-DTY0kHsH.js";import"./iconLoader-C3MmqZOQ.js";import"./CompositeRoot-D3tWT_zL.js";import"./Switch-CLQS3gP4.js";import"./TimePicker-B9oekyRN.js";import"./CollapsiblePanel-C7c8Mi8e.js";import"./error-CDpWRRdK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bh3armvA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
