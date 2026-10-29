import{j as t,g as n}from"./iframe-D3RqEcTg.js";import{A as r}from"./action-form-Sv1S0iIW.js";import"./preload-helper-DEJIs2kk.js";import"./DropdownField-BItMWDAM.js";import"./debounce-1JchkNCt.js";import"./useOsdkClient-CYgwmGPG.js";import"./index-Cbcna1KE.js";import"./Input-D6dyl9HO.js";import"./useBaseUiId-DzPouJ0p.js";import"./useControlled-CImu19gq.js";import"./index-C44NzcrV.js";import"./index-C2bdh9HG.js";import"./PopoverPopup-RBpjqEC9.js";import"./InternalBackdrop-Pm2S-c0l.js";import"./composite-LUqhuSI5.js";import"./index-M7M1iWSs.js";import"./getDisabledMountTransitionStyles-3vJ9NXW6.js";import"./ToolbarRootContext-DAdYN5ZS.js";import"./tick-BwpcUkSk.js";import"./svgIconContainer-BFc_5UUB.js";import"./small-cross-CQsBQ66b.js";import"./search-CqjQ6sEq.js";import"./cross-CX1s17MX.js";import"./useValueChanged-CnBcuDv8.js";import"./getPseudoElementBounds-2PfQFQkg.js";import"./CompositeItem-DtKWkFxx.js";import"./makeExternalStore-DTiablUL.js";import"./BaseForm-NBdOf-4F.js";import"./ActionButton-DZXFI6ev.js";import"./Button-BcgwRa4F.js";import"./SkeletonBar-CfBbo7kP.js";import"./Tooltip-DsSzQZ3B.js";import"./info-sign-B_rmEFVG.js";import"./chevron-up-CQ5fimvW.js";import"./chevron-down-CejxcKWv.js";import"./useEventCallback-gPsZT7qj.js";import"./iconLoader-BEZsSHQB.js";import"./Switch-B8lZQbvT.js";import"./CompositeRoot-Byhzyybf.js";import"./TimePicker-Bvlx0Htj.js";import"./CollapsiblePanel-DATqTs4G.js";import"./error-CTTKBYvP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CVWMc52B.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
