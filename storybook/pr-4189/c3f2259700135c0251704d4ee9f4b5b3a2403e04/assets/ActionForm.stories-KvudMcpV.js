import{j as t,g as n}from"./iframe-Cuh-yC9g.js";import{A as r}from"./action-form-PHfoBOwC.js";import"./preload-helper-Co1xc5DN.js";import"./DropdownField-jqoPL6Hs.js";import"./debounce-CQG_FcjT.js";import"./useOsdkClient-0vYp7gi6.js";import"./index-DWUob4WV.js";import"./Input-LmihMdos.js";import"./useBaseUiId-Czk2OPtm.js";import"./useControlled-7KsxQpTK.js";import"./index-3lcaIBPr.js";import"./index-wPALhrfN.js";import"./PopoverPopup-COd_DNnA.js";import"./InternalBackdrop-C4Ajfn1E.js";import"./composite-BCtP-Clm.js";import"./index-JbFM852B.js";import"./getDisabledMountTransitionStyles-Cia47Kmq.js";import"./ToolbarRootContext-D0bBBUnA.js";import"./tick-0nIkpLfk.js";import"./svgIconContainer-GL6glClw.js";import"./small-cross-DgWoWQa5.js";import"./search-B0_wC5Cw.js";import"./cross-BjB39GcZ.js";import"./useValueChanged-DOSJ9FDd.js";import"./getPseudoElementBounds-9rPRi8u7.js";import"./CompositeItem-BJ_X-ts8.js";import"./makeExternalStore-BdhPqHms.js";import"./BaseForm-BwWkrZJI.js";import"./ActionButton-DA-iy0n8.js";import"./Button-B6v4dcvN.js";import"./SkeletonBar-AJdj2On-.js";import"./Tooltip-DSUYLnJr.js";import"./info-sign-DKFO1VWe.js";import"./chevron-up-DWz3mbq0.js";import"./chevron-down-Bl1gRnzA.js";import"./useEventCallback-DUCHvBP3.js";import"./iconLoader-C9ozQ_53.js";import"./Switch-BkYnjYRj.js";import"./CompositeRoot-CECaS8CW.js";import"./TimePicker-iS1NGJi8.js";import"./CollapsiblePanel-DzmzUJIf.js";import"./error-0z2irTLT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-2__WXqYS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
