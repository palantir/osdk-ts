import{j as t,g as n}from"./iframe-CHFOhFuc.js";import{A as r}from"./action-form-Cu5XLDN1.js";import"./preload-helper-B-1rSRgY.js";import"./DropdownField-CwxAz57O.js";import"./debounce-BuVF__lb.js";import"./useOsdkClient-Ct6LLa9L.js";import"./index-BpX6hENj.js";import"./Input-D8YBib2L.js";import"./useBaseUiId-CpuSZ-O9.js";import"./useControlled-Cnl8z_DZ.js";import"./index-DQOrZvkv.js";import"./index-BvRLFMPY.js";import"./PopoverPopup-DHn0uRpX.js";import"./InternalBackdrop-D25Nk_lQ.js";import"./composite-C909Fk53.js";import"./index-DjQ198rg.js";import"./getDisabledMountTransitionStyles-cR1rxtQJ.js";import"./ToolbarRootContext-D3CnJ-Kn.js";import"./tick-CVF34xif.js";import"./svgIconContainer-zzwTq_t7.js";import"./small-cross-Bo2NjBLu.js";import"./search-Ct1jR5-1.js";import"./cross-CLtam5MT.js";import"./useValueChanged-B0fjg5Tm.js";import"./getPseudoElementBounds-FCd8iOYs.js";import"./CompositeItem-V52V_N8R.js";import"./makeExternalStore-CXAxXc_Y.js";import"./BaseForm-BoS-4M6Q.js";import"./ActionButton-DCWXOHbb.js";import"./Button-DHQU-3rC.js";import"./SkeletonBar-Ptzyivem.js";import"./Tooltip-tSbifett.js";import"./info-sign-B4Mks9i7.js";import"./chevron-up-C_rJHoy0.js";import"./chevron-down-DDx-Wnyx.js";import"./useEventCallback-7PhX1npr.js";import"./iconLoader-xZ-sXmw0.js";import"./CompositeRoot-WrvYFshd.js";import"./Switch-Xt2qO9nG.js";import"./TimePicker-DASji2Uc.js";import"./CollapsiblePanel-qGGyMRYk.js";import"./error-2828ta47.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BHwUIoHR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
