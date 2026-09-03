import{j as t,g as n}from"./iframe-2mhl-t7p.js";import{A as r}from"./action-form-BbdqY8h5.js";import"./preload-helper-2-bSzNok.js";import"./DropdownField-DIj8_iWU.js";import"./debounce-OjmEHQ7v.js";import"./useOsdkClient-DfVrbY5l.js";import"./index-DLwVeEDH.js";import"./Input-I-tMjIxS.js";import"./useBaseUiId-Bh3N5ha8.js";import"./useControlled-DUeDJrRa.js";import"./index-OPTHOOv0.js";import"./index-Bu--4y7I.js";import"./PopoverPopup-DXkzJyEf.js";import"./InternalBackdrop-DXMaIFV2.js";import"./composite-BrIxwnLH.js";import"./index-Tjhqt3OQ.js";import"./getDisabledMountTransitionStyles-DF28N6ey.js";import"./ToolbarRootContext-BOy6SvVL.js";import"./tick-BjY98-U-.js";import"./svgIconContainer-CyuT4HfV.js";import"./small-cross-D0judFsk.js";import"./search-D7Fjt3EB.js";import"./cross-BxadJhVG.js";import"./useValueChanged-C24owQWg.js";import"./getPseudoElementBounds-CLW-4ULW.js";import"./CompositeItem-5J0YQgr0.js";import"./makeExternalStore-D2tKT-RY.js";import"./BaseForm-Juk5jEez.js";import"./ActionButton-Cpo6HN-_.js";import"./Button-UyWDtgNb.js";import"./SkeletonBar-b_mwkMRo.js";import"./Tooltip-DXYTZf_a.js";import"./info-sign-BsIsTWjX.js";import"./chevron-up-ka17QwSZ.js";import"./chevron-down-e01h8LWn.js";import"./useEventCallback-CNFNRke6.js";import"./iconLoader-DYHo7f6o.js";import"./CompositeRoot-OzzZWgB2.js";import"./Switch-DxAjltNT.js";import"./TimePicker-BWt63sGD.js";import"./CollapsiblePanel-BpstIy43.js";import"./error-BiztdMkG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-OSElLXNz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
