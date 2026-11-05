import{j as t,g as n}from"./iframe-DTMqKPBE.js";import{A as r}from"./action-form-Cydg0mex.js";import"./preload-helper-CjsYpY57.js";import"./DropdownField-CyxvPr-x.js";import"./debounce-BYCLDSg8.js";import"./useOsdkClient-172IoC-V.js";import"./index-UDd9WuYK.js";import"./Input-7TR5u0Qr.js";import"./useBaseUiId-CEeKBGAz.js";import"./useControlled-BHnYSqNh.js";import"./index-C4q2yfqG.js";import"./index-JW1fQ_Y7.js";import"./PopoverPopup-DWI1XAxj.js";import"./InternalBackdrop-BBkZ1Zk6.js";import"./composite-ythbHTkl.js";import"./index-a5K6iVF8.js";import"./getDisabledMountTransitionStyles-CkPdKkG_.js";import"./ToolbarRootContext-BFkkbk8n.js";import"./tick-BzPsR4V6.js";import"./svgIconContainer-CTrmoxuh.js";import"./small-cross-CsVdUc7Z.js";import"./search-DI2V8WRZ.js";import"./cross-B4qzvymc.js";import"./useValueChanged-pTbCnzad.js";import"./getPseudoElementBounds-JkpSFn6Z.js";import"./CompositeItem-vKvJJfWL.js";import"./makeExternalStore-BqhBup0t.js";import"./BaseForm-BYJFMML3.js";import"./ActionButton-hkXpDER8.js";import"./Button-xDEOgU6J.js";import"./SkeletonBar-B8XEOwQs.js";import"./Tooltip-hCwJnzIt.js";import"./info-sign-BCmwyziC.js";import"./chevron-up-CIxtdqnC.js";import"./chevron-down-CHkr5iXo.js";import"./useEventCallback-DtDN3sTJ.js";import"./iconLoader-DrqAFmbt.js";import"./Switch-ArYonccI.js";import"./CompositeRoot-DTEvP718.js";import"./TimePicker-BuV0i3xP.js";import"./CollapsiblePanel-BI6FTHdI.js";import"./error-DhhuqABX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C9k-iTWj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
