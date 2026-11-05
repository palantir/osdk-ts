import{j as t,g as n}from"./iframe-BH1__lyA.js";import{A as r}from"./action-form-TWR0AZKp.js";import"./preload-helper-CcoKPVmD.js";import"./DropdownField-C55flNy_.js";import"./debounce-CxGZY-Kb.js";import"./useOsdkClient-BG_667E1.js";import"./index-COEeIEse.js";import"./Input-hpLjYkh3.js";import"./useBaseUiId-CocyTtNa.js";import"./useControlled-DOGwcjPy.js";import"./index-Bb8BpDdy.js";import"./index-C3iKmC6u.js";import"./isObject-neNgVvou.js";import"./InternalBackdrop-Bf6tif4j.js";import"./composite-C3W7I4o1.js";import"./index-BiGG8ZBE.js";import"./getDisabledMountTransitionStyles-DVj5IYmX.js";import"./ToolbarRootContext-CtjitZ_O.js";import"./tick-PqPtFkmd.js";import"./svgIconContainer-wKAlV-si.js";import"./small-cross-CAPHq35Q.js";import"./search-XcMkpgCF.js";import"./cross-BG9CU_85.js";import"./useValueChanged-41xr8V2-.js";import"./getPseudoElementBounds-hmm0rsQk.js";import"./CompositeItem-D0FQTfbI.js";import"./makeExternalStore-CyAT35zT.js";import"./BaseForm-BgU7Vycf.js";import"./ActionButton-C1MKeMQV.js";import"./Button-DfUwNhvG.js";import"./SkeletonBar-BGI6vnAm.js";import"./Tooltip-6cEOUv8s.js";import"./info-sign-CvMdcEzt.js";import"./chevron-up-DsszAedP.js";import"./chevron-down-PjTLl0ZH.js";import"./useEventCallback-CPUVFOtx.js";import"./iconLoader-B3Dk5avk.js";import"./Switch-CEfgVGcG.js";import"./CompositeRoot-Cj5jsPa1.js";import"./TimePicker-DtnEfovb.js";import"./CollapsiblePanel-Dn2DChxX.js";import"./error-Dg7pD9uX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B_AmLLOG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
