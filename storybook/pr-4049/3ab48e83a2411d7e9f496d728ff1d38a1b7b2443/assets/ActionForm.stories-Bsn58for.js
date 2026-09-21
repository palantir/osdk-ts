import{j as t,g as n}from"./iframe-BCFKBwNO.js";import{A as r}from"./action-form-DNQY_bo4.js";import"./preload-helper-Brv957vn.js";import"./DropdownField-BQn3rTLQ.js";import"./debounce-PdhZTz_Q.js";import"./useOsdkClient-DzUFbc0D.js";import"./index-D-Y-JsBx.js";import"./Input-DblIYKZB.js";import"./useBaseUiId-DhWedzoZ.js";import"./useControlled-BM_Yur5U.js";import"./index-RhQjfChg.js";import"./index-CI-GDb84.js";import"./PopoverPopup-Dg2dGkJN.js";import"./InternalBackdrop-w16b7Fa9.js";import"./composite-r28fX4bz.js";import"./index-CIbK25r6.js";import"./getDisabledMountTransitionStyles-ZdKEJKh5.js";import"./ToolbarRootContext-BgwM3bO2.js";import"./tick-BCzVfJh_.js";import"./svgIconContainer-DJ-tdzCi.js";import"./small-cross-DZvPn1Ph.js";import"./search-cuvXpLTw.js";import"./cross-COb2-6gb.js";import"./useValueChanged-C162beI-.js";import"./getPseudoElementBounds-DlcoOkhp.js";import"./CompositeItem-DrKg3RCP.js";import"./makeExternalStore-Bhr-T-us.js";import"./BaseForm-BUgDfikq.js";import"./ActionButton-CCcHuk54.js";import"./Button-DgFFjm2U.js";import"./SkeletonBar-Dp_x2eQF.js";import"./Tooltip-Boqdt2X8.js";import"./info-sign-BVqST96t.js";import"./chevron-up-Dt8EL83b.js";import"./chevron-down-815YMHZK.js";import"./useEventCallback---Y7uPgD.js";import"./iconLoader-ZslO8FMs.js";import"./Switch-BBCHhTzk.js";import"./CompositeRoot-MsMElb_O.js";import"./TimePicker-CUItoMuN.js";import"./CollapsiblePanel-CELc9lI_.js";import"./error-DLaayWkN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DwU6v8eQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
