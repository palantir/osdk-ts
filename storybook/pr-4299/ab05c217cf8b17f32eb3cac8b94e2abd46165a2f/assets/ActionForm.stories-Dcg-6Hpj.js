import{j as t,g as n}from"./iframe-BR4-xVYI.js";import{A as r}from"./action-form-C25RG9YW.js";import"./preload-helper-DbBEOmrA.js";import"./DropdownField-DjgoPeZ6.js";import"./debounce-GtwJabeu.js";import"./useOsdkClient-CXmIXXsP.js";import"./index-Bl34zl0T.js";import"./Input-D7vx6zqX.js";import"./useBaseUiId-BYzMy68a.js";import"./useControlled-DN7CYAB2.js";import"./index-CeuhUjnH.js";import"./index-ucjEhEXO.js";import"./PopoverPopup-C1kMPgqS.js";import"./InternalBackdrop-BNRMpNwm.js";import"./composite-B5Ni56Yc.js";import"./index--n8M5GBW.js";import"./getDisabledMountTransitionStyles-BCPsmVLX.js";import"./ToolbarRootContext-DPLqybB9.js";import"./tick-BIjGCOT-.js";import"./svgIconContainer-DsRlczG5.js";import"./small-cross-BeM5hQZj.js";import"./search-WudRV3Lk.js";import"./cross-C0jaUfu0.js";import"./useValueChanged-DfThrQO8.js";import"./getPseudoElementBounds-DJ1Dele8.js";import"./CompositeItem-CeAvgtlv.js";import"./makeExternalStore-BG7GijXm.js";import"./BaseForm-DRVYijuM.js";import"./ActionButton-Dfm9fwti.js";import"./Button-B43-ydWW.js";import"./SkeletonBar-B9zQOriA.js";import"./Tooltip-CY7AHoDM.js";import"./info-sign-D56g-RI7.js";import"./chevron-up-sR2e5foT.js";import"./chevron-down-B00usCld.js";import"./useEventCallback-CmAo7nrm.js";import"./iconLoader-Beaz8n4w.js";import"./Switch-wMDjoKqD.js";import"./CompositeRoot-B78GDGW9.js";import"./TimePicker-DSj8AhIh.js";import"./CollapsiblePanel-Ceg7ith-.js";import"./error-DEM7tD3T.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-kvzuwV_e.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
