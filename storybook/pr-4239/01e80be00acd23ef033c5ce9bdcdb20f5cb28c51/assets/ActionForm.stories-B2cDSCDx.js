import{j as t,g as n}from"./iframe-Dm6fEHSl.js";import{A as r}from"./action-form-D3wWzL7l.js";import"./preload-helper-Bqb1rZ_1.js";import"./DropdownField-DGrJZFlx.js";import"./debounce-D-AGcw8s.js";import"./useOsdkClient-CBlvauOc.js";import"./index-0oZqapnL.js";import"./Input-C1Iecv69.js";import"./useBaseUiId-DheuxufY.js";import"./useControlled-BNqne-mh.js";import"./index-B9LtevwQ.js";import"./index-CFKD3KmR.js";import"./PopoverPopup-DXuTelnl.js";import"./InternalBackdrop-CWYVY9cc.js";import"./composite-Dro01qd5.js";import"./index-DLRHryCX.js";import"./getDisabledMountTransitionStyles-C5jTdX4L.js";import"./ToolbarRootContext-2ybRt6Lm.js";import"./tick-QJWik-78.js";import"./svgIconContainer-DQYcgJEu.js";import"./small-cross-DZMVW_os.js";import"./search-C7KxNUeL.js";import"./cross-Bt5YxcTr.js";import"./useValueChanged-DdVY_JQU.js";import"./getPseudoElementBounds-B0DqqRGA.js";import"./CompositeItem-BlaUOs4g.js";import"./makeExternalStore-Ctl6TIlE.js";import"./BaseForm-DgGdS3vK.js";import"./ActionButton-BcLZ8dUx.js";import"./Button-DtwGlaif.js";import"./SkeletonBar-CuUg8o4-.js";import"./Tooltip-R_AQOimg.js";import"./info-sign-Y-2bEjS_.js";import"./chevron-up-sNU6IFZ_.js";import"./chevron-down-CWH7kW7k.js";import"./useEventCallback-CRhDiDVJ.js";import"./iconLoader-B67A2DxJ.js";import"./Switch-BeWJRqTy.js";import"./CompositeRoot-XCQyhoud.js";import"./TimePicker-DI9rhMwo.js";import"./CollapsiblePanel-CPNer4jD.js";import"./error-CtkZoki4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BttmRgw9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
