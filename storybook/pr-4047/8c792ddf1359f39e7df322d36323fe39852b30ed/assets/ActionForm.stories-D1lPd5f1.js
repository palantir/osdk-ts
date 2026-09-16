import{j as t,g as n}from"./iframe-BUf-CLqY.js";import{A as r}from"./action-form-BzEEVA5B.js";import"./preload-helper-riapeqtP.js";import"./DropdownField-Sb9cC2Wv.js";import"./debounce-B-iF24A7.js";import"./useOsdkClient-ctroE3hm.js";import"./index-C_MybgQ3.js";import"./Input-DnSUiNyS.js";import"./useBaseUiId-gpzCx-rm.js";import"./useControlled-DEV21H7B.js";import"./index-CrCMLvTm.js";import"./index-DvN6Rba3.js";import"./PopoverPopup-BlmOLchB.js";import"./InternalBackdrop-C5ZNKnCf.js";import"./composite-ByB7nSsB.js";import"./index-B3D2SnAc.js";import"./getDisabledMountTransitionStyles-BCAFuXq1.js";import"./ToolbarRootContext-tqZMT8gQ.js";import"./tick-B2EggPvK.js";import"./svgIconContainer-DU0Ye5dG.js";import"./small-cross-CSJnPQqY.js";import"./search-pVr5xk4n.js";import"./cross-CGc-Hcb9.js";import"./useValueChanged-MJAskWLg.js";import"./getPseudoElementBounds-DzYucCEu.js";import"./CompositeItem-Cjz_Qy2T.js";import"./makeExternalStore-BFB7Uams.js";import"./BaseForm-BcnWZFwp.js";import"./ActionButton-BBw0Te-_.js";import"./Button-cOSWZtuo.js";import"./SkeletonBar-DFo16lR0.js";import"./Tooltip-Cm_gslQX.js";import"./info-sign-D4E7J__x.js";import"./chevron-up-DOerge61.js";import"./chevron-down-CRvVeW5r.js";import"./useEventCallback-BywkN-Ff.js";import"./iconLoader-BPAVaTeN.js";import"./Switch-CDhL9G5t.js";import"./CompositeRoot-j4f49CaV.js";import"./TimePicker-D7GDeJNI.js";import"./CollapsiblePanel-UPRERRAW.js";import"./error-CZVIneLk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BtUVOcAG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
