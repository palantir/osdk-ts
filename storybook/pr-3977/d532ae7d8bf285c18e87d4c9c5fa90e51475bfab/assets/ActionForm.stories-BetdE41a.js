import{j as t,g as n}from"./iframe-TxXxbmz5.js";import{A as r}from"./action-form-DAYeiDuE.js";import"./preload-helper-CpxRQbhd.js";import"./DropdownField-Cuo6Kh-T.js";import"./debounce-CnngSnsz.js";import"./useOsdkClient-CCaWk0Px.js";import"./index-CN0gJRJO.js";import"./Input-B4WkyavH.js";import"./useBaseUiId-Br3V4Y7Q.js";import"./useControlled-DruZmDs3.js";import"./index-B7GgCYYh.js";import"./index-CIu9B3ha.js";import"./PopoverPopup-CPS5tfTo.js";import"./InternalBackdrop-CetaIsfW.js";import"./composite-DOASapxT.js";import"./index-DyCiBw5P.js";import"./getDisabledMountTransitionStyles-C9uIvqp9.js";import"./ToolbarRootContext-BWpuHFgW.js";import"./tick-CF_Cqk30.js";import"./svgIconContainer-CELXinHy.js";import"./small-cross-Cdx0iwCB.js";import"./search-BC9yKYZ2.js";import"./cross-VXN4aiwS.js";import"./useValueChanged-CWKC294z.js";import"./getPseudoElementBounds-DfyCOY8U.js";import"./CompositeItem-BE7Mz5Vz.js";import"./makeExternalStore-Da0z5igE.js";import"./BaseForm-qXgN7F1Y.js";import"./ActionButton-D-hbTAJE.js";import"./Button-LZRzEtLJ.js";import"./SkeletonBar-BMAk9jbB.js";import"./Tooltip-FiY13jbJ.js";import"./info-sign-BaQdd-OK.js";import"./chevron-up-CZfIwrNs.js";import"./chevron-down-BclEY4pC.js";import"./useEventCallback-g6vs120_.js";import"./iconLoader-CJQ677GM.js";import"./CompositeRoot-DKXv_0uM.js";import"./Switch-B3P3v0lW.js";import"./TimePicker-CAfcv0gW.js";import"./CollapsiblePanel-dwMPUOFS.js";import"./error-DK4Y1HxX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BEHPBM8E.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
