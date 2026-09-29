import{j as t,g as n}from"./iframe-D8QP41pb.js";import{A as r}from"./action-form-DyAaSkQa.js";import"./preload-helper-rYx5aepV.js";import"./DropdownField-BxbakFzB.js";import"./debounce-tZf_e5M0.js";import"./useOsdkClient-DsLeguWM.js";import"./index-ptxv2enP.js";import"./Input-lEEPXcpp.js";import"./useBaseUiId-BoqMbBaF.js";import"./useControlled-G3ngQ_8d.js";import"./index-Cgw2ueis.js";import"./index-Dng6rJam.js";import"./PopoverPopup-CzD111vI.js";import"./InternalBackdrop-CKHEvFzx.js";import"./composite-sgwSF-wx.js";import"./index-CNNBeMhh.js";import"./getDisabledMountTransitionStyles-EIaHnfB3.js";import"./ToolbarRootContext-DDihycVp.js";import"./tick-DIslqI7R.js";import"./svgIconContainer-CRypdVCt.js";import"./small-cross-BtPSf5__.js";import"./search-C3wepv5K.js";import"./cross-C4B55KNt.js";import"./useValueChanged-9pWqBbjF.js";import"./getPseudoElementBounds-DtmmKYOt.js";import"./CompositeItem-nSbVFhm7.js";import"./makeExternalStore-DKTVVSUo.js";import"./BaseForm-C1nL2ehL.js";import"./ActionButton-Bvgk-75l.js";import"./Button-CyBwq7g0.js";import"./SkeletonBar-Csa-9swL.js";import"./Tooltip-oiN_I4PZ.js";import"./info-sign-BMob1fal.js";import"./chevron-up-ChXzB2Ds.js";import"./chevron-down-7YXmtC0t.js";import"./useEventCallback-DdNo-ccX.js";import"./iconLoader-CBgYaRXV.js";import"./Switch-C8WzOOuv.js";import"./CompositeRoot-CQ-YvIjo.js";import"./TimePicker-blVrzS5j.js";import"./CollapsiblePanel-Cxlgd4Ev.js";import"./error-D-e6D9Uk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-nBhke6l1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
