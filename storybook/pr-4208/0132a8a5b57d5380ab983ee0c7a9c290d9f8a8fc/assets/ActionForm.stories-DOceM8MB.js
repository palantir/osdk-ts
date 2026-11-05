import{j as t,g as n}from"./iframe-ReE2Q7yp.js";import{A as r}from"./action-form-CDVgJ74Z.js";import"./preload-helper-B7Z9MrKi.js";import"./DropdownField-usIkxFYB.js";import"./debounce-DXVTweio.js";import"./useOsdkClient-CH1S_bx0.js";import"./index-BewkrVTa.js";import"./Input-B8139ni5.js";import"./useBaseUiId-D8bMBWWs.js";import"./useControlled-CiRsQt_l.js";import"./index-B0bWJrJS.js";import"./index-gciaynI9.js";import"./PopoverPopup-DfcYj7fK.js";import"./InternalBackdrop-C14mfAnw.js";import"./composite-BwZods8z.js";import"./index-B-CZhjmL.js";import"./getDisabledMountTransitionStyles-rH4RKoLB.js";import"./ToolbarRootContext-Bl5a0QSn.js";import"./tick-D9DVZKih.js";import"./svgIconContainer-DReIj__U.js";import"./small-cross-sxi8v31H.js";import"./search-BhOewJBY.js";import"./cross-jItXGdNq.js";import"./useValueChanged-DIzh1Vve.js";import"./getPseudoElementBounds-iOtDRySU.js";import"./CompositeItem-CiU9fGHE.js";import"./makeExternalStore-CzYz1Gie.js";import"./BaseForm-DGTmJn_t.js";import"./ActionButton-BbqGHHOq.js";import"./Button-BlxZNp8T.js";import"./SkeletonBar-C7A8YeA1.js";import"./Tooltip-CgjwpZg6.js";import"./info-sign-ZcoJLXlL.js";import"./chevron-up-CgS0Bbkv.js";import"./chevron-down-BzzFswn9.js";import"./useEventCallback-DSxaVaZ9.js";import"./iconLoader-Dqa56U0y.js";import"./Switch-DXdYea_W.js";import"./CompositeRoot-B0JLwDVj.js";import"./TimePicker-Ck8rLBKT.js";import"./CollapsiblePanel-8t3xxJ8x.js";import"./error-CPS8uYGW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CzWROb4n.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
