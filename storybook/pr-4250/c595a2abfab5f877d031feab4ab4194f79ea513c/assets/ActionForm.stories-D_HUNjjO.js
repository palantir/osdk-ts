import{j as t,g as n}from"./iframe-DuF9ULT7.js";import{A as r}from"./action-form-CrvxlZuY.js";import"./preload-helper-kD_tsguj.js";import"./DropdownField-BF8fdmfG.js";import"./debounce-CrZBwGro.js";import"./useOsdkClient-BSXkMVIu.js";import"./index-muXsy8in.js";import"./Input-Cz82mbXb.js";import"./useBaseUiId-toBz8Uh9.js";import"./useControlled-DjU5snnM.js";import"./index-CQs0rdO8.js";import"./index-DaCqd03Q.js";import"./PopoverPopup-mneHcQVw.js";import"./InternalBackdrop-DAn5w1fs.js";import"./composite-B1SRd4gq.js";import"./index-D5Uc12e6.js";import"./getDisabledMountTransitionStyles-BJaQXL8u.js";import"./ToolbarRootContext-4pjZNXLZ.js";import"./tick-D563aBAq.js";import"./svgIconContainer-Cg0DvcJX.js";import"./small-cross-DUrm4kRJ.js";import"./search-BijdxR6R.js";import"./cross-CWdW2uUC.js";import"./useValueChanged-Cn14tmvW.js";import"./getPseudoElementBounds-BUh7K_dy.js";import"./CompositeItem-lLhT8JrE.js";import"./makeExternalStore-BjN8YBiO.js";import"./BaseForm-C71EkKRd.js";import"./ActionButton-CX87U3oR.js";import"./Button-BZjuNt0h.js";import"./SkeletonBar-CgHloKeI.js";import"./Tooltip-BNXMXQEy.js";import"./info-sign-DG8hUF_H.js";import"./chevron-up-B6G1dmfK.js";import"./chevron-down-CaPJ8T2H.js";import"./useEventCallback-CNUkj118.js";import"./iconLoader-DaVWHE6g.js";import"./Switch-COVcj5Kg.js";import"./CompositeRoot-DEZnosv4.js";import"./TimePicker-B62Dp9at.js";import"./CollapsiblePanel-DBem6MQm.js";import"./error-BLlGlY0w.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BCYo5O_x.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
