import{j as t,g as n}from"./iframe-CEat60Hp.js";import{A as r}from"./action-form-BmCq8O3E.js";import"./preload-helper-LGTzr2gM.js";import"./DropdownField-dGzl7MKn.js";import"./debounce-9GnBlJ2l.js";import"./useOsdkClient-BR1Urz0Q.js";import"./index-DyITJqpd.js";import"./Input-By_gu53Z.js";import"./useBaseUiId-ClM_1fTm.js";import"./useControlled-CZHKBSyi.js";import"./index-BKoym7aL.js";import"./index-C_WLSqh0.js";import"./PopoverPopup-CE6K_Cw0.js";import"./InternalBackdrop-B4asx7Ai.js";import"./composite-Ce22aUj6.js";import"./index-DndZj0Gs.js";import"./getDisabledMountTransitionStyles-BGMhA--N.js";import"./ToolbarRootContext-MdE91PHa.js";import"./tick-jmlbvTuh.js";import"./svgIconContainer-CN1a-FY8.js";import"./small-cross-CUzjSNDu.js";import"./search-COfQ1bXD.js";import"./cross-D-uWfUMG.js";import"./useValueChanged-CmG-WmUh.js";import"./getPseudoElementBounds-Bm7AaELE.js";import"./CompositeItem-ChZ-XSJC.js";import"./makeExternalStore-DYDIpdrC.js";import"./BaseForm-BDwA8_l7.js";import"./ActionButton-B24-6bCU.js";import"./Button-CCDq6dgu.js";import"./SkeletonBar-BrLmTLmg.js";import"./Tooltip-DYd7gvd4.js";import"./info-sign-C2SJ69t-.js";import"./chevron-up-DhX97DRD.js";import"./chevron-down-CbnQEPHn.js";import"./useEventCallback-BnyMPdTZ.js";import"./iconLoader-C2gNpa5h.js";import"./Switch-CL41YKBs.js";import"./CompositeRoot-DdN2loyx.js";import"./TimePicker-CyjXF7wr.js";import"./CollapsiblePanel-BnqmfXh-.js";import"./error-Us6LDG_u.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSdFZ0uc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
