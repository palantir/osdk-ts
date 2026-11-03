import{j as t,g as n}from"./iframe-D0BcpvbQ.js";import{A as r}from"./action-form-BYSzwKCS.js";import"./preload-helper-25-JBzXD.js";import"./DropdownField-CUMisXrx.js";import"./debounce-C4dGlWDp.js";import"./useOsdkClient-D3fIC1F8.js";import"./index-J-5LjNrj.js";import"./Input-CmqnqFxK.js";import"./useBaseUiId-DKDRPBwJ.js";import"./useControlled-2QWb7bZB.js";import"./index-DnyQlPpk.js";import"./index-Boycosi1.js";import"./PopoverPopup-BZJMElBM.js";import"./InternalBackdrop-DYHVppNb.js";import"./composite-oTuSysNj.js";import"./index-DZk3VDH-.js";import"./getDisabledMountTransitionStyles-BmtzZkd7.js";import"./ToolbarRootContext-4_oBwQs6.js";import"./tick-DXX_EiYG.js";import"./svgIconContainer-C3Yfvyd2.js";import"./small-cross-qu8LZoy6.js";import"./search-CSQzmj9y.js";import"./cross-CjHwEj-1.js";import"./useValueChanged-Da2WPzqs.js";import"./getPseudoElementBounds-CLq8MpBn.js";import"./CompositeItem-CKKkXKKr.js";import"./makeExternalStore-NS27kiyv.js";import"./BaseForm-CqMJ5crp.js";import"./ActionButton-Do_ZLaI6.js";import"./Button-X3pcCJxf.js";import"./SkeletonBar-By0yALek.js";import"./Tooltip-h5iXzAIl.js";import"./info-sign-C03fQqiJ.js";import"./chevron-up-DrnWvkrq.js";import"./chevron-down-WrvVs3Y7.js";import"./useEventCallback-CFJPyiwb.js";import"./iconLoader-BVSw2cs9.js";import"./Switch-2NKhjmuI.js";import"./CompositeRoot-DJnNIRKJ.js";import"./TimePicker-hRZWm47s.js";import"./CollapsiblePanel-DUiPkmDM.js";import"./error-BGGXhU_S.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DmAggtUS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
