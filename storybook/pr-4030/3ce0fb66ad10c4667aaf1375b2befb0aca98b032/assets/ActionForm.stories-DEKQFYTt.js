import{j as t,g as n}from"./iframe-BpUcg2zG.js";import{A as r}from"./action-form-Bh2Rh0GP.js";import"./preload-helper-B2UTcXFP.js";import"./DropdownField-Br3l3qOB.js";import"./debounce-CXzI_OHH.js";import"./useOsdkClient-Dnj4xecm.js";import"./index-7N6MUyxI.js";import"./Input-DaPfruQG.js";import"./useBaseUiId-Bv3X91q5.js";import"./useControlled-DdOa4Phy.js";import"./index-DI63_yx7.js";import"./index-CvEJHu1s.js";import"./PopoverPopup-CyIGwRoM.js";import"./InternalBackdrop-DMk-kvEU.js";import"./composite-CFjjm5Bq.js";import"./index-C3OHRfdp.js";import"./getDisabledMountTransitionStyles-sJoPqg4c.js";import"./ToolbarRootContext-J_sWFt16.js";import"./tick-B3uICQ16.js";import"./svgIconContainer-g6F9ILDM.js";import"./small-cross-Bb_UEV9u.js";import"./search-BLWHV2Ka.js";import"./cross-Qiz9Cl6T.js";import"./useValueChanged-DQZMmpA-.js";import"./getPseudoElementBounds-BdWd26b0.js";import"./CompositeItem-C2o4b7lZ.js";import"./makeExternalStore-Cwp1LGPC.js";import"./BaseForm-CpGPzxtq.js";import"./ActionButton-daXbDUYm.js";import"./Button-DFuiuLIT.js";import"./SkeletonBar-YHGj4uus.js";import"./Tooltip-kYiBGujl.js";import"./info-sign-D-xZXpnQ.js";import"./chevron-up-8DTQKUOU.js";import"./chevron-down-C_xyEVbG.js";import"./useEventCallback-CpJFT7Nx.js";import"./iconLoader-CQ1aXpd-.js";import"./CompositeRoot-B9uqyKHl.js";import"./Switch-CC4nSt46.js";import"./TimePicker-B8Dzf1zj.js";import"./CollapsiblePanel-Dn0E0YbQ.js";import"./error-DVz4lqLc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D52jnuF5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
