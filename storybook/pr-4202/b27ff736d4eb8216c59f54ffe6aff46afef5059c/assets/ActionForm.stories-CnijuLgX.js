import{j as t,g as n}from"./iframe-DpYBlUf6.js";import{A as r}from"./action-form-CXBVBvBO.js";import"./preload-helper-aJL6Jgcy.js";import"./DropdownField-C4CuM9xG.js";import"./debounce-D-UCwN4o.js";import"./useOsdkClient-BDUknGJW.js";import"./index-DG12qFyq.js";import"./Input-BuqKJ0cI.js";import"./useBaseUiId-Cvpk5u0b.js";import"./useControlled-BzCwoTTi.js";import"./index-Zn6BbNql.js";import"./index-gjgAmiRP.js";import"./PopoverPopup-CjONQpR9.js";import"./InternalBackdrop-yAnNHODP.js";import"./composite-kZPGPCkC.js";import"./index-iyK82M59.js";import"./getDisabledMountTransitionStyles-B2rY7D_M.js";import"./ToolbarRootContext-D5uSuuYr.js";import"./tick-DQwvbD-D.js";import"./svgIconContainer-BNnaw46F.js";import"./small-cross-CE66X8dX.js";import"./search-B-2FwTug.js";import"./cross-hvj-E3FQ.js";import"./useValueChanged-DfSVAW7h.js";import"./getPseudoElementBounds-BET_L97X.js";import"./CompositeItem-3SIjESMP.js";import"./makeExternalStore-Dk5562or.js";import"./BaseForm-jbBY1JlQ.js";import"./ActionButton-DWHTDIUq.js";import"./Button-OjQdDHcR.js";import"./SkeletonBar-Bim1zKuG.js";import"./Tooltip-iXECaKde.js";import"./info-sign-BfFUCFM9.js";import"./chevron-up-cEkFZZuZ.js";import"./chevron-down-DiWPSqGR.js";import"./useEventCallback-DbLrzPiT.js";import"./iconLoader-CUbDmEsq.js";import"./Switch-CmUlgcO8.js";import"./CompositeRoot-C4FRlMLp.js";import"./TimePicker-_nGDoQiE.js";import"./CollapsiblePanel-BOO07fZk.js";import"./error-_sVszbe4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Db3uKV6F.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
