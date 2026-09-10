import{j as t,g as n}from"./iframe-CI-n1SDT.js";import{A as r}from"./action-form-BWvAmsgL.js";import"./preload-helper-Mdgc8Ktj.js";import"./DropdownField-CUeqsysl.js";import"./debounce-C6Db4ohX.js";import"./useOsdkClient-Cy_JiOUl.js";import"./index-DS4RSAQC.js";import"./Input-CU7LnIit.js";import"./useBaseUiId-D17iYZZP.js";import"./useControlled-DqjHOya_.js";import"./index-BCo1buGM.js";import"./index-CgpiMQTM.js";import"./PopoverPopup-CVmvu6W-.js";import"./InternalBackdrop-CwiCBdb3.js";import"./composite-BKY77e-J.js";import"./index-ap0UOzMs.js";import"./getDisabledMountTransitionStyles-smLfI-jR.js";import"./ToolbarRootContext-3jcFlcdQ.js";import"./tick-DU5k7Rwc.js";import"./svgIconContainer-C5J3XXoW.js";import"./small-cross-DHjfMPnD.js";import"./search-BJLPlObb.js";import"./cross-CG9JNs7m.js";import"./useValueChanged-C_2Ifi7m.js";import"./getPseudoElementBounds-CG3xD5lD.js";import"./CompositeItem-OcKtL5Oh.js";import"./makeExternalStore-Dfr5mI6y.js";import"./BaseForm-Dp5n6l-g.js";import"./ActionButton-CEbPtw0Y.js";import"./Button-BU0hCYOg.js";import"./SkeletonBar-ClCYHDwh.js";import"./Tooltip-c4HEDOZ7.js";import"./info-sign-BJbKVjfI.js";import"./chevron-up-N_Vzfx1O.js";import"./chevron-down-BMoNsHmj.js";import"./useEventCallback-DRfi-_TS.js";import"./iconLoader-BMfZqpit.js";import"./CompositeRoot-CDVqXrYe.js";import"./Switch-Cte1T79D.js";import"./TimePicker-DeadccBd.js";import"./CollapsiblePanel-ChN3dRbg.js";import"./error-BExaNGVy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-aN9WoVVm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
