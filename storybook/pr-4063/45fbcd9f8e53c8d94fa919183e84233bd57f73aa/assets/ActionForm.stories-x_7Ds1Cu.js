import{j as t,g as n}from"./iframe-BvtrFrDq.js";import{A as r}from"./action-form-CnegRNJ8.js";import"./preload-helper-hiWkjTbI.js";import"./DropdownField-D-hNk4Y1.js";import"./debounce-D48NSO_6.js";import"./useOsdkClient-BU66DrOT.js";import"./index-BJkhm3Ia.js";import"./Input-D3h_1eKW.js";import"./useBaseUiId-D1zJXq-x.js";import"./useControlled-C5pmq0AY.js";import"./index-B2QxPovI.js";import"./index-BmdzJuTV.js";import"./PopoverPopup-B2L2ZFoJ.js";import"./InternalBackdrop-Bhnkys6D.js";import"./composite-D9wCA3L7.js";import"./index-jQnhxv3F.js";import"./getDisabledMountTransitionStyles-Bafsb8MV.js";import"./ToolbarRootContext-BrQK-hek.js";import"./tick-D1kmaKOg.js";import"./svgIconContainer-CxzpI-nz.js";import"./small-cross-B9NMxasu.js";import"./search-y87IcSNA.js";import"./cross-Dm_M5ayo.js";import"./useValueChanged-CrlzAUPK.js";import"./getPseudoElementBounds-B7QZiwEe.js";import"./CompositeItem-Rfg3qzju.js";import"./makeExternalStore-CT6g87Zk.js";import"./BaseForm-CfysmcfZ.js";import"./ActionButton-Ye6rlMnt.js";import"./Button-BJy_LHxZ.js";import"./SkeletonBar-5j0-fDGa.js";import"./Tooltip-B-M7Glcs.js";import"./info-sign-BJ4ab0so.js";import"./chevron-up-IO1JayTt.js";import"./chevron-down-BxwFps0j.js";import"./useEventCallback-heFPgHFU.js";import"./iconLoader-BuDX3Ycu.js";import"./Switch-CDFMz4b-.js";import"./CompositeRoot-DHusKf4V.js";import"./TimePicker-CFXh8lMX.js";import"./CollapsiblePanel-CvNLT_W0.js";import"./error-BbBH-DMp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cf9QOWiU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
