import{j as t,g as n}from"./iframe-6oxuiw9Z.js";import{A as r}from"./action-form-CAp4OyZh.js";import"./preload-helper-BTY9tSHX.js";import"./DropdownField-B7TAl7Ih.js";import"./debounce-DF-eexkr.js";import"./useOsdkClient-B4tnXDgL.js";import"./index-DDLC59ec.js";import"./Input-CFCgD2F3.js";import"./useBaseUiId-CTF0uA8q.js";import"./useControlled-Dfn-KuCH.js";import"./index-CgONBqcV.js";import"./index-5k16yjvX.js";import"./PopoverPopup-BcnCQgbT.js";import"./InternalBackdrop-DBmGsDdc.js";import"./composite-D6aR9WOy.js";import"./index-DVdku0Wi.js";import"./getDisabledMountTransitionStyles-DTLBovES.js";import"./ToolbarRootContext-Cg1szVJV.js";import"./tick-CaZ2jGqn.js";import"./svgIconContainer-CCWfPmIE.js";import"./small-cross-vimEE2_z.js";import"./search-CEhUV7Cx.js";import"./cross-DFvXSKDO.js";import"./useValueChanged-CP--SvLi.js";import"./getPseudoElementBounds-B_PMHS6a.js";import"./CompositeItem-CxzD_nac.js";import"./makeExternalStore-C5lUPI7i.js";import"./BaseForm-C6KxlS9g.js";import"./ActionButton-IYlq4mb0.js";import"./Button-BYfKNsB1.js";import"./SkeletonBar-DzVrK6Gn.js";import"./Tooltip-XVfngFaQ.js";import"./info-sign-BeRmefVr.js";import"./chevron-up-RSO-Meb3.js";import"./chevron-down-D5GnK5oF.js";import"./useEventCallback-BVuP13gs.js";import"./iconLoader-BblVVtyV.js";import"./Switch-Du7CiGmR.js";import"./CompositeRoot-BslKp4VJ.js";import"./TimePicker-C5ZLQ8Uj.js";import"./CollapsiblePanel-CO8uQTa1.js";import"./error-CCmYgvH-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DqypzTOB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
