import{j as t,g as n}from"./iframe-CNaoCaD-.js";import{A as r}from"./action-form-D1GlMapO.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BSsZW_49.js";import"./debounce-9NycXt_B.js";import"./useOsdkClient-D_c3zo70.js";import"./index-D0c6s8Wh.js";import"./Input-BBHZGssD.js";import"./useBaseUiId-BLzWWyTo.js";import"./useControlled-DxXwsmI6.js";import"./index-CO70LKAy.js";import"./index-bkL56BYD.js";import"./PopoverPopup-BPcvF2qn.js";import"./InternalBackdrop-DyZTC2Np.js";import"./composite-DI12gblL.js";import"./index-CSDWflQO.js";import"./getDisabledMountTransitionStyles-D7USJ7g2.js";import"./ToolbarRootContext-C6YFR30y.js";import"./tick-DOziRHZF.js";import"./svgIconContainer-DMxMunFc.js";import"./small-cross-C9OctJ-L.js";import"./search-ORWNQV-Y.js";import"./cross-BAAhVfqY.js";import"./useValueChanged-utG5gEoU.js";import"./getPseudoElementBounds-CYw6K46U.js";import"./CompositeItem-DGSUi3Oj.js";import"./makeExternalStore-DdM6Dx34.js";import"./BaseForm-yaJBq6xD.js";import"./ActionButton-ZoDGCRxC.js";import"./Button-DnaSBDda.js";import"./SkeletonBar-CtWeGlbs.js";import"./Tooltip-Dt3tWdRA.js";import"./info-sign-D-jW2jRf.js";import"./chevron-up-etrIxmlI.js";import"./chevron-down-LMtkkQTV.js";import"./useEventCallback-BrzJPUe-.js";import"./iconLoader-BMHvueG8.js";import"./Switch-BsbLZWd1.js";import"./CompositeRoot-Bfo96CA0.js";import"./TimePicker-6h0gIily.js";import"./CollapsiblePanel-DOMeHPZv.js";import"./error-CEVIMozV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C088wNt_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
