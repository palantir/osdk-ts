import{j as t,g as n}from"./iframe-Dnd58nRU.js";import{A as r}from"./action-form-CC2Z3H0O.js";import"./preload-helper-Bacdch3y.js";import"./DropdownField-BGwjtvIi.js";import"./debounce-Dw-OFY0_.js";import"./useOsdkClient-DeyorYS6.js";import"./index-hYlZ2w7K.js";import"./Input-C8T687yb.js";import"./useBaseUiId-QDvzqdbv.js";import"./useControlled-DMuhh4MF.js";import"./index-DlC_w9JR.js";import"./index-DuJ2F_r3.js";import"./PopoverPopup-DEFTS9RR.js";import"./InternalBackdrop-BaUHehEq.js";import"./composite-Cv9S1-0v.js";import"./index-DtRvjs5i.js";import"./getDisabledMountTransitionStyles-Bh1xaRIU.js";import"./ToolbarRootContext-DfzKIhjA.js";import"./tick-Cx8bHHej.js";import"./svgIconContainer-BHVYL7Dt.js";import"./small-cross-BY_zS1NT.js";import"./search-CbjmGrOZ.js";import"./cross-DMNj6xwh.js";import"./useValueChanged-8c_54rdl.js";import"./getPseudoElementBounds-In6m9mGL.js";import"./CompositeItem-CHl5HG0C.js";import"./makeExternalStore-CZWRqldg.js";import"./BaseForm-C1lw8xCP.js";import"./ActionButton-T9I7pXx-.js";import"./Button-DKxF8-HR.js";import"./SkeletonBar-Drw_WsxT.js";import"./Tooltip-Cg9LbpYA.js";import"./info-sign-DfadPX3I.js";import"./chevron-up-9fg6IA4z.js";import"./chevron-down-BXQTBdLk.js";import"./useEventCallback-BVDE2vxg.js";import"./iconLoader-CvetaB6o.js";import"./CompositeRoot-DnLXbaAd.js";import"./Switch-D3a_t4Pf.js";import"./TimePicker-Cr6x7X8a.js";import"./CollapsiblePanel-GO-pTe1W.js";import"./error-BmtsW4Hj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BOeNno_q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
