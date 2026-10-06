import{j as t,g as n}from"./iframe-BzqK-L3x.js";import{A as r}from"./action-form-CvovtCnT.js";import"./preload-helper-BKlEVweK.js";import"./DropdownField-ir124Bdv.js";import"./debounce-DAbmYcqu.js";import"./useOsdkClient-BlZCOoSZ.js";import"./index-CAFk7Pq5.js";import"./Input-Cpl2x-wp.js";import"./useBaseUiId-C-iu15of.js";import"./useControlled-C0lOLQQX.js";import"./index-BlWV0Ebq.js";import"./index-DncDRzcB.js";import"./PopoverPopup-C4o9R-HV.js";import"./InternalBackdrop-Cxu2fNBT.js";import"./composite-C9E7l6t3.js";import"./index-iXJXK9FX.js";import"./getDisabledMountTransitionStyles-J5Ooz9tY.js";import"./ToolbarRootContext-k1NWQ1L0.js";import"./tick-fV4K9fjf.js";import"./svgIconContainer-CSL2gIeC.js";import"./small-cross-DSq1Ji79.js";import"./search-D0Jcsyiy.js";import"./cross-Dbky2_5e.js";import"./useValueChanged-DRI8i0U9.js";import"./getPseudoElementBounds-DbK25kQg.js";import"./CompositeItem-BZg5qy-d.js";import"./makeExternalStore-BlKOrYUq.js";import"./BaseForm-DtiHcOfm.js";import"./ActionButton-CBPhJdYI.js";import"./Button-fL19aB2n.js";import"./SkeletonBar-BpdDGpzK.js";import"./Tooltip-BLliu4sM.js";import"./info-sign-R53icmwo.js";import"./chevron-up-DpUThF0A.js";import"./chevron-down-CaTsAVif.js";import"./useEventCallback-D-Sglxt5.js";import"./iconLoader-BAPw7eKW.js";import"./Switch-BetWMSe0.js";import"./CompositeRoot-BDdQN3j1.js";import"./TimePicker-B8U1r4-Y.js";import"./CollapsiblePanel-C6mzDoEl.js";import"./error-CPni5UMa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-o-hRBNLG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
