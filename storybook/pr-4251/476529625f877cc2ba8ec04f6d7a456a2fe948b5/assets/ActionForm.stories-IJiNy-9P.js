import{j as t,g as n}from"./iframe-Cr8Hjkao.js";import{A as r}from"./action-form-DlaUWSPh.js";import"./preload-helper-CeOoJBco.js";import"./DropdownField-Dw4F6h_u.js";import"./debounce-Dfpcq8HD.js";import"./useOsdkClient-BUR86U5t.js";import"./index-DRoLNVdY.js";import"./Input-DELuQIly.js";import"./useBaseUiId-BJlElnor.js";import"./useControlled-qAgRHhDO.js";import"./index-ALPgotdH.js";import"./index-ByH-ncsi.js";import"./PopoverPopup-jx0tch27.js";import"./InternalBackdrop-DTn82lWC.js";import"./composite-EK_Kp5ER.js";import"./index-CBMMCh_Y.js";import"./getDisabledMountTransitionStyles-DzB4-odI.js";import"./ToolbarRootContext-C1DQaCtc.js";import"./tick-CateFlg_.js";import"./svgIconContainer-F-4GL1p-.js";import"./small-cross-b_1C3CxG.js";import"./search-COCkrCII.js";import"./cross-95TP_pkM.js";import"./useValueChanged-DMJhOgzX.js";import"./getPseudoElementBounds-DwuMXUq1.js";import"./CompositeItem-RD-StT-2.js";import"./makeExternalStore-CCNrGOqq.js";import"./BaseForm-kUUwi8Gc.js";import"./ActionButton-CfImC9cJ.js";import"./Button-C24gAlnE.js";import"./SkeletonBar-DcJRoyj-.js";import"./Tooltip-CEYl8ywn.js";import"./info-sign-Dz0zryOw.js";import"./chevron-up-DMVw7GjQ.js";import"./chevron-down-DyxXbZDq.js";import"./useEventCallback-Cl1bqirj.js";import"./iconLoader-DhtaUbGd.js";import"./Switch-DRcqRmsF.js";import"./CompositeRoot-Czmwub35.js";import"./TimePicker-18eFXu57.js";import"./CollapsiblePanel-DYpC0oKE.js";import"./error-DaMdq9UW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ChwR2mE5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
