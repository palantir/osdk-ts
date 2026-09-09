import{j as t,g as n}from"./iframe-BgIqeTr7.js";import{A as r}from"./action-form-DHRiBBYA.js";import"./preload-helper-BbBE06U6.js";import"./DropdownField-q8PA-aTt.js";import"./debounce-l2WN3UdY.js";import"./useOsdkClient-DqUO6npy.js";import"./index-OeIAiwUu.js";import"./Input-Ccm-R2od.js";import"./useBaseUiId-CgOsBxCj.js";import"./useControlled-DoFIiJ6c.js";import"./index-D9MNyfPv.js";import"./index-ef3bSd-w.js";import"./PopoverPopup-DNjj31SM.js";import"./InternalBackdrop-DMG6Kgao.js";import"./composite-BF8O5dbv.js";import"./index-Zndx6d0R.js";import"./getDisabledMountTransitionStyles-DcXdOVhf.js";import"./ToolbarRootContext-XHaZZ7gx.js";import"./tick-BuwupeKW.js";import"./svgIconContainer-BtrJOEHF.js";import"./small-cross-CIyGzgJb.js";import"./search-BF7QrwO6.js";import"./cross-Wbc8t1qS.js";import"./useValueChanged-DLQjxulr.js";import"./getPseudoElementBounds-CACZ6uIC.js";import"./CompositeItem-D2E5MTZ0.js";import"./makeExternalStore-_B_am4pH.js";import"./BaseForm-K6EX59Qu.js";import"./ActionButton-CAHKDpnU.js";import"./Button-WSqWRGZH.js";import"./SkeletonBar-C2xca__T.js";import"./Tooltip-B4cDBo-J.js";import"./info-sign-KTbzpMBR.js";import"./chevron-up-CWKyRQDq.js";import"./chevron-down-CZAmY7BW.js";import"./useEventCallback-NCRuje_c.js";import"./iconLoader-CmGTmUWi.js";import"./CompositeRoot-mRZyL7Z6.js";import"./Switch-HQjSBqiN.js";import"./TimePicker-j_BmTqeL.js";import"./CollapsiblePanel-CAigpV3T.js";import"./error-DvPLPT6J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D9CYPZjX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
