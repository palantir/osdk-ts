import{j as t,g as n}from"./iframe-DxxbQvQS.js";import{A as r}from"./action-form-D7MOfCWg.js";import"./preload-helper-BmW5a970.js";import"./DropdownField-DzabicEs.js";import"./debounce-DCqgfrAu.js";import"./useOsdkClient-_f8xX1vc.js";import"./index-Cu-WR_G5.js";import"./Input-CVhM1jds.js";import"./useBaseUiId-Brl8T8Kf.js";import"./useControlled-CL6vvYza.js";import"./index-mzAwx4l9.js";import"./index-CkYBlAD9.js";import"./PopoverPopup-B4xa-esw.js";import"./InternalBackdrop-nw-0n2j_.js";import"./composite-C5YJt7dM.js";import"./index-vkezJOJG.js";import"./getDisabledMountTransitionStyles-CdcAqYKt.js";import"./ToolbarRootContext-9fMJDea1.js";import"./tick-DRGERfep.js";import"./svgIconContainer-PZP2rkyO.js";import"./small-cross-Dpw_vhgf.js";import"./search-rJtEr32Y.js";import"./cross-D--1C_uR.js";import"./useValueChanged-DeuKFFlX.js";import"./getPseudoElementBounds-D5nG0WVt.js";import"./CompositeItem-beHVPrKw.js";import"./makeExternalStore-SAYXMC44.js";import"./BaseForm-6KDg1DwN.js";import"./ActionButton-Db9MAiVt.js";import"./Button-BnqDmIMF.js";import"./SkeletonBar-BeU71Ayo.js";import"./Tooltip-CQLTRANm.js";import"./info-sign-DLNSN9OZ.js";import"./chevron-up-DBbJ6kbF.js";import"./chevron-down-CCZd9VTh.js";import"./useEventCallback-CAdWC4ED.js";import"./iconLoader-CB_tDLZy.js";import"./Switch-CEEa5cuf.js";import"./CompositeRoot-CPPn3RyR.js";import"./TimePicker-BLnerXZ6.js";import"./CollapsiblePanel-CwmPk1HL.js";import"./error-ClKWsTpb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DJHuuWR4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
