import{j as t,g as n}from"./iframe-DEUQfbyJ.js";import{A as r}from"./action-form-BeMHm4DO.js";import"./preload-helper-DDtbSBML.js";import"./DropdownField-Dlw4EWWr.js";import"./debounce-BX-I8tYB.js";import"./useOsdkClient-CLqlE-Zc.js";import"./index-C6_mThYo.js";import"./Input-Bp3cyvX_.js";import"./useBaseUiId-CRei-m-p.js";import"./useControlled-BF2EiofB.js";import"./index-5cIFHse-.js";import"./index-DlbzGHlu.js";import"./PopoverPopup-Cp92vqrR.js";import"./InternalBackdrop-Aqi47OUJ.js";import"./composite-Bu1RP316.js";import"./index-AzDJyk_j.js";import"./getDisabledMountTransitionStyles-XgqHg06x.js";import"./ToolbarRootContext-D3nYLoXj.js";import"./tick-BxydVJl6.js";import"./svgIconContainer-Cb_T1wEM.js";import"./small-cross-CX9XBHyk.js";import"./search-bO4Ln9fx.js";import"./cross-BJMUt8op.js";import"./useValueChanged-D5ajVfmi.js";import"./getPseudoElementBounds-CuNE1gbu.js";import"./CompositeItem-zXsqXwGS.js";import"./makeExternalStore-DBpHlW_G.js";import"./BaseForm-B42cJbXi.js";import"./ActionButton-CL0HGLP3.js";import"./Button-PnV_trQF.js";import"./SkeletonBar-DvYOZTAf.js";import"./Tooltip-B21lyOBo.js";import"./info-sign-CEfV0c8i.js";import"./chevron-up-CrPG7RZK.js";import"./chevron-down-Dri7QTYH.js";import"./useEventCallback-CRDTuIQt.js";import"./iconLoader-Ckpz67w1.js";import"./Switch-DCTZV4YO.js";import"./CompositeRoot-CMnQGokI.js";import"./TimePicker-CoKXq8XZ.js";import"./CollapsiblePanel-xExM-9G0.js";import"./error-CqWSLLge.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-GkFpiJAY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
