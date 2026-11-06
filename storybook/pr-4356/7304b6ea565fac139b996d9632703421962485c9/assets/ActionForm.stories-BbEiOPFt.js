import{j as t,g as n}from"./iframe-Dxf4Pfii.js";import{A as r}from"./action-form-D-wss3FK.js";import"./preload-helper-Ci8NMOYF.js";import"./DropdownField-4kbww5nN.js";import"./debounce-CqpSqGTT.js";import"./useOsdkClient-5XyyZIRW.js";import"./index-BPBHjHBt.js";import"./Input-Dc5nJgGF.js";import"./useBaseUiId-BBachgDn.js";import"./useControlled-40F8gIyz.js";import"./index-Dsk0oEX3.js";import"./index-DlHivqB_.js";import"./PopoverPopup-DlIAjFIG.js";import"./InternalBackdrop-CFrJwRy4.js";import"./composite-BAA7WPxj.js";import"./index-CA0xM10N.js";import"./getDisabledMountTransitionStyles-BKzkpdmr.js";import"./ToolbarRootContext-CAbW4J_e.js";import"./tick--0CHJ2Jw.js";import"./svgIconContainer-BdxGOMXV.js";import"./small-cross-CUKjKhkC.js";import"./search-BYBW1CEy.js";import"./cross-COrhxFBC.js";import"./useValueChanged-CIVU-p1z.js";import"./getPseudoElementBounds-BYX5JyBU.js";import"./CompositeItem-6maKJylY.js";import"./makeExternalStore-DOGp9SoX.js";import"./BaseForm-BlgwlsxU.js";import"./ActionButton-ABdmTgM9.js";import"./Button-DiZtkqKs.js";import"./SkeletonBar-DyvtAZ1q.js";import"./Tooltip-DsvfSe4i.js";import"./info-sign-DksOwCES.js";import"./chevron-up-D7iqH3yi.js";import"./chevron-down-DG4gq9Kw.js";import"./useEventCallback-DZCNq0Gg.js";import"./iconLoader-CDfLE32w.js";import"./Switch-BT-zGink.js";import"./CompositeRoot-C4myNUkg.js";import"./TimePicker-DCTEysZe.js";import"./CollapsiblePanel-B4bl4mBR.js";import"./error-Cp32RNcr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DGJIUSZ9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
