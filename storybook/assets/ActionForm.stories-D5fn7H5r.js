import{j as t,g as n}from"./iframe-DAHj67mi.js";import{A as r}from"./action-form-0IFI2s8z.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-C7UP5udY.js";import"./useEventCallback-B1gHHm4j.js";import"./isEqual-B_3QYyrr.js";import"./_baseIsEqual-1hDRXEi_.js";import"./PopoverPopup-UX8-cCYh.js";import"./InternalBackdrop-BZgwOFWU.js";import"./useBaseUiId-C8n2JbgI.js";import"./composite-BjTY1dgM.js";import"./index-B2dUJ_mM.js";import"./index-BOzM1AoU.js";import"./index-BoBv6Oh5.js";import"./getDisabledMountTransitionStyles-DLcvNa0d.js";import"./ToolbarRootContext-D0N5miEu.js";import"./Select-D2Soavwn.js";import"./useOsdkClient-DSpnlmuA.js";import"./index-jtr0hjnV.js";import"./Input-BqNeXUfN.js";import"./useControlled-wTpIHr1L.js";import"./tick-tJ7_3KbK.js";import"./svgIconContainer-R6fLsDAI.js";import"./small-cross-DGpFJ7WA.js";import"./search-DlMMVas5.js";import"./cross-BvmJ2kUU.js";import"./useValueChanged-K_Rdj1zl.js";import"./getPseudoElementBounds-DVEYMREJ.js";import"./CompositeItem-ylUTChcd.js";import"./DropdownField-FJYu2uWa.js";import"./makeExternalStore-CclpbdPf.js";import"./BaseForm-CRKxyBgA.js";import"./ActionButton-bdH5SZoM.js";import"./Button-D3ukGqLV.js";import"./SkeletonBar-DhFCtk-U.js";import"./Tooltip-DigvRnDG.js";import"./info-sign-CUCn8Xf9.js";import"./chevron-up-DmqXspWv.js";import"./chevron-down-CDzCov52.js";import"./iconLoader-CJ052seW.js";import"./Switch-9BznIMTy.js";import"./CompositeRoot-CqS98yWV.js";import"./TimePicker-BuQtrMIJ.js";import"./CollapsiblePanel-rgTr9UFW.js";import"./error-kGSlj1sb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DRVx42Qf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const oe={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
