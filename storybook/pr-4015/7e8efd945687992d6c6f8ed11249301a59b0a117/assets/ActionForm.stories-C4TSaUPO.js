import{j as t,g as n}from"./iframe-B9e47JAt.js";import{A as r}from"./action-form-feEJ-EVc.js";import"./preload-helper-BRB8NOW_.js";import"./DropdownField-rd7rOyCh.js";import"./debounce-CUqU57Yl.js";import"./useOsdkClient-D5uYQrdS.js";import"./index-C_6xtQCD.js";import"./Input-CPGlOkat.js";import"./useBaseUiId-VqyZRI0q.js";import"./useControlled-BBsT5_Nc.js";import"./index-D_iw6W8D.js";import"./index-BBqzf2o3.js";import"./PopoverPopup-Bvuw1Zd4.js";import"./InternalBackdrop-Dfj_iS6F.js";import"./composite-BethEnTN.js";import"./index-DZGqQgW1.js";import"./getDisabledMountTransitionStyles-BAlW402o.js";import"./ToolbarRootContext-DycOOcjn.js";import"./tick-C3sbvhix.js";import"./svgIconContainer-dHjn9I5b.js";import"./small-cross-DPszHJJB.js";import"./search-BejwSAXg.js";import"./cross-ymxOUFGj.js";import"./useValueChanged-vvzPWCqc.js";import"./getPseudoElementBounds-BbyW3FZM.js";import"./CompositeItem-BJasfKU0.js";import"./makeExternalStore-CBsYhUmA.js";import"./BaseForm-DZYvImvy.js";import"./ActionButton-Bfthi2f3.js";import"./Button-z2FVGTG2.js";import"./SkeletonBar-BISleUwK.js";import"./Tooltip-FBqtZC3b.js";import"./info-sign-Np7VFZ-J.js";import"./chevron-up-fXEhmQfk.js";import"./chevron-down-ChPDwIrO.js";import"./useEventCallback-Bg7GLrL9.js";import"./iconLoader-DTMuOuOw.js";import"./CompositeRoot-DTiWRTs2.js";import"./Switch-oh_66igR.js";import"./TimePicker-CGUb2JZq.js";import"./CollapsiblePanel-CcEY7J9b.js";import"./error-pDyLX5xW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CmtdaepB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
