import{j as t,g as n}from"./iframe-BkN_38ur.js";import{A as r}from"./action-form-BLivGYuX.js";import"./preload-helper-BysSMJyv.js";import"./DropdownField-DMG193d-.js";import"./debounce-BH4zeBLy.js";import"./useOsdkClient-C7M0gZ9G.js";import"./index-VCNAMxPB.js";import"./Input-BB5NVTdl.js";import"./useBaseUiId-DDXpceTn.js";import"./useControlled-Cl0okxKJ.js";import"./index-B8WRO5V1.js";import"./index-B4VzS2Ja.js";import"./PopoverPopup-BGPwoB7x.js";import"./InternalBackdrop-2b4i1OXO.js";import"./composite-DTpp6U8p.js";import"./index-PtHv8Npb.js";import"./getDisabledMountTransitionStyles-B4uk2RCK.js";import"./ToolbarRootContext-DsnyQOq9.js";import"./tick-Ja0-lS9C.js";import"./svgIconContainer-CleM6Ots.js";import"./small-cross-Bq-afI8J.js";import"./search-DLVM4UyR.js";import"./cross-QuNtfWNx.js";import"./useValueChanged-sVrHRRrg.js";import"./getPseudoElementBounds-DqBsVHMm.js";import"./CompositeItem-DeZdbGTL.js";import"./makeExternalStore-BQFFGO0N.js";import"./BaseForm-CWaJZh_9.js";import"./ActionButton-BEokvpGB.js";import"./Button-Bz7lNxsT.js";import"./SkeletonBar-BLri9E0k.js";import"./Tooltip-DB2l-4XV.js";import"./info-sign-CM2tCJb-.js";import"./chevron-up-D-KCmq92.js";import"./chevron-down-DQ_KkOEg.js";import"./useEventCallback-CfnnU2xW.js";import"./iconLoader-BuAOR47v.js";import"./Switch-DK4GO_Qt.js";import"./CompositeRoot-B6tfnWh3.js";import"./TimePicker-UR8imlvB.js";import"./CollapsiblePanel-o_jOyFnm.js";import"./error-B2ZdHohT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bgcs-XTD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
