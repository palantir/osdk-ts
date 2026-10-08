import{j as t,g as n}from"./iframe-CYRFLlEO.js";import{A as r}from"./action-form-DAF3JSC7.js";import"./preload-helper-ChluBdBb.js";import"./DropdownField-wXZN_aVL.js";import"./debounce-BWdTtlOi.js";import"./useOsdkClient-BJqJ3t0X.js";import"./index-DgFaecLv.js";import"./Input-CemPVcnY.js";import"./useBaseUiId-CT8xqfBr.js";import"./useControlled-D5UJw3Fq.js";import"./index-C8sdjwtp.js";import"./index-BCjTJI3_.js";import"./PopoverPopup-DotHPyVZ.js";import"./InternalBackdrop-CTPF33qa.js";import"./composite-DBnR4BVO.js";import"./index-C2MDVEGT.js";import"./getDisabledMountTransitionStyles-DPyBQpoo.js";import"./ToolbarRootContext-DIul4zOr.js";import"./tick-BxUNHTte.js";import"./svgIconContainer-DXkF8wrQ.js";import"./small-cross-BXgSEa8S.js";import"./search-gMbThLhN.js";import"./cross-DBpyyU9C.js";import"./useValueChanged-CsL5tjte.js";import"./getPseudoElementBounds-C_2zFZOn.js";import"./CompositeItem-EG5A4Ctt.js";import"./makeExternalStore-B-fBg6wj.js";import"./BaseForm-EqAcfQff.js";import"./ActionButton-D0Fx6r_2.js";import"./Button-CGEba4bS.js";import"./SkeletonBar-Bq3sXSF2.js";import"./Tooltip-Dib25ex8.js";import"./info-sign-DyusK7Hm.js";import"./chevron-up-y_OSlWJk.js";import"./chevron-down-QtZPW63O.js";import"./useEventCallback-BJFvrRyb.js";import"./iconLoader-CLMOafhN.js";import"./Switch--jXQNknW.js";import"./CompositeRoot-D_az8Pw9.js";import"./TimePicker-BKDu8QJ7.js";import"./CollapsiblePanel-D8-L6clc.js";import"./error-CvsmrG6o.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ihi9z85c.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
