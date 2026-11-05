import{j as t,g as n}from"./iframe-BGZow3KJ.js";import{A as r}from"./action-form-D8ejjrJ7.js";import"./preload-helper-CV0-5wxc.js";import"./DropdownField-CnC7UHHW.js";import"./debounce-B9ghShVf.js";import"./useOsdkClient-hMBV3ED4.js";import"./index-BDJbf4mz.js";import"./Input-BSDEuHVc.js";import"./useBaseUiId-BlZeP_kj.js";import"./useControlled-C-Ujr0_X.js";import"./index-BuHLiRGy.js";import"./index-C3aV2ZJb.js";import"./PopoverPopup-CUF3E2YZ.js";import"./InternalBackdrop-B_sB-beZ.js";import"./composite-CN_PLOWp.js";import"./index-DEaxfkN8.js";import"./getDisabledMountTransitionStyles-BTYArxOj.js";import"./ToolbarRootContext-CqO-yoJp.js";import"./tick-Du4Lzmue.js";import"./svgIconContainer-GlJoQzna.js";import"./small-cross-DO6-UyiL.js";import"./search-xttomfsG.js";import"./cross-Dn--TE22.js";import"./useValueChanged-Bau6PUUH.js";import"./getPseudoElementBounds-D5IsxrGd.js";import"./CompositeItem-BUIK-kSM.js";import"./makeExternalStore-C3raoZ1p.js";import"./BaseForm-CHwn4Kdw.js";import"./ActionButton-BWeIxwPs.js";import"./Button-B8_EYdXY.js";import"./SkeletonBar-DU-7laho.js";import"./Tooltip-BRxp8-5A.js";import"./info-sign-BDt4OE7R.js";import"./chevron-up-BhsxBA7H.js";import"./chevron-down-4eRxImwL.js";import"./useEventCallback-mWSDmhwd.js";import"./iconLoader-D73NDG-O.js";import"./Switch-CPWCWv2k.js";import"./CompositeRoot-BiZixX6A.js";import"./TimePicker-OUvb7Mm3.js";import"./CollapsiblePanel-CwHNwtms.js";import"./error-C57Ogh7g.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6t-dwVR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
