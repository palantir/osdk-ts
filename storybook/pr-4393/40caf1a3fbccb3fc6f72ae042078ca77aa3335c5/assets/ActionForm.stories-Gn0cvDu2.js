import{j as t,g as n}from"./iframe-CfbjiUO2.js";import{A as r}from"./action-form-DjPxRWO2.js";import"./preload-helper-9qFOutGb.js";import"./DropdownField-C41H6ZVs.js";import"./debounce-aqSqiTwE.js";import"./useOsdkClient-Cth9whbI.js";import"./index-DhEKv3k8.js";import"./Input-C6r2dONX.js";import"./useBaseUiId-KkzZtg6c.js";import"./useControlled-NF1yqRGY.js";import"./index-DeN7WaWx.js";import"./index-Cdt2HnwD.js";import"./PopoverPopup-Bb7fveQO.js";import"./InternalBackdrop-Cj0yGS8w.js";import"./composite-BLsaDnsq.js";import"./index-Vop21I5L.js";import"./getDisabledMountTransitionStyles-ApLJ3Lvx.js";import"./ToolbarRootContext-DEszTe9o.js";import"./tick-CrjnM-Na.js";import"./svgIconContainer-n1-XLaqe.js";import"./small-cross-CUl6D4zD.js";import"./search-BvtxNbE5.js";import"./cross-CDv3c9ZT.js";import"./useValueChanged-Bsmvo0qV.js";import"./getPseudoElementBounds-C6fv_0nX.js";import"./CompositeItem-CXj7-nx_.js";import"./makeExternalStore-bIg36UO0.js";import"./BaseForm-BzmQDeqb.js";import"./ActionButton-Dc4Qt7pU.js";import"./Button-BVuGahtR.js";import"./SkeletonBar-o0aOuB0t.js";import"./Tooltip-79oqwAuG.js";import"./info-sign-CuFgv72q.js";import"./chevron-up-CcxcxHpC.js";import"./chevron-down-7jPpylX5.js";import"./useEventCallback-AK_04X0m.js";import"./iconLoader-B6Vp1WV4.js";import"./Switch-CCUCH9j7.js";import"./CompositeRoot-CXgLN0Iq.js";import"./TimePicker-CoElMstW.js";import"./CollapsiblePanel-B5IJejoA.js";import"./error-CdqVFWE7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-1iZQrA2_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
