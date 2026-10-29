import{j as t,g as n}from"./iframe-zGIsJMpT.js";import{A as r}from"./action-form-shtWwe8W.js";import"./preload-helper-CC38SpOi.js";import"./DropdownField-DuI_YZPs.js";import"./debounce-CuU6v30l.js";import"./useOsdkClient-CBICPDeO.js";import"./index-8YhFnXQQ.js";import"./Input-DUh3JuNM.js";import"./useBaseUiId-ci9SHEVb.js";import"./useControlled-BkrEcqk8.js";import"./index-B-FTFFET.js";import"./index-_YOXVANG.js";import"./PopoverPopup-CJZk_qZX.js";import"./InternalBackdrop-CEY2WdL1.js";import"./composite-DMfXOji_.js";import"./index-bkG5Vg2p.js";import"./getDisabledMountTransitionStyles-BWzH01Nw.js";import"./ToolbarRootContext-Cb-1rKtx.js";import"./tick-C2Jds8i8.js";import"./svgIconContainer-CP5MNfZh.js";import"./small-cross-BQATEOZM.js";import"./search-Dz1VIdGa.js";import"./cross-DktHdIAg.js";import"./useValueChanged-B7A_hdZG.js";import"./getPseudoElementBounds-DuWCXYaK.js";import"./CompositeItem-BoSufc_A.js";import"./makeExternalStore-BEcMJ506.js";import"./BaseForm-DuxCl_eL.js";import"./ActionButton-B5uCJtLq.js";import"./Button-DgFOPBJa.js";import"./SkeletonBar-DgAc_BEV.js";import"./Tooltip-YhP-Fwkb.js";import"./info-sign-BEdBrpNt.js";import"./chevron-up-HGJhC36b.js";import"./chevron-down-Du5I5wVW.js";import"./useEventCallback-BN5eCmSs.js";import"./iconLoader-Dl4HsNj9.js";import"./Switch-CMwNWoCp.js";import"./CompositeRoot-CCYsbZke.js";import"./TimePicker-DLBXFNai.js";import"./CollapsiblePanel-haGA10pC.js";import"./error-o2dkV_Rh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CjW6J-ki.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
