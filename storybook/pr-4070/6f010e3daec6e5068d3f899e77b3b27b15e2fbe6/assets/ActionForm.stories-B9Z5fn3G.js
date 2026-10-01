import{j as t,g as n}from"./iframe-cnARutXL.js";import{A as r}from"./action-form-DfaKkRjO.js";import"./preload-helper-BmFSLRtI.js";import"./DropdownField-CsNVs2BB.js";import"./debounce-CAhzqkJ2.js";import"./useOsdkClient-bAUKHK9v.js";import"./index-DFLlU5DH.js";import"./Input-DDwYvpo2.js";import"./useBaseUiId-D3qiS2j7.js";import"./useControlled-C2e7ttGZ.js";import"./index-BH1BAqhj.js";import"./index-WfGsRQkJ.js";import"./PopoverPopup-C0e4SK-g.js";import"./InternalBackdrop-DicU1YCw.js";import"./composite-B8QB1mMF.js";import"./index-DqmPoYcz.js";import"./getDisabledMountTransitionStyles-BkvoD3fE.js";import"./ToolbarRootContext-Cpm7XsDL.js";import"./tick-UclQVZct.js";import"./svgIconContainer-BYzMgWJS.js";import"./small-cross-zWY6BCii.js";import"./search-C7s-xGFv.js";import"./cross-PEBZaCxU.js";import"./useValueChanged-CrFeGRAw.js";import"./getPseudoElementBounds-BOblesbJ.js";import"./CompositeItem-BZ25FDYT.js";import"./makeExternalStore-CokpyCaz.js";import"./BaseForm-DghX45cQ.js";import"./ActionButton-BDfWPIo4.js";import"./Button-6fdr9V7a.js";import"./SkeletonBar-BQ6YS2N6.js";import"./Tooltip-DAflEiX-.js";import"./info-sign-CVrl5kiL.js";import"./chevron-up-BbrRiePx.js";import"./chevron-down-B7Voti3u.js";import"./useEventCallback-aBWFD298.js";import"./iconLoader-C4YSQRK7.js";import"./Switch-CiCFPHdW.js";import"./CompositeRoot-DrKWShkE.js";import"./TimePicker-C0fdDNIF.js";import"./CollapsiblePanel-CGfN3i0K.js";import"./error-D4N7FIX9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cob5tlpP.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
