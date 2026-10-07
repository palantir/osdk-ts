import{j as t,g as n}from"./iframe-BkonaQ0V.js";import{A as r}from"./action-form-CZv8qCNt.js";import"./preload-helper-wgqeRAml.js";import"./DropdownField-BXi0zmhU.js";import"./debounce-DpSqLCDy.js";import"./useOsdkClient-BSF82BLH.js";import"./index-CygiEJb6.js";import"./Input-BP09pCNP.js";import"./useBaseUiId-DnbkQC4-.js";import"./useControlled-DJSj5exZ.js";import"./index-CBL-z8ep.js";import"./index-ct3tIu0S.js";import"./PopoverPopup-Ck4dFzY0.js";import"./InternalBackdrop-Cih9MBeb.js";import"./composite-CFHemZO9.js";import"./index-CpL6Ija4.js";import"./getDisabledMountTransitionStyles-CaY-5WcQ.js";import"./ToolbarRootContext-C3x2oEG2.js";import"./tick-DKukE1zV.js";import"./svgIconContainer-B_Cau1X9.js";import"./small-cross-Ds0-Yg5S.js";import"./search-J0YUGWpH.js";import"./cross-CkDGtOaH.js";import"./useValueChanged-BRpmqW3_.js";import"./getPseudoElementBounds-CJ3hgKhp.js";import"./CompositeItem-Bl9Mb02l.js";import"./makeExternalStore-CxsJ8F0x.js";import"./BaseForm-DqsrFaR-.js";import"./ActionButton-CMP6VOQi.js";import"./Button-uS_BewGO.js";import"./SkeletonBar-BnNg27Cz.js";import"./Tooltip-BUWMYkhF.js";import"./info-sign-Cm-6eS5x.js";import"./chevron-up-CnDv6d0_.js";import"./chevron-down-BvYaF6aU.js";import"./useEventCallback-B9xx7Ssa.js";import"./iconLoader-DyPQvSTk.js";import"./Switch-DmfGGkw0.js";import"./CompositeRoot-CJyLR6FT.js";import"./TimePicker-DyTYIQ26.js";import"./CollapsiblePanel-r9bycGf3.js";import"./error-DnbjG5aU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DYHyomoB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
