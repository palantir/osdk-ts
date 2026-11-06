import{j as t,g as n}from"./iframe-CEcdsVJq.js";import{A as r}from"./action-form-DNeS8EGf.js";import"./preload-helper-CwdDwPFb.js";import"./DropdownField-ZmhVFUXY.js";import"./debounce-CoMjtpmw.js";import"./useOsdkClient-BdsS4ftD.js";import"./index-CYAMjkkg.js";import"./Input-tSgTwGI-.js";import"./useBaseUiId-DGCtOfjA.js";import"./useControlled-oPldRElz.js";import"./index-ByC2L83v.js";import"./index-Dt5JenlP.js";import"./PopoverPopup-DUz2sdVN.js";import"./InternalBackdrop-CrdF0gp5.js";import"./composite-Bw-yzexU.js";import"./index-BqhjR31D.js";import"./getDisabledMountTransitionStyles-CU0LRjik.js";import"./ToolbarRootContext-CHwqmaMQ.js";import"./tick-CP_0B18b.js";import"./svgIconContainer-CM3Ra624.js";import"./small-cross-BAIe5upx.js";import"./search-DyPNv9j0.js";import"./cross-MZ6bg35c.js";import"./useValueChanged-HH9MPtoe.js";import"./getPseudoElementBounds-CdIwqNAh.js";import"./CompositeItem-DPYzCgzB.js";import"./makeExternalStore-BPRH1LKG.js";import"./BaseForm-Dl8YTQhy.js";import"./ActionButton-O2R9i3U9.js";import"./Button-DE6hvZhq.js";import"./SkeletonBar-B0hbq4FE.js";import"./Tooltip-bo6C_98m.js";import"./info-sign-BqQ-b2EU.js";import"./chevron-up-ARLCOEif.js";import"./chevron-down-C-qVIMYg.js";import"./useEventCallback-CoOaDXAk.js";import"./iconLoader-ligILoaQ.js";import"./Switch-Ba1t8wit.js";import"./CompositeRoot-meSZxGGw.js";import"./TimePicker-CHcJrrIO.js";import"./CollapsiblePanel-CfmGyi20.js";import"./error-B4aXreAp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Mp4Rwj5-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
