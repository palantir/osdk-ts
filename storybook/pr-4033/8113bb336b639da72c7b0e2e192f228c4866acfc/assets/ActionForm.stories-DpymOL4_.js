import{j as t,g as n}from"./iframe-DnMZhogX.js";import{A as r}from"./action-form-D9nQCgaz.js";import"./preload-helper-D4NPUWDF.js";import"./DropdownField-mRbtMN2b.js";import"./debounce-DRL1bJAs.js";import"./useOsdkClient-BnFs3xMf.js";import"./index-C6vUCj3I.js";import"./Input-LnfuE3I2.js";import"./useBaseUiId-BQvmXl_6.js";import"./useControlled-B2iKOn4D.js";import"./index-t2KVREOA.js";import"./index-CkhjCsS5.js";import"./PopoverPopup-XYXFggLJ.js";import"./InternalBackdrop-bRjvxNXQ.js";import"./composite-C04hi1zy.js";import"./index-C1Yu6uYj.js";import"./getDisabledMountTransitionStyles-NTzjgmpy.js";import"./ToolbarRootContext-BocpL34Y.js";import"./tick-BfcL4nFt.js";import"./svgIconContainer-BVAzBycF.js";import"./small-cross-B3kXkk-5.js";import"./search-Dq0e8pTI.js";import"./cross-B0Br0EiR.js";import"./useValueChanged-BNYopCoC.js";import"./getPseudoElementBounds-2ZWhj0gz.js";import"./CompositeItem-r96J_nIs.js";import"./makeExternalStore-EsKTsg8A.js";import"./BaseForm-BxHSRI4k.js";import"./ActionButton-uko6JLNE.js";import"./Button-DNd_NMyi.js";import"./SkeletonBar-BWUs5aOa.js";import"./Tooltip-2H7h1LjR.js";import"./info-sign-BXu6jPw1.js";import"./chevron-up-6peZ01KG.js";import"./chevron-down-q0wNWe4O.js";import"./useEventCallback-CPVQW2c6.js";import"./iconLoader-D8YNKSLb.js";import"./CompositeRoot-CroFFjns.js";import"./Switch-De2Oifwr.js";import"./TimePicker-DsfKacdh.js";import"./CollapsiblePanel-CJMTMEOR.js";import"./error-DSDfnydb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DSRao68Z.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
