import{j as t,g as n}from"./iframe-B9fWy8hT.js";import{A as r}from"./action-form-D35TC4hA.js";import"./preload-helper-DWfHVW0p.js";import"./DropdownField-bELTjpQP.js";import"./debounce-CRBVoOqi.js";import"./useOsdkClient-DGZy8BSJ.js";import"./index-DcqZYHDv.js";import"./Input-CD0TW00M.js";import"./useBaseUiId-ck-5-ASN.js";import"./useControlled-1rkkBjfr.js";import"./index-BpWX3K1g.js";import"./index-Dhsqt6ib.js";import"./PopoverPopup-DeB87ALM.js";import"./InternalBackdrop-BwJaasag.js";import"./composite-BwwoklsZ.js";import"./index-D7qo7HQk.js";import"./getDisabledMountTransitionStyles-B-NyzZcB.js";import"./ToolbarRootContext-ahNi1RH8.js";import"./tick-CbPdXS0Y.js";import"./svgIconContainer-u2Tnk_oU.js";import"./small-cross-CryXyuPH.js";import"./search-B0RjXvIo.js";import"./cross-boAy6lJm.js";import"./useValueChanged-BvuRDLHo.js";import"./getPseudoElementBounds-DCZ0QUdk.js";import"./CompositeItem-Cqqz-d5o.js";import"./makeExternalStore-QmjWX5TP.js";import"./BaseForm-1MLDVriZ.js";import"./ActionButton-f0vdeYe6.js";import"./Button-3STy3BF8.js";import"./SkeletonBar-D5KV0OqN.js";import"./Tooltip-BRwVJD1M.js";import"./info-sign-Bxh66gbk.js";import"./chevron-up-CNh9yDYr.js";import"./chevron-down-nNmhzWCh.js";import"./useEventCallback-B2wK0RRE.js";import"./iconLoader-YzZBSZnK.js";import"./CompositeRoot-DHNsKFL1.js";import"./Switch-1ppK0lm8.js";import"./TimePicker-DcfHavaV.js";import"./CollapsiblePanel-C6uN36Y0.js";import"./error-DVMkH5gx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DwXDV7v7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
