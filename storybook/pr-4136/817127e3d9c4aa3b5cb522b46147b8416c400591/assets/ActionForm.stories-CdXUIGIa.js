import{j as t,g as n}from"./iframe-DM2lbhq3.js";import{A as r}from"./action-form-DuibQTGN.js";import"./preload-helper-CVlRJCQ4.js";import"./DropdownField-d-diOJrZ.js";import"./debounce-vAXahSDb.js";import"./useOsdkClient-BLFd6qg6.js";import"./index-BxgMbwQW.js";import"./Input-CY0qF8uS.js";import"./useBaseUiId-D_FvUqqy.js";import"./useControlled-Ca36YxvC.js";import"./index-CCN1yxkK.js";import"./index-Bpwngerd.js";import"./PopoverPopup-CX9LkjiZ.js";import"./InternalBackdrop-hyoEPQMb.js";import"./composite-iccYdnrf.js";import"./index-BBAnTYss.js";import"./getDisabledMountTransitionStyles-CcD-BZKR.js";import"./ToolbarRootContext-Bg6hLVB6.js";import"./tick-_p_7zkXC.js";import"./svgIconContainer-DawECmqq.js";import"./small-cross-BKA-Ml9N.js";import"./search-B5W8bLyf.js";import"./cross-C6M-wOmQ.js";import"./useValueChanged-BxW-Xkhx.js";import"./getPseudoElementBounds-CzHg-ye1.js";import"./CompositeItem-BFuIVpH0.js";import"./makeExternalStore-BiR7BXmk.js";import"./BaseForm-BDD2GB6W.js";import"./ActionButton-_pm_iS5i.js";import"./Button-XbpukpvP.js";import"./SkeletonBar-B2B70iHE.js";import"./Tooltip-DbczZTzH.js";import"./info-sign-H58NyPWk.js";import"./chevron-up-CKNmCDPh.js";import"./chevron-down-DyskK5Yf.js";import"./useEventCallback-CKRLND5s.js";import"./iconLoader-DnkTAvLf.js";import"./Switch-D3Ngz4iq.js";import"./CompositeRoot-RrBSV9xP.js";import"./TimePicker-DgulHSSX.js";import"./CollapsiblePanel-DpDskcR4.js";import"./error-DJU2sF2P.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-URzhtFq2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
