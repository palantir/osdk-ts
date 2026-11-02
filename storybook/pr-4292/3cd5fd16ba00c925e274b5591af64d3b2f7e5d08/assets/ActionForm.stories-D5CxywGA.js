import{j as t,g as n}from"./iframe-BMT91W1Z.js";import{A as r}from"./action-form-Bk7VqRDh.js";import"./preload-helper-rvXeaCGs.js";import"./DropdownField-BYApLNcp.js";import"./debounce-D9qK1m7a.js";import"./useOsdkClient-CBtweC4d.js";import"./index-Bx6Ivmjs.js";import"./Input-B-23mNdu.js";import"./useBaseUiId-B4USe1gj.js";import"./useControlled-L0eiJeCg.js";import"./index-xfqQSbot.js";import"./index-DEWgT4HO.js";import"./PopoverPopup-aEwmg3S0.js";import"./InternalBackdrop-C3S75Ewn.js";import"./composite-D3rTrYkW.js";import"./index-Biu6iMsk.js";import"./getDisabledMountTransitionStyles-w-M_QDiA.js";import"./ToolbarRootContext-D1Qf3sGL.js";import"./tick-DAiyHf9d.js";import"./svgIconContainer-B3o1vMYf.js";import"./small-cross-CyV6m0vF.js";import"./search-CYSVIzHU.js";import"./cross-C9h9qNTe.js";import"./useValueChanged-Byf4MJrh.js";import"./getPseudoElementBounds-CvnYPr_B.js";import"./CompositeItem-CssM4Gze.js";import"./makeExternalStore-DBhSiWtQ.js";import"./BaseForm-Bipx6RDS.js";import"./ActionButton-CUmEJmAC.js";import"./Button-Djft0tAo.js";import"./SkeletonBar-Cwkgfi-Z.js";import"./Tooltip-CACfcbwY.js";import"./info-sign-C6PBgSSq.js";import"./chevron-up-CW_U01AK.js";import"./chevron-down-C4MVGpCZ.js";import"./useEventCallback-BCuXMQng.js";import"./iconLoader-CB7ysVLD.js";import"./Switch-D89wpdYu.js";import"./CompositeRoot-Xx8LPOzt.js";import"./TimePicker-DyfVRNeW.js";import"./CollapsiblePanel-C79Pa1Xk.js";import"./error-Dzj1sGPq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DgSik2_o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
