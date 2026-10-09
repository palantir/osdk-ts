import{j as t,g as n}from"./iframe-CZ4qo6TA.js";import{A as r}from"./action-form-DnR9HgWp.js";import"./preload-helper-D40KpOHN.js";import"./DropdownField-C-3zm9pF.js";import"./debounce-CgqyealR.js";import"./useOsdkClient-58hcDjFk.js";import"./index-B1VXkh3r.js";import"./Input-RFD7u_HI.js";import"./useBaseUiId-DO15ulBB.js";import"./useControlled-Cx3Ij5Mu.js";import"./index-CZQei39W.js";import"./index-SZhdlURA.js";import"./PopoverPopup-X1NXKjjR.js";import"./InternalBackdrop-DWj837um.js";import"./composite-CODWVvxq.js";import"./index-CuFz-_kG.js";import"./getDisabledMountTransitionStyles-DVK3xheu.js";import"./ToolbarRootContext-Bml6QJba.js";import"./tick-C-ZfBZ86.js";import"./svgIconContainer-CMijeJNG.js";import"./small-cross-QLvraUt0.js";import"./search-DMBvmHVz.js";import"./cross-BdgbMHZq.js";import"./useValueChanged-CVtnd4HJ.js";import"./getPseudoElementBounds-BxmnbCl3.js";import"./CompositeItem-deIgJifw.js";import"./makeExternalStore-ChVKEbDO.js";import"./BaseForm-CEvc6MQ2.js";import"./ActionButton-CsLidLTo.js";import"./Button-BtVUzCrS.js";import"./SkeletonBar-CJS4EpKQ.js";import"./Tooltip-DW57x_s5.js";import"./info-sign-BPTR-sgJ.js";import"./chevron-up-By31A5v7.js";import"./chevron-down-BdE_cbUf.js";import"./useEventCallback-ExrAdjX-.js";import"./iconLoader-bRN1wWwL.js";import"./Switch-COd-3zqf.js";import"./CompositeRoot-CB2bKrqb.js";import"./TimePicker-Urf0LnJT.js";import"./CollapsiblePanel-DEkl0vLO.js";import"./error-CVxsYLyQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BKNh995o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
