import{j as t,g as n}from"./iframe-DugxyHXW.js";import{A as r}from"./action-form-BHFioykj.js";import"./preload-helper-sKHH7dZZ.js";import"./DropdownField-Dd9c5Emh.js";import"./debounce-SsrRBLaw.js";import"./useOsdkClient-CjZHpbU9.js";import"./index-BnymHSBX.js";import"./Input-D5dfXCf5.js";import"./useBaseUiId-DXSoLqlj.js";import"./useControlled-CrSksIZl.js";import"./index-DEsgQO2-.js";import"./index-C1eIh-0N.js";import"./PopoverPopup-lrG87DA3.js";import"./InternalBackdrop-C5PVGWxl.js";import"./composite-B6PfDTrv.js";import"./index-OCBhvrRs.js";import"./getDisabledMountTransitionStyles-DB3JFAJ8.js";import"./ToolbarRootContext-Cl7j9rKh.js";import"./tick-BpCxOvMz.js";import"./svgIconContainer-BhR3_WjC.js";import"./small-cross-DLi0JibG.js";import"./search-HmVN54vs.js";import"./cross-BSDPKBN8.js";import"./useValueChanged-D8LItfM_.js";import"./getPseudoElementBounds-Ck5edXWa.js";import"./CompositeItem-V75ZZ8Nq.js";import"./makeExternalStore-WS2cTnp-.js";import"./BaseForm-Cpp15uEA.js";import"./ActionButton-PxTm-wqz.js";import"./Button-Dr2gNfRq.js";import"./SkeletonBar-DTF20Ls3.js";import"./Tooltip-GeR-nHC8.js";import"./info-sign-fceqrhoP.js";import"./chevron-up-BEwplToX.js";import"./chevron-down-BHed8mrw.js";import"./useEventCallback-BWN3beAb.js";import"./iconLoader-Bnt1ggzv.js";import"./CompositeRoot-C2tdVxuj.js";import"./Switch-YxTDIWPO.js";import"./TimePicker-tT1bUuRR.js";import"./CollapsiblePanel-EgTSYgZn.js";import"./error-DAzclkpO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-x8dgsXC7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
