import{j as t,g as n}from"./iframe-DdU1btI5.js";import{A as r}from"./action-form-DrWWFTwH.js";import"./preload-helper-CJIdcoC_.js";import"./DropdownField-Fpq8W5FQ.js";import"./debounce-DZDPioJF.js";import"./useOsdkClient-DAa6LI-X.js";import"./index-Bjdg2prT.js";import"./Input-DBMe1jVC.js";import"./useBaseUiId-BlXBlP0f.js";import"./useControlled-BwHcuxO_.js";import"./index-CyCoQlJK.js";import"./index-CzZ9sR41.js";import"./PopoverPopup-DiH0uZZ4.js";import"./InternalBackdrop-Btm-Z_2t.js";import"./composite-DKrCSbZ1.js";import"./index-BG8iFfop.js";import"./getDisabledMountTransitionStyles-BV0-CpFZ.js";import"./ToolbarRootContext--cZJ7PMX.js";import"./tick-DBSn5IWS.js";import"./svgIconContainer-CevOR6cS.js";import"./small-cross-Qx7h4_xT.js";import"./search-DFTmIh4d.js";import"./cross-DezMrsVo.js";import"./useValueChanged-CZIiffVu.js";import"./getPseudoElementBounds-DvL2rk6a.js";import"./CompositeItem-Dd62h_6-.js";import"./makeExternalStore-BXvxNDLv.js";import"./BaseForm-DgdDIvNJ.js";import"./ActionButton-WG4ypQCg.js";import"./Button-DOSUJ3M5.js";import"./SkeletonBar-BcdtXClT.js";import"./Tooltip-DNChs3yX.js";import"./info-sign-CW3FDJAM.js";import"./chevron-up-8kUjq9o7.js";import"./chevron-down-BBg4HQxv.js";import"./useEventCallback-CG7YyhyL.js";import"./iconLoader-BqhrKfgf.js";import"./CompositeRoot-Dlc1rXDZ.js";import"./Switch-DdKP7Q_2.js";import"./TimePicker-2MxU9jBe.js";import"./CollapsiblePanel-DJJzQ09o.js";import"./error-NWRP_Q29.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics--yltK86k.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
