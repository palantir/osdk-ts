import{j as t,g as n}from"./iframe-ixnzYDJA.js";import{A as r}from"./action-form-NA29_V0v.js";import"./preload-helper-DTj6niTD.js";import"./DropdownField-Cr6FDOVB.js";import"./debounce-CeVCi1dD.js";import"./useOsdkClient-BYHlAdtz.js";import"./index-CeyubrU3.js";import"./Input-DVH5-_db.js";import"./useBaseUiId-DzzMqJTn.js";import"./useControlled-h88iCaOy.js";import"./index-DDQRM4oh.js";import"./index-Dha3uIo_.js";import"./PopoverPopup-p0xBFcZz.js";import"./InternalBackdrop-Ck1Tk9Tq.js";import"./composite-CG-xrg6X.js";import"./index-EMWBONkK.js";import"./getDisabledMountTransitionStyles-Bd-l4l0c.js";import"./ToolbarRootContext-CnuOChH-.js";import"./tick-BZwA7raU.js";import"./svgIconContainer-CiY4wot1.js";import"./small-cross-CeiH6pcZ.js";import"./search-BrEKKbX6.js";import"./cross-diJiZoAA.js";import"./useValueChanged-C2vQ6K14.js";import"./getPseudoElementBounds-De5Rm4GT.js";import"./CompositeItem-DpqiGqIY.js";import"./makeExternalStore-B3h5af1n.js";import"./BaseForm-CXT4YrsQ.js";import"./ActionButton-Cht9C36-.js";import"./Button-CvHMYUNQ.js";import"./SkeletonBar-DgekIIC1.js";import"./Tooltip-DHz1HFpz.js";import"./info-sign-BOyDM2DX.js";import"./chevron-up-ZQaSaw5s.js";import"./chevron-down-BsEexgTp.js";import"./useEventCallback-PB3EUD-p.js";import"./iconLoader-BcUTMUTs.js";import"./Switch-Bf62veGQ.js";import"./CompositeRoot-wRlMjC6K.js";import"./TimePicker-BAixAJJ3.js";import"./CollapsiblePanel-Df0hOccA.js";import"./error-BPUNwXPy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-6vyCE_R0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
