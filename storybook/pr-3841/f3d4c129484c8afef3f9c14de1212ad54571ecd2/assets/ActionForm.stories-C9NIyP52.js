import{j as t,g as n}from"./iframe-B8zlsrHH.js";import{A as r}from"./action-form-CNmkrx5i.js";import"./preload-helper-C0b0An0Y.js";import"./DropdownField-QqA07BX-.js";import"./debounce-4L--7xKE.js";import"./useOsdkClient-DS2yUYbO.js";import"./index-tfK5NBPh.js";import"./Input-CqRPwD_J.js";import"./useBaseUiId-CmAD5Nv6.js";import"./useControlled-0KT-Nbfb.js";import"./index-BDPlX1qs.js";import"./index-CVRibSdI.js";import"./PopoverPopup-CsbWvaPD.js";import"./InternalBackdrop-D9A75Q7m.js";import"./composite-CqVw9i-r.js";import"./index-8FJlbEEh.js";import"./getDisabledMountTransitionStyles-CGmmOIb5.js";import"./ToolbarRootContext-rZcpvLxX.js";import"./tick-BlBXVcaW.js";import"./svgIconContainer-93ic9H0u.js";import"./small-cross-CcSvAReI.js";import"./search-BU1Su8pV.js";import"./cross-DaFAEeUI.js";import"./useValueChanged-DrbNpYIS.js";import"./getPseudoElementBounds-8Tn-EeOs.js";import"./CompositeItem-CS-yxRHH.js";import"./makeExternalStore-BAH7otcI.js";import"./BaseForm-Ds_EQhQM.js";import"./ActionButton-BvyKYeoC.js";import"./Button-D-b8a2cD.js";import"./SkeletonBar-B0OBJJ-q.js";import"./Tooltip-DY3JvpZs.js";import"./info-sign-BIrq9RNX.js";import"./chevron-up-CwWwZExh.js";import"./chevron-down-Cv_0_uCQ.js";import"./useEventCallback-B8_XFHjh.js";import"./iconLoader-DCB3LL38.js";import"./CompositeRoot-D0O5MW4-.js";import"./Switch-nH3BWzX6.js";import"./TimePicker-SJEIMI_F.js";import"./CollapsiblePanel-DzQiRjZ4.js";import"./error-3ug2VmSe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-vJQGO9MO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
