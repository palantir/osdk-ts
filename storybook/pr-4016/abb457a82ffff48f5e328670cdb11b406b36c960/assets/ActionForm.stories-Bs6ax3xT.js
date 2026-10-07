import{j as t,g as n}from"./iframe-CaNMSJKR.js";import{A as r}from"./action-form-BF2gzGKR.js";import"./preload-helper-CgAWU684.js";import"./DropdownField-DhO1HYQh.js";import"./debounce-BYEPsvAQ.js";import"./useOsdkClient-Cyo_6-30.js";import"./index-BPdtXYwS.js";import"./Input-D6a6LuGx.js";import"./useBaseUiId-PY7Joizm.js";import"./useControlled-HJg4bzpt.js";import"./index-DwHiGc_W.js";import"./index-D7ympiaR.js";import"./PopoverPopup-te4Dxo5n.js";import"./InternalBackdrop-D8_pjPZI.js";import"./composite-Dq7ZaU-F.js";import"./index-B-0ROkdE.js";import"./getDisabledMountTransitionStyles-CpEFz5aF.js";import"./ToolbarRootContext-D5kbM0o_.js";import"./tick-DUxcYiue.js";import"./svgIconContainer-BGKrE44l.js";import"./small-cross-BFWN5N2J.js";import"./search-DK5elQsW.js";import"./cross-B28N2oZp.js";import"./useValueChanged-CuGKNkm7.js";import"./getPseudoElementBounds-B9dP_zSK.js";import"./CompositeItem-BvVHH8oi.js";import"./makeExternalStore-CFwmhsDu.js";import"./BaseForm-qR2KS0HI.js";import"./ActionButton-CuPxYvfY.js";import"./Button-BAJ6GAJV.js";import"./SkeletonBar-DZW3AZk0.js";import"./Tooltip-DK9uzyUm.js";import"./info-sign-BEGVSrvB.js";import"./chevron-up-CWfWQbrd.js";import"./chevron-down-QgUF0MKI.js";import"./useEventCallback-DELk9yi6.js";import"./iconLoader-Bg5vk8oQ.js";import"./Switch-DFD9z2uF.js";import"./CompositeRoot-C1WErhmg.js";import"./TimePicker-DomW6vAX.js";import"./CollapsiblePanel-Deq-o9BK.js";import"./error-B3rv2TKE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-OgxjXoMv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
