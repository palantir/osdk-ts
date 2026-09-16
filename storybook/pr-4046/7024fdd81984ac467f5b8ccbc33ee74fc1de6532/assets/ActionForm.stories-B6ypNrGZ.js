import{j as t,g as n}from"./iframe-DaCuFEr4.js";import{A as r}from"./action-form-B6FBhnqV.js";import"./preload-helper-CH__3C9o.js";import"./DropdownField-bcPFxJTG.js";import"./debounce-Bu5YTwKq.js";import"./useOsdkClient-D0YYFk-l.js";import"./index-DBgsNfjF.js";import"./Input-9OWE4hHY.js";import"./useBaseUiId-ONC8Xt4g.js";import"./useControlled-qOz3lv_a.js";import"./index-dtUyYAkL.js";import"./index-B2p2pg25.js";import"./PopoverPopup-DZltGoWp.js";import"./InternalBackdrop-IX1U8kwf.js";import"./composite-dd7jjZk4.js";import"./index-CB1zNyDM.js";import"./getDisabledMountTransitionStyles-CB7sZ96x.js";import"./ToolbarRootContext-BhpmgE0w.js";import"./tick-BTtRE0Kk.js";import"./svgIconContainer-xI7GONU5.js";import"./small-cross-DG1zTSDP.js";import"./search-D050E2Ix.js";import"./cross-Dvh7Mb4q.js";import"./useValueChanged-ClwG0cRJ.js";import"./getPseudoElementBounds-CqcAX_hh.js";import"./CompositeItem-CUKWIiHk.js";import"./makeExternalStore-DGayjJTu.js";import"./BaseForm-DYjXr5GZ.js";import"./ActionButton-CLh4iGOc.js";import"./Button-BSyutd6a.js";import"./SkeletonBar-CQ0QNmxu.js";import"./Tooltip-CT9sU2PZ.js";import"./info-sign-0kYL4lGZ.js";import"./chevron-up-Wbqk9-ry.js";import"./chevron-down-kPE5lOM8.js";import"./useEventCallback-nN2qNTIn.js";import"./iconLoader-DzYOOWKZ.js";import"./Switch-NViS413M.js";import"./CompositeRoot-a5XcNEy2.js";import"./TimePicker-BUzYFJis.js";import"./CollapsiblePanel-qk7TdI5O.js";import"./error-C-IGdotI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B-pgZqiw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
