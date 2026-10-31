import{j as t,g as n}from"./iframe-B_zDWzul.js";import{A as r}from"./action-form-GlZGGbK4.js";import"./preload-helper-DG9VDp_n.js";import"./DropdownField-CR3J2Rsn.js";import"./debounce-BxwTN6fx.js";import"./useOsdkClient-iyjN2aHF.js";import"./index-Boe0r-ul.js";import"./Input-K8Dbc9EI.js";import"./useBaseUiId-BPYuvIYG.js";import"./useControlled-CZdhzCyg.js";import"./index-Br-DhCTN.js";import"./index-aWrltaDE.js";import"./PopoverPopup-DJdvahb_.js";import"./InternalBackdrop-BBDXZiom.js";import"./composite-CRWF04qz.js";import"./index-Bfg-2Dta.js";import"./getDisabledMountTransitionStyles-B56Kq4AN.js";import"./ToolbarRootContext-CvnVRZq1.js";import"./tick-Cd-BvMVz.js";import"./svgIconContainer-D8Trdk-G.js";import"./small-cross-fjxceIfR.js";import"./search-CXl9LYG4.js";import"./cross-DKHH0lxU.js";import"./useValueChanged-ge1xS2AC.js";import"./getPseudoElementBounds-BRtR8Y3Z.js";import"./CompositeItem-DKZBVYKb.js";import"./makeExternalStore-CxUdCktA.js";import"./BaseForm-CuZnSZaz.js";import"./ActionButton-DfJlFfaW.js";import"./Button-CwOCHkU2.js";import"./SkeletonBar-C_WlHfIE.js";import"./Tooltip-CgN9cFWO.js";import"./info-sign-BHzZ0p_W.js";import"./chevron-up-cD8cJzk6.js";import"./chevron-down-uvQYx996.js";import"./useEventCallback-DnLRigCq.js";import"./iconLoader-D-cOoaMH.js";import"./Switch-p2kz_bvd.js";import"./CompositeRoot-C22sK8Tv.js";import"./TimePicker-BCmCZxfv.js";import"./CollapsiblePanel-D0sNlSFL.js";import"./error-D8w3bqy-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-3_FMme5R.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
