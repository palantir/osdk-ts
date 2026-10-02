import{j as t,g as n}from"./iframe-E4YUsTVF.js";import{A as r}from"./action-form-BzJ4lTRZ.js";import"./preload-helper-DS93hH50.js";import"./DropdownField-F9-Dgqve.js";import"./debounce-Dxqh-VtF.js";import"./useOsdkClient-COGErPcP.js";import"./index-33WajHAP.js";import"./Input-DzBskEWR.js";import"./useBaseUiId-Cmr5xOLR.js";import"./useControlled-DcS_dYjp.js";import"./index-BD5alyvs.js";import"./index-C6lnPhSr.js";import"./PopoverPopup-Dp3SH3RM.js";import"./InternalBackdrop-6uJFTnu9.js";import"./composite-BPb4GIr2.js";import"./index-BOSZpFJm.js";import"./getDisabledMountTransitionStyles-nCIeRxS6.js";import"./ToolbarRootContext-Z5Mk8e8P.js";import"./tick-CpUkHDlc.js";import"./svgIconContainer-BpDOXtMt.js";import"./small-cross-DNql_UiE.js";import"./search-C6TyODke.js";import"./cross-B0teiHtj.js";import"./useValueChanged-_zlf4vQL.js";import"./getPseudoElementBounds-BB4Ow9wc.js";import"./CompositeItem-Dy6HQ5ii.js";import"./makeExternalStore-BPwvobNb.js";import"./BaseForm-D1Xt6gCB.js";import"./ActionButton-BNsdbYhX.js";import"./Button-D8Hq8qlo.js";import"./SkeletonBar-COMgymc7.js";import"./Tooltip-FSxkyrOa.js";import"./info-sign-f9u7ZSUY.js";import"./chevron-up-DH8kTr-f.js";import"./chevron-down-BXAN807d.js";import"./useEventCallback-s63RPRIc.js";import"./iconLoader-NqkrArCT.js";import"./Switch-DgoZX6yc.js";import"./CompositeRoot-4xM_8XM2.js";import"./TimePicker-DvKujnfa.js";import"./CollapsiblePanel-CG_xY-4r.js";import"./error-C7OFda1X.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BjBJAZAm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
