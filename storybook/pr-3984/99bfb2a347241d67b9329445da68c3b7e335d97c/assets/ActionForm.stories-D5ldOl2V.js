import{j as t,g as n}from"./iframe-DOTdPJBy.js";import{A as r}from"./action-form-D2Nf8VUo.js";import"./preload-helper-CORjxHe2.js";import"./DropdownField-CCEf2ECL.js";import"./debounce-CioZWleO.js";import"./useOsdkClient-C681iYsL.js";import"./index-7LsoLiQC.js";import"./Input-Bzm_LY5N.js";import"./useBaseUiId-CSa0UWdd.js";import"./useControlled-CEuBm35N.js";import"./index-DrAqVeQj.js";import"./index-DoVR9M-q.js";import"./PopoverPopup-DH-ybkjn.js";import"./InternalBackdrop-DNHBzMyX.js";import"./composite-DBLj_rqs.js";import"./index-DVc1s_km.js";import"./getDisabledMountTransitionStyles-BG-emIK6.js";import"./ToolbarRootContext-BMXrmtsD.js";import"./tick-BFLKO0JY.js";import"./svgIconContainer-6XMQleNK.js";import"./small-cross-ByN_OFW-.js";import"./search-CQ447Er6.js";import"./cross-m4Jtx501.js";import"./useValueChanged-FqMJibv1.js";import"./getPseudoElementBounds-Dx1WL7QY.js";import"./CompositeItem-fENznLjR.js";import"./makeExternalStore-DXS9zRtb.js";import"./BaseForm-BvM_6pZ8.js";import"./ActionButton-Dl69JNtr.js";import"./Button-HfXhKbNv.js";import"./SkeletonBar-C0cOwVEs.js";import"./Tooltip-C72PQQIW.js";import"./info-sign-BMJ-BBuQ.js";import"./chevron-up-DMzdktIM.js";import"./chevron-down-D9Jqe_yM.js";import"./useEventCallback-DMJOBNH7.js";import"./iconLoader-DXQwCf4M.js";import"./CompositeRoot-ymYcR4Ma.js";import"./Switch-BsyXeVS0.js";import"./TimePicker-D7ISPUeU.js";import"./CollapsiblePanel-BYNhB3x2.js";import"./error-1dsahiX9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-w09EOhg9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
