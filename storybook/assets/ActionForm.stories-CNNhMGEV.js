import{j as t,g as n}from"./iframe-A3cFOKcN.js";import{A as r}from"./action-form-UiXLHe6e.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-BP589r5j.js";import"./useEventCallback-DcGGf58T.js";import"./isEqual-DQ5slpiQ.js";import"./_baseIsEqual-BLEcImby.js";import"./PopoverPopup-DVMbRx4R.js";import"./InternalBackdrop-CLQ76qla.js";import"./useBaseUiId-f8SNshup.js";import"./composite-CO4egJyo.js";import"./index-iwijohJb.js";import"./index-DC_i6GYR.js";import"./index-CwbCFpmW.js";import"./getDisabledMountTransitionStyles-CrBoc_TZ.js";import"./ToolbarRootContext-iK84Y3hB.js";import"./Select-DHseJ8-J.js";import"./useOsdkClient-BpfPkxQE.js";import"./index-BdisvGQs.js";import"./Input-D8Sxy-AW.js";import"./useControlled-lPa7KKsj.js";import"./tick-DnihwVHh.js";import"./svgIconContainer-Cx_x83Vw.js";import"./small-cross-E1MTPWPe.js";import"./search-CjzZlMWT.js";import"./cross-BpCzBhcu.js";import"./useValueChanged-BSJmwQff.js";import"./getPseudoElementBounds-DaGoMVcW.js";import"./CompositeItem-Brp6gpS6.js";import"./DropdownField-D-Vqq6xe.js";import"./makeExternalStore-1BwNCmLf.js";import"./BaseForm-DDMEVEjJ.js";import"./ActionButton-D1a6Sq8f.js";import"./Button-BioOQfQu.js";import"./SkeletonBar-CFR5RV76.js";import"./Tooltip-CdI3maSw.js";import"./info-sign-DAlCuvrW.js";import"./chevron-up-DTMZmNRU.js";import"./chevron-down-BNVc1UKn.js";import"./iconLoader-BBkDS8z3.js";import"./Switch-C3bmis_W.js";import"./CompositeRoot-Dmcjr0aY.js";import"./TimePicker-CMm8-rye.js";import"./CollapsiblePanel-kcqrPygQ.js";import"./error-oGpxxWLn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BHdLGHRT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ae=["Default"];export{e as Default,ae as __namedExportsOrder,oe as default};
