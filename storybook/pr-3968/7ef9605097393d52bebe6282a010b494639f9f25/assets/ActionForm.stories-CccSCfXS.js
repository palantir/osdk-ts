import{j as t,g as n}from"./iframe-D07_tlNY.js";import{A as r}from"./action-form-CMKkQGa_.js";import"./preload-helper-BZ5VSi4J.js";import"./DropdownField-Xg10lVkk.js";import"./debounce--cq45Syc.js";import"./useOsdkClient-Dp-gfOqY.js";import"./index-BQ0PEMCN.js";import"./Input-C_nbkkcq.js";import"./useBaseUiId-B0wQwkXS.js";import"./useControlled-BOVJlk7U.js";import"./index-EmEIjE8b.js";import"./index-Dy14VnsS.js";import"./PopoverPopup-BogJF-KW.js";import"./InternalBackdrop-B6N_TrYF.js";import"./composite-gwuj_Yg_.js";import"./index-Djr2tU3g.js";import"./getDisabledMountTransitionStyles-BiaitSmC.js";import"./ToolbarRootContext-A8nSy6Lb.js";import"./tick-D3lvgpVt.js";import"./svgIconContainer-BLgeYPC8.js";import"./small-cross-ByB9N4b6.js";import"./search-c3tWQKm6.js";import"./cross-cfoeTeHb.js";import"./useValueChanged-DGjiOWT_.js";import"./getPseudoElementBounds-De8tJeym.js";import"./CompositeItem-B62DALdv.js";import"./makeExternalStore-DW0gV4Fp.js";import"./BaseForm-CebNUfYl.js";import"./ActionButton-C1-Qn1rI.js";import"./Button-xkyJItTT.js";import"./SkeletonBar-Y8JMEaWt.js";import"./Tooltip-D43kVT1Z.js";import"./info-sign-BofTvyy0.js";import"./chevron-up-CmAacVBF.js";import"./chevron-down-Dm8M3XHE.js";import"./useEventCallback-CacU8cTK.js";import"./iconLoader-D1Zt-YLt.js";import"./CompositeRoot-B2IZOYeQ.js";import"./Switch-BLJzeezo.js";import"./TimePicker-BdElqmGa.js";import"./CollapsiblePanel-WfZDl8Bs.js";import"./error-D7fddi8p.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CK10C4kZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
