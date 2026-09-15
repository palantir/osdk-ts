import{j as t,g as n}from"./iframe-DjTsTlya.js";import{A as r}from"./action-form-DuoYMqx_.js";import"./preload-helper-DOwvcOZH.js";import"./DropdownField-BBpsDicP.js";import"./debounce-DVG0b2wL.js";import"./useOsdkClient-BaZTHlJk.js";import"./index-CRTtk6ac.js";import"./Input-D8ax6gQv.js";import"./useBaseUiId-BzNc-3Ql.js";import"./useControlled-BVHEmv7i.js";import"./index-y5c47ww6.js";import"./index-DqxuM6At.js";import"./PopoverPopup-CH71VGBG.js";import"./InternalBackdrop-pUIcFmU-.js";import"./composite-0nzRqKiC.js";import"./index-BHnNwPKM.js";import"./getDisabledMountTransitionStyles-BA0waCP-.js";import"./ToolbarRootContext-DfW4g7RO.js";import"./tick-CbhTJk3v.js";import"./svgIconContainer-xPgA_yJ1.js";import"./small-cross-CKizW9rD.js";import"./search-Bt_OBQnD.js";import"./cross-Cvq5D40f.js";import"./useValueChanged-B-nMYLan.js";import"./getPseudoElementBounds-DKRYw-Sa.js";import"./CompositeItem-BuvWaDdm.js";import"./makeExternalStore-Dm9B4aPC.js";import"./BaseForm-Bkbd7Uq_.js";import"./ActionButton-BZbmOJWh.js";import"./Button-DyYtieLu.js";import"./SkeletonBar-CR9uI5kM.js";import"./Tooltip-H4kLk5D5.js";import"./info-sign-BHbTxTPK.js";import"./chevron-up-BDD-Ihiy.js";import"./chevron-down-Crh_WC6g.js";import"./useEventCallback-B8IjVnQ6.js";import"./iconLoader-C83UhlOK.js";import"./CompositeRoot-BGq7MJ-d.js";import"./Switch-CUOUpum-.js";import"./TimePicker-BxskZpV7.js";import"./CollapsiblePanel-BpE-bZTw.js";import"./error-DgpTog1A.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BW3QL-zG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
