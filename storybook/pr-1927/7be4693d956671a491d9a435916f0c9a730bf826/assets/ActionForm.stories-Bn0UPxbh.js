import{j as t,g as n}from"./iframe-DaWek49r.js";import{A as r}from"./action-form-BjYXQ7IA.js";import"./preload-helper-CpWLgODR.js";import"./DropdownField-BHLcVE6g.js";import"./debounce-DcMgEISB.js";import"./useOsdkClient-B9Apk1sW.js";import"./index-7xB0j-h3.js";import"./Input-RkKX3V5Z.js";import"./useBaseUiId-BS0koSYJ.js";import"./useControlled-CPSRk279.js";import"./index-CmmmgmWL.js";import"./index-B6v8umRH.js";import"./isObject-W7GYGzhg.js";import"./InternalBackdrop-BtnFxY7R.js";import"./composite-3FCOWJk0.js";import"./index-Ci53BpX5.js";import"./getDisabledMountTransitionStyles-Cr6AUOCj.js";import"./ToolbarRootContext-B9vHR48n.js";import"./tick-DTzur8x4.js";import"./svgIconContainer-BLvyKKH5.js";import"./small-cross-BIIMg4DU.js";import"./search-DAzvWU8V.js";import"./cross-BTg86JZI.js";import"./useValueChanged-BmCio-Qe.js";import"./getPseudoElementBounds-DArBdZgv.js";import"./CompositeItem-C0lAIjsd.js";import"./makeExternalStore-Dui8kxii.js";import"./BaseForm-DA4KS6sz.js";import"./ActionButton-DaPNcgvE.js";import"./Button-QRlJPal1.js";import"./SkeletonBar-DiJ1Hvir.js";import"./Tooltip-D6D1ArJb.js";import"./info-sign-S87K5jZV.js";import"./chevron-up-MZa8miin.js";import"./chevron-down-Cos6kkQA.js";import"./useEventCallback-ROl2U3Zc.js";import"./iconLoader-LwwtIR6v.js";import"./Switch-Bu_obllx.js";import"./CompositeRoot-awMPYLK_.js";import"./TimePicker-CzZtK9Gx.js";import"./CollapsiblePanel-DKLWDwCu.js";import"./error-AanNsvpp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DPmknckC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
