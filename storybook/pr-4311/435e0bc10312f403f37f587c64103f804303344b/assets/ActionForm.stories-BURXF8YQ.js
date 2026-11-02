import{j as t,g as n}from"./iframe-CvsrxUF4.js";import{A as r}from"./action-form-BwGAKG23.js";import"./preload-helper-uWi1ckbZ.js";import"./DropdownField-CdiCIvXD.js";import"./debounce-CNMotwK2.js";import"./useOsdkClient-7BSZc32P.js";import"./index-DCyy6adA.js";import"./Input-C5HOYdeG.js";import"./useBaseUiId-B5t4I27A.js";import"./useControlled-m2VSv2nN.js";import"./index-DJNWwc48.js";import"./index-CEMwvdDY.js";import"./PopoverPopup-DNc4ifyx.js";import"./InternalBackdrop-Cugch1V3.js";import"./composite-B3OVmB-U.js";import"./index-AdzqFMQC.js";import"./getDisabledMountTransitionStyles-BqX912Sn.js";import"./ToolbarRootContext-CSZctfrL.js";import"./tick-NgklbaJL.js";import"./svgIconContainer-DzgbD020.js";import"./small-cross-BdHCzf60.js";import"./search-DUdimr2h.js";import"./cross-DtTtrll4.js";import"./useValueChanged-DJNKhzCf.js";import"./getPseudoElementBounds-C85wL7-g.js";import"./CompositeItem-Df2qP5O_.js";import"./makeExternalStore-BsYlQUVX.js";import"./BaseForm-DZDIeLEf.js";import"./ActionButton-BacuR1Ht.js";import"./Button-COOo6KA1.js";import"./SkeletonBar-DNcYviI0.js";import"./Tooltip-B-kgUKy-.js";import"./info-sign-Cf21Asd6.js";import"./chevron-up-D-6TJi-d.js";import"./chevron-down-eSVm9fha.js";import"./useEventCallback-CWso9AzW.js";import"./iconLoader-BDYSl62e.js";import"./Switch-e-Udtb78.js";import"./CompositeRoot-DC1QsBMs.js";import"./TimePicker-Cmj31jn4.js";import"./CollapsiblePanel-C8Ffq7bK.js";import"./error-DR19w44a.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DQZsQ0ny.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
