import{j as t,g as n}from"./iframe-sxtnZ__3.js";import{A as r}from"./action-form-BxLJ9Kfw.js";import"./preload-helper-DN2WWHpq.js";import"./DropdownField-CtO5bKXX.js";import"./debounce-th_H1hxT.js";import"./useOsdkClient-CFrWyuCF.js";import"./index-B43ZU6C6.js";import"./Input-BXAWaOKi.js";import"./useBaseUiId-Ba5m3KpF.js";import"./useControlled-qu9E_ZvC.js";import"./index-BFg6-CgA.js";import"./index-CgOTndjm.js";import"./isObject-Bh9lnnOC.js";import"./InternalBackdrop-DRPW9LZb.js";import"./composite-C8kR_XfL.js";import"./index-zNfO2gJL.js";import"./getDisabledMountTransitionStyles-BqiNfuke.js";import"./ToolbarRootContext-C88ng33h.js";import"./tick-Ogtike7m.js";import"./svgIconContainer-p2RMTI7a.js";import"./small-cross-ZSOiCyZ5.js";import"./search-t4p9zjVy.js";import"./cross-59RLUben.js";import"./useValueChanged-C8cRSBzx.js";import"./getPseudoElementBounds-BTObdfHz.js";import"./CompositeItem-CQpfGOEN.js";import"./makeExternalStore-zzt6bEAW.js";import"./BaseForm-4eZEmc4d.js";import"./ActionButton-D86xvSSL.js";import"./Button-BMtY7X7F.js";import"./SkeletonBar-CK-yRV8p.js";import"./Tooltip-ByAr14nR.js";import"./info-sign-D5xi8ffH.js";import"./chevron-up-DXf8uJek.js";import"./chevron-down-Dv8O8W9l.js";import"./useEventCallback-D5KlyZoa.js";import"./iconLoader-DCD7LFcW.js";import"./Switch-C03WVqZk.js";import"./CompositeRoot-BcWDasHc.js";import"./TimePicker-BXVCL1hE.js";import"./CollapsiblePanel-BegV3C45.js";import"./error-B8i5ABXk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CQhdGkJo.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
