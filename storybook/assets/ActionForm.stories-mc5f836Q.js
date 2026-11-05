import{j as t,g as n}from"./iframe-B7GyHcsF.js";import{A as r}from"./action-form-CCuWaNiv.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-2GtibBCE.js";import"./debounce-CcrQke-P.js";import"./useOsdkClient-BzlDplSL.js";import"./index-CFQjkptn.js";import"./Input-xO4VjGaV.js";import"./useBaseUiId-DIKh32OU.js";import"./useControlled-CYQSl254.js";import"./index-CCC1KVPP.js";import"./index-BrNFn6FK.js";import"./PopoverPopup-B5kfz1KF.js";import"./InternalBackdrop-dYAJysja.js";import"./composite-ZKnDJfr2.js";import"./index-CIkJKp5f.js";import"./getDisabledMountTransitionStyles-DJHtY_2a.js";import"./ToolbarRootContext-DPmvBz2H.js";import"./tick-BsrTYy8c.js";import"./svgIconContainer-DV6JsgR9.js";import"./small-cross-C2Z9hnxs.js";import"./search-BOqk2K5z.js";import"./cross-CbX11T1l.js";import"./useValueChanged-VqPWwgfd.js";import"./getPseudoElementBounds-fr9V4EVn.js";import"./CompositeItem-QnuG7jjG.js";import"./makeExternalStore-CHXnPqRT.js";import"./BaseForm-DWMx21xN.js";import"./ActionButton-C8h86V18.js";import"./Button-DcySZcut.js";import"./SkeletonBar-x8unuJhM.js";import"./Tooltip-Ob1GddwU.js";import"./info-sign-BcsJqIz5.js";import"./chevron-up-BZV9EWn6.js";import"./chevron-down-BWTVBIyh.js";import"./useEventCallback-Dws1eW-l.js";import"./iconLoader-Bg42-8Ie.js";import"./Switch-BUahQAI-.js";import"./CompositeRoot-Dqzgwgb9.js";import"./TimePicker-GxbFyLJ2.js";import"./CollapsiblePanel-VqzXipcy.js";import"./error-o8PSnfAD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-3hzxFyTR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
