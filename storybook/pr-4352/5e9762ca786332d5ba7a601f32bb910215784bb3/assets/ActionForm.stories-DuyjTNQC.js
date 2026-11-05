import{j as t,g as n}from"./iframe-B7iXMeep.js";import{A as r}from"./action-form-CBrX5xMk.js";import"./preload-helper-BZFSoYNL.js";import"./DropdownField-oRa3_E0o.js";import"./debounce-BhHOqNYV.js";import"./useOsdkClient-B0C9p8qN.js";import"./index-B9IPxHLp.js";import"./Input-CXcN1OqN.js";import"./useBaseUiId-D1eq_nvb.js";import"./useControlled-BhUv2c2y.js";import"./index-DO_Xy6GM.js";import"./index-BCuE63Ls.js";import"./isObject-C8naLxpN.js";import"./InternalBackdrop-dELTuav9.js";import"./composite-vYr7iKxA.js";import"./index-C7X42qv-.js";import"./getDisabledMountTransitionStyles-CJVOz_Wf.js";import"./ToolbarRootContext-U7XGc6m3.js";import"./tick-Ddmq0CLi.js";import"./svgIconContainer-6zXBkUlH.js";import"./small-cross-DuRTpqsB.js";import"./search-CC1z-TYa.js";import"./cross-DxJs6dla.js";import"./useValueChanged-Ca_viAtG.js";import"./getPseudoElementBounds-3y1P965l.js";import"./CompositeItem-B2vumib4.js";import"./makeExternalStore-myfZT6Ru.js";import"./BaseForm-BKQaslSs.js";import"./ActionButton-BT5QM3LR.js";import"./Button-Cs7xUkhF.js";import"./SkeletonBar-DM6oPXtG.js";import"./Tooltip-SwHBo8I_.js";import"./info-sign-BcoxMSGq.js";import"./chevron-up-zngNgD6d.js";import"./chevron-down-S3M-k2gy.js";import"./useEventCallback-lGcIidgf.js";import"./iconLoader-xzbCpksx.js";import"./Switch-B-z1i_bD.js";import"./CompositeRoot-Bx7QplqV.js";import"./TimePicker-Qh-Sf8Sg.js";import"./CollapsiblePanel-meNR4Xwz.js";import"./error-BqkMjiz6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Be4NSs13.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
