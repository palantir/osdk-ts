import{j as t,g as n}from"./iframe-5xumy2lC.js";import{A as r}from"./action-form-_4ZJLI9Z.js";import"./preload-helper-Dnp5J3ho.js";import"./DropdownField-XtSPv3vQ.js";import"./debounce-DZdiCLET.js";import"./useOsdkClient-BvYrFbaa.js";import"./index-OGeocGA5.js";import"./Input-Cpl3LxFn.js";import"./useBaseUiId-CR8wF2TF.js";import"./useControlled-DMTvVf4P.js";import"./index-B83pdUrW.js";import"./index-11qWnEer.js";import"./PopoverPopup-lyWlzaf2.js";import"./InternalBackdrop-C2jSgbPR.js";import"./composite-Dn6Zzxac.js";import"./index-HxIZUXDP.js";import"./getDisabledMountTransitionStyles-SCV6Vods.js";import"./ToolbarRootContext-D1AghJYR.js";import"./tick-DnbT_4uE.js";import"./svgIconContainer-DKJstnRa.js";import"./small-cross-CsEkOEx1.js";import"./search-CRyjUtCH.js";import"./cross-Bww8SGey.js";import"./useValueChanged-CQXaTK7m.js";import"./getPseudoElementBounds-CPzGORpb.js";import"./CompositeItem-FF3KNmJW.js";import"./makeExternalStore-BV9yhKos.js";import"./BaseForm-D1BjK6dY.js";import"./ActionButton-DZ1xi4Ao.js";import"./Button-DIwfO1Nk.js";import"./SkeletonBar-DBfsc1dV.js";import"./Tooltip-BH0oVEvo.js";import"./info-sign-BlwYY4Ad.js";import"./chevron-up-CXAsCKAh.js";import"./chevron-down-De5_JPFZ.js";import"./useEventCallback-CxEaj7x3.js";import"./iconLoader-B0ItBOnu.js";import"./Switch-YnRC0MLm.js";import"./CompositeRoot-DyAPmMMG.js";import"./TimePicker-w_XXBjjJ.js";import"./CollapsiblePanel-B1WD2ZBX.js";import"./error-Dp5nV5lf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CN3Oviww.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
