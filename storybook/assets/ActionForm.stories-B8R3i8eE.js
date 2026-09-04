import{j as t,g as n}from"./iframe-DTnMR0KG.js";import{A as r}from"./action-form-6-2dQmJz.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-DgLlFLvX.js";import"./debounce-DTHXiRTi.js";import"./useOsdkClient-DfHmfWgr.js";import"./index-Zau0Jz6Y.js";import"./Input-Cz7lC9dl.js";import"./useBaseUiId-BmGZESq6.js";import"./useControlled-CA00kb2t.js";import"./index-B1hrThmL.js";import"./index-BhpGgSwE.js";import"./PopoverPopup-D5G1tfGx.js";import"./InternalBackdrop-BIV-x21n.js";import"./composite-CHsrvqtn.js";import"./index-QRxEtHvN.js";import"./getDisabledMountTransitionStyles-gB2pWUeL.js";import"./ToolbarRootContext-CVieYv4R.js";import"./tick-B6L2Bte4.js";import"./svgIconContainer-Dax4Obiz.js";import"./small-cross-Nd_mbPyF.js";import"./search-D15ONi4r.js";import"./cross-DMx8fbm0.js";import"./useValueChanged-BpSLdBnW.js";import"./getPseudoElementBounds-x5cxEdZq.js";import"./CompositeItem-Bv-USTDP.js";import"./makeExternalStore-DeAXmBwe.js";import"./BaseForm-CbEwWq4E.js";import"./ActionButton-xXKBDS-d.js";import"./Button-CiLEYhU4.js";import"./SkeletonBar-DT-REwch.js";import"./Tooltip-DMXCxB-I.js";import"./info-sign-B8FEqf0f.js";import"./chevron-up-DFNL29rc.js";import"./chevron-down-CGKhWSQM.js";import"./useEventCallback-BFwQjvEd.js";import"./iconLoader-exXFridX.js";import"./CompositeRoot-D9_TmYWD.js";import"./Switch-tjicggWh.js";import"./TimePicker-BC-Tk-kJ.js";import"./CollapsiblePanel-CnWjjEN1.js";import"./error-CKmqMHYj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSsnJEPw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
