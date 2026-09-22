import{j as t,g as n}from"./iframe-D6GK-HvP.js";import{A as r}from"./action-form-D2MswSkg.js";import"./preload-helper-BFH31g1G.js";import"./DropdownField-BocBrIvP.js";import"./debounce-Cn0q10eM.js";import"./useOsdkClient-B41IHrdM.js";import"./index-B8Opp0Aq.js";import"./Input-CEqlI-vi.js";import"./useBaseUiId-8c0vpIbF.js";import"./useControlled-DuFMSGQq.js";import"./index-P8xupo9q.js";import"./index-BJnCsIvw.js";import"./PopoverPopup-YhXneox5.js";import"./InternalBackdrop-HHAKufKS.js";import"./composite-CrjUHFOu.js";import"./index-BnURt9pi.js";import"./getDisabledMountTransitionStyles-CPvJg8iL.js";import"./ToolbarRootContext-DGSqIy6x.js";import"./tick-BvUp_jCe.js";import"./svgIconContainer-CSrNgshe.js";import"./small-cross-poVqs8u3.js";import"./search-BIJa8P83.js";import"./cross-Dd2BFVFf.js";import"./useValueChanged-re7ueQpT.js";import"./getPseudoElementBounds-DSxspgXt.js";import"./CompositeItem-XBxLSQGB.js";import"./makeExternalStore-DeRAagV9.js";import"./BaseForm-cwBmZHhE.js";import"./ActionButton-Bub0N-0E.js";import"./Button-oq6XXTdR.js";import"./SkeletonBar-F48-D9OO.js";import"./Tooltip-xOoakjaD.js";import"./info-sign-gFAZl7oY.js";import"./chevron-up-Ql3JU-yU.js";import"./chevron-down-B7x3jao1.js";import"./useEventCallback-SOIvlHLC.js";import"./iconLoader-2dGnooLt.js";import"./Switch-DAm5chp_.js";import"./CompositeRoot-DJ4VfHgE.js";import"./TimePicker-MEcSBDmS.js";import"./CollapsiblePanel-Cj9OvKAd.js";import"./error-CecGBnpf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D368-fbW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
