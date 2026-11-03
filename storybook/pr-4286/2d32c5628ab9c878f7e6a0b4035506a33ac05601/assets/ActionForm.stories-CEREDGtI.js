import{j as t,g as n}from"./iframe-KThmj19P.js";import{A as r}from"./action-form-B5Va2aH7.js";import"./preload-helper-Cw3n3hSQ.js";import"./DropdownField-eYleBuTJ.js";import"./debounce-CRIHmV_F.js";import"./useOsdkClient-CNuNhGD2.js";import"./index-8dp596C-.js";import"./Input-DjgUB-Rn.js";import"./useBaseUiId-CO0UXqZj.js";import"./useControlled-Cit5AGWi.js";import"./index-x3jhKnXC.js";import"./index-DlUZDviY.js";import"./PopoverPopup-C7b8KTlQ.js";import"./InternalBackdrop-ChJvd0mJ.js";import"./composite-DhtQTRu3.js";import"./index-BDhUGLnw.js";import"./getDisabledMountTransitionStyles-B3VVxFZG.js";import"./ToolbarRootContext-BtS_uykU.js";import"./tick-B1qLCmei.js";import"./svgIconContainer-BadPSwg5.js";import"./small-cross-BaTPq9PI.js";import"./search-WKJE02Vc.js";import"./cross-DgJrOo32.js";import"./useValueChanged-BTUlUlPU.js";import"./getPseudoElementBounds-BrM6yGow.js";import"./CompositeItem-B-b-pN3u.js";import"./makeExternalStore-BCV4KITu.js";import"./BaseForm-BUU_rY3V.js";import"./ActionButton-D6GsiQH8.js";import"./Button-C5g5AH7h.js";import"./SkeletonBar-B9s5jXE0.js";import"./Tooltip-DQdCr4CI.js";import"./info-sign-B7Ly7DNX.js";import"./chevron-up-Bimen3xm.js";import"./chevron-down-C1Y2Cd7i.js";import"./useEventCallback-BfVLO6-q.js";import"./iconLoader-S3jz50gP.js";import"./Switch-DzRFrWfy.js";import"./CompositeRoot-DbSkcG9S.js";import"./TimePicker-D-ARhQgN.js";import"./CollapsiblePanel-BCle4Obe.js";import"./error-BU9XZpJG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-hz19pnqZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
