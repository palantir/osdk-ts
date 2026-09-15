import{j as t,g as n}from"./iframe-WliM3Ewa.js";import{A as r}from"./action-form-ClmrZQTl.js";import"./preload-helper-DEyC4ekG.js";import"./DropdownField-Dh8xBr1M.js";import"./debounce-BmlTPhI1.js";import"./useOsdkClient-Ds9WknxH.js";import"./index-CnrTWWrO.js";import"./Input-CQ-UP_L4.js";import"./useBaseUiId-CUkyUtdd.js";import"./useControlled-DNr35Z2-.js";import"./index-NRd0AnHS.js";import"./index-DLdNuuvj.js";import"./PopoverPopup-BfSQYfPj.js";import"./InternalBackdrop-C5-fjIik.js";import"./composite-ByE6f88x.js";import"./index-CwjXC2Es.js";import"./getDisabledMountTransitionStyles-4NaqFyh-.js";import"./ToolbarRootContext-CDiW3Jhi.js";import"./tick-B5-KzR1n.js";import"./svgIconContainer-eh8pO9ol.js";import"./small-cross-DoL3gn1_.js";import"./search-DOR9iHB9.js";import"./cross-B523-3pv.js";import"./useValueChanged-CdN1D_N7.js";import"./getPseudoElementBounds-FBUEgUOa.js";import"./CompositeItem-PZY5TD1e.js";import"./makeExternalStore-y3QUXpj7.js";import"./BaseForm-pVSPTAbL.js";import"./ActionButton-B0Mz96Sd.js";import"./Button-Bajbsf8L.js";import"./SkeletonBar-BlIjEe9R.js";import"./Tooltip-9h8kIB5N.js";import"./info-sign-DGX0n3om.js";import"./chevron-up-DFgRpDyU.js";import"./chevron-down-D3GW0vbF.js";import"./useEventCallback-DwV1lBpW.js";import"./iconLoader-B59WG0Ua.js";import"./CompositeRoot-C29YIfoq.js";import"./Switch-BTY_lh_i.js";import"./TimePicker-CuFKNdw5.js";import"./CollapsiblePanel-DEqR4YPk.js";import"./error-CRmqFCAs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMKdbhzI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
