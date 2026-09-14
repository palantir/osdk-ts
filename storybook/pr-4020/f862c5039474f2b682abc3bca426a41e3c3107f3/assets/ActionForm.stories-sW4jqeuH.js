import{j as t,g as n}from"./iframe-CEbiJF3f.js";import{A as r}from"./action-form-rF7lnHxG.js";import"./preload-helper--fKrMWtx.js";import"./DropdownField-DbwRCAUl.js";import"./debounce-DedZNKWR.js";import"./useOsdkClient-YUQ2ZKSl.js";import"./index-BRgb61-Z.js";import"./Input-DqoIy3Li.js";import"./useBaseUiId-BeYV2UYU.js";import"./useControlled-B3SpxFFa.js";import"./index-DjCMbuHr.js";import"./index-CW5Q51QX.js";import"./PopoverPopup-BYAEm86P.js";import"./InternalBackdrop-CWMLQJAd.js";import"./composite-u77iw9-s.js";import"./index-CRAw0ImC.js";import"./getDisabledMountTransitionStyles-C9wPoLZe.js";import"./ToolbarRootContext-FCi4TTjo.js";import"./tick-1Ij9OHtP.js";import"./svgIconContainer-CApLlW_3.js";import"./small-cross-D4xWb1jq.js";import"./search-0rzEE67s.js";import"./cross-Be87dRvq.js";import"./useValueChanged-CMcadSWU.js";import"./getPseudoElementBounds-BE7nCALs.js";import"./CompositeItem-D6m2hJvC.js";import"./makeExternalStore-DY8wBZ1L.js";import"./BaseForm-beLtIJjG.js";import"./ActionButton-CQIzGqaS.js";import"./Button-BrIf-_b8.js";import"./SkeletonBar-COyoJDUZ.js";import"./Tooltip-pyeRzdyt.js";import"./info-sign-CHvxx_ja.js";import"./chevron-up-BZYCEKg5.js";import"./chevron-down-SWbuBgt1.js";import"./useEventCallback-B1x1-FvS.js";import"./iconLoader-CdK8vaUr.js";import"./CompositeRoot-DBKKQc9C.js";import"./Switch-Cbjpe9hz.js";import"./TimePicker-BZqzhRoS.js";import"./CollapsiblePanel-DhxijBYj.js";import"./error-q5QL61EF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C-j5mTrT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
