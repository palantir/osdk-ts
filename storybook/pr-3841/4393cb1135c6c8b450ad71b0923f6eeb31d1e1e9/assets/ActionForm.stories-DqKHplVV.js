import{j as t,g as n}from"./iframe-BmwK0NB6.js";import{A as r}from"./action-form-nnVi-ypf.js";import"./preload-helper-CJI9HYts.js";import"./DropdownField-1ya05CQB.js";import"./debounce-CVCv63C4.js";import"./useOsdkClient-UKqs4_2L.js";import"./index-NnjawErR.js";import"./Input-Bfu2n9eX.js";import"./useBaseUiId-DICqGIOz.js";import"./useControlled-D_GkEGnz.js";import"./index-DuWg3JLn.js";import"./index-DiZc7AlS.js";import"./PopoverPopup-CMLgSpj-.js";import"./InternalBackdrop-BNdzkB7f.js";import"./composite-C06v5r-q.js";import"./index-DX06iv2-.js";import"./getDisabledMountTransitionStyles-D6uMoq56.js";import"./ToolbarRootContext-ReHQQSwk.js";import"./tick-BXHwy8u9.js";import"./svgIconContainer-DHRvXAx1.js";import"./small-cross-ZFjbIYNW.js";import"./search-Dm097x9N.js";import"./cross-hgFEJfRa.js";import"./useValueChanged-CYhlDneB.js";import"./getPseudoElementBounds-7hGlU8g7.js";import"./CompositeItem-BHcZzMjK.js";import"./makeExternalStore-RuIAz4L3.js";import"./BaseForm-BcvFHFK2.js";import"./ActionButton-DO9pXiqf.js";import"./Button-C7GE2_Px.js";import"./SkeletonBar-cj1km_Ew.js";import"./Tooltip-yGZeBWi0.js";import"./info-sign-D8HcFP6k.js";import"./chevron-up-Jn9qjjBj.js";import"./chevron-down-YY61_NRW.js";import"./useEventCallback-DekRZM9z.js";import"./iconLoader-B4r-iywW.js";import"./CompositeRoot-Dd57Jg6S.js";import"./Switch-D752tfdK.js";import"./TimePicker-HtRZ-ldm.js";import"./CollapsiblePanel-BlAI9gbe.js";import"./error-CHia6_Yv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BVS2eODs.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
