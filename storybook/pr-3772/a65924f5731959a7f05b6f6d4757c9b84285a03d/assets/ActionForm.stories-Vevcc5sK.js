import{j as t,g as n}from"./iframe-5Yblr-NW.js";import{A as r}from"./action-form-Cbw5zjVD.js";import"./preload-helper-Btewyy37.js";import"./DropdownField-DD-cuKca.js";import"./debounce-ZeZufrM2.js";import"./useOsdkClient-CmlS7muK.js";import"./index-DhSuFMxY.js";import"./Input-BOhHHxG9.js";import"./useBaseUiId-CAIjkwyZ.js";import"./useControlled-CA2G7MeH.js";import"./index-CCrwpy9x.js";import"./index-Dy445fm6.js";import"./PopoverPopup-CendakA5.js";import"./InternalBackdrop-CN9NhUNj.js";import"./composite-koNAMkMV.js";import"./index-DhxqCc18.js";import"./getDisabledMountTransitionStyles-7aMNvG5X.js";import"./ToolbarRootContext-Cm13ddJg.js";import"./tick-Bb3E6T37.js";import"./svgIconContainer-C-JdNNRF.js";import"./small-cross-BffCLWOx.js";import"./search-D1uGJSkA.js";import"./cross-AcYogNoU.js";import"./useValueChanged-m37Rn1H6.js";import"./getPseudoElementBounds-BQ6Zc3zn.js";import"./CompositeItem-DP9Ij0vi.js";import"./makeExternalStore-CdX6NCF6.js";import"./BaseForm-D1ktxl0H.js";import"./ActionButton-d6xzy603.js";import"./Button-MK9UA-SJ.js";import"./SkeletonBar-DiM1XXxY.js";import"./Tooltip-0zkur8B8.js";import"./info-sign-BKtiJYiE.js";import"./chevron-up-Dso9Krip.js";import"./chevron-down-CwlGMO0g.js";import"./useEventCallback-CxKTPJzO.js";import"./iconLoader-QsTPWrtx.js";import"./Switch-SEZAGu4o.js";import"./CompositeRoot-B8Tv89gA.js";import"./TimePicker-C_03GMXt.js";import"./CollapsiblePanel-BBxBNB35.js";import"./error-CKIF3yHX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-QG2B1sMI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
