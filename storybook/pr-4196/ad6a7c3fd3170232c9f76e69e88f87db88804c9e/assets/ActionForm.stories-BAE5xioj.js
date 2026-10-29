import{j as t,g as n}from"./iframe-BwirHNbs.js";import{A as r}from"./action-form-CJdsjl5N.js";import"./preload-helper-BcRMcE6w.js";import"./DropdownField-DkfCApz5.js";import"./debounce-Dxsepluv.js";import"./useOsdkClient-BKRNMM3l.js";import"./index-BmAPsQSt.js";import"./Input-wSOSKhCX.js";import"./useBaseUiId-DmDKW149.js";import"./useControlled-KmS5bOnr.js";import"./index-IvU-D_vM.js";import"./index-EqsE1RFo.js";import"./PopoverPopup-DefD54Az.js";import"./InternalBackdrop-D3Ls8fzN.js";import"./composite-B5RDHpm7.js";import"./index-PGrTwV1L.js";import"./getDisabledMountTransitionStyles-C8faNntK.js";import"./ToolbarRootContext-DHUZ3-w7.js";import"./tick-DYr2OYVY.js";import"./svgIconContainer-2pSHGQCS.js";import"./small-cross-SjNWyWub.js";import"./search-DVE4XQYl.js";import"./cross-BGeKWzpP.js";import"./useValueChanged-zp2A_D5s.js";import"./getPseudoElementBounds-D1fPl6ec.js";import"./CompositeItem-DM1dTjJL.js";import"./makeExternalStore-CdNCMpqS.js";import"./BaseForm-fXZD7v58.js";import"./ActionButton-BeARaHOn.js";import"./Button-CN4mp3wI.js";import"./SkeletonBar-DYSS3rlU.js";import"./Tooltip-BBPuwAdO.js";import"./info-sign-CcB4AtJQ.js";import"./chevron-up-C-5Juq-D.js";import"./chevron-down-D3Weizce.js";import"./useEventCallback-BDGr3X5U.js";import"./iconLoader-v9Ql8-FN.js";import"./Switch-DUqrjmOF.js";import"./CompositeRoot-BzCt9DWZ.js";import"./TimePicker-D1HtRCXP.js";import"./CollapsiblePanel-QaN6VVgw.js";import"./error-CL70nlEB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CP7X3COO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
