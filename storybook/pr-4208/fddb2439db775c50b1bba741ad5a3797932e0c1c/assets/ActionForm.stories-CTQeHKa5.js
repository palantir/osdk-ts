import{j as t,g as n}from"./iframe-CDhHfbZk.js";import{A as r}from"./action-form-BtaMqFDQ.js";import"./preload-helper-D9m9ft9F.js";import"./DropdownField-BBgRvZiW.js";import"./debounce-CYPWazyu.js";import"./useOsdkClient-BN3vNMZc.js";import"./index-vUAebvBG.js";import"./Input-B4zROYTD.js";import"./useBaseUiId-BNzPhzzT.js";import"./useControlled-C9J3sV3W.js";import"./index-IitVmvoQ.js";import"./index-DDa4qDBw.js";import"./PopoverPopup-D0oa-8rs.js";import"./InternalBackdrop-kU3g4qnB.js";import"./composite-zry2u9iy.js";import"./index-QX77SP4G.js";import"./getDisabledMountTransitionStyles-BsTot6L0.js";import"./ToolbarRootContext-BHNpAEXV.js";import"./tick-Bxx5r_FA.js";import"./svgIconContainer-DP_9rndU.js";import"./small-cross-DV4dQjPE.js";import"./search-Bcd3upv2.js";import"./cross-CLCYSP7-.js";import"./useValueChanged-C52zQhOD.js";import"./getPseudoElementBounds-CQtQrLv_.js";import"./CompositeItem-CfrnZWNF.js";import"./makeExternalStore-BkKmabtu.js";import"./BaseForm-DN--QMR3.js";import"./ActionButton-Tom3ILVB.js";import"./Button-Eng2VAlv.js";import"./SkeletonBar-BnvFfaYp.js";import"./Tooltip-BYY_Xvns.js";import"./info-sign-Byi6wnOv.js";import"./chevron-up-CEf50eii.js";import"./chevron-down-BrdASUtV.js";import"./useEventCallback-B7ZISNVL.js";import"./iconLoader-C0thU9_6.js";import"./Switch-XSrxEcgx.js";import"./CompositeRoot-YMnd1XlV.js";import"./TimePicker-R_c_4u7e.js";import"./CollapsiblePanel-CxG2E3R9.js";import"./error-CgXh1tPF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BPDsAwtw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
