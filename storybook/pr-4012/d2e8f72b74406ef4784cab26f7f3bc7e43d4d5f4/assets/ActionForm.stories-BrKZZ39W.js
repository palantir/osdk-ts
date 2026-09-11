import{j as t,g as n}from"./iframe-C-mlL1d1.js";import{A as r}from"./action-form-oz-FpQOf.js";import"./preload-helper-BUxDkfWR.js";import"./DropdownField-zYP-JtQg.js";import"./debounce-BS-XCJuC.js";import"./useOsdkClient-BSUtxC4C.js";import"./index-B6OYb_DA.js";import"./Input-DwnchpfY.js";import"./useBaseUiId-BKlcYEBY.js";import"./useControlled-Bq8qBaBJ.js";import"./index-nwLa4JDa.js";import"./index-BMP6rH9L.js";import"./PopoverPopup-B2DKSbuW.js";import"./InternalBackdrop-Bno6e7cF.js";import"./composite-T8-lg8nr.js";import"./index-ChA1IBqb.js";import"./getDisabledMountTransitionStyles-B16n-yTJ.js";import"./ToolbarRootContext-BcwoWGuf.js";import"./tick-DD6qfwut.js";import"./svgIconContainer-DOFv3aDL.js";import"./small-cross-B5y9L61C.js";import"./search-9EoPaIsu.js";import"./cross-bL1PiJj_.js";import"./useValueChanged-Bo5thQ8O.js";import"./getPseudoElementBounds-0jq6bko3.js";import"./CompositeItem-CF65Mtg9.js";import"./makeExternalStore-Dn2EZb1T.js";import"./BaseForm-D9UBLWJQ.js";import"./ActionButton-DhCGZoHD.js";import"./Button-To2COh7T.js";import"./SkeletonBar-Bg2MXuuJ.js";import"./Tooltip-JNvzBEcs.js";import"./info-sign-bJmPx5yv.js";import"./chevron-up-B17yXw4M.js";import"./chevron-down-CfvB8SzD.js";import"./useEventCallback-BrE-PuVs.js";import"./iconLoader-CpVKlLB9.js";import"./CompositeRoot-V7a5vBQK.js";import"./Switch-DWOq5g0p.js";import"./TimePicker-CFCqmCuN.js";import"./CollapsiblePanel-CNKrkZjW.js";import"./error-C0XWqrZ2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DYUhhphE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
