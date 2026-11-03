import{j as t,g as n}from"./iframe-BZrHCCWD.js";import{A as r}from"./action-form-N4XAjXux.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-JLZ1LJgg.js";import"./debounce-RV0_NzqU.js";import"./useOsdkClient-aEZ1eEbo.js";import"./index-BbBwfHG7.js";import"./Input-3V3vHuAM.js";import"./useBaseUiId-BS5c_qfo.js";import"./useControlled-CGFBoHyX.js";import"./index-D_mlxwiI.js";import"./index-BoSlXWJn.js";import"./PopoverPopup-CGVwQ1cR.js";import"./InternalBackdrop-C26unrC9.js";import"./composite-B06N-5LO.js";import"./index-aQp0TPl5.js";import"./getDisabledMountTransitionStyles-BMID7lxe.js";import"./ToolbarRootContext-HdK5b1bg.js";import"./tick-DOuBmutW.js";import"./svgIconContainer-DvKRTV-T.js";import"./small-cross-o2gbtp7v.js";import"./search-PU-jJ5zI.js";import"./cross-CQg-zCtt.js";import"./useValueChanged-DanfgwZ-.js";import"./getPseudoElementBounds-C0AdvYra.js";import"./CompositeItem-DdzLCYzu.js";import"./makeExternalStore-Dg_VN0ud.js";import"./BaseForm-B4-ZGpwJ.js";import"./ActionButton-C6T7h1rl.js";import"./Button-JGRhrjvL.js";import"./SkeletonBar-CbuDz3oc.js";import"./Tooltip-CPptvKhe.js";import"./info-sign-bx2nSy0U.js";import"./chevron-up-DMTbCHUh.js";import"./chevron-down-BCopBMR6.js";import"./useEventCallback-Bz01pljJ.js";import"./iconLoader-DPCNU-ac.js";import"./Switch-BrqzcK2v.js";import"./CompositeRoot-Wu9GxS0l.js";import"./TimePicker-B3-wgA0l.js";import"./CollapsiblePanel-BrYWz7mk.js";import"./error-D2Jou9ns.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DyjVeD0H.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
