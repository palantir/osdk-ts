import{j as t,g as n}from"./iframe-Cm6Hi8JW.js";import{A as r}from"./action-form-KogX0Xod.js";import"./preload-helper-BYxBeAAs.js";import"./DropdownField-CY7MjU_C.js";import"./debounce-D0B2zS6f.js";import"./useOsdkClient-BlYAWhvy.js";import"./index-CDpDzJRy.js";import"./Input-YqDpCJ5-.js";import"./useBaseUiId-DhmqNEB-.js";import"./useControlled-DQSuLFKk.js";import"./index-CESCzhSs.js";import"./index-C-Ww-yGF.js";import"./PopoverPopup-Al1KuNNN.js";import"./InternalBackdrop-CJZwU14-.js";import"./composite-F8udgwsX.js";import"./index-DJKRGaVd.js";import"./getDisabledMountTransitionStyles-DwNKIeA1.js";import"./ToolbarRootContext-C8WiK4oA.js";import"./tick-4BXQbbZv.js";import"./svgIconContainer-agsfS07p.js";import"./small-cross-B71BinCO.js";import"./search-9QnSKEDq.js";import"./cross-CqZ8qeBD.js";import"./useValueChanged-BgnUyWLY.js";import"./getPseudoElementBounds-7U3MdNEW.js";import"./CompositeItem-BMwGHp9X.js";import"./makeExternalStore-BMRo_idP.js";import"./BaseForm-vWoY4oYK.js";import"./ActionButton-CVOWP0Vj.js";import"./Button-Bc-QcRr6.js";import"./SkeletonBar-DlBW95tE.js";import"./Tooltip-YgKwei3V.js";import"./info-sign-C0ELxtDI.js";import"./chevron-up-D-ntY23M.js";import"./chevron-down-yfyql6cd.js";import"./useEventCallback-C2xB0U8G.js";import"./iconLoader-B7bQjU_-.js";import"./Switch-MBD650LT.js";import"./CompositeRoot-BZU2rbh7.js";import"./TimePicker-BY1r9HPN.js";import"./CollapsiblePanel-oFEh-cWN.js";import"./error-Dmy_j7rB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BXiHxUU0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
