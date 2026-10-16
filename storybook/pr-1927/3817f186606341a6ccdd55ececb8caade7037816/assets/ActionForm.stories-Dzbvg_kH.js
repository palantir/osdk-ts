import{j as t,g as n}from"./iframe-DmjyB9qr.js";import{A as r}from"./action-form-CUefQRz_.js";import"./preload-helper-CAx3wjDj.js";import"./DropdownField-B6gxSasK.js";import"./debounce-BacvmWfK.js";import"./useOsdkClient-C4LtXzbF.js";import"./index-D4TDlc_O.js";import"./Input-CLw0N-7T.js";import"./useBaseUiId-BIBlatd5.js";import"./useControlled-Bb9znHKm.js";import"./index-CaiUNbzc.js";import"./index-Cv1wdKn8.js";import"./PopoverPopup-B54LMItf.js";import"./InternalBackdrop-CPUdsPru.js";import"./composite-ClGRLeRM.js";import"./index-DaPZuE20.js";import"./getDisabledMountTransitionStyles-Cs3lm4js.js";import"./ToolbarRootContext-9w_REGks.js";import"./tick-BMnkz0dp.js";import"./svgIconContainer-D2c8Ba4-.js";import"./small-cross-DjWAfLNP.js";import"./search-CQ17z9WA.js";import"./cross-C5lxgD8z.js";import"./useValueChanged-BLYKdZPH.js";import"./getPseudoElementBounds-DttlvabX.js";import"./CompositeItem-DhSM1hah.js";import"./makeExternalStore-BpvdNYu5.js";import"./BaseForm-CuuzxwuD.js";import"./ActionButton-B_Fb6ob-.js";import"./Button-DBHSL7QN.js";import"./SkeletonBar-D7_1dMLv.js";import"./Tooltip-DoFgPSBW.js";import"./info-sign-LQPqw69Y.js";import"./chevron-up-ChvIVDyp.js";import"./chevron-down-8HOE1Tp7.js";import"./useEventCallback-BDzgTZ89.js";import"./iconLoader-DReKmmYW.js";import"./Switch-CV4oxixY.js";import"./CompositeRoot-CwGyj2Cf.js";import"./TimePicker-DiB4Cx5Y.js";import"./CollapsiblePanel-BBVpPSYq.js";import"./error-C5ZuOycH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DRRr7i5M.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
