import{j as t,g as n}from"./iframe-S5f-tHYc.js";import{A as r}from"./action-form-CfBppgkE.js";import"./preload-helper-CloBdclc.js";import"./DropdownField-CosoAnxz.js";import"./debounce-CMuMdGaR.js";import"./useOsdkClient-DYs9h0g-.js";import"./index-BjvFrMm8.js";import"./Input-DxXCBH_8.js";import"./useBaseUiId-BlrIsTLC.js";import"./useControlled-CL7wd5vL.js";import"./index-1qViAGfj.js";import"./index-Cnu8xOcy.js";import"./PopoverPopup-CzRxRT6J.js";import"./InternalBackdrop-CLYIK4GL.js";import"./composite-541HdLvk.js";import"./index-CyzOmN0R.js";import"./getDisabledMountTransitionStyles-ZM0SJ2dg.js";import"./ToolbarRootContext-DjBkFXc0.js";import"./tick-1JQLMtoH.js";import"./svgIconContainer-B4-msPtU.js";import"./small-cross-7E36Oaag.js";import"./search-CIBDynw6.js";import"./cross-CW1FGrOP.js";import"./useValueChanged-CA0bh4r8.js";import"./getPseudoElementBounds-BWWWPD0F.js";import"./CompositeItem-Dg4eVuBQ.js";import"./makeExternalStore-DqL_g-L_.js";import"./BaseForm-u3BJpYdd.js";import"./ActionButton-DQaroWT8.js";import"./Button-FHTr9kOT.js";import"./SkeletonBar-CkCJtsPM.js";import"./Tooltip-C7N2M5Yu.js";import"./info-sign-Bqu_gB0T.js";import"./chevron-up-Dkv65uMe.js";import"./chevron-down-Cgu3kTNg.js";import"./useEventCallback-DLlqjfcw.js";import"./iconLoader-BaRXVqUo.js";import"./Switch-D0RZFMLq.js";import"./CompositeRoot-1zUIhBAj.js";import"./TimePicker-De2gxPeg.js";import"./CollapsiblePanel-CBgNvisu.js";import"./error-Dr3zRmrC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BbapYe7K.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
