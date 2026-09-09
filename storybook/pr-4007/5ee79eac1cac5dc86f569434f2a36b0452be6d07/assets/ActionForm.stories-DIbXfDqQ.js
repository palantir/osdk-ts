import{j as t,g as n}from"./iframe-CiHlxZKU.js";import{A as r}from"./action-form-RZeOpXej.js";import"./preload-helper-3-eHC6Oh.js";import"./DropdownField-DkSX7_zX.js";import"./debounce-DxTEdiWN.js";import"./useOsdkClient-2Pjo08Xn.js";import"./index-DVK1qKBA.js";import"./Input-WrV6nsUm.js";import"./useBaseUiId-CYLsHClR.js";import"./useControlled-CSOYJAwm.js";import"./index-DX1yHJ7e.js";import"./index-BpiTLOmA.js";import"./PopoverPopup-Dl2GoZ6p.js";import"./InternalBackdrop-BJHbr0kT.js";import"./composite-BmdkrJdi.js";import"./index-DpLMVXlm.js";import"./getDisabledMountTransitionStyles-z4-ghzJd.js";import"./ToolbarRootContext-COwKCexa.js";import"./tick-CIMxzo_S.js";import"./svgIconContainer-B7oTlJNo.js";import"./small-cross-BzAZpvdB.js";import"./search-DGzvsSxy.js";import"./cross-DnkNQUkT.js";import"./useValueChanged-Dq-vng4U.js";import"./getPseudoElementBounds-TrAXZdgf.js";import"./CompositeItem-BgmQxoYD.js";import"./makeExternalStore-BMposTlq.js";import"./BaseForm-DMfz8VTr.js";import"./ActionButton-B55oBZFt.js";import"./Button-79zi9HD3.js";import"./SkeletonBar-BXOdSqzb.js";import"./Tooltip-kEePm4YO.js";import"./info-sign-VblrEjNb.js";import"./chevron-up-B8Pmsayn.js";import"./chevron-down-7F-_gONV.js";import"./useEventCallback-7w4Pvi2m.js";import"./iconLoader-BmZFctSr.js";import"./CompositeRoot-C3MOOs5L.js";import"./Switch-BcsZDzne.js";import"./TimePicker-CCwBzM8x.js";import"./CollapsiblePanel-DvgzvRJe.js";import"./error-BS001LJB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DOs-_cRC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
