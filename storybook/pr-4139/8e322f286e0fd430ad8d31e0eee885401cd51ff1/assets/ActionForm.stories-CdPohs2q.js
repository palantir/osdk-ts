import{j as t,g as n}from"./iframe-qTpzqqub.js";import{A as r}from"./action-form-DJs22Gi7.js";import"./preload-helper-Dn-jOWjK.js";import"./DropdownField-nRjqNqNr.js";import"./debounce-CiWxqlGN.js";import"./useOsdkClient-CXvIaCu6.js";import"./index-BOmnG_lN.js";import"./Input-DUA3RXYY.js";import"./useBaseUiId-DOsGlG1_.js";import"./useControlled-B4JMLJpk.js";import"./index-BVtfFrKv.js";import"./index-JoLmhLbC.js";import"./PopoverPopup-DSP2J700.js";import"./InternalBackdrop-ObeoxtxS.js";import"./composite-qaT37KGA.js";import"./index-Dkd9PCQh.js";import"./getDisabledMountTransitionStyles-CWddHoMT.js";import"./ToolbarRootContext-BKny703T.js";import"./tick-CV3XYpGq.js";import"./svgIconContainer-Bm8Tr4gZ.js";import"./small-cross-Bjzoktng.js";import"./search-MdoZShsS.js";import"./cross-CnNHuvcS.js";import"./useValueChanged-25t35zoP.js";import"./getPseudoElementBounds-DamjYshO.js";import"./CompositeItem-6iO3e1lI.js";import"./makeExternalStore-DYaXh9WX.js";import"./BaseForm-DxA54wma.js";import"./ActionButton-58YsK2KW.js";import"./Button-DEMuzBDP.js";import"./SkeletonBar-0MAnKgp-.js";import"./Tooltip-CjimaI3D.js";import"./info-sign-mqKXd9Eo.js";import"./chevron-up-xRBvOqHP.js";import"./chevron-down-B3fo8V2O.js";import"./useEventCallback-B_IWet6b.js";import"./iconLoader-BFG7Tewk.js";import"./Switch-Bn5fLTHp.js";import"./CompositeRoot-Eyq42xkA.js";import"./TimePicker-DwY_V4TC.js";import"./CollapsiblePanel-C78dnGmq.js";import"./error-Bf3H-zmd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5EFq8dH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
