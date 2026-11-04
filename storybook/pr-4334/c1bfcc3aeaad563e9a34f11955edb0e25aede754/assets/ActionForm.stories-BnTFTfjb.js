import{j as t,g as n}from"./iframe-CNX9e2vb.js";import{A as r}from"./action-form-ftXDjv6c.js";import"./preload-helper-ZMNA8h9P.js";import"./DropdownField-BFuGqXSY.js";import"./debounce-CgHfZ2yU.js";import"./useOsdkClient-ANeJgNR0.js";import"./index-BIHn_wHI.js";import"./Input-DsowkJey.js";import"./useBaseUiId-DVajJCtq.js";import"./useControlled-CAgAp9qH.js";import"./index-DLyOpAuF.js";import"./index-DzwDShI9.js";import"./PopoverPopup-BcTNuNdl.js";import"./InternalBackdrop-g7diMjlH.js";import"./composite-DPfaHyL7.js";import"./index-D4wtEvwv.js";import"./getDisabledMountTransitionStyles-2kFCtm_x.js";import"./ToolbarRootContext-tIEjfpOU.js";import"./tick-BqwzrLtf.js";import"./svgIconContainer-nouhoaqF.js";import"./small-cross-BJExYpuG.js";import"./search-PqF1ps1R.js";import"./cross-CoOqaEol.js";import"./useValueChanged-DYtO7VQ0.js";import"./getPseudoElementBounds-FCxgA3hM.js";import"./CompositeItem-WdRO-_hy.js";import"./makeExternalStore-DE_Ve778.js";import"./BaseForm-Zo1MXl3P.js";import"./ActionButton-wZGD9rTp.js";import"./Button-DqD_xK8o.js";import"./SkeletonBar-C4hnXkU8.js";import"./Tooltip-Dvuw96-K.js";import"./info-sign-D7toSOA1.js";import"./chevron-up-B-9Jm597.js";import"./chevron-down-BjfbDPyK.js";import"./useEventCallback-BHcK-HWT.js";import"./iconLoader-BHx6B6Pz.js";import"./Switch-D1d8zmU2.js";import"./CompositeRoot-_lJY_HJ_.js";import"./TimePicker-D4toiWqZ.js";import"./CollapsiblePanel-C7abhmgq.js";import"./error-B93ABaLs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DMNQhU4Q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
