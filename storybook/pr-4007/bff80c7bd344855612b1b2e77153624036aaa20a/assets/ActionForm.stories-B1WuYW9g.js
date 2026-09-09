import{j as t,g as n}from"./iframe-XZT6dXfR.js";import{A as r}from"./action-form-CV-_vBEx.js";import"./preload-helper-Bq4RjIN3.js";import"./DropdownField-r6GmTP-a.js";import"./debounce-DSg_tuNC.js";import"./useOsdkClient-JmfcqbuF.js";import"./index-DBmC_ZXQ.js";import"./Input-ieeoajuX.js";import"./useBaseUiId-B8UoJpnF.js";import"./useControlled-eor914uw.js";import"./index-CNzOt5rB.js";import"./index-DBvBEYmO.js";import"./PopoverPopup-BDOMby4V.js";import"./InternalBackdrop-CIqXcp3k.js";import"./composite-8to6_dHI.js";import"./index-CwmKjwjW.js";import"./getDisabledMountTransitionStyles-DOuJdwmK.js";import"./ToolbarRootContext-DmE1Zvel.js";import"./tick-wmOq-VtM.js";import"./svgIconContainer-CU7rRNTz.js";import"./small-cross-Bs01bh1t.js";import"./search-JQ5a7a7P.js";import"./cross-DhoAWiHd.js";import"./useValueChanged-BiHw7QxN.js";import"./getPseudoElementBounds-yKX43mtP.js";import"./CompositeItem-CFpArZRZ.js";import"./makeExternalStore-DkP425EE.js";import"./BaseForm-D7Hrdeq2.js";import"./ActionButton-tWe0lZ3U.js";import"./Button-CFmpzwcx.js";import"./SkeletonBar-QCqk1NFT.js";import"./Tooltip-COCJMSAT.js";import"./info-sign-C0kRtl4I.js";import"./chevron-up-CE-W5bVQ.js";import"./chevron-down-7slW-jes.js";import"./useEventCallback-CrcHZf2i.js";import"./iconLoader-C8ddhj7S.js";import"./CompositeRoot-DcGXb8Oq.js";import"./Switch-DJtdyihJ.js";import"./TimePicker-5itGjYO1.js";import"./CollapsiblePanel-B1faMpX3.js";import"./error-CE5bRqvK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-waGd8POl.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
