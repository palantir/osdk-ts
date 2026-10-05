import{j as t,g as n}from"./iframe-iZnS8oEd.js";import{A as r}from"./action-form-CMMNWd5o.js";import"./preload-helper-Bp14nz6B.js";import"./DropdownField-0N17NynR.js";import"./debounce-C0yUuuvl.js";import"./useOsdkClient-EkE0pn24.js";import"./index-DYpyIwVE.js";import"./Input-DJavpeQK.js";import"./useBaseUiId-30R3WmkM.js";import"./useControlled-D6M_jpuK.js";import"./index-BGV0iA7n.js";import"./index-lcQmyE2o.js";import"./PopoverPopup-CLC1eyIN.js";import"./InternalBackdrop-DkYxAsCO.js";import"./composite-DFXKizFH.js";import"./index-CF3zpfbh.js";import"./getDisabledMountTransitionStyles-qNwcN3KE.js";import"./ToolbarRootContext-Da2ttLiC.js";import"./tick-HBQstKrv.js";import"./svgIconContainer-CQ9YnN-K.js";import"./small-cross-LlyJGW73.js";import"./search-VBwZcVe4.js";import"./cross-CwJuB6vr.js";import"./useValueChanged-Dy1WlJh-.js";import"./getPseudoElementBounds-C9heIyNM.js";import"./CompositeItem-wRG5nrDT.js";import"./makeExternalStore-RezbOIS0.js";import"./BaseForm-cZTsLjkt.js";import"./ActionButton-n6yDW2MN.js";import"./Button-UwlMUZt9.js";import"./SkeletonBar-B4WtYr-D.js";import"./Tooltip-DRVdX3dm.js";import"./info-sign-Dyi-L9z_.js";import"./chevron-up-BXRLDr4e.js";import"./chevron-down-BCGqeKWb.js";import"./useEventCallback-BJQUbbjw.js";import"./iconLoader-CcTvRb2A.js";import"./Switch-BzMLTiEQ.js";import"./CompositeRoot-CANX6QIC.js";import"./TimePicker-DXF4Rv-1.js";import"./CollapsiblePanel-DXxFmeha.js";import"./error-D6yePDbl.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B-D7eEQx.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
