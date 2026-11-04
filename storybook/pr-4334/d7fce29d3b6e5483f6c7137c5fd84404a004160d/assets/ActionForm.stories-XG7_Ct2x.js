import{j as t,g as n}from"./iframe-BrmQZ3gv.js";import{A as r}from"./action-form-Cq6uoIl5.js";import"./preload-helper-bFlMnFhE.js";import"./DropdownField-BDpM5rcW.js";import"./debounce-DktWngHR.js";import"./useOsdkClient-DMIbxZRi.js";import"./index-BukqnFRF.js";import"./Input-CJbUQK7W.js";import"./useBaseUiId-DOEJb2YQ.js";import"./useControlled-BKcLfL-m.js";import"./index-DrxXiExk.js";import"./index-BHysiYNZ.js";import"./PopoverPopup-CsNA8h91.js";import"./InternalBackdrop-B6fWmh38.js";import"./composite-CToHHLnK.js";import"./index-PCKTTVVz.js";import"./getDisabledMountTransitionStyles-oZQkDeF-.js";import"./ToolbarRootContext-DVJYWBBz.js";import"./tick-DQnQI0KH.js";import"./svgIconContainer-1ZxcqWPt.js";import"./small-cross-DWB62PqX.js";import"./search-3yVqV9Ja.js";import"./cross-CyQ2LR1N.js";import"./useValueChanged-B2eN2qPg.js";import"./getPseudoElementBounds-GhphztYg.js";import"./CompositeItem-Cj9sjJEA.js";import"./makeExternalStore-B5wDpA-S.js";import"./BaseForm-B-jnXj_K.js";import"./ActionButton-Cvda-cXU.js";import"./Button-DFW8ZRr_.js";import"./SkeletonBar-Bnl4zbTE.js";import"./Tooltip-B67VaBcv.js";import"./info-sign-DIdp68Pa.js";import"./chevron-up-TwyymfBW.js";import"./chevron-down-DjoNZ0eU.js";import"./useEventCallback-D7yysNmp.js";import"./iconLoader-Bh6UtoPg.js";import"./Switch-f631cmUf.js";import"./CompositeRoot-COp-ZJW3.js";import"./TimePicker-Dj6LUaWB.js";import"./CollapsiblePanel-C6bZdZ49.js";import"./error-BoTJC5k7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CjsWDT1I.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
