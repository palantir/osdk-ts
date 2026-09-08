import{j as t,g as n}from"./iframe-CCEjzOPC.js";import{A as r}from"./action-form-C1Ok2cLO.js";import"./preload-helper-DImdHWFo.js";import"./DropdownField-BbmelQYl.js";import"./debounce-pZlXkjc8.js";import"./useOsdkClient-CYh5mGXm.js";import"./index-DgoUsAmK.js";import"./Input-CGqEOpN_.js";import"./useBaseUiId-j3ufExoT.js";import"./useControlled-D5RejEGV.js";import"./index-BilPMlQA.js";import"./index-D9nMHWCp.js";import"./PopoverPopup-BkHPuubJ.js";import"./InternalBackdrop-D3oUcg0G.js";import"./composite-C0q05pny.js";import"./index-DFR7OMHV.js";import"./getDisabledMountTransitionStyles-CeC0WSMX.js";import"./ToolbarRootContext-CugNg6qm.js";import"./tick-CfFnANAV.js";import"./svgIconContainer-Coaz20-Z.js";import"./small-cross-47kwWW4U.js";import"./search-BPL1vhq_.js";import"./cross-BGMsRd6B.js";import"./useValueChanged-BqfQCkU5.js";import"./getPseudoElementBounds-C4El7Kw5.js";import"./CompositeItem-vBJlJ_jv.js";import"./makeExternalStore-CccFVbAZ.js";import"./BaseForm-CLNfavGp.js";import"./ActionButton-iW7h5mCg.js";import"./Button-2G_ar31r.js";import"./SkeletonBar-IG_FwzYT.js";import"./Tooltip-_l0C6K9V.js";import"./info-sign-BKRkckD0.js";import"./chevron-up-CXsJ3DIB.js";import"./chevron-down-D9MyH17B.js";import"./useEventCallback-C24S9g8A.js";import"./iconLoader-Dmxj9XjU.js";import"./CompositeRoot-DWLdPvud.js";import"./Switch-Bj1x0gya.js";import"./TimePicker-DmWifCAm.js";import"./CollapsiblePanel-VY2LOFCf.js";import"./error-8gbxpDNd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D3mK_z9G.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
