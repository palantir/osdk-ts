import{j as t,g as n}from"./iframe-BPE8geBj.js";import{A as r}from"./action-form-MERgCm3p.js";import"./preload-helper-fxHDaWWz.js";import"./DropdownField-D2YaoN7_.js";import"./debounce-CqZnwFp7.js";import"./useOsdkClient-BdzCkRzQ.js";import"./index-BSCIcc2m.js";import"./Input-RElBojM0.js";import"./useBaseUiId-S4ycFjYQ.js";import"./useControlled-C86FBi_K.js";import"./index-BOd13PhS.js";import"./index-D5QkM80p.js";import"./isObject-CIH_inO5.js";import"./InternalBackdrop-Dj4dXGlo.js";import"./composite-CvIKG9hN.js";import"./index-NexOwd4z.js";import"./getDisabledMountTransitionStyles-BiO89QFU.js";import"./ToolbarRootContext-Cyb9Wm9w.js";import"./tick-BSHV8J2-.js";import"./svgIconContainer-Ch3CgPVe.js";import"./small-cross-BIQb8x3u.js";import"./search-D5bB9k-q.js";import"./cross-BmJ5axqh.js";import"./useValueChanged-CvoSBU76.js";import"./getPseudoElementBounds-bxwDp6fo.js";import"./CompositeItem-DoL9OBNh.js";import"./makeExternalStore-Bb0lbQEV.js";import"./BaseForm-BQgrlnko.js";import"./ActionButton-BhhH_yCm.js";import"./Button-DB75dhIR.js";import"./SkeletonBar-D2dwSU1W.js";import"./Tooltip-CXKx2My9.js";import"./info-sign-DWiWygnO.js";import"./chevron-up-DpZv0J-z.js";import"./chevron-down-CqglXqG-.js";import"./useEventCallback-BGn_PaqW.js";import"./iconLoader-Cxh892bG.js";import"./Switch-zVbYmot4.js";import"./CompositeRoot-DkePixyg.js";import"./TimePicker-BZxonksm.js";import"./CollapsiblePanel-Dsa02cUE.js";import"./error-BXvIUBOQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BtOTCRxI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
