import{j as t,g as n}from"./iframe-DeBKMUKb.js";import{A as r}from"./action-form-DyLqsu2p.js";import"./preload-helper-DtsY9CO2.js";import"./DropdownField-DgQP5JXr.js";import"./debounce-BBaNzBPC.js";import"./useOsdkClient-DaMq1XGG.js";import"./index-CSt4SVDo.js";import"./Input-DiiDZzec.js";import"./useBaseUiId-gjqV4iyZ.js";import"./useControlled-Cz39Exnz.js";import"./index-CPngYotl.js";import"./index-Ch6RGO_N.js";import"./PopoverPopup-D_7crJdL.js";import"./InternalBackdrop-BfIGilFA.js";import"./composite-CmHTi2sT.js";import"./index-_vLIc9r1.js";import"./getDisabledMountTransitionStyles-75KemxOF.js";import"./ToolbarRootContext-FIq2uNrn.js";import"./tick-CiGN0ZZM.js";import"./svgIconContainer-O2AZIUYH.js";import"./small-cross-DF_WxFTT.js";import"./search-nMx4jBID.js";import"./cross-BJHF5Gx6.js";import"./useValueChanged-CDAPz_Xc.js";import"./getPseudoElementBounds-C2LoIYA3.js";import"./CompositeItem-DxScAMY-.js";import"./makeExternalStore-tOV9_u_X.js";import"./BaseForm-C9SOByO2.js";import"./ActionButton-CYaNQ1cM.js";import"./Button-UgQJdLdU.js";import"./SkeletonBar-4gyG0MaM.js";import"./Tooltip-DGFOPRJX.js";import"./info-sign-ThpamnGz.js";import"./chevron-up-COmqXx7x.js";import"./chevron-down-9YGLxBlF.js";import"./useEventCallback-DgJERIqa.js";import"./iconLoader-DoWnIeuM.js";import"./Switch-CCvRPGgu.js";import"./CompositeRoot-C8g2nDb4.js";import"./TimePicker-DoXkUO0I.js";import"./CollapsiblePanel-DrVw8HP_.js";import"./error-N6V_Mqjh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cw8Hicid.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
