import{j as t,g as n}from"./iframe-D1DnRXYH.js";import{A as r}from"./action-form-BYmMw1jq.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BddjJbE_.js";import"./debounce-CV-5WpHu.js";import"./useOsdkClient-BcNSxg1j.js";import"./index-BOVyYsBB.js";import"./Input-BXJLgeNm.js";import"./useBaseUiId-BdlOppAL.js";import"./useControlled-BDwxO80n.js";import"./index-fjVXZ-V0.js";import"./index-eqepVRHL.js";import"./PopoverPopup-CCyG4Nmv.js";import"./InternalBackdrop-CwDFLT3m.js";import"./composite-DS57evVk.js";import"./index-DxsfHjKY.js";import"./getDisabledMountTransitionStyles-DPsiGUxU.js";import"./ToolbarRootContext-B2fwojw5.js";import"./tick-thvbYd_R.js";import"./svgIconContainer-CThNxl0n.js";import"./small-cross-B-R6m80e.js";import"./search-BbGlGWkG.js";import"./cross-CSUtUBCJ.js";import"./useValueChanged-BH0A2zFp.js";import"./getPseudoElementBounds-DM5-UIyf.js";import"./CompositeItem-COpco4va.js";import"./makeExternalStore-RyYPhhMJ.js";import"./BaseForm-Ds3-k1NQ.js";import"./ActionButton-Bf99j7AG.js";import"./Button-7tq21DzM.js";import"./SkeletonBar-DphPqPis.js";import"./Tooltip-DQWisYIT.js";import"./info-sign-CwL6Z_1i.js";import"./chevron-up-CCzPTs37.js";import"./chevron-down-CE6TeLM9.js";import"./useEventCallback-Ca0KASNd.js";import"./iconLoader-Bv9PQDl3.js";import"./Switch-0vckpqwV.js";import"./CompositeRoot-DDHEyw_h.js";import"./TimePicker-BVZoDCE9.js";import"./CollapsiblePanel-B-RyYn8y.js";import"./error-PWaSqDvq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BIY3fItA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
