import{j as t,g as n}from"./iframe-wJSBANRY.js";import{A as r}from"./action-form-nGKth2GB.js";import"./preload-helper-B2Ho1hLQ.js";import"./DropdownField-DUCR4Hdj.js";import"./debounce-ByAeDhuR.js";import"./useOsdkClient-DWkxVc6G.js";import"./index-BcqSzCju.js";import"./Input-Cn5YrDjO.js";import"./useBaseUiId-DWH3HBR0.js";import"./useControlled-BvO6L4jZ.js";import"./index-v1Sv6Skf.js";import"./index-BVhp-lLY.js";import"./PopoverPopup-BZ8qTaMK.js";import"./InternalBackdrop-PNyvHwph.js";import"./composite-CrDIQ1mA.js";import"./index-CQ_EW3Gy.js";import"./getDisabledMountTransitionStyles-DDRBIdQ3.js";import"./ToolbarRootContext-ChwiRPwn.js";import"./tick-DVG2gobP.js";import"./svgIconContainer-Ci6LfE3v.js";import"./small-cross-Cpe-iFEE.js";import"./search-D4rdWSgZ.js";import"./cross-iKlVZHPy.js";import"./useValueChanged-CZAIb2ZW.js";import"./getPseudoElementBounds-MQP3kSmu.js";import"./CompositeItem-CMcnLQ_L.js";import"./makeExternalStore-Cdabd0ud.js";import"./BaseForm-CiwwkVk3.js";import"./ActionButton-DdrPB5Lk.js";import"./Button-Bs-O5zId.js";import"./SkeletonBar-CDnrAFCZ.js";import"./Tooltip-hpUjH5hm.js";import"./info-sign-DEYJXAym.js";import"./chevron-up-CVRaGDQV.js";import"./chevron-down-Cwjazhdf.js";import"./useEventCallback-DGk7LQxu.js";import"./iconLoader-CYckJbFF.js";import"./Switch-Cc6IAS7Q.js";import"./CompositeRoot-rXaR9oy9.js";import"./TimePicker-SarYpBVx.js";import"./CollapsiblePanel-DCeDgGvN.js";import"./error-ByPPsGV9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DYFTNSHn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
