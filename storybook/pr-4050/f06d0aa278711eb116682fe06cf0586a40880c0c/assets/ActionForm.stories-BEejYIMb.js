import{j as t,g as n}from"./iframe-CFV-nnj8.js";import{A as r}from"./action-form-DI0CbuKR.js";import"./preload-helper-B6fyfr7c.js";import"./DropdownField-CFseBlqH.js";import"./debounce-DDlfQ6-b.js";import"./useOsdkClient-X9M28KVd.js";import"./index-vmaSH1sB.js";import"./Input-KbJwk9Nd.js";import"./useBaseUiId-WVaYu2-M.js";import"./useControlled-BOSfLjyK.js";import"./index-BjUsjKoR.js";import"./index-Dyi_6i64.js";import"./PopoverPopup-93SM5qMU.js";import"./InternalBackdrop-Dexmpq_6.js";import"./composite-DJp6IOoD.js";import"./index-BFvHZIyN.js";import"./getDisabledMountTransitionStyles-DE-GPIVs.js";import"./ToolbarRootContext-BsgEetLb.js";import"./tick-DCGGFRpD.js";import"./svgIconContainer-D_-2ttXX.js";import"./small-cross-B17ASmwu.js";import"./search-DZmS-pfQ.js";import"./cross-QMVU-YJc.js";import"./useValueChanged-DWC6YrTv.js";import"./getPseudoElementBounds-g83biV_s.js";import"./CompositeItem-C3ap8dp1.js";import"./makeExternalStore-BLm3eYi3.js";import"./BaseForm-3_HOv5jq.js";import"./ActionButton-DNioPXe_.js";import"./Button-B3yPaUxl.js";import"./SkeletonBar-x6A5LKdf.js";import"./Tooltip-DZQrwu44.js";import"./info-sign-DTzBqCdr.js";import"./chevron-up-CVMRK1Sx.js";import"./chevron-down-14_leR3A.js";import"./useEventCallback-M1vMQgZ7.js";import"./iconLoader-BpVf8MY1.js";import"./Switch-CY5_SxWe.js";import"./CompositeRoot-MmXsgA7t.js";import"./TimePicker-e7Xc4SBV.js";import"./CollapsiblePanel-TbSN7Ilj.js";import"./error-CPA32RNg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-cGR_rgDD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
