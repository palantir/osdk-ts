import{j as t,g as n}from"./iframe-DuKb9b-g.js";import{A as r}from"./action-form-D03ZakiG.js";import"./preload-helper-CmBjm-d1.js";import"./DropdownField-B1euX2XM.js";import"./debounce-BTQaBQTc.js";import"./useOsdkClient-3LBkaWIm.js";import"./index-CBTF18Y_.js";import"./Input-Cn1-EvYg.js";import"./useBaseUiId-NQWDjIJs.js";import"./useControlled-Cq3GxJKq.js";import"./index-COA_z0C-.js";import"./index-rSrw9_A6.js";import"./PopoverPopup-C0gNO46d.js";import"./InternalBackdrop-D4gOUPe7.js";import"./composite-DGpno2Zs.js";import"./index-LK-vvshS.js";import"./getDisabledMountTransitionStyles-CE96oCFC.js";import"./ToolbarRootContext-B06gfqsL.js";import"./tick-ozEvHoG_.js";import"./svgIconContainer-D2G78cDZ.js";import"./small-cross-XPwGc81k.js";import"./search-DorovZ71.js";import"./cross-BuyNDB8o.js";import"./useValueChanged-B0eTT0HH.js";import"./getPseudoElementBounds-I2seTDJA.js";import"./CompositeItem-nEfjeVhf.js";import"./makeExternalStore-Ch4HrWdd.js";import"./BaseForm-DGmPPLBl.js";import"./ActionButton-B90I1M0m.js";import"./Button--z0-7-P6.js";import"./SkeletonBar-CyJQaH3P.js";import"./Tooltip-LmxDT9eD.js";import"./info-sign-Bb0nCuEL.js";import"./chevron-up-BbZJaETR.js";import"./chevron-down-Cn1BrU6q.js";import"./useEventCallback-Du_jiSTN.js";import"./iconLoader-ClWgOWiE.js";import"./CompositeRoot-BpV2z7hj.js";import"./Switch-DIGl-E7u.js";import"./TimePicker-DhFFzZ0t.js";import"./CollapsiblePanel-BCVzQFnZ.js";import"./error-F4sFwWip.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-HiGGTrX-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
