import{j as t,g as n}from"./iframe-DaG_CcyR.js";import{A as r}from"./action-form-UxKwwphI.js";import"./preload-helper-fLmgAqZC.js";import"./DropdownField-D9Cmijub.js";import"./debounce-DfSAoJ4z.js";import"./useOsdkClient-CcDhxIX1.js";import"./index-C2NmqeV8.js";import"./Input-B0e0EOXI.js";import"./useBaseUiId-BfCzIxwR.js";import"./useControlled-CiDIFyuy.js";import"./index-BC4OQi8j.js";import"./index-BRmwEG4U.js";import"./PopoverPopup-DeS6RrmG.js";import"./InternalBackdrop-Xfh57IbA.js";import"./composite-DNA29nNr.js";import"./index-DTO5Sk8o.js";import"./getDisabledMountTransitionStyles-BMXryHBN.js";import"./ToolbarRootContext-D3JANhpq.js";import"./tick-XdOXkQOZ.js";import"./svgIconContainer-DJ0pmdAm.js";import"./small-cross-C40mmEcZ.js";import"./search-C70hm_cR.js";import"./cross-CBdyBq1j.js";import"./useValueChanged-CemEV-be.js";import"./getPseudoElementBounds-BPw6WX_a.js";import"./CompositeItem-BBL8fhGk.js";import"./makeExternalStore-BWD8JKLV.js";import"./BaseForm-BtEWW3IP.js";import"./ActionButton-ColeB5wb.js";import"./Button-BJNxKAu7.js";import"./SkeletonBar-Bde_r25-.js";import"./Tooltip-zVk-Ezfu.js";import"./info-sign-XCes1n4t.js";import"./chevron-up-BR6PTGu3.js";import"./chevron-down-D4cFhIOL.js";import"./useEventCallback-DbVVChUJ.js";import"./iconLoader-DLYKURSC.js";import"./Switch-DkeDekJ0.js";import"./CompositeRoot-k224o5OP.js";import"./TimePicker-BMzo-kB9.js";import"./CollapsiblePanel-BYNa9rT6.js";import"./error-Cof-i4TZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CplHDg7O.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
