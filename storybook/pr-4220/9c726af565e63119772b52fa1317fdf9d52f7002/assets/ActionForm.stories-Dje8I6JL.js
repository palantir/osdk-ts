import{j as t,g as n}from"./iframe-C35uGTor.js";import{A as r}from"./action-form-DxDXrBOi.js";import"./preload-helper-F3EFc52l.js";import"./DropdownField-DItTqqK3.js";import"./debounce-Csr1B-r9.js";import"./useOsdkClient-DCbEGB5n.js";import"./index-Dc24XYXq.js";import"./Input-CtTyrSxh.js";import"./useBaseUiId-D-k3osuz.js";import"./useControlled-jxUnEnFw.js";import"./index-DRW9cQCp.js";import"./index-Dgf1QELO.js";import"./PopoverPopup-BOg0baOJ.js";import"./InternalBackdrop-Bs1cpNOT.js";import"./composite-C_6udYfh.js";import"./index-Ca4jpz09.js";import"./getDisabledMountTransitionStyles-Cd_D1FIL.js";import"./ToolbarRootContext-Do8xptiZ.js";import"./tick-CP39Td_J.js";import"./svgIconContainer-BAWtvYDY.js";import"./small-cross-93J9MDZj.js";import"./search-Omk4RfaQ.js";import"./cross-C0_UaP8E.js";import"./useValueChanged-Cx6EL_oM.js";import"./getPseudoElementBounds-BSTYbltd.js";import"./CompositeItem-Cst7sX19.js";import"./makeExternalStore-ROa8cnCZ.js";import"./BaseForm-BzRpVihv.js";import"./ActionButton-DHb-zf9N.js";import"./Button-BAtng8PD.js";import"./SkeletonBar-CPo4uDcQ.js";import"./Tooltip-cI_3eo19.js";import"./info-sign-BPjo4t5m.js";import"./chevron-up-Dv_TX_Gq.js";import"./chevron-down-CyTbMtgy.js";import"./useEventCallback-Cf-0ooWK.js";import"./iconLoader-CnxDhVJA.js";import"./Switch-CGOzUCQi.js";import"./CompositeRoot-mIjcTFAf.js";import"./TimePicker-DbTD22rJ.js";import"./CollapsiblePanel-sHrc_PW6.js";import"./error-BP_tygeo.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BEBYlr-F.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
