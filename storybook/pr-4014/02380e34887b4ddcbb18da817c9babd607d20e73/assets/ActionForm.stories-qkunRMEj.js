import{j as t,g as n}from"./iframe-DVYiR4EF.js";import{A as r}from"./action-form-CpxY_UBF.js";import"./preload-helper-Dxk87wO7.js";import"./DropdownField-CbgRYZRX.js";import"./debounce-Dh9coxFN.js";import"./useOsdkClient-IgD677I1.js";import"./index-BHhu1kj6.js";import"./Input-DXhcExkR.js";import"./useBaseUiId-zYEXD-mx.js";import"./useControlled-DcB6TY6E.js";import"./index-DIoaGE9P.js";import"./index-yOUNHIkz.js";import"./PopoverPopup-DPI-Oc34.js";import"./InternalBackdrop-45RWgNJh.js";import"./composite-C7v8Qqey.js";import"./index-D7AKpZwx.js";import"./getDisabledMountTransitionStyles-DLwvsE1G.js";import"./ToolbarRootContext-DQtyGnCu.js";import"./tick-HHHCZX4A.js";import"./svgIconContainer-DdXGKFJg.js";import"./small-cross-Dlrwx8kU.js";import"./search-CYXYxyYM.js";import"./cross-Clyp6xFe.js";import"./useValueChanged-DGoAYXNJ.js";import"./getPseudoElementBounds-CjM1EGF3.js";import"./CompositeItem-DR-oTCoP.js";import"./makeExternalStore-CYe5TaAL.js";import"./BaseForm-BAYqI_c0.js";import"./ActionButton-BPkJKo5R.js";import"./Button-B_OVrsNR.js";import"./SkeletonBar-DklFIqEo.js";import"./Tooltip-B5IkKrvL.js";import"./info-sign-D1eOUy4F.js";import"./chevron-up-X87KG-YV.js";import"./chevron-down-DS4rSc_R.js";import"./useEventCallback-CL7T-E8E.js";import"./iconLoader-D-ZzYtES.js";import"./CompositeRoot-BrWZddBx.js";import"./Switch-CHPzj0yO.js";import"./TimePicker-DY5cezqb.js";import"./CollapsiblePanel-CVyMq5pH.js";import"./error-BkP1c58R.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B0MkRVBC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
