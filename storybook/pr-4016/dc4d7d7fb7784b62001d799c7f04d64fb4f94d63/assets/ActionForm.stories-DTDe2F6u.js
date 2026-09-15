import{j as t,g as n}from"./iframe-jTK2SxfT.js";import{A as r}from"./action-form-CbjBSZUl.js";import"./preload-helper-qQ4kAc2Q.js";import"./DropdownField-Bvdotu43.js";import"./debounce-DtxvrnBI.js";import"./useOsdkClient-CQTQjoea.js";import"./index-Pz1htbT9.js";import"./Input-C57k62_6.js";import"./useBaseUiId--4cJ9Rmo.js";import"./useControlled-qZTm53K2.js";import"./index-BMtptVtR.js";import"./index-CSlECQqo.js";import"./PopoverPopup-BLKdDIb7.js";import"./InternalBackdrop-CqMji1ba.js";import"./composite-iOJ2PvUN.js";import"./index-BIecch-_.js";import"./getDisabledMountTransitionStyles-D6i264P_.js";import"./ToolbarRootContext-Cq-6mE15.js";import"./tick-jbVXP2LR.js";import"./svgIconContainer-GdUN0nSr.js";import"./small-cross-dkyGS67d.js";import"./search-DswSvB8a.js";import"./cross-DrKqX7p4.js";import"./useValueChanged-BPMD3jVI.js";import"./getPseudoElementBounds-DVNAWduU.js";import"./CompositeItem-Cq-oGUuG.js";import"./makeExternalStore-Cfa2Qg1q.js";import"./BaseForm-BnVJT2DQ.js";import"./ActionButton-DQzcN8W-.js";import"./Button-DS-hfsg1.js";import"./SkeletonBar-DhQdItRf.js";import"./Tooltip-BbpwuXGl.js";import"./info-sign-DCUN6X8z.js";import"./chevron-up-CBEIpNtk.js";import"./chevron-down-B-85uVWr.js";import"./useEventCallback-BXSFSqbt.js";import"./iconLoader-Dbl0Y5tH.js";import"./CompositeRoot-CmgTLCRm.js";import"./Switch-BnKFFyEJ.js";import"./TimePicker-CJvYKi9t.js";import"./CollapsiblePanel-XMUuL-v2.js";import"./error-BtNAl0M5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DXkox581.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
