import{j as t,g as n}from"./iframe-tVbcsjZa.js";import{A as r}from"./action-form-CQU01P44.js";import"./preload-helper-y3mk_7AM.js";import"./DropdownField-Bisnh0x5.js";import"./debounce-BpLWDfM1.js";import"./useOsdkClient-1rx9_4le.js";import"./index-BUwo4Wun.js";import"./Input-CKwugJU4.js";import"./useBaseUiId-DvMZwhQw.js";import"./useControlled-SzLU43Qu.js";import"./index-sjIEPV-q.js";import"./index-DRL_czfg.js";import"./PopoverPopup-DpPqupmM.js";import"./InternalBackdrop-iKHycqz0.js";import"./composite-OrxFWVZn.js";import"./index-BWfL3ztK.js";import"./getDisabledMountTransitionStyles-BPk3yLY1.js";import"./ToolbarRootContext-BeKKodE4.js";import"./tick-Bh3J60SL.js";import"./svgIconContainer-D6fQk_si.js";import"./small-cross-DM3EA47X.js";import"./search-BhYP5RmD.js";import"./cross-Cg8bwusU.js";import"./useValueChanged-CcIn2mPz.js";import"./getPseudoElementBounds-kLv_VCs0.js";import"./CompositeItem-G9QZyuPm.js";import"./makeExternalStore-Bo5qeas1.js";import"./BaseForm-f2CEJkFf.js";import"./ActionButton-BiTy67hR.js";import"./Button-BsWA9Md6.js";import"./SkeletonBar-xgxIJ15e.js";import"./Tooltip-CHiDBImr.js";import"./info-sign-mF20YMpG.js";import"./chevron-up-BliHafL7.js";import"./chevron-down-ADlv-Mhp.js";import"./useEventCallback-DPWvOD4-.js";import"./iconLoader-Dt3VY-ib.js";import"./Switch-BAFfiIj7.js";import"./CompositeRoot-BU8u8mGF.js";import"./TimePicker-Cw_w4OCC.js";import"./CollapsiblePanel-BUzPJH96.js";import"./error-e6srGYm1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LuX7zwcW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
