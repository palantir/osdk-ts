import{j as t,g as n}from"./iframe-cfVHShSW.js";import{A as r}from"./action-form--ud2j3qP.js";import"./preload-helper-DIuXOY3G.js";import"./DropdownField-qj0jYiEp.js";import"./debounce-l3cliQfv.js";import"./useOsdkClient-DhV-YBPx.js";import"./index-Dh0_pJy1.js";import"./Input-CRQW49QU.js";import"./useBaseUiId-Dx0z8IdG.js";import"./useControlled-DRr_lzX9.js";import"./index-DyU-H2ls.js";import"./index-B1nRcBho.js";import"./PopoverPopup-Ra0J62dt.js";import"./InternalBackdrop-D8f4nw96.js";import"./composite-DGFet_96.js";import"./index-4e4CIFBu.js";import"./getDisabledMountTransitionStyles-Q1E4gOTQ.js";import"./ToolbarRootContext-rTwoUfWD.js";import"./tick-Clw3DVoZ.js";import"./svgIconContainer-shdj6Qbw.js";import"./small-cross-CMcRrXYz.js";import"./search-HP5frDaz.js";import"./cross-CQMpStFn.js";import"./useValueChanged-B7R09HF5.js";import"./getPseudoElementBounds-DNOwWkqq.js";import"./CompositeItem-BNd8aIDX.js";import"./makeExternalStore-ClpC--FM.js";import"./BaseForm-DZQqdTUv.js";import"./ActionButton-CQj94TDP.js";import"./Button-2DUkL7w7.js";import"./SkeletonBar-B7tEemlu.js";import"./Tooltip-dXIOIOnO.js";import"./info-sign-DFGQUReW.js";import"./chevron-up-7TDXb1Rh.js";import"./chevron-down-SG4gwSm2.js";import"./useEventCallback-BEjjrUNS.js";import"./iconLoader-Ho6KOnf4.js";import"./Switch-IKCo1fgx.js";import"./CompositeRoot-C0V_9FR8.js";import"./TimePicker-C8o3k8fo.js";import"./CollapsiblePanel-CHOxQQMz.js";import"./error-DFzqEfiP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C8YqvKiy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
