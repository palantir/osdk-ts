import{j as t,g as n}from"./iframe-CrBTuD2p.js";import{A as r}from"./action-form-ChY9VrQV.js";import"./preload-helper-BjNyA4Tc.js";import"./DropdownField-Qm8Rb_9y.js";import"./debounce-B2lGFotZ.js";import"./useOsdkClient-26AsuYNX.js";import"./index-CFzUVYi2.js";import"./Input-7YuL0Mnz.js";import"./useBaseUiId-BBTk7qb4.js";import"./useControlled-D0EXlvvG.js";import"./index-BqULJUvL.js";import"./index-Bnr4tUfA.js";import"./PopoverPopup-Bg_xMHlt.js";import"./InternalBackdrop-LpC4w9ZO.js";import"./composite-BeVo3QMW.js";import"./index-9tkhxWIX.js";import"./getDisabledMountTransitionStyles-mgoiWsTQ.js";import"./ToolbarRootContext-BXCYOJCq.js";import"./tick-BM2LaoTy.js";import"./svgIconContainer-DW2driag.js";import"./small-cross-5byDOqd6.js";import"./search-BDp0U2-N.js";import"./cross-BBINy6sP.js";import"./useValueChanged-DxaEZlR0.js";import"./getPseudoElementBounds-C9gmy0te.js";import"./CompositeItem-BE6iDbTy.js";import"./makeExternalStore-Dq8QV5--.js";import"./BaseForm-CigDjV8n.js";import"./ActionButton-p2_uRokn.js";import"./Button-6cIUTGc1.js";import"./SkeletonBar-TDIAZEL9.js";import"./Tooltip-BgSVMYpF.js";import"./info-sign-Dx9-vU1A.js";import"./chevron-up-CTqsFpY3.js";import"./chevron-down-BqX1E0HN.js";import"./useEventCallback-BD2d3Tx5.js";import"./iconLoader-COqPn2Pv.js";import"./Switch-B_PEqjuw.js";import"./CompositeRoot-BIz-REx_.js";import"./TimePicker-BdzjfAVs.js";import"./CollapsiblePanel-CWFpKLhQ.js";import"./error-D-C4TtvX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BvGvy0SD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
