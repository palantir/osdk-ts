import{j as t,g as n}from"./iframe-ByxoF4UB.js";import{A as r}from"./action-form-BjcqYBy8.js";import"./preload-helper-CXMZSjtp.js";import"./DropdownField-Cz1Kwyi1.js";import"./debounce-DeIoYJsa.js";import"./useOsdkClient-BdIxFpI6.js";import"./index-87CISW6C.js";import"./Input-DgqlI36T.js";import"./useBaseUiId-uat7AM1o.js";import"./useControlled-Dzpgg9G4.js";import"./index-BjYlodOL.js";import"./index-DbpuMeeP.js";import"./isObject-CdQNKQKv.js";import"./InternalBackdrop-CzcksTqB.js";import"./composite-wjt4XLHj.js";import"./index-C70dk2Pf.js";import"./getDisabledMountTransitionStyles-Dl9xKsbw.js";import"./ToolbarRootContext-Dnh-d6oH.js";import"./tick-csDNEheu.js";import"./svgIconContainer-C7yUgkWe.js";import"./small-cross-SMAuoYrx.js";import"./search-Cs7dO1R3.js";import"./cross-wBV-Qz69.js";import"./useValueChanged-C7klXfZS.js";import"./getPseudoElementBounds-CQCChVBu.js";import"./CompositeItem-CwRzyQgC.js";import"./makeExternalStore-CDdf-Cz-.js";import"./BaseForm-DvX3hgJ2.js";import"./ActionButton-DOmmgWg5.js";import"./Button-GV0a0tCT.js";import"./SkeletonBar-CtkMryCw.js";import"./Tooltip-DpHICHzA.js";import"./info-sign-CK3Yz8eZ.js";import"./chevron-up-BtyWGkC2.js";import"./chevron-down-j_R9vXIX.js";import"./useEventCallback-B_ko9UJi.js";import"./iconLoader-BjmdFTuc.js";import"./Switch-CVEO_Kd9.js";import"./CompositeRoot-DZPHHEso.js";import"./TimePicker-CW_Glk4m.js";import"./CollapsiblePanel-BKL2IXwk.js";import"./error-BsU_wzAp.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-A7PvRLF9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
