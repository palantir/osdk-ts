import{j as t,g as n}from"./iframe-DZC97llC.js";import{A as r}from"./action-form-BRqVZOuN.js";import"./preload-helper-BKx802u_.js";import"./DropdownField-C2RCfl6F.js";import"./debounce-iD7mg0vi.js";import"./useOsdkClient-_TEeh3W2.js";import"./index-B22k2ynk.js";import"./Input-CJlK5efb.js";import"./useBaseUiId-C8ARUDoV.js";import"./useControlled-CM4OrEQX.js";import"./index-BMmTsFSZ.js";import"./index-CvyqG3Nj.js";import"./PopoverPopup-DEmuvAFX.js";import"./InternalBackdrop-LhRnITuT.js";import"./composite-4CN6pmFS.js";import"./index-CibQtp_x.js";import"./getDisabledMountTransitionStyles-C1vTwI5a.js";import"./ToolbarRootContext-D7J-RjRt.js";import"./tick-DTIKTJ7D.js";import"./svgIconContainer-CHUDLQoK.js";import"./small-cross-FQOqopzh.js";import"./search-D_uWqWVr.js";import"./cross-C2TZ8jDw.js";import"./useValueChanged-BoneQYDH.js";import"./getPseudoElementBounds-D-Dakysl.js";import"./CompositeItem-7MvBWb4V.js";import"./makeExternalStore-B1reYnYy.js";import"./BaseForm-C0QxF_8O.js";import"./ActionButton-CBA28Gab.js";import"./Button-BKAvQm5U.js";import"./SkeletonBar-JfMe0flw.js";import"./Tooltip-C_x2xNl8.js";import"./info-sign-D-2LsnJo.js";import"./chevron-up--StUrf4v.js";import"./chevron-down-CiXO6Fic.js";import"./useEventCallback-Ag7fNwiL.js";import"./iconLoader-By2oZPnM.js";import"./CompositeRoot-Y5l8H28P.js";import"./Switch-Detbw1J9.js";import"./TimePicker-DVqDSqca.js";import"./CollapsiblePanel-DNCdIVRX.js";import"./error-CWLyhGEl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CTgXxJzO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
