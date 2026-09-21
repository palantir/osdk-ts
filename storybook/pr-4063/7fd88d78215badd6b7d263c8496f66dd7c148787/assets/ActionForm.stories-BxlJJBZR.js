import{j as t,g as n}from"./iframe-BdwSD-4g.js";import{A as r}from"./action-form-Der1iuOb.js";import"./preload-helper-Q7k08PSu.js";import"./DropdownField-BLDXBK7q.js";import"./debounce-Bij6cuiB.js";import"./useOsdkClient-BNfS8Hn2.js";import"./index-DOSkW-9K.js";import"./Input-DFvD33w1.js";import"./useBaseUiId-Dw0luXrm.js";import"./useControlled-D1Q7B9_S.js";import"./index-Af48Q6og.js";import"./index-FAuKkFnB.js";import"./PopoverPopup-CkTzI9ep.js";import"./InternalBackdrop-D1YI8GOv.js";import"./composite-5NyIARcH.js";import"./index-CxgrbPDy.js";import"./getDisabledMountTransitionStyles-B9XqalxW.js";import"./ToolbarRootContext-BvaeGVZU.js";import"./tick-BCAUztTc.js";import"./svgIconContainer-DA4wNVnR.js";import"./small-cross-vRrhE9Ne.js";import"./search-zOT-eX5y.js";import"./cross-ALmhnM-F.js";import"./useValueChanged-CIIin2AA.js";import"./getPseudoElementBounds-BdDow4jC.js";import"./CompositeItem-_wAlG9yG.js";import"./makeExternalStore-BaL0IM38.js";import"./BaseForm-BW5TapZp.js";import"./ActionButton-CSVrvW6D.js";import"./Button-DT6t-JAZ.js";import"./SkeletonBar-D6TZf1Z5.js";import"./Tooltip-BeEpEYbq.js";import"./info-sign-DzlrNTV1.js";import"./chevron-up-BfLynbIl.js";import"./chevron-down-Dn6L64Ru.js";import"./useEventCallback-DfqzSU5_.js";import"./iconLoader-DXpemK8l.js";import"./Switch-Bor4YmQs.js";import"./CompositeRoot-0JAd7nqK.js";import"./TimePicker-BNWJSrnG.js";import"./CollapsiblePanel-XzAfxH9Z.js";import"./error-BrVGJ7z5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-De7Bt3A9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
