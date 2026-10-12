import{j as t,g as n}from"./iframe-Bg9VnJHM.js";import{A as r}from"./action-form-DaOYO0cM.js";import"./preload-helper-m1Y4Llv5.js";import"./DropdownField-BLKPA1Pt.js";import"./debounce-GP3wjz1k.js";import"./useOsdkClient-BIv1liKI.js";import"./index-CrJT52a7.js";import"./Input--DCIJnB7.js";import"./useBaseUiId-CYMqm51-.js";import"./useControlled-CD1625aB.js";import"./index-B_gLEwxs.js";import"./index-CG5WNHLL.js";import"./PopoverPopup-chqgajPg.js";import"./InternalBackdrop-CeTJdNJ6.js";import"./composite-CF0kxpXB.js";import"./index-P4YHC7Tt.js";import"./getDisabledMountTransitionStyles-bhI1sbqZ.js";import"./ToolbarRootContext-CPQhz84F.js";import"./tick-y1MkAvoV.js";import"./svgIconContainer-B5yPj85L.js";import"./small-cross-OY9xNRBI.js";import"./search-B3ctgFIA.js";import"./cross-DEexlnSb.js";import"./useValueChanged-DRlc2qqv.js";import"./getPseudoElementBounds-C_Awe47M.js";import"./CompositeItem-Doe6baU0.js";import"./makeExternalStore-CC5GqevO.js";import"./BaseForm-BhieTPSv.js";import"./ActionButton-B6dXjYLE.js";import"./Button-bC6hWzK9.js";import"./SkeletonBar-bBmFROmS.js";import"./Tooltip-2G34amcZ.js";import"./info-sign-BbZs94eO.js";import"./chevron-up-CUz40NU0.js";import"./chevron-down-DMUuxvLr.js";import"./useEventCallback-ZjhazvKS.js";import"./iconLoader-BkMDAb78.js";import"./Switch-Cvdz6myY.js";import"./CompositeRoot-D9oIoUrH.js";import"./TimePicker-plcAFg2G.js";import"./CollapsiblePanel-DSo0JsvZ.js";import"./error-Cbas_szk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-UJO3eOQJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
