import{j as t,g as n}from"./iframe-D7WyLq_R.js";import{A as r}from"./action-form-Centp9CV.js";import"./preload-helper-BqfBxCjy.js";import"./DropdownField-BcUtsHzO.js";import"./debounce-CJeHPCAd.js";import"./useOsdkClient-Ci5CHzsk.js";import"./index-HyeIDcrc.js";import"./Input-C4gz0NfF.js";import"./useBaseUiId-CG-SGXYP.js";import"./useControlled-Bb8KRWad.js";import"./index-ufR6xdAx.js";import"./index-D2fZUIcR.js";import"./isObject-CDlc3nuf.js";import"./InternalBackdrop-7rlgucId.js";import"./composite-D_DTOoGQ.js";import"./index-eSq-wOtL.js";import"./getDisabledMountTransitionStyles-DFqI_LNP.js";import"./ToolbarRootContext-Fnt7cK66.js";import"./tick-Dc3ISC5j.js";import"./svgIconContainer-B4x4BdHn.js";import"./small-cross-B4qCwIBh.js";import"./search-s_J2wlUd.js";import"./cross-uvcs2Wcl.js";import"./useValueChanged-BSHUSrlL.js";import"./getPseudoElementBounds-OQu2StyZ.js";import"./CompositeItem-ZpmtOb_M.js";import"./makeExternalStore-DcukOp_j.js";import"./BaseForm-iF-ZJt8W.js";import"./ActionButton-BuFs1EiV.js";import"./Button-BE_yPzwR.js";import"./SkeletonBar-Be2VldqA.js";import"./Tooltip-ColuuQlO.js";import"./info-sign-CgG0M3NK.js";import"./chevron-up-BYOLxdH9.js";import"./chevron-down-CUo9ik68.js";import"./useEventCallback-BReO6q8q.js";import"./iconLoader-bgNEFu_3.js";import"./Switch-BEeFKVi1.js";import"./CompositeRoot-KfQEq8rJ.js";import"./TimePicker-CQksvUzx.js";import"./CollapsiblePanel-H-RuyrJq.js";import"./error-D2VV45CC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BvKbLnrg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
