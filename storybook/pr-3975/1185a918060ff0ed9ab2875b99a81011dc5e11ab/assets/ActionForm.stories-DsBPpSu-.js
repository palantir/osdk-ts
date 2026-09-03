import{j as t,g as n}from"./iframe-CraWtfc_.js";import{A as r}from"./action-form-C2RdtQVy.js";import"./preload-helper-B2ygN63P.js";import"./DropdownField-DO8Lcsso.js";import"./debounce-DhP8Rurz.js";import"./useOsdkClient-BiolEA8f.js";import"./index-uggTCp7M.js";import"./Input-BXsVCVWI.js";import"./useBaseUiId-B3gf6Rgr.js";import"./useControlled-C2EFnSRK.js";import"./index-C7ILWK60.js";import"./index-CE8B_DUN.js";import"./PopoverPopup-DG4Ey1uv.js";import"./InternalBackdrop-Dg25XYUo.js";import"./composite-DStzulLq.js";import"./index-DNCvPjCM.js";import"./getDisabledMountTransitionStyles-CLSya5zn.js";import"./ToolbarRootContext-BqVmfek1.js";import"./tick-Daa0kwHZ.js";import"./svgIconContainer-C4_0pLg-.js";import"./small-cross-DYP0x5Vu.js";import"./search-BX2x7npa.js";import"./cross-DBeI7hzA.js";import"./useValueChanged-cqUllIYD.js";import"./getPseudoElementBounds-aRlZ5-U9.js";import"./CompositeItem-D5jj9W4Y.js";import"./makeExternalStore-CprYBPlM.js";import"./BaseForm-wIFzrHj4.js";import"./ActionButton-DURMVT6a.js";import"./Button-CzW3iwgW.js";import"./SkeletonBar-C0h9i0be.js";import"./Tooltip-DzUvCExT.js";import"./info-sign-jCGQZMiS.js";import"./chevron-up-CQfXW1SS.js";import"./chevron-down-B7zCZjZp.js";import"./useEventCallback-DgbAS9H5.js";import"./iconLoader-Dl78SFj_.js";import"./CompositeRoot-BBwewoC_.js";import"./Switch-DdIUmyKd.js";import"./TimePicker-Dh5rOKcD.js";import"./CollapsiblePanel-DVQXLfG-.js";import"./error-CwgXbJjF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D5fF38B3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
