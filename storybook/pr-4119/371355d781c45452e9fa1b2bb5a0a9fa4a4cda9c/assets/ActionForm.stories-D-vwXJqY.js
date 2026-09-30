import{j as t,g as n}from"./iframe-CrH6Yrlk.js";import{A as r}from"./action-form-BCr3lPPi.js";import"./preload-helper-DWN1nqfF.js";import"./DropdownField-1LHzPopr.js";import"./debounce-rtZgYy1G.js";import"./useOsdkClient-JKeEr8fH.js";import"./index-BLeB2LZ4.js";import"./Input-CO-EhnoV.js";import"./useBaseUiId-DxKrUPMo.js";import"./useControlled-BHyUcUtS.js";import"./index-Dnjnym33.js";import"./index-BXkTUwMI.js";import"./PopoverPopup-BR1F8fHw.js";import"./InternalBackdrop-tytdnIli.js";import"./composite-ffO3RfE4.js";import"./index-DJX0kPHb.js";import"./getDisabledMountTransitionStyles-LOYR3VUX.js";import"./ToolbarRootContext-BfVZ25NV.js";import"./tick-CQI3-0jK.js";import"./svgIconContainer-BOBFAYEP.js";import"./small-cross-Cp0wS207.js";import"./search-C_RAyaII.js";import"./cross-Djpe7veO.js";import"./useValueChanged-C8WmnglJ.js";import"./getPseudoElementBounds-ZRt3Q6Bd.js";import"./CompositeItem-BB8cOYaX.js";import"./makeExternalStore-CiLIO8iU.js";import"./BaseForm-f8FpP8cc.js";import"./ActionButton-CAVnXpdM.js";import"./Button-ChVjuzMV.js";import"./SkeletonBar-BggMzaAo.js";import"./Tooltip-DRTjcE2d.js";import"./info-sign-D7WIKQqV.js";import"./chevron-up-aXNeo19j.js";import"./chevron-down-Do4cSabx.js";import"./useEventCallback-Df7dMb-i.js";import"./iconLoader-cHPXKdXi.js";import"./Switch-Clr8PBQW.js";import"./CompositeRoot-rsR3p22P.js";import"./TimePicker-D-0ulZh_.js";import"./CollapsiblePanel-CNe4nG1I.js";import"./error-Bb5TXnmt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B1PE_2r3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
