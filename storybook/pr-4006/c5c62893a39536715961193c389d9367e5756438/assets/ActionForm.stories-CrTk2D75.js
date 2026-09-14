import{j as t,g as n}from"./iframe-DWUqeI24.js";import{A as r}from"./action-form-BLTgwVLA.js";import"./preload-helper-CmhaJZKB.js";import"./DropdownField-BdJgqSaf.js";import"./debounce-D8IMDa7u.js";import"./useOsdkClient-CwrvHIMC.js";import"./index-BTzXT2fz.js";import"./Input-Bgk_NfQE.js";import"./useBaseUiId-doo5xxPr.js";import"./useControlled-DQPmnWCX.js";import"./index-Dx1vPjnd.js";import"./index-DMdejw5x.js";import"./PopoverPopup-6iL55eGG.js";import"./InternalBackdrop-CaSxUhcq.js";import"./composite-ZAPDDfKz.js";import"./index-DbIaKji_.js";import"./getDisabledMountTransitionStyles-CS1MQ6DV.js";import"./ToolbarRootContext-CY7Utxgx.js";import"./tick-kx78m2XG.js";import"./svgIconContainer-CMAH9PXj.js";import"./small-cross-BukaMN3V.js";import"./search-D4gR5Cv7.js";import"./cross-BB5wWstC.js";import"./useValueChanged-DZKLN3ln.js";import"./getPseudoElementBounds-CMWVvTL2.js";import"./CompositeItem-Dli-qKbZ.js";import"./makeExternalStore-rBHUiwcS.js";import"./BaseForm-BesSmotW.js";import"./ActionButton-CJrSAwg7.js";import"./Button-2G_MsyZd.js";import"./SkeletonBar-qhYaU4np.js";import"./Tooltip-CreZ18hV.js";import"./info-sign-D5KFWbUf.js";import"./chevron-up-JPdE7S9p.js";import"./chevron-down-B3eOykDC.js";import"./useEventCallback-D0l5hp3N.js";import"./iconLoader-V9hX6vgH.js";import"./CompositeRoot-BcSWpx-_.js";import"./Switch-CnF1uy2a.js";import"./TimePicker-BWSyCiPL.js";import"./CollapsiblePanel-Bovk3gQ8.js";import"./error-Zui98JXp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-cXHP5nhH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
