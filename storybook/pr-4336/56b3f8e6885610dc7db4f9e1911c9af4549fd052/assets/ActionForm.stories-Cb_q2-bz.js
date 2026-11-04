import{j as t,g as n}from"./iframe-D0kdPAo3.js";import{A as r}from"./action-form-BxF2fFOA.js";import"./preload-helper-X5HFotRj.js";import"./DropdownField-BeyRtiaN.js";import"./debounce-CAomu0Oz.js";import"./useOsdkClient-dHn_9ypV.js";import"./index-C2K0wsys.js";import"./Input-CZD7bnty.js";import"./useBaseUiId-C6KTtyrN.js";import"./useControlled-DZabxLnK.js";import"./index-BeFxKd2J.js";import"./index-BZY0MS25.js";import"./PopoverPopup-g8Zg0gS_.js";import"./InternalBackdrop-DsRGKbT5.js";import"./composite-DFD2cJI4.js";import"./index-BEujjIB4.js";import"./getDisabledMountTransitionStyles-Bk9Rznwb.js";import"./ToolbarRootContext-CsF2L-Zy.js";import"./tick-RNPG6mE0.js";import"./svgIconContainer-BmwAZIQM.js";import"./small-cross-CZlKCJ9V.js";import"./search-C3AmiWbF.js";import"./cross-Dp20Xkzu.js";import"./useValueChanged-BSU3S3ph.js";import"./getPseudoElementBounds-RJQJ-VSv.js";import"./CompositeItem-Sp5SCghr.js";import"./makeExternalStore-BHFwut4R.js";import"./BaseForm-BicoLlFQ.js";import"./ActionButton-B_wjtQIY.js";import"./Button-DI6m0SX0.js";import"./SkeletonBar-Bny8Ap5P.js";import"./Tooltip-udyINwMi.js";import"./info-sign-B-1AieKz.js";import"./chevron-up-B39l2e78.js";import"./chevron-down-PTlaQvf9.js";import"./useEventCallback-wCYEJdyR.js";import"./iconLoader-B17BInxJ.js";import"./Switch-C_d3eDag.js";import"./CompositeRoot-BAywc98U.js";import"./TimePicker-RAEhm0Vk.js";import"./CollapsiblePanel-DLdNf4gN.js";import"./error-LXdit3w4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C30AWaoV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
