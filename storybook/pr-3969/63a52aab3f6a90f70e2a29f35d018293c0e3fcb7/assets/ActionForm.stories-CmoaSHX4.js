import{j as t,g as n}from"./iframe-C6LBpvuI.js";import{A as r}from"./action-form-UE2aO0r4.js";import"./preload-helper-D5MgSTAG.js";import"./DropdownField-BxCBScnI.js";import"./debounce-Bq6Y-sFM.js";import"./useOsdkClient-AeGVvXbC.js";import"./index-NiT3c2LR.js";import"./Input-CYIsQ-Xl.js";import"./useBaseUiId-D9K-3OOp.js";import"./useControlled-35bEpDbg.js";import"./index-CPv3k7C8.js";import"./index-DwcGPrXk.js";import"./PopoverPopup-DeYL1cwn.js";import"./InternalBackdrop-HhBDZuEq.js";import"./composite-CIL5RRbh.js";import"./index-CqMyNaRs.js";import"./getDisabledMountTransitionStyles-De_VSn36.js";import"./ToolbarRootContext-DJRyp8mD.js";import"./tick-BwKNHXqA.js";import"./svgIconContainer-Bqb8q1fz.js";import"./small-cross-Ca0z12yL.js";import"./search-CkHqN668.js";import"./cross-_DiJsQ5N.js";import"./useValueChanged-D_yZ0Mm1.js";import"./getPseudoElementBounds-CW1Mk6S7.js";import"./CompositeItem-Cmb1U36q.js";import"./makeExternalStore-qoO0AqK1.js";import"./BaseForm-BeXXwrzt.js";import"./ActionButton-DvSfUpHb.js";import"./Button-DcSoFPNd.js";import"./SkeletonBar-BOpMWE3t.js";import"./Tooltip-Bz3b9lQY.js";import"./info-sign-Bj816i-9.js";import"./chevron-up-sJlGUkQk.js";import"./chevron-down-Bw9bT84C.js";import"./useEventCallback-Wk0zbhyA.js";import"./iconLoader-BjKtfYEM.js";import"./CompositeRoot-Becs0LHq.js";import"./Switch-BMTfYKqc.js";import"./TimePicker-T7CQxnkV.js";import"./CollapsiblePanel-BArtnZVf.js";import"./error-CGV30LyY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dgn4gd8E.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
