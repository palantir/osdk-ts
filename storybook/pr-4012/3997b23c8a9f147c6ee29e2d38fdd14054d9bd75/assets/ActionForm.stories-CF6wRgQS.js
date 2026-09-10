import{j as t,g as n}from"./iframe-BFPzVvxY.js";import{A as r}from"./action-form-C763T_a9.js";import"./preload-helper-CFSQ1G8J.js";import"./DropdownField-CKw_sIr2.js";import"./debounce-DaSP3gYA.js";import"./useOsdkClient-D0KfoQzg.js";import"./index-CCGax6tv.js";import"./Input-SASUrwvz.js";import"./useBaseUiId-lA3GGoRZ.js";import"./useControlled-CS4AozJ9.js";import"./index-CDsjmQfs.js";import"./index-CQTk_3Md.js";import"./PopoverPopup-BmVShL7M.js";import"./InternalBackdrop-DCGl8xdy.js";import"./composite-ByiulZct.js";import"./index-D7KtHfV_.js";import"./getDisabledMountTransitionStyles-DVrl5q0D.js";import"./ToolbarRootContext-Bn6OEZQ8.js";import"./tick-COqQzl1O.js";import"./svgIconContainer-zvRTjm1U.js";import"./small-cross-BqhrN3UV.js";import"./search-B9sXG8EA.js";import"./cross-CB2SiIfn.js";import"./useValueChanged-CMkIGbNr.js";import"./getPseudoElementBounds-D0xI4mdk.js";import"./CompositeItem-hoe_aJWZ.js";import"./makeExternalStore-ke7w82mB.js";import"./BaseForm-BxHgl4xX.js";import"./ActionButton-D-sFARx4.js";import"./Button-DM9BYVFF.js";import"./SkeletonBar-Wei8CvBD.js";import"./Tooltip-C5Z1Ogwk.js";import"./info-sign-BlhvQ4t4.js";import"./chevron-up-CPyZWxMU.js";import"./chevron-down-Ui6vbKSY.js";import"./useEventCallback-BSZKvIy_.js";import"./iconLoader-xgJcWbJD.js";import"./CompositeRoot-DN2463Ao.js";import"./Switch-CZUQ5rMH.js";import"./TimePicker-Do6OQNsq.js";import"./CollapsiblePanel-B72c7sdX.js";import"./error-C6XCbteP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCHhaE-8.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
