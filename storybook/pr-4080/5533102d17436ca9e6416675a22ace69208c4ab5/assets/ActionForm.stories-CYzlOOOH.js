import{j as t,g as n}from"./iframe-C3xC__LU.js";import{A as r}from"./action-form-Ca55j3Bb.js";import"./preload-helper-DxYa6wnu.js";import"./DropdownField-Bvfem0KY.js";import"./debounce-Cq5z3UtH.js";import"./useOsdkClient-BT6MutGO.js";import"./index-Bdy1H0uO.js";import"./Input-CprSxKZD.js";import"./useBaseUiId-DfXUpmNo.js";import"./useControlled-D8jbflQz.js";import"./index-BC4cspOB.js";import"./index-5F-Zydov.js";import"./PopoverPopup-Bkq0Fxyf.js";import"./InternalBackdrop-DDB1NqHl.js";import"./composite-DEhtrm_a.js";import"./index-h0dbL0ga.js";import"./getDisabledMountTransitionStyles-DAJs1DsQ.js";import"./ToolbarRootContext-Ciubtyo1.js";import"./tick-2Vgdfn-_.js";import"./svgIconContainer-Bfm1ZKMl.js";import"./small-cross-N-4r5wTS.js";import"./search-C7Klq3lR.js";import"./cross-DTsmRRZf.js";import"./useValueChanged-DnBGnqXA.js";import"./getPseudoElementBounds-HE1LNCz1.js";import"./CompositeItem-BTSmeuTL.js";import"./makeExternalStore-DlKuehqN.js";import"./BaseForm-bnCwjRmr.js";import"./ActionButton-CRT7rdtb.js";import"./Button-CIfwAqPR.js";import"./SkeletonBar-CEAqEMoY.js";import"./Tooltip-CgkXmPE_.js";import"./info-sign-D4lUcaYX.js";import"./chevron-up-BFz6Lk-e.js";import"./chevron-down-Cpgn36Ir.js";import"./useEventCallback-YKLGG8r3.js";import"./iconLoader-Dwvn-xC4.js";import"./Switch-BOlJWVFf.js";import"./CompositeRoot-C8YvZ1Sa.js";import"./TimePicker-BIvt-qXQ.js";import"./CollapsiblePanel-BvlLag5C.js";import"./error-CQKPevIq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DD7JD0C1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
