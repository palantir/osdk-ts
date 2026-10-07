import{j as t,g as n}from"./iframe-BdOqqohK.js";import{A as r}from"./action-form-CakUK5lI.js";import"./preload-helper-BM9HCPK9.js";import"./DropdownField-B4Q1L6C2.js";import"./debounce-BNI_uAPu.js";import"./useOsdkClient-12OQM3Gl.js";import"./index-CMkPjfDh.js";import"./Input-BunEo4l4.js";import"./useBaseUiId-D2aQCoEc.js";import"./useControlled-BYgnBDE7.js";import"./index-CVW6l3Ye.js";import"./index-DYHqv8nl.js";import"./PopoverPopup-BHGNAE2t.js";import"./InternalBackdrop-D-cRM3dE.js";import"./composite-DBxA_VE8.js";import"./index-DChtCzTr.js";import"./getDisabledMountTransitionStyles-BJoEqB65.js";import"./ToolbarRootContext-CpSt7yAh.js";import"./tick-C7mROKoo.js";import"./svgIconContainer-CxQ350M_.js";import"./small-cross-BL7aJl_O.js";import"./search-et-5mZuo.js";import"./cross-CBN09daJ.js";import"./useValueChanged-BdYiKPuI.js";import"./getPseudoElementBounds-lBQa4hkk.js";import"./CompositeItem-FJMzn3o4.js";import"./makeExternalStore-Cfk45-cb.js";import"./BaseForm-BkSeexWw.js";import"./ActionButton-DMvFJ_VM.js";import"./Button-KdAdTzHS.js";import"./SkeletonBar-u4XVZQ3v.js";import"./Tooltip-CVkVqWlj.js";import"./info-sign-Dp5oudqg.js";import"./chevron-up-PHK3sVe4.js";import"./chevron-down-DcdLMAVH.js";import"./useEventCallback-Kc4Bg8wO.js";import"./iconLoader-aOagY-Cf.js";import"./Switch-BMFbsv71.js";import"./CompositeRoot-BvsoWMNP.js";import"./TimePicker-Ypiijoqu.js";import"./CollapsiblePanel-Bb165C_-.js";import"./error-BfW0iVfX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ADnSdXzg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
