import{j as t,g as n}from"./iframe-CQsOKhp1.js";import{A as r}from"./action-form-YhjZ2Dr8.js";import"./preload-helper-QCVrcnhn.js";import"./DropdownField-B28BWeII.js";import"./debounce-XFs4JFin.js";import"./useOsdkClient-GTGeHZWx.js";import"./index-Cfn5HHSj.js";import"./Input-B-8EoJIN.js";import"./useBaseUiId-D94WIrG_.js";import"./useControlled-BDZq96US.js";import"./index-vi3ICmyv.js";import"./index-BeDrSC4b.js";import"./PopoverPopup-C0eQ0X_f.js";import"./InternalBackdrop-nIseF9Rd.js";import"./composite-blMZk3SM.js";import"./index-BLmYOq2n.js";import"./getDisabledMountTransitionStyles-DrVS-sy5.js";import"./ToolbarRootContext-C5qJ1QrY.js";import"./tick-CTireopl.js";import"./svgIconContainer-qEMrR21W.js";import"./small-cross-BAocrqgT.js";import"./search-BBkEdcYr.js";import"./cross-D4ZfN4mf.js";import"./useValueChanged-DLXr5Lvo.js";import"./getPseudoElementBounds-q7Ny88y9.js";import"./CompositeItem-D0ilUgR4.js";import"./makeExternalStore-IEAykGhy.js";import"./BaseForm-lCYfjQP_.js";import"./ActionButton-BNS2aQod.js";import"./Button-CPVt0M1Q.js";import"./SkeletonBar-tDQdvh_L.js";import"./Tooltip-GVNd_jLu.js";import"./info-sign-BK8qtigo.js";import"./chevron-up-ZkvFUe5J.js";import"./chevron-down-BU_Ll11Q.js";import"./useEventCallback-Dg67wvUV.js";import"./iconLoader-CdppdKZf.js";import"./Switch-7wQkiplW.js";import"./CompositeRoot-CAScWFgu.js";import"./TimePicker-DIlfll4p.js";import"./CollapsiblePanel-VrGZTHLb.js";import"./error-B_L6yULe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DTL1iOoJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
