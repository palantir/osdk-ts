import{j as t,g as n}from"./iframe-BpdL9i9r.js";import{A as r}from"./action-form-DMSq7loU.js";import"./preload-helper-BGgpRwmn.js";import"./DropdownField-jH7MfoFT.js";import"./debounce-DTQhMy-X.js";import"./useOsdkClient-rNJRaM8P.js";import"./index-BOBmNIkf.js";import"./Input-yfdnK4QX.js";import"./useBaseUiId-DRf0avcO.js";import"./useControlled-QZyhjlC2.js";import"./index-Dh6vk7Lg.js";import"./index-CAZS1ZmE.js";import"./PopoverPopup-DvvB667y.js";import"./InternalBackdrop-BMXRBBRn.js";import"./composite-BFfsCZEe.js";import"./index-B2GBLWAK.js";import"./getDisabledMountTransitionStyles-BPLTuK4K.js";import"./ToolbarRootContext-B3r4TQUK.js";import"./tick-DtX6b8Qy.js";import"./svgIconContainer-BYUaz7v8.js";import"./small-cross-CbVs9Rqg.js";import"./search-C5Bpx8xV.js";import"./cross-B_FitAUD.js";import"./useValueChanged-_ggW3wfM.js";import"./getPseudoElementBounds-WaWUWStD.js";import"./CompositeItem-DWqZMJZf.js";import"./makeExternalStore-BVQoDSnU.js";import"./BaseForm-BqS_uqp5.js";import"./ActionButton-GDiRTL_d.js";import"./Button-BysZxDt3.js";import"./SkeletonBar-acxIujrp.js";import"./Tooltip-D5UgCEsg.js";import"./info-sign-BYMKGUbM.js";import"./chevron-up-r3u3JX8A.js";import"./chevron-down-CmBeGku0.js";import"./useEventCallback-Cv7ZNXWB.js";import"./iconLoader-BygxOTHn.js";import"./Switch-DITZofkm.js";import"./CompositeRoot-Cb_mm6by.js";import"./TimePicker-DD3iyp_a.js";import"./CollapsiblePanel-Bhllaees.js";import"./error-BZRmZs4O.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DoqsagcU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
