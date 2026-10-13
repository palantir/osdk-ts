import{j as t,g as n}from"./iframe-DQyXgQjF.js";import{A as r}from"./action-form-BE_XpnoF.js";import"./preload-helper-BwATEbbW.js";import"./DropdownField-B1cH9VTb.js";import"./debounce-kj3B_jEO.js";import"./useOsdkClient-BCI3PIPJ.js";import"./index-zxLoORa7.js";import"./Input-DiCaaolk.js";import"./useBaseUiId-3phzK7j-.js";import"./useControlled-D7uKPK_J.js";import"./index-YSBI5FA8.js";import"./index-L_6XzX0S.js";import"./PopoverPopup-Lw5BvCW6.js";import"./InternalBackdrop-verxdvs1.js";import"./composite-CU43rjMu.js";import"./index-CwpcqqAQ.js";import"./getDisabledMountTransitionStyles-D0wMZ4Z4.js";import"./ToolbarRootContext-BfCsQAap.js";import"./tick-DeKMMXtG.js";import"./svgIconContainer-CWf268Wa.js";import"./small-cross-DsIT7tGr.js";import"./search-BmUdzc_y.js";import"./cross-DYm99n8j.js";import"./useValueChanged-DVlVg2nV.js";import"./getPseudoElementBounds-CJlWZBwf.js";import"./CompositeItem-RFl7h3zH.js";import"./makeExternalStore-CjiqYirX.js";import"./BaseForm-BvemDeQ0.js";import"./ActionButton-zXa_t6ga.js";import"./Button-7Yv-s8d8.js";import"./SkeletonBar-BBzp9902.js";import"./Tooltip-DMcknpxT.js";import"./info-sign-oyl-X97b.js";import"./chevron-up-CMwa2FSb.js";import"./chevron-down-B7bppAwZ.js";import"./useEventCallback-DNyqnppz.js";import"./iconLoader-BuUPbYWs.js";import"./Switch-Bcn-1AHm.js";import"./CompositeRoot-D49dfhJt.js";import"./TimePicker-BpYnf5Qq.js";import"./CollapsiblePanel-j1dwugrc.js";import"./error-F90l69c5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-o51FJnXF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
