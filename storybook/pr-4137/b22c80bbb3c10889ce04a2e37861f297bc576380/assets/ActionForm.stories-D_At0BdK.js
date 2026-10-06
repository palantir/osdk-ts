import{j as t,g as n}from"./iframe-OTC_SZd0.js";import{A as r}from"./action-form-_A44czpr.js";import"./preload-helper-1vGzY75P.js";import"./DropdownField-fJtfAUzJ.js";import"./debounce-CKQsYhti.js";import"./useOsdkClient-DCm7AWwJ.js";import"./index-BoJX-ksu.js";import"./Input-RoK9jBHN.js";import"./useBaseUiId-CX-b-AU2.js";import"./useControlled-VRarZ-1e.js";import"./index-CvsR1t9J.js";import"./index-UWWplry5.js";import"./PopoverPopup-gvz3_YST.js";import"./InternalBackdrop-C2smTE49.js";import"./composite-DmMBTPuj.js";import"./index-BSLVBTuk.js";import"./getDisabledMountTransitionStyles-Djfv408z.js";import"./ToolbarRootContext-BqVPJrpg.js";import"./tick-CiIM5WDj.js";import"./svgIconContainer-BcCPLcaR.js";import"./small-cross-BSXT4voL.js";import"./search-CqHOzh_J.js";import"./cross-DqMcRqPP.js";import"./useValueChanged-BI84kVyH.js";import"./getPseudoElementBounds-CucAzF8-.js";import"./CompositeItem-JGQEQxmA.js";import"./makeExternalStore-CJLgs2ND.js";import"./BaseForm-Da432oBO.js";import"./ActionButton-B6wO2OKA.js";import"./Button-Cp-yQ_WA.js";import"./SkeletonBar-B9Sf-YB8.js";import"./Tooltip-Cx2J9Tyo.js";import"./info-sign-BnFAcE7Y.js";import"./chevron-up-C2P_UCL2.js";import"./chevron-down-Bq3D3uVm.js";import"./useEventCallback-69mtBwYt.js";import"./iconLoader-YFN7GHYQ.js";import"./Switch-BKwVwAf4.js";import"./CompositeRoot-B-8BXpXq.js";import"./TimePicker-C03AbcQi.js";import"./CollapsiblePanel-C1ftD3Jy.js";import"./error-DRGNiszN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BAfhlptC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
