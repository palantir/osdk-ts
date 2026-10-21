import{j as t,g as n}from"./iframe-D_14QzXp.js";import{A as r}from"./action-form-CUKY5aR2.js";import"./preload-helper-COqd9mn5.js";import"./DropdownField-BNL5kW_g.js";import"./debounce-B9L9eTna.js";import"./useOsdkClient-8tDFdRkv.js";import"./index-dgvA8TZ9.js";import"./Input-DorH3bhS.js";import"./useBaseUiId-CG8eOpE9.js";import"./useControlled-DcIpQ5so.js";import"./index-Df1oZaSN.js";import"./index-Ccw16ZEo.js";import"./PopoverPopup-Bl0qtEmP.js";import"./InternalBackdrop-BYhYbM2Q.js";import"./composite-DPicY4x_.js";import"./index-DHYIK6M_.js";import"./getDisabledMountTransitionStyles-BCowyj6U.js";import"./ToolbarRootContext-q675nIs9.js";import"./tick-fofCPZ0i.js";import"./svgIconContainer-DLS8mbZw.js";import"./small-cross-65_SY4Sp.js";import"./search-kgDQ-7P8.js";import"./cross-CugZ9ecx.js";import"./useValueChanged-CZIdWuf_.js";import"./getPseudoElementBounds-Cxr1AJsy.js";import"./CompositeItem-CEQFfLmp.js";import"./makeExternalStore-C2nXARRC.js";import"./BaseForm-CjXy7qdK.js";import"./ActionButton-sw6PFJQG.js";import"./Button-emDgWZB-.js";import"./SkeletonBar-CWcGqnRh.js";import"./Tooltip-BhEyvTdz.js";import"./info-sign-BVZ1F-Y3.js";import"./chevron-up-DdereFNN.js";import"./chevron-down-0GDoiAFe.js";import"./useEventCallback-DVpXlI6n.js";import"./iconLoader-Cdvs3JTb.js";import"./Switch-CxssjJtx.js";import"./CompositeRoot-BFjQMxRy.js";import"./TimePicker-QxxjKw2j.js";import"./CollapsiblePanel-Dti1PGZr.js";import"./error-3iJhsGJG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CCrpbMke.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
