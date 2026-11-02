import{j as t,g as n}from"./iframe-B6oWV_cO.js";import{A as r}from"./action-form-u7coCAkw.js";import"./preload-helper-CvT5iRxj.js";import"./DropdownField-SuxaAE8e.js";import"./debounce-C2vXJMuX.js";import"./useOsdkClient-aPMJxZ2d.js";import"./index-jWi9en1s.js";import"./Input-Czst-Pu5.js";import"./useBaseUiId-Lqu0Q_Vu.js";import"./useControlled-BYVF8v0w.js";import"./index-CuLm7S4g.js";import"./index-BRc86hmI.js";import"./PopoverPopup-BPYLCmXN.js";import"./InternalBackdrop-aNkEhke3.js";import"./composite-Dp6W2S9Q.js";import"./index-Cmd-ZYJY.js";import"./getDisabledMountTransitionStyles-FhoKevdq.js";import"./ToolbarRootContext-BPjzZzdt.js";import"./tick-zJx6D1Yi.js";import"./svgIconContainer-CyQYn__Q.js";import"./small-cross-BKVLOId_.js";import"./search-elVCr7Zu.js";import"./cross-CMQlEfgT.js";import"./useValueChanged-Bs_2NC3q.js";import"./getPseudoElementBounds-pDes9EyY.js";import"./CompositeItem-Bt81vcwk.js";import"./makeExternalStore-DOLupiTS.js";import"./BaseForm-D3T4vsNM.js";import"./ActionButton-CQNeinOl.js";import"./Button-COxF9se3.js";import"./SkeletonBar-C3bqiAvB.js";import"./Tooltip-BJYJHQiG.js";import"./info-sign-Bnrbq7tr.js";import"./chevron-up-bHgsMpWq.js";import"./chevron-down-DRI3eY5G.js";import"./useEventCallback-68igZ2om.js";import"./iconLoader-B-zTEFp2.js";import"./Switch-ktzznWyg.js";import"./CompositeRoot-BOsrxmub.js";import"./TimePicker-C_fxed-s.js";import"./CollapsiblePanel-DURqSvpg.js";import"./error-BpLqO6z6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-U9jYKXmV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
