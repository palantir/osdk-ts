import{j as t,g as n}from"./iframe-CRRi8SgO.js";import{A as r}from"./action-form-DE2DPuOy.js";import"./preload-helper-BwQis52u.js";import"./DropdownField-K2ZSDodB.js";import"./debounce-CUx7FQzR.js";import"./useOsdkClient-E5LrSb6S.js";import"./index-2tg5-UQV.js";import"./Input-DG2OkDHs.js";import"./useBaseUiId-iEjqlsrm.js";import"./useControlled-CowgUxzg.js";import"./index-uVzecxAq.js";import"./index-BcwD145P.js";import"./PopoverPopup-JUUuLGr6.js";import"./InternalBackdrop-D30RxIiy.js";import"./composite-AZXA_87F.js";import"./index-DxRnE0pO.js";import"./getDisabledMountTransitionStyles-CQJ8ore_.js";import"./ToolbarRootContext-D3Qkj0-s.js";import"./tick-DKaiCuS5.js";import"./svgIconContainer-DTz_qMc2.js";import"./small-cross-5jUutM_4.js";import"./search-BNshWxL3.js";import"./cross-C1gwy4VO.js";import"./useValueChanged-CjTliyXW.js";import"./getPseudoElementBounds-CWEIz1jB.js";import"./CompositeItem-Bioh8Trj.js";import"./makeExternalStore-7XhwS57f.js";import"./BaseForm-dfb37wZ5.js";import"./ActionButton-D6GTAbLZ.js";import"./Button-nDYaCN2P.js";import"./SkeletonBar-CgBZhydk.js";import"./Tooltip-TYF1TzI8.js";import"./info-sign-CFE76CsE.js";import"./chevron-up-C0JBGwEf.js";import"./chevron-down-D4f-osYR.js";import"./useEventCallback-BIZVp9Yo.js";import"./iconLoader-DkhXMRaB.js";import"./Switch-DGl_ytjl.js";import"./CompositeRoot-B7XVMLpE.js";import"./TimePicker-BfzVHqEn.js";import"./CollapsiblePanel-BLx3NSxa.js";import"./error-DJ0QJQKA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-gAZiEnbR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
