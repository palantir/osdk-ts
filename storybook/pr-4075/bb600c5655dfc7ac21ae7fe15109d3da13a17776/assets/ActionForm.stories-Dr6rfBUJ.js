import{j as t,g as n}from"./iframe-C23O6NDH.js";import{A as r}from"./action-form-D_30K44N.js";import"./preload-helper-C6QLezK5.js";import"./DropdownField-BxoAoPOe.js";import"./debounce-CCGBaTA1.js";import"./useOsdkClient-BejxCbr-.js";import"./index-X4EzQgBc.js";import"./Input-Cu2UirtN.js";import"./useBaseUiId-Dfg7k-g6.js";import"./useControlled-nFjFO6Es.js";import"./index-CHGHLDNb.js";import"./index-CBgO55BO.js";import"./PopoverPopup-BppHB-6W.js";import"./InternalBackdrop-DdCETBpF.js";import"./composite-BUM50nEL.js";import"./index-73jMkPGq.js";import"./getDisabledMountTransitionStyles-B1tcXlHO.js";import"./ToolbarRootContext-CCDSBvgO.js";import"./tick-BXFU__eB.js";import"./svgIconContainer-CspjXoBM.js";import"./small-cross-DA8JVgsF.js";import"./search-Bu-mkKdB.js";import"./cross-PRFvDACG.js";import"./useValueChanged-BcKOfJbz.js";import"./getPseudoElementBounds-Buqsg_Bi.js";import"./CompositeItem-MVk24y7z.js";import"./makeExternalStore-B3L7DbLk.js";import"./BaseForm-BIls0659.js";import"./ActionButton-IxViueDP.js";import"./Button-jRCHNGhX.js";import"./SkeletonBar-6dfzwPVF.js";import"./Tooltip-BrDwoO8-.js";import"./info-sign-Byczl2fP.js";import"./chevron-up-BE5pmvVV.js";import"./chevron-down-BjdzvOWL.js";import"./useEventCallback-BABfShjI.js";import"./iconLoader-BduV1R9h.js";import"./Switch-SQEJjOxE.js";import"./CompositeRoot-6PkP2U4N.js";import"./TimePicker-Cl2Ed3Uv.js";import"./CollapsiblePanel-q28OJpfM.js";import"./error-OxS9nPVJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B-NwsNBy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
