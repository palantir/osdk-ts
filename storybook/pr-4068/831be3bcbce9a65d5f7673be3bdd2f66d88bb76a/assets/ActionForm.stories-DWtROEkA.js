import{j as t,g as n}from"./iframe-ClmmZ3bm.js";import{A as r}from"./action-form-C0Eq-d8Q.js";import"./preload-helper-BZo60ewl.js";import"./DropdownField-CnAzqUOi.js";import"./debounce-XQlAyE-7.js";import"./useOsdkClient-CKzk92mD.js";import"./index-DIDi76XU.js";import"./Input-prqFStI6.js";import"./useBaseUiId-WUEu06gE.js";import"./useControlled-DgsYzmvX.js";import"./index-BVYmTNrb.js";import"./index-Bq9s53kA.js";import"./PopoverPopup-DNr0L3gG.js";import"./InternalBackdrop-3GGPa-k1.js";import"./composite-DFQP3WzO.js";import"./index-Z45XLqZB.js";import"./getDisabledMountTransitionStyles-NPU84L0j.js";import"./ToolbarRootContext-BOxraJ6v.js";import"./tick-CId6S-tg.js";import"./svgIconContainer-CXmUB5_k.js";import"./small-cross-Hnp_Cop5.js";import"./search-BSdPNEqM.js";import"./cross-BZIbyAfw.js";import"./useValueChanged-BYcMVQkQ.js";import"./getPseudoElementBounds-BgBAgWR8.js";import"./CompositeItem-By3QnrLx.js";import"./makeExternalStore-BNsO-POR.js";import"./BaseForm-2NsgbW0Q.js";import"./ActionButton-CmUSS7TV.js";import"./Button-BC65lBcv.js";import"./SkeletonBar-zmrRzeWk.js";import"./Tooltip-L4sylTo8.js";import"./info-sign-DNOb9Nk0.js";import"./chevron-up-CAMAxbx2.js";import"./chevron-down-cWg0tuLd.js";import"./useEventCallback-BNKXZA_K.js";import"./iconLoader-g2D7TROq.js";import"./Switch-XoRNmRdk.js";import"./CompositeRoot-BxNeDdLl.js";import"./TimePicker-oaTrN2On.js";import"./CollapsiblePanel-DLONQ99q.js";import"./error-joC9U9D6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-3RKVNbyO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
