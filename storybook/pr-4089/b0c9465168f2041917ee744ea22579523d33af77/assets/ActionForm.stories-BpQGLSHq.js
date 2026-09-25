import{j as t,g as n}from"./iframe-DD6NR-qI.js";import{A as r}from"./action-form-CkZlznR5.js";import"./preload-helper-BhGDsbwZ.js";import"./DropdownField-B7GAXqTH.js";import"./debounce-BJkEGDvv.js";import"./useOsdkClient-1ZwklRfn.js";import"./index-BtwIbT4Z.js";import"./Input-B4mWWySb.js";import"./useBaseUiId-CEPmW6Nu.js";import"./useControlled-DC0uCH14.js";import"./index--itJRcDL.js";import"./index-Bmje4swP.js";import"./PopoverPopup-BSa4WLOz.js";import"./InternalBackdrop-BIHQ6bnZ.js";import"./composite-DjgEQHpT.js";import"./index-Dl1GTjEV.js";import"./getDisabledMountTransitionStyles-CnHaSZHM.js";import"./ToolbarRootContext-BShu1aKH.js";import"./tick-C4mma9FJ.js";import"./svgIconContainer-DsJ3_wfj.js";import"./small-cross-BvQxV8Bl.js";import"./search-DLBTsCln.js";import"./cross-CLF7AClR.js";import"./useValueChanged-CeUE21rU.js";import"./getPseudoElementBounds-DWTs3Yu-.js";import"./CompositeItem-CNTLKPeP.js";import"./makeExternalStore-opb-uo7f.js";import"./BaseForm-V-xMTKRh.js";import"./ActionButton-BYk1HVK3.js";import"./Button-C_-ilsri.js";import"./SkeletonBar-BEg-pQ3F.js";import"./Tooltip-BCP2fXUZ.js";import"./info-sign-Y5eGxCFN.js";import"./chevron-up-Cx63se0N.js";import"./chevron-down-IfIl88XA.js";import"./useEventCallback-DyKovpbC.js";import"./iconLoader-ZJrOiDq1.js";import"./Switch-DrWPY1RK.js";import"./CompositeRoot-DpZT-M0d.js";import"./TimePicker-nESC1yMy.js";import"./CollapsiblePanel-BVS5L9rq.js";import"./error-DRCC_cDq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5Oq6SEB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
