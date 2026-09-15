import{j as t,g as n}from"./iframe-luQilSOF.js";import{A as r}from"./action-form-Dh5IAtZv.js";import"./preload-helper-BKBqwCKh.js";import"./DropdownField-CC2Dpk0A.js";import"./debounce-DhX6Egr1.js";import"./useOsdkClient-BsFMFNEo.js";import"./index-Bz5LVora.js";import"./Input-BK5kzofZ.js";import"./useBaseUiId-BIcPA1wg.js";import"./useControlled-BcMtuVsI.js";import"./index-C2BPTamy.js";import"./index-CXosHwau.js";import"./PopoverPopup-B9ZyQpmI.js";import"./InternalBackdrop-CbMdhPVq.js";import"./composite-BqKU6h-l.js";import"./index-BkNSozDa.js";import"./getDisabledMountTransitionStyles-DuXtt4zv.js";import"./ToolbarRootContext-iSsHGgjo.js";import"./tick-D7ya3IWu.js";import"./svgIconContainer-Dg-z8JPf.js";import"./small-cross-DZFGtHrI.js";import"./search-B5llV8dS.js";import"./cross-dcAeg2cP.js";import"./useValueChanged-sApPA-B_.js";import"./getPseudoElementBounds-DdBLUXDN.js";import"./CompositeItem-5KLXQsnX.js";import"./makeExternalStore-D9PcNge9.js";import"./BaseForm-xEr1ALsX.js";import"./ActionButton-BsMQ9zjV.js";import"./Button-CNpzMVry.js";import"./SkeletonBar-DKdanr-N.js";import"./Tooltip-CDExLyRp.js";import"./info-sign-5PxFdOZa.js";import"./chevron-up-BlBu7m32.js";import"./chevron-down-DV7XSuWi.js";import"./useEventCallback-Cac5EMzj.js";import"./iconLoader-D1CE53zW.js";import"./CompositeRoot-DrF7tz-C.js";import"./Switch-NxBDAzvp.js";import"./TimePicker-8scmPCbU.js";import"./CollapsiblePanel-Dre8cIpY.js";import"./error-D7uvB3Tp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CIz4zTAP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
