import{j as t,g as n}from"./iframe-DkFy_hb4.js";import{A as r}from"./action-form-cIf697d4.js";import"./preload-helper-BICWnFyb.js";import"./DropdownField-D35PrCn4.js";import"./debounce-DrtMuAJj.js";import"./useOsdkClient-DL12bN9E.js";import"./index-CVhUa1cn.js";import"./Input-NAoVb_RW.js";import"./useBaseUiId-o_BwtbxA.js";import"./useControlled-DzWKWqDT.js";import"./index-CYtpQu4o.js";import"./index-BKrHpELt.js";import"./PopoverPopup-Bc8XtssV.js";import"./InternalBackdrop-BfAbsSH4.js";import"./composite-BGBfqcyM.js";import"./index-D1Z2JBnZ.js";import"./getDisabledMountTransitionStyles-DcR5RtRw.js";import"./ToolbarRootContext-h2PUW2Ai.js";import"./tick-CIdK2AnH.js";import"./svgIconContainer-Cc9-LdUz.js";import"./small-cross-4XsWs7Rg.js";import"./search-CLZw3WrP.js";import"./cross-BZRmfado.js";import"./useValueChanged-DPBclZxi.js";import"./getPseudoElementBounds-D5PVShQs.js";import"./CompositeItem-CdeIEk-d.js";import"./makeExternalStore-C1G5lVa7.js";import"./BaseForm-Db2f3czD.js";import"./ActionButton-DkdJBeiD.js";import"./Button-CIX_sEiv.js";import"./SkeletonBar-BavgYnmL.js";import"./Tooltip-BVdzPxCH.js";import"./info-sign-CqTWD0QB.js";import"./chevron-up-CLGql31j.js";import"./chevron-down-DpJL6cgz.js";import"./useEventCallback-D8o005mn.js";import"./iconLoader-CVy3_Rbu.js";import"./Switch-Bk1QetOf.js";import"./CompositeRoot-BCsYAhY1.js";import"./TimePicker-Dmbi8mr2.js";import"./CollapsiblePanel-CRr1BQCY.js";import"./error-GJosWbv9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BuzdoqQa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
