import{j as t,g as n}from"./iframe-BIP88-50.js";import{A as r}from"./action-form-B_ohxORY.js";import"./preload-helper-CJkHOWC7.js";import"./DropdownField-CpHmWmlY.js";import"./debounce-DDX1lyuq.js";import"./useOsdkClient-DPupQZW9.js";import"./index-CGkdPPI9.js";import"./Input-DYBooigU.js";import"./useBaseUiId-Cj-jJj6K.js";import"./useControlled-fuVP_NbG.js";import"./index-KnvC-9LR.js";import"./index-BrS4cRkH.js";import"./isObject-B6TUXASY.js";import"./InternalBackdrop-CftIyHL4.js";import"./composite-BpLHrmIE.js";import"./index-B1OlRn7v.js";import"./getDisabledMountTransitionStyles-DRbULTDE.js";import"./ToolbarRootContext-CRygSzuk.js";import"./tick-IXb8pkgs.js";import"./svgIconContainer-Dz6akIgn.js";import"./small-cross-BznyWel9.js";import"./search-DgaGEvbD.js";import"./cross-qB-EknTM.js";import"./useValueChanged-COmQAw9I.js";import"./getPseudoElementBounds-DSD11-NM.js";import"./CompositeItem-CVTunDpb.js";import"./makeExternalStore-bK2uAKO3.js";import"./BaseForm-D_BMIHlS.js";import"./ActionButton-DxA4l1EI.js";import"./Button-CjK6G0Gi.js";import"./SkeletonBar-DoCTJFkz.js";import"./Tooltip-CWDNHqVt.js";import"./info-sign-CnSDWgww.js";import"./chevron-up-3UPspuaA.js";import"./chevron-down-BX7qMt__.js";import"./useEventCallback-BrR1OuJb.js";import"./iconLoader-BloxkmtU.js";import"./Switch-D1cBzvFy.js";import"./CompositeRoot-BsS1SVMa.js";import"./TimePicker-CS23fDpE.js";import"./CollapsiblePanel-snv-WSy_.js";import"./error-y3-k7YV5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-YF4jnVsf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
