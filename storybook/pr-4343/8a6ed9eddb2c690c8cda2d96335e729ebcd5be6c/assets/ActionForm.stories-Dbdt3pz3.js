import{j as t,g as n}from"./iframe-PwAIVm5u.js";import{A as r}from"./action-form-C_Nmvc92.js";import"./preload-helper-CQv3h1eP.js";import"./DropdownField-C6vsf0E7.js";import"./debounce-C27HzrcV.js";import"./useOsdkClient-PEgelIDi.js";import"./index-Ca_oKjEa.js";import"./Input-CPGzuvOj.js";import"./useBaseUiId-BhpsHhZ2.js";import"./useControlled-_4ugvpeb.js";import"./index-RdMLhv4M.js";import"./index-BihfBpP7.js";import"./PopoverPopup-sM0UeHOu.js";import"./InternalBackdrop-CYy1iHZN.js";import"./composite-fUnz6yuB.js";import"./index-Bviik-9F.js";import"./getDisabledMountTransitionStyles-BRie3ZsF.js";import"./ToolbarRootContext-BB_k_Kqj.js";import"./tick-DC7CcLKp.js";import"./svgIconContainer-HsDGQ90M.js";import"./small-cross-B14kqehl.js";import"./search-Nx9kE-Q8.js";import"./cross-GcEEbHxC.js";import"./useValueChanged-CkHl3qLX.js";import"./getPseudoElementBounds-bZ1W59vq.js";import"./CompositeItem-DPCNdhZq.js";import"./makeExternalStore-CqOzjQXJ.js";import"./BaseForm-CtRZFctn.js";import"./ActionButton-CWjydIzu.js";import"./Button-VHGYpAX6.js";import"./SkeletonBar-DN3kNMYz.js";import"./Tooltip-tjFL-LBL.js";import"./info-sign-BM1viS8U.js";import"./chevron-up-Cb0duFtM.js";import"./chevron-down-BA5gqzEX.js";import"./useEventCallback-Dm32TZ3_.js";import"./iconLoader-BB20_PCj.js";import"./Switch-B4UxUFPW.js";import"./CompositeRoot-B2Nu1FwG.js";import"./TimePicker-CfuPV7h1.js";import"./CollapsiblePanel-C0dv2KPd.js";import"./error-DMntN0M5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-38iXVMUT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
