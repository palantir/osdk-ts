import{j as t,g as n}from"./iframe-vupRmrl1.js";import{A as r}from"./action-form-BnQnMYIB.js";import"./preload-helper-gDtGaGRc.js";import"./DropdownField-DSd0Acyw.js";import"./debounce-CYhWcO7f.js";import"./useOsdkClient-LWof9usE.js";import"./index-DyT3w31I.js";import"./Input-3k8TfuM7.js";import"./useBaseUiId-BHpjHq0v.js";import"./useControlled-DsYwW81O.js";import"./index-ByLKmROF.js";import"./index-CNpYqLTE.js";import"./PopoverPopup-zyqahA1m.js";import"./InternalBackdrop-cx_OFO3C.js";import"./composite-D7MQDgRI.js";import"./index-F5fjgwJh.js";import"./getDisabledMountTransitionStyles-CfnsRoCh.js";import"./ToolbarRootContext-C266FSVf.js";import"./tick-De0oRo06.js";import"./svgIconContainer-BMvPRZYr.js";import"./small-cross-buimVDlm.js";import"./search-DJT3mMGf.js";import"./cross-DtkFdwBY.js";import"./useValueChanged-BYJmb_es.js";import"./getPseudoElementBounds-Buq5V0z-.js";import"./CompositeItem-D7w73J8v.js";import"./makeExternalStore-D9V5Ayqr.js";import"./BaseForm-M6jWarUp.js";import"./ActionButton-Dc8eWvAd.js";import"./Button-DJ6M6HmU.js";import"./SkeletonBar-xIK3fn_d.js";import"./Tooltip-BEypgjel.js";import"./info-sign-Bal72teD.js";import"./chevron-up-CnIKyTLX.js";import"./chevron-down-LKL_MfU5.js";import"./useEventCallback-DHCVut8W.js";import"./iconLoader-DsOzJAfj.js";import"./CompositeRoot-BV5VxBiq.js";import"./Switch-Cgb8mIxV.js";import"./TimePicker-BvKD4bS9.js";import"./CollapsiblePanel-CwbSoIsS.js";import"./error-Ccrq6RR-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CfzTocUk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
