import{j as t,g as n}from"./iframe-hYuZ0Daw.js";import{A as r}from"./action-form-OHZpjgjO.js";import"./preload-helper-57_0CTpI.js";import"./DropdownField-CotoRe-f.js";import"./debounce-Qi9LJiOf.js";import"./useOsdkClient-D4ryqRY6.js";import"./index-C5Pc6OCn.js";import"./Input-BtSxbTtJ.js";import"./useBaseUiId-C66Z_YyS.js";import"./useControlled-DfUelnOD.js";import"./index-DCXcCpux.js";import"./index-BzM9XWI0.js";import"./PopoverPopup-BN84gK9-.js";import"./InternalBackdrop-jDrrqOsA.js";import"./composite-fETYQEVT.js";import"./index-fk41aGRq.js";import"./getDisabledMountTransitionStyles-nL3e7Gnd.js";import"./ToolbarRootContext-BfU0Mx90.js";import"./tick-C4J5qXpt.js";import"./svgIconContainer-D3B1FGG8.js";import"./small-cross-CuLqv6Wz.js";import"./search-De2ktKMh.js";import"./cross-h0YrhL7d.js";import"./useValueChanged-tK-0Emor.js";import"./getPseudoElementBounds-ChxMx6wv.js";import"./CompositeItem-DDypA9GI.js";import"./makeExternalStore-CDcr6d7h.js";import"./BaseForm-BHT6hz2i.js";import"./ActionButton-BrTsNB-1.js";import"./Button-BT_Xkrjb.js";import"./SkeletonBar-jiOUAN0d.js";import"./Tooltip-Db1h8c5N.js";import"./info-sign-DU8qqhRo.js";import"./chevron-up-BsNTvuy5.js";import"./chevron-down-BZn2JFfs.js";import"./useEventCallback-Bd-msYrl.js";import"./iconLoader-W9nAeGJl.js";import"./Switch-C8sty-XK.js";import"./CompositeRoot-vPGXhzPi.js";import"./TimePicker-DUU3H3Xk.js";import"./CollapsiblePanel-CttdpkNm.js";import"./error-C958vJ-j.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bun4Nw5t.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
