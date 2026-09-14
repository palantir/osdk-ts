import{j as t,g as n}from"./iframe-BFWJZaOo.js";import{A as r}from"./action-form-6RwevDSa.js";import"./preload-helper-BB-wZWHQ.js";import"./DropdownField-DUTW3bKH.js";import"./debounce-BVuWn6Kv.js";import"./useOsdkClient-BFoXoZmC.js";import"./index-XqSw18dv.js";import"./Input-CT8p6Er9.js";import"./useBaseUiId-D0TRwsGc.js";import"./useControlled-B54yZwri.js";import"./index-13lJ30rX.js";import"./index-CxTEg5iL.js";import"./PopoverPopup-anP8KZpL.js";import"./InternalBackdrop-BAFY0J2d.js";import"./composite-BuqSO83P.js";import"./index-BcEf8-4C.js";import"./getDisabledMountTransitionStyles-sSKvelZe.js";import"./ToolbarRootContext-t3ZlqxTu.js";import"./tick-BwPdqsm5.js";import"./svgIconContainer-D508kkfI.js";import"./small-cross-7Nm747z7.js";import"./search-CoXqkvjq.js";import"./cross-Bdxg6WL4.js";import"./useValueChanged-CUBMtNnf.js";import"./getPseudoElementBounds-5meTCtdo.js";import"./CompositeItem-BYv_HkoB.js";import"./makeExternalStore-BBLYkrLM.js";import"./BaseForm-CJqyLAqR.js";import"./ActionButton-BceFUcJP.js";import"./Button-BucLG5Fq.js";import"./SkeletonBar-a1qesNFL.js";import"./Tooltip-sgBLHLbz.js";import"./info-sign-3fC8LuMO.js";import"./chevron-up-B2UI6qyl.js";import"./chevron-down-jCzULGyN.js";import"./useEventCallback-BPxPY2CN.js";import"./iconLoader-CC5X7csn.js";import"./CompositeRoot-D0VNorFa.js";import"./Switch-CkCyirVi.js";import"./TimePicker-Cg9upmo4.js";import"./CollapsiblePanel-CgWuuhBS.js";import"./error-ov0Da29u.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dvr0Y_2G.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
