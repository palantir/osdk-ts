import{j as t,g as n}from"./iframe-BWsptOx9.js";import{A as r}from"./action-form-B8k0GbYS.js";import"./preload-helper-hck2-2iY.js";import"./DropdownField-B7NOWBJ6.js";import"./debounce-DyiaKSQ5.js";import"./useOsdkClient-CEV94sBT.js";import"./index-7iRS3JG9.js";import"./Input-DMLFbQ55.js";import"./useBaseUiId-ITgInSIU.js";import"./useControlled-6nTFaGE5.js";import"./index-YOpRnDEd.js";import"./index-DlVXSgR3.js";import"./PopoverPopup-CVs19qPy.js";import"./InternalBackdrop-DDaeYjKA.js";import"./composite-BV3Gpi4q.js";import"./index-i61hjDRu.js";import"./getDisabledMountTransitionStyles-CA1DSUbY.js";import"./ToolbarRootContext-DeurAZ5u.js";import"./tick-DbxYiBa-.js";import"./svgIconContainer-BOVctZiQ.js";import"./small-cross-DNTeAJ8Z.js";import"./search-CPZq-I8Z.js";import"./cross-BoUzuZNF.js";import"./useValueChanged-CpdELUFS.js";import"./getPseudoElementBounds-BeC7UFLp.js";import"./CompositeItem-BCNmsXPB.js";import"./makeExternalStore-De-Jb6J5.js";import"./BaseForm-D4VLKVB6.js";import"./ActionButton-B6MwYfE-.js";import"./Button-VsXDl_eG.js";import"./SkeletonBar-2lSm92jN.js";import"./Tooltip-BuhkBBtD.js";import"./info-sign-CPmLymPw.js";import"./chevron-up-ChpJJWfv.js";import"./chevron-down-B0CcOxY_.js";import"./useEventCallback-DutHdois.js";import"./iconLoader-BLJuuSQ8.js";import"./CompositeRoot-Cwnbo47Y.js";import"./Switch-zwC-0Sjz.js";import"./TimePicker-BvURwfcI.js";import"./CollapsiblePanel-Bpn4fRSH.js";import"./error-D4aggEwD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8dcDHgp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
