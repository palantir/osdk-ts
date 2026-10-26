import{j as t,g as n}from"./iframe-CL0v58YA.js";import{A as r}from"./action-form-DqSFtfah.js";import"./preload-helper-YA1d6Ini.js";import"./DropdownField-BclOEnPv.js";import"./debounce-CYoIEdAM.js";import"./useOsdkClient-C1SbSG22.js";import"./index-Dbld71_D.js";import"./Input-mgnWKdmk.js";import"./useBaseUiId-C-B8c9Tq.js";import"./useControlled-CSC850so.js";import"./index-B8Uk-bLz.js";import"./index-BvbkTHlh.js";import"./PopoverPopup-Xz0YTDkc.js";import"./InternalBackdrop-BoEb1M5v.js";import"./composite-CnlM0z75.js";import"./index-DXxGeQJl.js";import"./getDisabledMountTransitionStyles-Cjmtv4nr.js";import"./ToolbarRootContext-Dar2Ujz6.js";import"./tick-DJs20ou9.js";import"./svgIconContainer-C5xAXPyT.js";import"./small-cross-BtqQFOUy.js";import"./search-1eZ8caHB.js";import"./cross-CMjnlyn3.js";import"./useValueChanged-ByhtVHRE.js";import"./getPseudoElementBounds-DAXSaCVq.js";import"./CompositeItem-DUAhoOI3.js";import"./makeExternalStore-Bhj1U_Xf.js";import"./BaseForm-d-Tk2Vig.js";import"./ActionButton-Bu4dL35R.js";import"./Button-D8zbKIcq.js";import"./SkeletonBar-aBATL-Tf.js";import"./Tooltip-BzQZnpRI.js";import"./info-sign-CPauWFGP.js";import"./chevron-up-CmwrCFBG.js";import"./chevron-down-BBB2aEWM.js";import"./useEventCallback-BiRlE1G0.js";import"./iconLoader-cRKmL3sy.js";import"./Switch-BXnu5PoB.js";import"./CompositeRoot-e3dlq57n.js";import"./TimePicker-BWaaM7Xp.js";import"./CollapsiblePanel-D2eGim3y.js";import"./error-DDQ2JALg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B3RxtapX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
