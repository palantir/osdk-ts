import{j as t,g as n}from"./iframe-_L5VjRrt.js";import{A as r}from"./action-form-dsNcO0G6.js";import"./preload-helper-2Th1jMen.js";import"./DropdownField-CSmhnhSy.js";import"./debounce-Bph0YPdb.js";import"./useOsdkClient-Dngj-l1S.js";import"./index-C21TqT6A.js";import"./Input-CBdQ7CLm.js";import"./useBaseUiId-CLf0rG-Y.js";import"./useControlled-BOvXcwwU.js";import"./index-C59OjD3A.js";import"./index-CAYM-DXb.js";import"./PopoverPopup-ejbGtFr0.js";import"./InternalBackdrop-CVobSM-Y.js";import"./composite-BKH4xaR3.js";import"./index-BWg3v_Cb.js";import"./getDisabledMountTransitionStyles-B0LZucnd.js";import"./ToolbarRootContext-DgA7tKZV.js";import"./tick-3efxYCqZ.js";import"./svgIconContainer-BHdOMCzo.js";import"./small-cross-DCVV53M4.js";import"./search-R2xVmJoP.js";import"./cross-CeGchC5k.js";import"./useValueChanged-CT291c3y.js";import"./getPseudoElementBounds-dkD9ei8K.js";import"./CompositeItem-CGUDnveH.js";import"./makeExternalStore-T_eRZyL4.js";import"./BaseForm-Ct3sJhUF.js";import"./ActionButton-BNAbHBhx.js";import"./Button-3S271LoP.js";import"./SkeletonBar-DCXS-4Lv.js";import"./Tooltip-B51qexXS.js";import"./info-sign-BDLvKL09.js";import"./chevron-up-c3mcCtyQ.js";import"./chevron-down-C1AwO93k.js";import"./useEventCallback-CCz9s_PD.js";import"./iconLoader-7hy-I7on.js";import"./Switch-p8UFWjTN.js";import"./CompositeRoot-BV-YfMJK.js";import"./TimePicker-B9X2L64L.js";import"./CollapsiblePanel-dyMCKZQz.js";import"./error-CIgeHO6b.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Clckg0kN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
