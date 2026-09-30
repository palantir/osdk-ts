import{j as t,g as n}from"./iframe-za2gFZm7.js";import{A as r}from"./action-form-BLIexu8H.js";import"./preload-helper-B152vIQk.js";import"./DropdownField-DbWdFCIz.js";import"./debounce-BxVMhpPq.js";import"./useOsdkClient-DPxpEBB0.js";import"./index-C4E5Dk0R.js";import"./Input-B_NAvwoc.js";import"./useBaseUiId-BpIGGvmI.js";import"./useControlled-x2G49QSH.js";import"./index-C4smQJ4G.js";import"./index-OBpStMAY.js";import"./PopoverPopup-BzwgnfVt.js";import"./InternalBackdrop-CuWltaZZ.js";import"./composite-D56jxQaX.js";import"./index-BXHLylGJ.js";import"./getDisabledMountTransitionStyles-BtrYbTrP.js";import"./ToolbarRootContext-BG5Gc4jy.js";import"./tick-DCTTAhNR.js";import"./svgIconContainer-Dr6j7alJ.js";import"./small-cross-Cpr2Bt40.js";import"./search-FcuyWSqL.js";import"./cross-TTEnlvkl.js";import"./useValueChanged-CgoAhXS1.js";import"./getPseudoElementBounds-CYZLYzqG.js";import"./CompositeItem-BDB5_ay2.js";import"./makeExternalStore-C8qXbmFn.js";import"./BaseForm-qeGsFLaw.js";import"./ActionButton-yFn7B9Sr.js";import"./Button-DwQfUaLn.js";import"./SkeletonBar-DJX3wRZn.js";import"./Tooltip-DpzWRQIQ.js";import"./info-sign-DH7jDBRV.js";import"./chevron-up-DiK3LtJt.js";import"./chevron-down-DJF2R6Zo.js";import"./useEventCallback-B-1PMCAh.js";import"./iconLoader-4fHTZKsO.js";import"./Switch-Mso4_AFm.js";import"./CompositeRoot-BW21JtaS.js";import"./TimePicker-5ItkN9vK.js";import"./CollapsiblePanel-f2IrHI_h.js";import"./error-Dk8fbBB5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-U5yEFT5F.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
