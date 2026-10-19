import{j as t,g as n}from"./iframe-Cc5_drEC.js";import{A as r}from"./action-form-BZiDDoeF.js";import"./preload-helper-Bt1W59RD.js";import"./DropdownField-DP_8eQpa.js";import"./debounce-DfK46y7C.js";import"./useOsdkClient-C_6tjczz.js";import"./index-D-UZOeKX.js";import"./Input-BXNkfVg0.js";import"./useBaseUiId-DZZTvEON.js";import"./useControlled-DzeayCVC.js";import"./index-IxLV6xZ7.js";import"./index-fYCa685o.js";import"./PopoverPopup-NaPF7hSd.js";import"./InternalBackdrop-00ofXWi4.js";import"./composite-DTAuCieW.js";import"./index-DLbXZ__j.js";import"./getDisabledMountTransitionStyles-CWBpGJQ9.js";import"./ToolbarRootContext-B17vRDJw.js";import"./tick-CMjsKL7k.js";import"./svgIconContainer-DUNbWJiK.js";import"./small-cross-ChmHXfGU.js";import"./search-C_Y495lk.js";import"./cross-CJA5t11o.js";import"./useValueChanged-C8wUi11i.js";import"./getPseudoElementBounds-BgIULFkV.js";import"./CompositeItem-Zf76mXhE.js";import"./makeExternalStore-8Ml87JDf.js";import"./BaseForm-DrAeVqYN.js";import"./ActionButton-w_opMWjJ.js";import"./Button-CLepS3ZY.js";import"./SkeletonBar-DdEJM8wE.js";import"./Tooltip-DLAYmbQY.js";import"./info-sign-67dzZUnk.js";import"./chevron-up-CkbtO2kS.js";import"./chevron-down-DaAY8kxc.js";import"./useEventCallback-Nwtw5ePR.js";import"./iconLoader-DmH2stqJ.js";import"./Switch-C4MrhfLm.js";import"./CompositeRoot-BTdIImwc.js";import"./TimePicker-MO64ygqH.js";import"./CollapsiblePanel-CxbXkZUA.js";import"./error-CgtKdKTE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-uMhaipzm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
