import{j as t,g as n}from"./iframe-dxrUGHlK.js";import{A as r}from"./action-form-BfDIbHYD.js";import"./preload-helper-B9qIDFMl.js";import"./DropdownField-B_Tlb7nO.js";import"./debounce-DSygVot5.js";import"./useOsdkClient-CDGZBRrB.js";import"./index-DPQcu4-a.js";import"./Input-C2FrKznv.js";import"./useBaseUiId-BsvKb-r1.js";import"./useControlled-D5pah6Ut.js";import"./index-C0ofq-ja.js";import"./index-BY143isZ.js";import"./PopoverPopup-BA5CaoZf.js";import"./InternalBackdrop-DlhtBUyp.js";import"./composite-Dw-SYZmG.js";import"./index-D5-q3DyH.js";import"./getDisabledMountTransitionStyles-6BSbBO0S.js";import"./ToolbarRootContext-Cm84R3Vn.js";import"./tick-BnzW6v2L.js";import"./svgIconContainer-D-3aEKZU.js";import"./small-cross-DrUhNudg.js";import"./search-CVhjqWpu.js";import"./cross-Dj8MH7yM.js";import"./useValueChanged-BsqSHN0m.js";import"./getPseudoElementBounds-B_zagfDH.js";import"./CompositeItem-BLdzDdC9.js";import"./makeExternalStore-DsTmi0Ui.js";import"./BaseForm-DADX3olB.js";import"./ActionButton-TJz4kjAm.js";import"./Button-v2rih8HU.js";import"./SkeletonBar-C2WYuCYy.js";import"./Tooltip-BsaNTiq4.js";import"./info-sign-Dh843teZ.js";import"./chevron-up-BdMarpuW.js";import"./chevron-down-Ci5voemn.js";import"./useEventCallback-ayjMMOqN.js";import"./iconLoader-Czm9VII9.js";import"./CompositeRoot-DtrxZkVS.js";import"./Switch-BFdZTT3-.js";import"./TimePicker-D08y3Do9.js";import"./CollapsiblePanel-BHW3YOjn.js";import"./error-DiHcLZ6r.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C48cTPuA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
