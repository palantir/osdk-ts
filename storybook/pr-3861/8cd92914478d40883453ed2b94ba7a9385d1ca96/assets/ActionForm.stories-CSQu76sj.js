import{j as t,g as n}from"./iframe-DwYLkjIm.js";import{A as r}from"./action-form-B7TPF88J.js";import"./preload-helper-ATh-df95.js";import"./DropdownField-SIQhHfOo.js";import"./debounce-DNHX5f7v.js";import"./useOsdkClient-CvE3Z_Kn.js";import"./index-BjvNbQ5u.js";import"./Input-COaOuFmv.js";import"./useBaseUiId-BLNd3-C8.js";import"./useControlled-B5ZJB9TM.js";import"./index-DaP8hSau.js";import"./index-Cp5k1JkI.js";import"./PopoverPopup-C4uWpPvG.js";import"./InternalBackdrop-CBy2FAi9.js";import"./composite-DkREeV9G.js";import"./index-p-dFHzM9.js";import"./getDisabledMountTransitionStyles-1qMTk6J5.js";import"./ToolbarRootContext-y1EgqHY_.js";import"./tick-CLGgnUMt.js";import"./svgIconContainer-BO0D2b3B.js";import"./small-cross-BiHBSsw2.js";import"./search-DbuZ2eC4.js";import"./cross-8A5W1-mq.js";import"./useValueChanged-ylpPqAwL.js";import"./getPseudoElementBounds-CDBWfCMY.js";import"./CompositeItem-CqCnARzh.js";import"./makeExternalStore-BtQFwu78.js";import"./BaseForm-vOg7DlO9.js";import"./ActionButton-Caxnbj33.js";import"./Button-De4eCp5V.js";import"./SkeletonBar-aHlWFS-g.js";import"./Tooltip-BhjeiN-x.js";import"./info-sign-FmKQGZpp.js";import"./chevron-up-BMGLxzIX.js";import"./chevron-down-gw5VoLqI.js";import"./useEventCallback-4trSpKTf.js";import"./iconLoader-CJHX9434.js";import"./CompositeRoot-D2N9YbOp.js";import"./Switch-DbXOwh5B.js";import"./TimePicker-CymZUOjW.js";import"./CollapsiblePanel-D-S6GrQY.js";import"./error-CtWk7aa4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BwdGT6RG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
