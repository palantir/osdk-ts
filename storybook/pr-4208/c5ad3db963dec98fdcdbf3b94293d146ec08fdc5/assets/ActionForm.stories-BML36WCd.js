import{j as t,g as n}from"./iframe-CW0iR0MW.js";import{A as r}from"./action-form-BIMslTn9.js";import"./preload-helper-DPNRA16C.js";import"./DropdownField-CxC5gxxi.js";import"./debounce-B76dCMlT.js";import"./useOsdkClient-D98LXdIX.js";import"./index-R4-e3PKI.js";import"./Input-CEvDm9oX.js";import"./useBaseUiId-bY0lVTzO.js";import"./useControlled-BZraJw4c.js";import"./index-Bj6P2ewC.js";import"./index-Wh16gVsR.js";import"./PopoverPopup-CHZlmgc5.js";import"./InternalBackdrop-Al1qNZ5B.js";import"./composite-CEDiNU-s.js";import"./index-2WJCxASE.js";import"./getDisabledMountTransitionStyles-Do6amAXt.js";import"./ToolbarRootContext-Dfjrxij8.js";import"./tick-D-TsA4-V.js";import"./svgIconContainer-DRg1K7b0.js";import"./small-cross-DgOHAIuf.js";import"./search-DRF2IcSw.js";import"./cross-CVgDD36J.js";import"./useValueChanged-DMC3zyLc.js";import"./getPseudoElementBounds-CdhAL6Na.js";import"./CompositeItem-nFLipZIC.js";import"./makeExternalStore-GoUNmYeo.js";import"./BaseForm-CxxZYTPq.js";import"./ActionButton-DRpKJjXE.js";import"./Button-IemAbPn8.js";import"./SkeletonBar-D-B4kIIV.js";import"./Tooltip-VY0XkLAP.js";import"./info-sign-CgC0jV4_.js";import"./chevron-up-uDT8i8JB.js";import"./chevron-down-ChPXe2UO.js";import"./useEventCallback-69j61YHl.js";import"./iconLoader-DiIWHhH7.js";import"./Switch-BrH3WScr.js";import"./CompositeRoot-BBvyVKQJ.js";import"./TimePicker-Opf57hTY.js";import"./CollapsiblePanel-CvSxsX2O.js";import"./error-QdPzuwdp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CaRNNLKc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
