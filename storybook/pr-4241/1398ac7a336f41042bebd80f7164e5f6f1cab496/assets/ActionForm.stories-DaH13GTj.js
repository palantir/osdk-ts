import{j as t,g as n}from"./iframe-50Cg_Ain.js";import{A as r}from"./action-form-CiC5Vi0T.js";import"./preload-helper-DMtB3Ytn.js";import"./DropdownField-Bu7usqGG.js";import"./debounce-ClHlqela.js";import"./useOsdkClient-CSxkcmdq.js";import"./index-jwJr-CWL.js";import"./Input-MpATsBua.js";import"./useBaseUiId-KVfK4IPD.js";import"./useControlled-BYCjMK_X.js";import"./index-pDWKxWtb.js";import"./index-Bnqsnheo.js";import"./isObject-DzKLNJWj.js";import"./InternalBackdrop-BuJcJtL5.js";import"./composite-Dp3rlZDO.js";import"./index-beR5Qk5I.js";import"./getDisabledMountTransitionStyles-CcshyzIS.js";import"./ToolbarRootContext-wGzcHK2n.js";import"./tick-BHY7Momf.js";import"./svgIconContainer-CcJ3Jv7r.js";import"./small-cross-zbNUvU_s.js";import"./search-BrkmnBZA.js";import"./cross-COS10AaY.js";import"./useValueChanged-4L6Dzkoi.js";import"./getPseudoElementBounds-Cy_X7Dzd.js";import"./CompositeItem-PSBD5_9a.js";import"./makeExternalStore-mw5x5KPf.js";import"./BaseForm-KgJni4N3.js";import"./ActionButton-BOVhqgS3.js";import"./Button-D1Gjjj1e.js";import"./SkeletonBar-vCg5I0cB.js";import"./Tooltip-CY7BNFvk.js";import"./info-sign-tPyLfmr1.js";import"./chevron-up-BFPpy4NF.js";import"./chevron-down-XrKrb8VS.js";import"./useEventCallback--j9Bwo9R.js";import"./iconLoader-CGbN9kLK.js";import"./Switch-CeVr9-bK.js";import"./CompositeRoot-Bl3_60xC.js";import"./TimePicker-A0tkuaFL.js";import"./CollapsiblePanel-DLDG4Y-F.js";import"./error-COSlANXI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DCjsjr3q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
