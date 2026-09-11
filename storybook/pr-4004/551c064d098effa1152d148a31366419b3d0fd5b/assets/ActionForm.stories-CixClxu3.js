import{j as t,g as n}from"./iframe-B-HGqiQv.js";import{A as r}from"./action-form-CJXPjeLc.js";import"./preload-helper-f0nf4odL.js";import"./DropdownField-CupL-Zrh.js";import"./debounce-HM7gHRwB.js";import"./useOsdkClient-DhlHbxDz.js";import"./index-bxDwllqb.js";import"./Input-DQz318CF.js";import"./useBaseUiId-SjVBW8d9.js";import"./useControlled-DE8TYXcZ.js";import"./index-BtG-qeps.js";import"./index-CEiCEyzQ.js";import"./PopoverPopup-c23FdBcy.js";import"./InternalBackdrop-DlbEw6t2.js";import"./composite-Bss2rQnJ.js";import"./index-BBOlyUVk.js";import"./getDisabledMountTransitionStyles-C0uD4fg7.js";import"./ToolbarRootContext-BLNyP9iz.js";import"./tick-B70oSR7_.js";import"./svgIconContainer-CcOwnLsJ.js";import"./small-cross-C9MVmrAy.js";import"./search-2b7SykPm.js";import"./cross-EGyIlo5-.js";import"./useValueChanged-Dvg_Ei3T.js";import"./getPseudoElementBounds-D3A058yI.js";import"./CompositeItem-BdVijetn.js";import"./makeExternalStore-Bg6-61eg.js";import"./BaseForm-JCS9zEtd.js";import"./ActionButton-De-rrFSH.js";import"./Button-DbLRaPaP.js";import"./SkeletonBar-UZMMR510.js";import"./Tooltip-gNmuZhk6.js";import"./info-sign-BCxPLuK_.js";import"./chevron-up-nGRzPudY.js";import"./chevron-down-CPXc6U4P.js";import"./useEventCallback-BGTc3NYX.js";import"./iconLoader-CB9GnCmK.js";import"./CompositeRoot-BAOXPCu2.js";import"./Switch-DxARa2-h.js";import"./TimePicker-w1qNwrTO.js";import"./CollapsiblePanel-B8wfbqwT.js";import"./error-BZh_GVh6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-jKzwJRkL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
