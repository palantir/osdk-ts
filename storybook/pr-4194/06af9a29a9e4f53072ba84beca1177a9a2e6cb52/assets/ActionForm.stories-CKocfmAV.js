import{j as t,g as n}from"./iframe-Dig_Ahq7.js";import{A as r}from"./action-form-ZuydUI_o.js";import"./preload-helper-Eyc3oojg.js";import"./DropdownField-BYx0xJl-.js";import"./debounce-BeGpfOBp.js";import"./useOsdkClient-CLewU869.js";import"./index-BAoTCyK2.js";import"./Input-DERIfaLU.js";import"./useBaseUiId-BXYV1Ucu.js";import"./useControlled-9l0-iUGA.js";import"./index-r_flECQw.js";import"./index-BkAj4YFS.js";import"./PopoverPopup-D98de9Kk.js";import"./InternalBackdrop-9xDhMp1X.js";import"./composite-GVV5HeYl.js";import"./index-C7_bCvO2.js";import"./getDisabledMountTransitionStyles-D5dXOzgC.js";import"./ToolbarRootContext-5tRY-prW.js";import"./tick-CxynzRts.js";import"./svgIconContainer-Cx17DJom.js";import"./small-cross-DjUMZG4-.js";import"./search-C4f4g9Ue.js";import"./cross-BbZdDJWd.js";import"./useValueChanged-vdnoKm5P.js";import"./getPseudoElementBounds-Br8tb0sy.js";import"./CompositeItem-CjjvTweq.js";import"./makeExternalStore-CcSZq8Dl.js";import"./BaseForm-BvFJKf2n.js";import"./ActionButton-CjCg9wAs.js";import"./Button-Cg2kaI0u.js";import"./SkeletonBar-CsGbtXT3.js";import"./Tooltip-CTgBYqFc.js";import"./info-sign-Bbl5Zc_b.js";import"./chevron-up-VVP3vy4s.js";import"./chevron-down-D5J97Xaa.js";import"./useEventCallback-gJbpMQg7.js";import"./iconLoader-DM0mwO5b.js";import"./Switch-cQ39BS7T.js";import"./CompositeRoot-CgIqtHlb.js";import"./TimePicker-gJpImfsT.js";import"./CollapsiblePanel-KQrHcfGa.js";import"./error-D0UPEL3v.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-hTvMF2O-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
