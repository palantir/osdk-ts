import{j as t,g as n}from"./iframe-CyooYLyM.js";import{A as r}from"./action-form-BZtC_La8.js";import"./preload-helper-Bngm7-ol.js";import"./DropdownField-BNmEjlHT.js";import"./debounce-BAPzRuvt.js";import"./useOsdkClient-DaN5XCxO.js";import"./index-CIHNhV_V.js";import"./Input-COiGAk6z.js";import"./useBaseUiId-B6QldWDF.js";import"./useControlled-i1Ezl6Tl.js";import"./index-CeYxTKYZ.js";import"./index-CYfla4gt.js";import"./PopoverPopup-BV24RTcO.js";import"./InternalBackdrop-CdJ1CYip.js";import"./composite-Ct2KL6gZ.js";import"./index-DJrmSdlL.js";import"./getDisabledMountTransitionStyles-CtwlLgnw.js";import"./ToolbarRootContext-D7fAF7oZ.js";import"./tick-BvxF-FNa.js";import"./svgIconContainer-BUB4CTcl.js";import"./small-cross-BC6HSGjl.js";import"./search-B3kqtI7c.js";import"./cross-ECBcZMsc.js";import"./useValueChanged-DMjW1Np8.js";import"./getPseudoElementBounds-BmACaDew.js";import"./CompositeItem-Bl-YA0xX.js";import"./makeExternalStore-DQfo9etd.js";import"./BaseForm-BF9ZWwOU.js";import"./ActionButton-DMpxTXkE.js";import"./Button-BmMB6JHM.js";import"./SkeletonBar-DOUvjjDK.js";import"./Tooltip-C4Nyw1my.js";import"./info-sign-CnLdexSj.js";import"./chevron-up-B1BvxY5_.js";import"./chevron-down-B96rYcxD.js";import"./useEventCallback-BoCra72q.js";import"./iconLoader-Cze6Le03.js";import"./CompositeRoot-D1wurxJU.js";import"./Switch-De83yiiw.js";import"./TimePicker-PJkJcHbS.js";import"./CollapsiblePanel-D8wSVDSv.js";import"./error-CQMuKd3b.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D__EiDJX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
