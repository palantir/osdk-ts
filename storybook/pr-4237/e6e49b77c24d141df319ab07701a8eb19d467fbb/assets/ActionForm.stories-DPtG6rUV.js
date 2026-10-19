import{j as t,g as n}from"./iframe-DhSxUQkX.js";import{A as r}from"./action-form-D9-8bypK.js";import"./preload-helper-sXoL7niC.js";import"./DropdownField-eY4WYUsH.js";import"./debounce-CttzonmO.js";import"./useOsdkClient-JBSVfS2z.js";import"./index-BvSFmfl4.js";import"./Input-CZERibHA.js";import"./useBaseUiId-CZTbsmZg.js";import"./useControlled-BFOHrubs.js";import"./index-CIxCim47.js";import"./index-DqmtWcN5.js";import"./PopoverPopup-BhdoMacR.js";import"./InternalBackdrop-C1ZWO4Fv.js";import"./composite-CVjZUaK1.js";import"./index-jTHMQX5i.js";import"./getDisabledMountTransitionStyles-B8WSataG.js";import"./ToolbarRootContext-DCHPkWcS.js";import"./tick-DIF_A_6E.js";import"./svgIconContainer-Cv6Vlj7K.js";import"./small-cross-sUBGXhQ0.js";import"./search-DUqXaRZn.js";import"./cross-DPp5FPP-.js";import"./useValueChanged-O0UVeLkr.js";import"./getPseudoElementBounds-Dg91PpPW.js";import"./CompositeItem-B0iGyW5R.js";import"./makeExternalStore-C6P_xGma.js";import"./BaseForm-1mlF51ra.js";import"./ActionButton-D68fVxeC.js";import"./Button-WT-hQp_M.js";import"./SkeletonBar-CyDJ1Ldz.js";import"./Tooltip-GjEUJm8I.js";import"./info-sign-B4ISSNUM.js";import"./chevron-up-Cm8sHLff.js";import"./chevron-down-DgOK1tfP.js";import"./useEventCallback-CvDvv5HC.js";import"./iconLoader-VS1toCgE.js";import"./Switch-CykBqAlG.js";import"./CompositeRoot-LSFvc4CL.js";import"./TimePicker-C9pACcId.js";import"./CollapsiblePanel-CnIi4ruU.js";import"./error-BkDo7z_m.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BwywW8LF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
