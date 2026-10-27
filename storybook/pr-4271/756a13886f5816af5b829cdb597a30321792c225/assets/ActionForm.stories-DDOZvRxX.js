import{j as t,g as n}from"./iframe-D150H4vz.js";import{A as r}from"./action-form-B5ZMzAbE.js";import"./preload-helper-BarckMkV.js";import"./DropdownField-StYPCDOl.js";import"./debounce-_Huulw1P.js";import"./useOsdkClient-Dsa6FFc4.js";import"./index-cVrSJLbz.js";import"./Input-D0LXp2w8.js";import"./useBaseUiId-BEwnCbr0.js";import"./useControlled-lhlupqEn.js";import"./index-Cy-heBPu.js";import"./index-N3sDVMXC.js";import"./PopoverPopup-B10GF7su.js";import"./InternalBackdrop-D-pm-OPY.js";import"./composite-B_0CI6wq.js";import"./index-B1h1Ffvc.js";import"./getDisabledMountTransitionStyles-5KUPlXNs.js";import"./ToolbarRootContext-G9KEnSun.js";import"./tick-CYEAeUON.js";import"./svgIconContainer-VUxlTV2E.js";import"./small-cross-OFGcSSBP.js";import"./search-B_D2n4ON.js";import"./cross-6mUh6O0a.js";import"./useValueChanged-CN5YLtWf.js";import"./getPseudoElementBounds-CVhzJWTU.js";import"./CompositeItem-iPCNYUwO.js";import"./makeExternalStore-BIWQlVyv.js";import"./BaseForm-DMRuqzae.js";import"./ActionButton-YzMno_H9.js";import"./Button-wEOF9kbC.js";import"./SkeletonBar-CvwasmzM.js";import"./Tooltip-BMJ7R0dC.js";import"./info-sign-C0kCC4_N.js";import"./chevron-up-h8KkmWmE.js";import"./chevron-down-BtdYGIbe.js";import"./useEventCallback-CBWL1hY-.js";import"./iconLoader-CjXqD5OW.js";import"./Switch-C7IGK4QE.js";import"./CompositeRoot-OC0bPKWm.js";import"./TimePicker-Bkk_KrPf.js";import"./CollapsiblePanel-CA9S5PKs.js";import"./error-EjSx_YOh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMpR6FdW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
