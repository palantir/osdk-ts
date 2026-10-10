import{j as t,g as n}from"./iframe-CvUSgiu3.js";import{A as r}from"./action-form-DtvOOKhQ.js";import"./preload-helper-B0zyaiwI.js";import"./DropdownField-B3F6gD4V.js";import"./debounce-C7rA69Kq.js";import"./useOsdkClient-BU6oB7cD.js";import"./index-DmcWe2qf.js";import"./Input-Dqxb3pxV.js";import"./useBaseUiId-DY1Z1crQ.js";import"./useControlled-DxVirw8z.js";import"./index-Cn7kZwJh.js";import"./index-40gUd9cg.js";import"./PopoverPopup-CKHxkUKN.js";import"./InternalBackdrop-BjeXf3nJ.js";import"./composite-2ofaKrdo.js";import"./index-CiZrWga3.js";import"./getDisabledMountTransitionStyles-YgtPIr1c.js";import"./ToolbarRootContext-BRgMGrEJ.js";import"./tick-DVXui722.js";import"./svgIconContainer-CTy32Y-c.js";import"./small-cross-brkzixeZ.js";import"./search-BikN9LqI.js";import"./cross-DrZXwXEo.js";import"./useValueChanged-B7529PCr.js";import"./getPseudoElementBounds-BGaSa-J5.js";import"./CompositeItem-BekmKE9y.js";import"./makeExternalStore-BqQyfi25.js";import"./BaseForm-2GgrjHGX.js";import"./ActionButton-cWvGC5Rr.js";import"./Button-BbMrXCM7.js";import"./SkeletonBar-Crq6VcI5.js";import"./Tooltip-DpOcBxM1.js";import"./info-sign-BhH388b7.js";import"./chevron-up-b89XhrlV.js";import"./chevron-down-BJ7q-Z6f.js";import"./useEventCallback-giAqM-Ga.js";import"./iconLoader-BbBLIU24.js";import"./Switch-Du8zsM1B.js";import"./CompositeRoot-CcJNiJRM.js";import"./TimePicker-CdMnHoPI.js";import"./CollapsiblePanel-DD_1P7Ak.js";import"./error-CFT8_0w_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B2ewH9eG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
