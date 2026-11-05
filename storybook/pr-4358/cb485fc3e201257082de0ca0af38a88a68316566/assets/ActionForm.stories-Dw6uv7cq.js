import{j as t,g as n}from"./iframe-Dm9tPq9-.js";import{A as r}from"./action-form-Cnyg1Ns3.js";import"./preload-helper-DbanGSn8.js";import"./DropdownField-C2nHBICk.js";import"./debounce-v3DZ4rGU.js";import"./useOsdkClient-DfBdKLO7.js";import"./index-SudSBJ9d.js";import"./Input-1s2rxWuw.js";import"./useBaseUiId-Bh3ZKuZJ.js";import"./useControlled-zgk6WMo4.js";import"./index-pwNhYih4.js";import"./index-BEF1L48c.js";import"./isObject-iDHKARFT.js";import"./InternalBackdrop-CQfhuxOD.js";import"./composite-DwLeZJsP.js";import"./index-jJsu7-Bg.js";import"./getDisabledMountTransitionStyles-LF-SO7gC.js";import"./ToolbarRootContext-DattZO7d.js";import"./tick-BuAP4hF8.js";import"./svgIconContainer-DLeOey4i.js";import"./small-cross-D1_y47j8.js";import"./search-DpPE568F.js";import"./cross-DovxETch.js";import"./useValueChanged-T9NupB12.js";import"./getPseudoElementBounds-bh7QF3ZR.js";import"./CompositeItem-Brc_cUGL.js";import"./makeExternalStore-CEHTDEAH.js";import"./BaseForm-BlxRdbTc.js";import"./ActionButton-BoWHV299.js";import"./Button-D711FISQ.js";import"./SkeletonBar-Co2KJNpr.js";import"./Tooltip-Dj98utpN.js";import"./info-sign-CaWVuJcj.js";import"./chevron-up-BbTCgD4m.js";import"./chevron-down-COzwHJk7.js";import"./useEventCallback-D0i4hHrz.js";import"./iconLoader-BGRjnIfx.js";import"./Switch-DI8_t3DR.js";import"./CompositeRoot-Cu-43LAn.js";import"./TimePicker-DVbnSlfK.js";import"./CollapsiblePanel-oCJFTmUj.js";import"./error-CX1V2PGn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-4sk2cJVp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
