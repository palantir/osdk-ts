import{j as t,g as n}from"./iframe-ue9bX3Iv.js";import{A as r}from"./action-form-3iSFIbCc.js";import"./preload-helper-C3Wvffv1.js";import"./DropdownField-B5Tdlyhu.js";import"./debounce-BCtPQVA_.js";import"./useOsdkClient-nZ1mPAY3.js";import"./index-IcNnhROh.js";import"./Input-CRAGtCFZ.js";import"./useBaseUiId-cGzETZoK.js";import"./useControlled-yUsh7HNb.js";import"./index-DPlEBhdl.js";import"./index-5SMiFPmq.js";import"./PopoverPopup-Bxk_FVO9.js";import"./InternalBackdrop-Ceyi0BuR.js";import"./composite-BhWJUn6b.js";import"./index-Cy72BvTv.js";import"./getDisabledMountTransitionStyles-CPFTS2y4.js";import"./ToolbarRootContext-C5ppRaBq.js";import"./tick-DxPhMwVy.js";import"./svgIconContainer-BZgEOtnq.js";import"./small-cross-MncGjMz9.js";import"./search-Bid3yFjL.js";import"./cross-U1hVGtzD.js";import"./useValueChanged-CKuEXHBa.js";import"./getPseudoElementBounds-Vjgoy1VG.js";import"./CompositeItem-IO3qOv2K.js";import"./makeExternalStore-DCh8aI2s.js";import"./BaseForm-yKYk6o2w.js";import"./ActionButton-D10j_WSJ.js";import"./Button-C0tazeAS.js";import"./SkeletonBar-CC6lvuY_.js";import"./Tooltip-CMtE3LQx.js";import"./info-sign-Bw91j-ri.js";import"./chevron-up-STR6iC5E.js";import"./chevron-down-97bKRBG5.js";import"./useEventCallback-BH9nt9-5.js";import"./iconLoader-Ct_Uz_9t.js";import"./Switch-D6Serw4U.js";import"./CompositeRoot-BVs8gZ8W.js";import"./TimePicker-Cp6pahkm.js";import"./CollapsiblePanel-BJsJTyii.js";import"./error-Bv66Pch2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DwrnzR-_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
