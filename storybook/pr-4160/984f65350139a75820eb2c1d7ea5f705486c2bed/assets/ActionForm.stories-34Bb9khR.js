import{j as t,g as n}from"./iframe-B7lh4g6p.js";import{A as r}from"./action-form-C-2CwMtB.js";import"./preload-helper-Bs-nMSmN.js";import"./DropdownField-heO63W5v.js";import"./debounce-BwLH3R9O.js";import"./useOsdkClient-C1-7Io4T.js";import"./index-DEvGhliI.js";import"./Input-Cv8mC2jD.js";import"./useBaseUiId-Bb1FrUqT.js";import"./useControlled-CPKeQZ_f.js";import"./index-DhDUpT6q.js";import"./index-DPe8iSwh.js";import"./PopoverPopup-BdiLEXnM.js";import"./InternalBackdrop-D0lSPPfD.js";import"./composite-Dkx2J5ep.js";import"./index-DsIDLdue.js";import"./getDisabledMountTransitionStyles-DT79YMLS.js";import"./ToolbarRootContext-oEsqExNC.js";import"./tick-xBqsThOV.js";import"./svgIconContainer-BNlhaeSZ.js";import"./small-cross-Q4Mn0c4O.js";import"./search-LFDcG9Bw.js";import"./cross-BYT7TYIn.js";import"./useValueChanged-BwX_swTd.js";import"./getPseudoElementBounds-C8FT8HZf.js";import"./CompositeItem-DtBwKtoa.js";import"./makeExternalStore-DqOv6fSv.js";import"./BaseForm-CltWxtE7.js";import"./ActionButton-vOzY96R-.js";import"./Button-Cdt1t7O2.js";import"./SkeletonBar-BnnPCVvc.js";import"./Tooltip-i5Zb1xth.js";import"./info-sign-GmO9dn-F.js";import"./chevron-up-B9RmgZf2.js";import"./chevron-down-B2xEAqn8.js";import"./useEventCallback-CqT8udWU.js";import"./iconLoader-8A-tMtWK.js";import"./Switch-v7fnTwm0.js";import"./CompositeRoot-BS4ARwtN.js";import"./TimePicker-CUhFG3vE.js";import"./CollapsiblePanel-CSh4ea_Q.js";import"./error-CTtfffuQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-FDsqzYBW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
