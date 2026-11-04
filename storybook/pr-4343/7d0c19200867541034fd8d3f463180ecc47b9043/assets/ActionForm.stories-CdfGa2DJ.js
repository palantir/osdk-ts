import{j as t,g as n}from"./iframe-DnJOFPSX.js";import{A as r}from"./action-form-D9qGw_iO.js";import"./preload-helper-DE0LB-In.js";import"./DropdownField-FHfvzp38.js";import"./debounce-DbuR1tvL.js";import"./useOsdkClient-B002ZQ1y.js";import"./index-BsrGUZmH.js";import"./Input-DAAzhLOd.js";import"./useBaseUiId-BmOtxMBQ.js";import"./useControlled-LZY0zNEU.js";import"./index-C47JnOK2.js";import"./index-CN_nZvI2.js";import"./PopoverPopup-DM0BfveY.js";import"./InternalBackdrop-7uH3PXR7.js";import"./composite-ActYTO9Q.js";import"./index-DQIivcku.js";import"./getDisabledMountTransitionStyles-Dp_4ImaZ.js";import"./ToolbarRootContext-C0ive6C5.js";import"./tick-DQ7wMG8T.js";import"./svgIconContainer-C9e6psM5.js";import"./small-cross--HeoX71E.js";import"./search-1uNTCuXG.js";import"./cross-RxTC7yT1.js";import"./useValueChanged-Dwzdf7-z.js";import"./getPseudoElementBounds-CwjzgNQM.js";import"./CompositeItem-C0xu2aal.js";import"./makeExternalStore-CKgPh2OO.js";import"./BaseForm-CErHx06w.js";import"./ActionButton-CLFbgSEP.js";import"./Button-cZ9KvtCU.js";import"./SkeletonBar-BGTPHBC_.js";import"./Tooltip-DFNnZgP9.js";import"./info-sign-DEthTP5Q.js";import"./chevron-up-CQ9DGpiu.js";import"./chevron-down-DnnfJ5YY.js";import"./useEventCallback-C_WDvZGp.js";import"./iconLoader-BGQyLz3x.js";import"./Switch-CbS5sA9I.js";import"./CompositeRoot--UloWT4z.js";import"./TimePicker-CU6PIprl.js";import"./CollapsiblePanel-ZSBWQMSx.js";import"./error-BL2HC2Sp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DbwiXd_V.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
