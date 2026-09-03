import{j as t,g as n}from"./iframe-CVgWx_mk.js";import{A as r}from"./action-form-Ct03Rldp.js";import"./preload-helper-CFfBa7BD.js";import"./DropdownField-BXwDMn-1.js";import"./debounce-BtFrK_-r.js";import"./useOsdkClient-9IMUcDL7.js";import"./index-KhqTHjvK.js";import"./Input-B_ebmuiE.js";import"./useBaseUiId-B0ovho4b.js";import"./useControlled-CmMjx2zB.js";import"./index-Dj_0AH5M.js";import"./index-kHlCzxdB.js";import"./PopoverPopup-X41W4tQB.js";import"./InternalBackdrop-w-gmvkMd.js";import"./composite-mrQGTihx.js";import"./index-xvBWe_nZ.js";import"./getDisabledMountTransitionStyles-BU3lkCAL.js";import"./ToolbarRootContext-CaqtX5pJ.js";import"./tick-BnV8UH-j.js";import"./svgIconContainer-MI5luthc.js";import"./small-cross-Ct--V4I5.js";import"./search-BdiQZg80.js";import"./cross-Ch2oGVZP.js";import"./useValueChanged-BbKX3ggH.js";import"./getPseudoElementBounds-BHTi51r7.js";import"./CompositeItem-CCjIa2t2.js";import"./makeExternalStore-Dyx7TWX2.js";import"./BaseForm-D92SWyPt.js";import"./ActionButton-CMmqUJoP.js";import"./Button-BdWA5AOv.js";import"./SkeletonBar-DSJVYfMY.js";import"./Tooltip-DP4ZeHkc.js";import"./info-sign-CzwP9Rrw.js";import"./chevron-up-DVoFCslT.js";import"./chevron-down-DTQ9C7Jw.js";import"./useEventCallback-KGEKy1Kp.js";import"./iconLoader-BDNxbi6Y.js";import"./CompositeRoot-CWLiFArD.js";import"./Switch-Bp7BnXRw.js";import"./TimePicker-CfYRPv7s.js";import"./CollapsiblePanel-CjrlksH3.js";import"./error-aoO-9vvY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DoeckjWh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
