import{j as t,g as n}from"./iframe-BiX95vgM.js";import{A as r}from"./action-form-C2wWJdZ7.js";import"./preload-helper-DWnaR-1b.js";import"./DropdownField-DzcwNOIS.js";import"./debounce-DvrF_ne3.js";import"./useOsdkClient-CBCEya-4.js";import"./index-BabfefxA.js";import"./Input-mW8oBDz9.js";import"./useBaseUiId-CQekfIk1.js";import"./useControlled-B0weLlnb.js";import"./index-CqOEHXIi.js";import"./index-DsTIq2po.js";import"./PopoverPopup-BhUB52O1.js";import"./InternalBackdrop-CE-LWvCh.js";import"./composite-KUIWn9JP.js";import"./index-k1PdwCZb.js";import"./getDisabledMountTransitionStyles-B3gRsSQK.js";import"./ToolbarRootContext-DqKQJUCi.js";import"./tick-DJUMmsvK.js";import"./svgIconContainer-BCrh5jbf.js";import"./small-cross-Boqia_iR.js";import"./search-BRep0j7S.js";import"./cross-C7wa8kmV.js";import"./useValueChanged-DAGoXpR0.js";import"./getPseudoElementBounds-wEO7NvSI.js";import"./CompositeItem-BFJIxEVd.js";import"./makeExternalStore-BiSG9WI-.js";import"./BaseForm-Dvcv8YI9.js";import"./ActionButton-BsI0HZIG.js";import"./Button-DbzWoDvM.js";import"./SkeletonBar-B9Rdl8b0.js";import"./Tooltip-CAv1GjkH.js";import"./info-sign-C9SQIGCW.js";import"./chevron-up-jWVpiCtu.js";import"./chevron-down-Qcf4cgke.js";import"./useEventCallback-Cmi2IqX2.js";import"./iconLoader-CTS1_IXw.js";import"./Switch-SV91UUVw.js";import"./CompositeRoot-DcC2iSzI.js";import"./TimePicker-BofQcJyL.js";import"./CollapsiblePanel-COHaPPM9.js";import"./error-Bo4C15lT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bu7X3_wp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
