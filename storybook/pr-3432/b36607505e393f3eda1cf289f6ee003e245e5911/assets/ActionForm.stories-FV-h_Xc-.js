import{j as t,g as n}from"./iframe-D8UHlLM-.js";import{A as r}from"./action-form-DsNWPOyu.js";import"./preload-helper-B2drndpz.js";import"./DropdownField-BqKtTUT-.js";import"./debounce-DEV0SMqr.js";import"./useOsdkClient-HNKtj353.js";import"./index-2pZAxqQ8.js";import"./Input-BHmmIdQN.js";import"./useBaseUiId-B83MHcbd.js";import"./useControlled-DT-SiHVq.js";import"./index-DrmX_pzR.js";import"./index-BrcjEskR.js";import"./PopoverPopup-Dye_SGlA.js";import"./InternalBackdrop-BiFzgO2t.js";import"./composite-BYq1KtFB.js";import"./index-CbaYF84n.js";import"./getDisabledMountTransitionStyles-CbL9qvCd.js";import"./ToolbarRootContext-Df4LXHpy.js";import"./tick-CckWobbk.js";import"./svgIconContainer-Ckme5BEx.js";import"./small-cross-LQUt3Gb7.js";import"./search-DmARyhAU.js";import"./cross-zCnfpZEf.js";import"./useValueChanged-BuBsDfgp.js";import"./getPseudoElementBounds-Cr-VGz-T.js";import"./CompositeItem-DhPX7cGM.js";import"./makeExternalStore-CDgVz-Cr.js";import"./BaseForm-D1mynnhT.js";import"./ActionButton-BScY58m0.js";import"./Button-SSlA87_g.js";import"./SkeletonBar-BE_VQs-9.js";import"./Tooltip-BSlgHJeE.js";import"./info-sign-DpQ2b8F5.js";import"./chevron-up-CE9ztF7n.js";import"./chevron-down-B03gIwVp.js";import"./useEventCallback-BoHAEoDT.js";import"./iconLoader-CKPByS6C.js";import"./CompositeRoot-qmr0rnO8.js";import"./Switch-BajGMg9u.js";import"./TimePicker-BbGkIni_.js";import"./CollapsiblePanel-CifK208E.js";import"./error-CsDtSshc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BtMau99A.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
