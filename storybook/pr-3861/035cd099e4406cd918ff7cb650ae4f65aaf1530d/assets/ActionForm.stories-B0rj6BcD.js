import{j as t,g as n}from"./iframe-w1UAnkHZ.js";import{A as r}from"./action-form-BX6JNEMJ.js";import"./preload-helper-G_k10dw4.js";import"./DropdownField-CYSEfVTF.js";import"./debounce-DOKHWH7Z.js";import"./useOsdkClient-am2GQgj5.js";import"./index-DAjwvQw3.js";import"./Input-tf1Imv2g.js";import"./useBaseUiId-B91xIf3E.js";import"./useControlled-CyfOlT88.js";import"./index-Dbx2XJAZ.js";import"./index-Btv6-V1K.js";import"./PopoverPopup-GxAjlUu6.js";import"./InternalBackdrop-DoA4GFbR.js";import"./composite-BpZVqO51.js";import"./index-DMQPDlV7.js";import"./getDisabledMountTransitionStyles-Dee7_KOo.js";import"./ToolbarRootContext-c5WYrsd5.js";import"./tick-CxunbKa6.js";import"./svgIconContainer-D_dZC5hw.js";import"./small-cross-DRvh664v.js";import"./search-DeM19rtD.js";import"./cross-DKbNK5yX.js";import"./useValueChanged-nF-imWmC.js";import"./getPseudoElementBounds-BiUigiPq.js";import"./CompositeItem-BFhWCO7j.js";import"./makeExternalStore-BvX6IRpK.js";import"./BaseForm-DVpEsRRy.js";import"./ActionButton-YEM69ZkU.js";import"./Button-Bh0hjCLH.js";import"./SkeletonBar-DLj25SiX.js";import"./Tooltip-BNCsBTMc.js";import"./info-sign-1AB2cFvS.js";import"./chevron-up-wWgD8XwP.js";import"./chevron-down-B9i1zJjC.js";import"./useEventCallback-CzmDrtIN.js";import"./iconLoader-DSxqYyV5.js";import"./CompositeRoot-D4pxYwFT.js";import"./Switch-PPIjWg_O.js";import"./TimePicker-yXUSepzT.js";import"./CollapsiblePanel-D1ce4adR.js";import"./error-CkfO44o7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DrpjUk54.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
