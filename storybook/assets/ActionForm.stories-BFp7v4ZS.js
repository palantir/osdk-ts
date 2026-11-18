import{j as t,g as n}from"./iframe-C55ekymu.js";import{A as r}from"./action-form-CSX74S7-.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-CJiCXQHj.js";import"./useEventCallback-BdHTuoti.js";import"./isEqual-D4BqxSVn.js";import"./_baseIsEqual-CaMr3HsT.js";import"./PopoverPopup-gzdhXoIP.js";import"./InternalBackdrop-CvYabiN9.js";import"./useBaseUiId-CJcpNbe-.js";import"./composite-DjC5qkIo.js";import"./index-BjL1lDKB.js";import"./index-Ssbdtt4R.js";import"./index-BitSGxZh.js";import"./getDisabledMountTransitionStyles-C68-Nvha.js";import"./ToolbarRootContext-CxArS7CZ.js";import"./Select-CLPFfhpu.js";import"./useOsdkClient-DEp8Hr9R.js";import"./index-CFbWm03i.js";import"./Input-BKj5HQxK.js";import"./useControlled-JP2tPCzU.js";import"./tick-C5xW6PnQ.js";import"./svgIconContainer-ChZ06sjp.js";import"./small-cross-DWLcJPqC.js";import"./search-BNvEUbcp.js";import"./cross-DQROmGzH.js";import"./useValueChanged-0_kAOcmx.js";import"./getPseudoElementBounds-AyWvnJuI.js";import"./CompositeItem-BaLE10Vy.js";import"./DropdownField-Awb0oUum.js";import"./makeExternalStore-DAmiU-nQ.js";import"./BaseForm-BD28ef-9.js";import"./ActionButton-QrsuQ0Bk.js";import"./Button-BAZDZzeS.js";import"./SkeletonBar-DuohuUr1.js";import"./Tooltip-Pfbyi0H-.js";import"./info-sign-B7nFMT2B.js";import"./chevron-up-FG0Uk_-u.js";import"./chevron-down-BZm8imPT.js";import"./iconLoader-DYBbJrX1.js";import"./Switch-B3b-K8Pg.js";import"./CompositeRoot-PD7tSbST.js";import"./TimePicker-B4ViBAYY.js";import"./CollapsiblePanel-DNdVrnTZ.js";import"./error-BZW5WceS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CaT2GfU0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ae=["Default"];export{e as Default,ae as __namedExportsOrder,oe as default};
