import{j as t,g as n}from"./iframe-CA9OR36W.js";import{A as r}from"./action-form-CL9OgJwQ.js";import"./preload-helper-Bon2kKhd.js";import"./DropdownField-CaFeBBw0.js";import"./debounce-B8YN_pz8.js";import"./useOsdkClient-0xBbicQt.js";import"./index-B68sXqkL.js";import"./Input-CexGKOKO.js";import"./useBaseUiId-BgUh3svF.js";import"./useControlled-DI90JDHo.js";import"./index-B8B9EgfF.js";import"./index-y3ZmFdkO.js";import"./PopoverPopup-DmlxI6AN.js";import"./InternalBackdrop-JZwsIqkQ.js";import"./composite-Bz-KrWYH.js";import"./index-B4EpkH5w.js";import"./getDisabledMountTransitionStyles-CYn3iehE.js";import"./ToolbarRootContext-BVT0PB0Z.js";import"./tick-CqxkYZWw.js";import"./svgIconContainer-CeElG9sP.js";import"./small-cross-D_wkcItQ.js";import"./search-BMMtCvCc.js";import"./cross-BEXTKsVw.js";import"./useValueChanged-CkmYGlvP.js";import"./getPseudoElementBounds-BUh3aPLZ.js";import"./CompositeItem-DyzBw55k.js";import"./makeExternalStore-CEy1rwg3.js";import"./BaseForm-Dj6WCFcf.js";import"./ActionButton-COKreHN7.js";import"./Button-CP1_IUal.js";import"./SkeletonBar-CVEQK3PW.js";import"./Tooltip-Bkp5cOWe.js";import"./info-sign-DGNKbcEf.js";import"./chevron-up-BnAp_kTX.js";import"./chevron-down-DnMJpivZ.js";import"./useEventCallback-DIoxvDdl.js";import"./iconLoader-7yT4i-N_.js";import"./CompositeRoot-Bb0diLbS.js";import"./Switch-DP0-dxgB.js";import"./TimePicker-BH1Qp7eX.js";import"./CollapsiblePanel-KgY9Iaos.js";import"./error-COtQT1aa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5BDt541.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
