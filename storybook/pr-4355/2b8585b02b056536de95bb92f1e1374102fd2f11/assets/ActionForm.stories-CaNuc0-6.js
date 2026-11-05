import{j as t,g as n}from"./iframe-BEK1shVf.js";import{A as r}from"./action-form-jZU-9P56.js";import"./preload-helper-BuTZfPnC.js";import"./DropdownField-C02A1fDn.js";import"./debounce-DTuDZiq3.js";import"./useOsdkClient-CEA25Zmd.js";import"./index-BqkMqHUK.js";import"./Input-p3RqWT-8.js";import"./useBaseUiId-Bbs9yJ0n.js";import"./useControlled-BrC9O3tj.js";import"./index-ZWNosLBb.js";import"./index-Bb4KPyDR.js";import"./PopoverPopup-Ct5pPHVu.js";import"./InternalBackdrop-Cyl8hjr5.js";import"./composite-_69CGg7n.js";import"./index-X00-2pcl.js";import"./getDisabledMountTransitionStyles-DhYgXSRI.js";import"./ToolbarRootContext-BqUxfNXS.js";import"./tick-DpOTzWq3.js";import"./svgIconContainer-B5e6FaMs.js";import"./small-cross-BhzWxaHt.js";import"./search-BfhK71_u.js";import"./cross-eaaked_u.js";import"./useValueChanged-BMvgoEYe.js";import"./getPseudoElementBounds-COWWUprC.js";import"./CompositeItem-Zu9n7Vbm.js";import"./makeExternalStore-BMPgGjGI.js";import"./BaseForm-C2ZXUh83.js";import"./ActionButton-CHEQyLj1.js";import"./Button-BBBCKJre.js";import"./SkeletonBar-CHkjVGry.js";import"./Tooltip-D9vmNOqa.js";import"./info-sign-DLoPcM_u.js";import"./chevron-up-BqU-CfFL.js";import"./chevron-down-DvnARLJ3.js";import"./useEventCallback-D28FIM1T.js";import"./iconLoader-N8mzJ8G5.js";import"./Switch-DL80niqU.js";import"./CompositeRoot-55jNCp0L.js";import"./TimePicker-Df3r0L0o.js";import"./CollapsiblePanel-GTDy2Nz0.js";import"./error-BmGg8gRf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ckzv-T2_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
