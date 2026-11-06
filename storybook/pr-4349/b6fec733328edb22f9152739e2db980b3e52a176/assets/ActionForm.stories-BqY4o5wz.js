import{j as t,g as n}from"./iframe-6rmEYQ4q.js";import{A as r}from"./action-form-6z1XgOp0.js";import"./preload-helper-CQFwNwom.js";import"./DropdownField-BIgaE5lU.js";import"./debounce-fovSx1xM.js";import"./useOsdkClient-DmHqy9pL.js";import"./index-DHYmSSVn.js";import"./Input-DHCuHilz.js";import"./useBaseUiId-DutMLbwr.js";import"./useControlled-HeurI7_b.js";import"./index-DTFmmgtm.js";import"./index--7GUs8pc.js";import"./isObject-SiaksReL.js";import"./InternalBackdrop-DgOuuiso.js";import"./composite-6RMh68ZK.js";import"./index-Cushj5su.js";import"./getDisabledMountTransitionStyles-B3ra-kQw.js";import"./ToolbarRootContext-4ImLkhxO.js";import"./tick-qf7hH7wH.js";import"./svgIconContainer-BTOejcjp.js";import"./small-cross-CHICJ2XI.js";import"./search-BHn0KTJN.js";import"./cross-D-Hg8nzG.js";import"./useValueChanged-DNZRcsJs.js";import"./getPseudoElementBounds-DlcOVO-y.js";import"./CompositeItem-DuBtWhAd.js";import"./makeExternalStore-D4L5Wrb5.js";import"./BaseForm-BmoBbmiX.js";import"./ActionButton-BV9UuRgT.js";import"./Button-B5wqsid8.js";import"./SkeletonBar-DOUZ-mE8.js";import"./Tooltip-C2F6IU3H.js";import"./info-sign-CWocAypc.js";import"./chevron-up-D9NgL-aI.js";import"./chevron-down-DJM0Z3o9.js";import"./useEventCallback-Byxoa0dh.js";import"./iconLoader-RBPez_l1.js";import"./Switch-B-tcH8Lf.js";import"./CompositeRoot-gNHx4QdY.js";import"./TimePicker-BwL3sJD0.js";import"./CollapsiblePanel-CDBbZZyU.js";import"./error-D2aG_W_b.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-23-xBZ5M.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
