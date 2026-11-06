import{j as t,g as n}from"./iframe-gdP396qb.js";import{A as r}from"./action-form-9zix1OYG.js";import"./preload-helper-C9uq-iVz.js";import"./DropdownField-B2Q-_o7O.js";import"./debounce-dYJtqIeY.js";import"./useOsdkClient-B58tmibE.js";import"./index-ClCZ0Ati.js";import"./Input-DWlBDhXd.js";import"./useBaseUiId-C_ToupKC.js";import"./useControlled-D2ey04Mp.js";import"./index-BNFLba0z.js";import"./index-mgQPQKNR.js";import"./isObject-CpaAk3bR.js";import"./InternalBackdrop-Dq6m4vJr.js";import"./composite-BvrmChzz.js";import"./index-BZUsCMPC.js";import"./getDisabledMountTransitionStyles-tj4MPdJt.js";import"./ToolbarRootContext-txczp7dw.js";import"./tick-Cx1Dvj4u.js";import"./svgIconContainer-afKcLYb0.js";import"./small-cross-X3ECwxK6.js";import"./search-CRn0JbZd.js";import"./cross-DtCUEBMv.js";import"./useValueChanged-DSiA270H.js";import"./getPseudoElementBounds-skNxDQry.js";import"./CompositeItem-CmcqEdwc.js";import"./makeExternalStore-Cq8wmohV.js";import"./BaseForm-DL6Xrkzr.js";import"./ActionButton-Ckf3gmBM.js";import"./Button-CTlmrId0.js";import"./SkeletonBar-Blsmqup6.js";import"./Tooltip-DxHEdFsh.js";import"./info-sign-BdSNRf2h.js";import"./chevron-up-B9Qz01f6.js";import"./chevron-down-D4IdPQsy.js";import"./useEventCallback-DCdboZtN.js";import"./iconLoader-BEbylGyw.js";import"./Switch-BSHZdDls.js";import"./CompositeRoot-Iw6eGwg_.js";import"./TimePicker-CuW6tkuL.js";import"./CollapsiblePanel-DHW97HGw.js";import"./error-CUjlToFo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CDl4GesU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
