import{j as t,g as n}from"./iframe-wexfgXTt.js";import{A as r}from"./action-form-DyZk7Pqm.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-Cv81jICY.js";import"./debounce-ZweGI_tC.js";import"./useOsdkClient-CEoThPb2.js";import"./index-5jQIelx0.js";import"./Input-CWdLE-mu.js";import"./useBaseUiId-tTVgJH6a.js";import"./useControlled-Brxeqh9t.js";import"./index-BurzpHQL.js";import"./index-TxpmNhC2.js";import"./PopoverPopup-B0NfuOs8.js";import"./InternalBackdrop-CDWG4aG1.js";import"./composite-CdBx6VEN.js";import"./index-DOxlq5kL.js";import"./getDisabledMountTransitionStyles-oJIOUneY.js";import"./ToolbarRootContext-Co9O2tJK.js";import"./tick-D1NWQC9V.js";import"./svgIconContainer-BE9D8hDG.js";import"./small-cross-DboWXgDg.js";import"./search-XEMgs_jY.js";import"./cross-FTqBbSE_.js";import"./useValueChanged-Fh4Y4yhu.js";import"./getPseudoElementBounds-CwltS7Dj.js";import"./CompositeItem-vT5UWhUx.js";import"./makeExternalStore-CYRdbRiy.js";import"./BaseForm-DOufjcoD.js";import"./ActionButton-VgKWBxX4.js";import"./Button-ChxS4llL.js";import"./SkeletonBar-DJLe3kJ-.js";import"./Tooltip-Dm1DzSzF.js";import"./info-sign-C6lUnw2k.js";import"./chevron-up-DOhJ2Bjs.js";import"./chevron-down-D1BLGLwp.js";import"./useEventCallback-CcaR15TA.js";import"./iconLoader-B5-bCgl8.js";import"./Switch-xVBrKbuq.js";import"./CompositeRoot-goXp_MNG.js";import"./TimePicker-BvSGz2N9.js";import"./CollapsiblePanel-OJ6hTRI8.js";import"./error-B2QY0TvC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C9edCeaC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
