import{j as t,g as n}from"./iframe-DlM-48cS.js";import{A as r}from"./action-form-BuxPnFDD.js";import"./preload-helper-DmLvY0Ro.js";import"./DropdownField-BWVVH9kG.js";import"./debounce-C3CDxvw2.js";import"./useOsdkClient-BufyZItZ.js";import"./index-DQySynAe.js";import"./Input-BgLmo8kc.js";import"./useBaseUiId-BL7ajxcr.js";import"./useControlled-Cds1c1L2.js";import"./index-oiGtd9Nq.js";import"./index-DD03Ubzs.js";import"./PopoverPopup-DSW4WQWE.js";import"./InternalBackdrop-g_U0vMMw.js";import"./composite-CCDJ76ow.js";import"./index-BbcdD0et.js";import"./getDisabledMountTransitionStyles-BKN0QXaR.js";import"./ToolbarRootContext-DaIwolue.js";import"./tick-D1rTjIGT.js";import"./svgIconContainer-BSW0qWgw.js";import"./small-cross-ZWRWvs2M.js";import"./search-CPnwrFbd.js";import"./cross-DwTMpwkP.js";import"./useValueChanged-p3rsjtiE.js";import"./getPseudoElementBounds-DmT7azNk.js";import"./CompositeItem-DnzFCdD-.js";import"./makeExternalStore-CFNSwXMM.js";import"./BaseForm-ltgSPKr-.js";import"./ActionButton-C_ljWeF0.js";import"./Button-CS46bS-Y.js";import"./SkeletonBar-Cxw_3ain.js";import"./Tooltip-WnQo6xYr.js";import"./info-sign-MP9XsBGL.js";import"./chevron-up-Cfhc42Mw.js";import"./chevron-down-P2rFBgt2.js";import"./useEventCallback-C32mWVio.js";import"./iconLoader-BTOq_XBT.js";import"./CompositeRoot-DE165pSV.js";import"./Switch-D2HZDQhb.js";import"./TimePicker-C4sNPTw5.js";import"./CollapsiblePanel-DaZOGvpp.js";import"./error-CpOA0Xju.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D-ub6zdF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
