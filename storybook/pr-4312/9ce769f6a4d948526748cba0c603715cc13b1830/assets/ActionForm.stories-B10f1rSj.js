import{j as t,g as n}from"./iframe-Dwa8kb-W.js";import{A as r}from"./action-form-DNZC6vrK.js";import"./preload-helper-D2z1vNrl.js";import"./DropdownField-C53Ua_IU.js";import"./debounce-SXfA0_jR.js";import"./useOsdkClient-CG6gK-bj.js";import"./index-DKKHqoz1.js";import"./Input-CTkf375J.js";import"./useBaseUiId-Cogt136Y.js";import"./useControlled-BPd0y_Yh.js";import"./index-D80Qi5t9.js";import"./index-tbTC1PtM.js";import"./PopoverPopup-BlCcOTs1.js";import"./InternalBackdrop-CZlKxJsn.js";import"./composite-BMbUWovQ.js";import"./index-Bauiu-f9.js";import"./getDisabledMountTransitionStyles-D3sYmu31.js";import"./ToolbarRootContext-CiNKODrc.js";import"./tick-BoSZnUAn.js";import"./svgIconContainer-C5FqMMES.js";import"./small-cross-zptgYJgA.js";import"./search-DYLtDscA.js";import"./cross-CIVjhjpG.js";import"./useValueChanged-c32Z9LOm.js";import"./getPseudoElementBounds-DWWOgiGX.js";import"./CompositeItem-CAP2WO9N.js";import"./makeExternalStore-CbJLTcnS.js";import"./BaseForm-BsGajX4Q.js";import"./ActionButton-BdryvxR5.js";import"./Button-DiDAQlp3.js";import"./SkeletonBar-D4uZBgUb.js";import"./Tooltip-BCgSNK3L.js";import"./info-sign--Xxbvyzq.js";import"./chevron-up-Bfwc08Bk.js";import"./chevron-down-DohnCY6J.js";import"./useEventCallback-CI2Yqilq.js";import"./iconLoader-XrxvyYCI.js";import"./Switch-B8uvXQco.js";import"./CompositeRoot-DzlS6jXR.js";import"./TimePicker-ygdk3B33.js";import"./CollapsiblePanel-MRw3GiAv.js";import"./error-BCJLeCtt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C1tOk5Js.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
