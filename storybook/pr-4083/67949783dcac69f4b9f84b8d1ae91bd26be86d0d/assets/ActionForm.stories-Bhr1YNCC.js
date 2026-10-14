import{j as t,g as n}from"./iframe-CmWe6Tkd.js";import{A as r}from"./action-form-Bldg4-Nm.js";import"./preload-helper-CZkXumnj.js";import"./DropdownField-BNVRIq1Y.js";import"./debounce-CgnLqzzw.js";import"./useOsdkClient-CitkFKLb.js";import"./index-B0FfbiTF.js";import"./Input-CO62StGf.js";import"./useBaseUiId-Bs3xq9h4.js";import"./useControlled-CuXXFPaU.js";import"./index-CsFAVmPm.js";import"./index-BoUQWx-c.js";import"./PopoverPopup-2IEXcKZV.js";import"./InternalBackdrop-Bgkh1XM7.js";import"./composite-BpFW5Zxj.js";import"./index-Czd4gxpW.js";import"./getDisabledMountTransitionStyles-BRrVpNFj.js";import"./ToolbarRootContext-DXrMWEKA.js";import"./tick-BW8FxYJj.js";import"./svgIconContainer-DT9zh-Vk.js";import"./small-cross-Dx1H7YZV.js";import"./search-BJsFf8Sf.js";import"./cross-DOjQafmq.js";import"./useValueChanged-D7qGEQa7.js";import"./getPseudoElementBounds-CHGjGQ44.js";import"./CompositeItem-X2tnD8zQ.js";import"./makeExternalStore-CSTPATui.js";import"./BaseForm-DRfGFHsI.js";import"./ActionButton-CvgVXH59.js";import"./Button-DwrepdjR.js";import"./SkeletonBar-BgpMicw2.js";import"./Tooltip-CvPILd44.js";import"./info-sign-BHirdPms.js";import"./chevron-up-CUN-oB2X.js";import"./chevron-down-B1zAncDT.js";import"./useEventCallback-zOr5ERUR.js";import"./iconLoader-Cq2YL1mZ.js";import"./Switch-D4Sxa--R.js";import"./CompositeRoot-DS4s0XjV.js";import"./TimePicker-CUyZgy2p.js";import"./CollapsiblePanel-CHhRUS9J.js";import"./error-C_AVzlpM.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CiiIaaP6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
