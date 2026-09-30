import{j as t,g as n}from"./iframe-D_LKzUXQ.js";import{A as r}from"./action-form-kuZGSQef.js";import"./preload-helper-2fv74GlU.js";import"./DropdownField-NQ1Fw51O.js";import"./debounce-B6oiERcW.js";import"./useOsdkClient-CLGEaWRs.js";import"./index-BPEb3ehC.js";import"./Input-CHcldx9v.js";import"./useBaseUiId-BXLolyby.js";import"./useControlled-Dzikzr9a.js";import"./index-DNSIml9_.js";import"./index-mwOrEPHi.js";import"./PopoverPopup-DogzSAr-.js";import"./InternalBackdrop-asWjbBnz.js";import"./composite-5BerH0eb.js";import"./index-B3oHgBYy.js";import"./getDisabledMountTransitionStyles-BjArrEX_.js";import"./ToolbarRootContext-CaB66j5D.js";import"./tick-B_dnXVgZ.js";import"./svgIconContainer-DG_1Q-tY.js";import"./small-cross-BDTx6akH.js";import"./search-C0zqzJLG.js";import"./cross-CCKxEsOh.js";import"./useValueChanged-BP5iuKzH.js";import"./getPseudoElementBounds-LjVBvCza.js";import"./CompositeItem-BWjfeaLs.js";import"./makeExternalStore-WNQzhlnt.js";import"./BaseForm-Ey82r4sW.js";import"./ActionButton-ebUdVosY.js";import"./Button-o_hXJy7p.js";import"./SkeletonBar-BbsrKIs5.js";import"./Tooltip-D1QNS5SS.js";import"./info-sign-fO6Ny2iA.js";import"./chevron-up-aqqb7SuA.js";import"./chevron-down-Cbs_q2nL.js";import"./useEventCallback-D0iVUQFt.js";import"./iconLoader-BJ-Oa5bR.js";import"./Switch-DnU5B2JL.js";import"./CompositeRoot-Cp_KYciN.js";import"./TimePicker-BxONb_qs.js";import"./CollapsiblePanel-C4EqNm8Y.js";import"./error-CNMY2Oh1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CJQ6Lm1u.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
