import{j as t,g as n}from"./iframe-oqiETzjs.js";import{A as r}from"./action-form-_f7S2B3V.js";import"./preload-helper-DY6GVQaH.js";import"./DropdownField-WW4hkpJ1.js";import"./debounce--r48Cn5x.js";import"./useOsdkClient-B_WbWNUS.js";import"./index-ZtK2AEsr.js";import"./Input-DVeUb6S9.js";import"./useBaseUiId-DB5E9Fa7.js";import"./useControlled-CGzg1vVh.js";import"./index-D6-tP7ey.js";import"./index-BcAnoDMR.js";import"./PopoverPopup-C_RplgjD.js";import"./InternalBackdrop-BD9FMsgH.js";import"./composite-DUWgXaax.js";import"./index-CDmWDyVL.js";import"./getDisabledMountTransitionStyles-Df2F2xk8.js";import"./ToolbarRootContext-B7aYE2db.js";import"./tick-Bf3wXGgd.js";import"./svgIconContainer-C-hQGfLn.js";import"./small-cross-CVZbPmwP.js";import"./search-Hb2jWcJP.js";import"./cross-CMMlEidH.js";import"./useValueChanged-DvOpzAYW.js";import"./getPseudoElementBounds-XzSdEMVW.js";import"./CompositeItem-D_YoAFpQ.js";import"./makeExternalStore-BIBGwZYl.js";import"./BaseForm-CgtQpzSg.js";import"./ActionButton-Br3jBZ8T.js";import"./Button-BnpV_XVG.js";import"./SkeletonBar-BrsaaqIx.js";import"./Tooltip-BjFPs1Cw.js";import"./info-sign-DdxvNbOb.js";import"./chevron-up-BENCMOJd.js";import"./chevron-down-B5wuH3n5.js";import"./useEventCallback-CgLXQDBT.js";import"./iconLoader-BjVKCtVr.js";import"./CompositeRoot-CI2Wsamv.js";import"./Switch-DfXlXvjV.js";import"./TimePicker-h0Z2OMNB.js";import"./CollapsiblePanel-BJpSAUrV.js";import"./error-B914xSJQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-tcmfqEow.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
