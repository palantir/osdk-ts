import{j as t,g as n}from"./iframe-u7IuoPqS.js";import{A as r}from"./action-form-BLWKAUWe.js";import"./preload-helper-Cj56MnTO.js";import"./DropdownField-BUflj4ln.js";import"./debounce-IxsrJnss.js";import"./useOsdkClient-DIYDfnUU.js";import"./index-BoeQsLqp.js";import"./Input-zHybezEW.js";import"./useBaseUiId-BbTWfvqf.js";import"./useControlled-Bz9okVK9.js";import"./index-Dj4--fik.js";import"./index-D32Dt5Vb.js";import"./PopoverPopup-C4ZXIBTy.js";import"./InternalBackdrop-B6YckNyz.js";import"./composite-CN58o8c7.js";import"./index-BpkgF5rv.js";import"./getDisabledMountTransitionStyles-CiLgfWr9.js";import"./ToolbarRootContext-DD30MDHZ.js";import"./tick-D6HWtL2J.js";import"./svgIconContainer-B7-2IFM8.js";import"./small-cross-DaEkKO8E.js";import"./search-DFsiEXmE.js";import"./cross-C6E9vWMV.js";import"./useValueChanged-IctLC50s.js";import"./getPseudoElementBounds-cKkhOfCl.js";import"./CompositeItem-KI1SOpIs.js";import"./makeExternalStore-BUehwWYZ.js";import"./BaseForm-QEzhW2qM.js";import"./ActionButton-C24F2_0f.js";import"./Button-CvzuhgBL.js";import"./SkeletonBar-D7FcAjBa.js";import"./Tooltip-JWOTsvNT.js";import"./info-sign-BHPys89s.js";import"./chevron-up-D3_AW2ZB.js";import"./chevron-down-J58PJfTC.js";import"./useEventCallback-CKntwpr7.js";import"./iconLoader-B5kYZQyo.js";import"./Switch-CrLRUROR.js";import"./CompositeRoot-lYIF_IB9.js";import"./TimePicker-BBSjNlzs.js";import"./CollapsiblePanel-BXTP71-2.js";import"./error-BqAhf9VK.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-myAMZpO7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
