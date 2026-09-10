import{j as t,g as n}from"./iframe-DCMw_0TW.js";import{A as r}from"./action-form-3Dtsgt16.js";import"./preload-helper-nzNuDSAv.js";import"./DropdownField-5tJgHFby.js";import"./debounce-B-rnFVFg.js";import"./useOsdkClient-wDDgD5tN.js";import"./index-tQLNAeTv.js";import"./Input-Ct67CszU.js";import"./useBaseUiId-D30K99H9.js";import"./useControlled-glFhf02I.js";import"./index-Dk4-JQXx.js";import"./index-Xc5_iOPx.js";import"./PopoverPopup-D-oy58Yh.js";import"./InternalBackdrop-BB5KU1pv.js";import"./composite-BEUqKf6u.js";import"./index-DGqnKBQq.js";import"./getDisabledMountTransitionStyles-DePFxOFo.js";import"./ToolbarRootContext-DAgpPS14.js";import"./tick-DWb-Pi96.js";import"./svgIconContainer-BuqYbofr.js";import"./small-cross-bQOb3ZfY.js";import"./search-3SCesORj.js";import"./cross-orOEa1Of.js";import"./useValueChanged-BExaB3du.js";import"./getPseudoElementBounds-DTBnQrKu.js";import"./CompositeItem-DAFo6DYX.js";import"./makeExternalStore-CaxsUcIE.js";import"./BaseForm-H1lZUUm9.js";import"./ActionButton-CqBl5clt.js";import"./Button-DrHRwo7L.js";import"./SkeletonBar-DGgKxMsR.js";import"./Tooltip-BIR0svY2.js";import"./info-sign-CmIBszsr.js";import"./chevron-up-DkSA6y60.js";import"./chevron-down-CwIymZzb.js";import"./useEventCallback-Dlb3_nai.js";import"./iconLoader-CTNqDxIH.js";import"./CompositeRoot-DUYZWqgF.js";import"./Switch-CTGIV27h.js";import"./TimePicker-Bgj6ptoU.js";import"./CollapsiblePanel-udeHAS2R.js";import"./error-CThwrDAU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cz4cYYHT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
