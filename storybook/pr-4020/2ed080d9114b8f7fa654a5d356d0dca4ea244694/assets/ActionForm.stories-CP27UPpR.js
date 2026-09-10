import{j as t,g as n}from"./iframe-DfRsO-W_.js";import{A as r}from"./action-form-CDoEkHne.js";import"./preload-helper-B1nnBqyx.js";import"./DropdownField-CgS_exM3.js";import"./debounce-BAkgb8RS.js";import"./useOsdkClient-Da6wTJ7N.js";import"./index-CQkS0c9h.js";import"./Input-BeFyt6Zg.js";import"./useBaseUiId-t6nqxOAa.js";import"./useControlled-DwMJ2aka.js";import"./index-0fIzBmZ6.js";import"./index-COUiLxiP.js";import"./PopoverPopup-De149wyZ.js";import"./InternalBackdrop-DexqjegU.js";import"./composite-BNASiMUs.js";import"./index-DAMwa_zH.js";import"./getDisabledMountTransitionStyles-B2AXI69J.js";import"./ToolbarRootContext-BRXAevlR.js";import"./tick-CjE9NPay.js";import"./svgIconContainer-DgyEbBbg.js";import"./small-cross-BD6x5MXv.js";import"./search-DnesuR3u.js";import"./cross-CBNkzS8W.js";import"./useValueChanged-CQ6Yx7cq.js";import"./getPseudoElementBounds-Ck1GK_Vt.js";import"./CompositeItem-C6hDdpH4.js";import"./makeExternalStore-C23Jsp2C.js";import"./BaseForm-CMuHFP9c.js";import"./ActionButton-DjurcGej.js";import"./Button-PGajkELE.js";import"./SkeletonBar-C4TEZaxd.js";import"./Tooltip-1SCODkG_.js";import"./info-sign-BLHOO2W5.js";import"./chevron-up-DCEL0TM6.js";import"./chevron-down-Cdf065g5.js";import"./useEventCallback-B9H6hou4.js";import"./iconLoader-DvDu2dSs.js";import"./CompositeRoot-220cWRm3.js";import"./Switch-5-ud9m3h.js";import"./TimePicker-B9B5DOLg.js";import"./CollapsiblePanel-DUX-GqzR.js";import"./error-3c9XVh4b.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D1y4-r1W.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
