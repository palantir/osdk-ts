import{j as t,g as n}from"./iframe-D3l12Tr-.js";import{A as r}from"./action-form-Bcsd3mOy.js";import"./preload-helper-PcHol1Ue.js";import"./DropdownField-CtgPUtSd.js";import"./debounce-BHUK5RQM.js";import"./useOsdkClient-0m55-sBo.js";import"./index-BPiZlFJR.js";import"./Input-BOpnVUAt.js";import"./useBaseUiId-BNJrpCWm.js";import"./useControlled-DWcGrjw6.js";import"./index-3OzYw8WP.js";import"./index-D9TP-Dik.js";import"./PopoverPopup-CkdVrScL.js";import"./InternalBackdrop-ziShhlZl.js";import"./composite-CuNBJcuu.js";import"./index-iaCxRYSZ.js";import"./getDisabledMountTransitionStyles-DsE80_5m.js";import"./ToolbarRootContext-DbokOTWe.js";import"./tick-Dx_ZSNZP.js";import"./svgIconContainer-CrW6rOVr.js";import"./small-cross-BCEWKAxW.js";import"./search-CdpCaKTD.js";import"./cross-C3J0WO3R.js";import"./useValueChanged-CBUdNBJG.js";import"./getPseudoElementBounds-D46F0KDp.js";import"./CompositeItem-BQJ1FDQm.js";import"./makeExternalStore-CvkBuVLJ.js";import"./BaseForm-Bw_HC-NA.js";import"./ActionButton-DCUde49g.js";import"./Button-DSLUEzYm.js";import"./SkeletonBar-DjZej6tn.js";import"./Tooltip-NvOXi5xg.js";import"./info-sign-D5dlKjak.js";import"./chevron-up-i5kv5uz7.js";import"./chevron-down-C6Fq88S4.js";import"./useEventCallback-BeRbrn2J.js";import"./iconLoader-DiuFu7vN.js";import"./CompositeRoot-Bpga13dn.js";import"./Switch-BuuRgRRT.js";import"./TimePicker-CP9txKWB.js";import"./CollapsiblePanel-Dm9vP2Y3.js";import"./error-CKivbg2c.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-62C1cNRI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
