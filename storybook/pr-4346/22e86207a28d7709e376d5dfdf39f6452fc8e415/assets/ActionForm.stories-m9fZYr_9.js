import{j as t,g as n}from"./iframe-CvJ7R438.js";import{A as r}from"./action-form-BZl_BWTc.js";import"./preload-helper-DIeUWadq.js";import"./DropdownField-DpIokx-i.js";import"./debounce-D0MzLxIy.js";import"./useOsdkClient-QthKgn3A.js";import"./index-Yp0JQF0Q.js";import"./Input-DgEbo1rm.js";import"./useBaseUiId-DvuukT3m.js";import"./useControlled-CupkKwbr.js";import"./index-BYKE8oqY.js";import"./index-C9e5xM7h.js";import"./isObject-B4JmPlvj.js";import"./InternalBackdrop-DIMQ-6Vm.js";import"./composite-DfVEv5DW.js";import"./index-DjdEDxKf.js";import"./getDisabledMountTransitionStyles-CsC3z-SK.js";import"./ToolbarRootContext-pG56Avmq.js";import"./tick-BQ8d0QDt.js";import"./svgIconContainer-Do6jakIy.js";import"./small-cross-ZhIYpIQC.js";import"./search-E1Tz1S2U.js";import"./cross-Bghy2D6j.js";import"./useValueChanged-DyrikMQP.js";import"./getPseudoElementBounds-Bt_46i7g.js";import"./CompositeItem-DpqRoFwU.js";import"./makeExternalStore-Q33cok2O.js";import"./BaseForm-AplIw5p7.js";import"./ActionButton-gsNyAvhi.js";import"./Button-E3u3fwJi.js";import"./SkeletonBar-DTVxz4FG.js";import"./Tooltip-De3XT7Ee.js";import"./info-sign-CZrlNk4A.js";import"./chevron-up-DbnK0pFa.js";import"./chevron-down-B1-Mj5AF.js";import"./useEventCallback-Ceqj6vPq.js";import"./iconLoader-CdPknIhu.js";import"./Switch-jZXL0Ibf.js";import"./CompositeRoot-BBH4x_Nn.js";import"./TimePicker-C2HwXX7U.js";import"./CollapsiblePanel-Cd75DTG9.js";import"./error-E1ZphxDs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ByVOuDU9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
