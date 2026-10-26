import{j as t,g as n}from"./iframe-BC4WuJqp.js";import{A as r}from"./action-form-GEGqyYue.js";import"./preload-helper-BAlIbckl.js";import"./DropdownField-BQyQM-0q.js";import"./debounce-iB-UnFsI.js";import"./useOsdkClient-BzNLqqlE.js";import"./index-B64lxDBz.js";import"./Input-CzEl6QGc.js";import"./useBaseUiId-BVMrMyXc.js";import"./useControlled-Bs5VhBCJ.js";import"./index-BUFQlA2h.js";import"./index-eKZRvGXM.js";import"./PopoverPopup-ULbHIXSs.js";import"./InternalBackdrop-BZc_LEAU.js";import"./composite-DeP2Ikxo.js";import"./index-BhHb9YgN.js";import"./getDisabledMountTransitionStyles-Dtsx70hN.js";import"./ToolbarRootContext-c4Ndu606.js";import"./tick-vowPK7v2.js";import"./svgIconContainer-CtvZ0OgY.js";import"./small-cross-CZLtYA5e.js";import"./search-CZ3TYav-.js";import"./cross-6e8uCbEq.js";import"./useValueChanged-CxYsqBM1.js";import"./getPseudoElementBounds-D1ccQnN_.js";import"./CompositeItem-B3C6p1hy.js";import"./makeExternalStore-DmNapAQ9.js";import"./BaseForm-DcUstFop.js";import"./ActionButton-C8vwMbni.js";import"./Button-DHdZg685.js";import"./SkeletonBar-DqiJ0KmM.js";import"./Tooltip-vRgEuTXd.js";import"./info-sign-cJLBGRAa.js";import"./chevron-up-CDE-54Ov.js";import"./chevron-down-Cl_Af1LQ.js";import"./useEventCallback-Ds74rybS.js";import"./iconLoader-BOc-T7Cp.js";import"./Switch-DnMmKSGJ.js";import"./CompositeRoot-C-pidKcF.js";import"./TimePicker-NeJFObGF.js";import"./CollapsiblePanel-BoiujEbx.js";import"./error-GVs8VSV-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D1wQc1Iv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
