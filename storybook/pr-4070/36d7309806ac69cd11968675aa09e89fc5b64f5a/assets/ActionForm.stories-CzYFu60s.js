import{j as t,g as n}from"./iframe-CQcaQGvw.js";import{A as r}from"./action-form-COtP0QWE.js";import"./preload-helper-Bpr-Zbmh.js";import"./DropdownField-Cvh6eOlG.js";import"./debounce-DSy6HMAr.js";import"./useOsdkClient-BuGTS-D_.js";import"./index-DEOxmfRe.js";import"./Input-9-R4IQfH.js";import"./useBaseUiId-VAYeRdVB.js";import"./useControlled-67ajb_bK.js";import"./index-B-ZM_tXu.js";import"./index-B9xnj9RD.js";import"./PopoverPopup-G1jUpOgq.js";import"./InternalBackdrop-Dk9Ect_q.js";import"./composite-CIfh6Bad.js";import"./index-Cybk3Ne2.js";import"./getDisabledMountTransitionStyles-DWvIpLbT.js";import"./ToolbarRootContext-BXhcIhdf.js";import"./tick-CvubQLo2.js";import"./svgIconContainer-BlwZok7B.js";import"./small-cross-CdN_p7Hi.js";import"./search-D2m2i9E6.js";import"./cross-KHNb9CvK.js";import"./useValueChanged-DbtSKH0N.js";import"./getPseudoElementBounds-CIy0YkKg.js";import"./CompositeItem-C3IvhL6b.js";import"./makeExternalStore-Ms4Ce4yr.js";import"./BaseForm-CpPf27pW.js";import"./ActionButton-DflWWN5i.js";import"./Button-8-6PGj6n.js";import"./SkeletonBar-DwEmvlQd.js";import"./Tooltip-D_Sh4Nii.js";import"./info-sign-BB8c1hB7.js";import"./chevron-up-GoBjgEvI.js";import"./chevron-down-B_FXfQYl.js";import"./useEventCallback-CArEIpoN.js";import"./iconLoader-C7os-0Ny.js";import"./Switch-DvUm5zYv.js";import"./CompositeRoot-CwxhnD2W.js";import"./TimePicker-1f2J2hHz.js";import"./CollapsiblePanel-DYXFBbIc.js";import"./error-CUpk6v7r.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-gr6PUNKA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
