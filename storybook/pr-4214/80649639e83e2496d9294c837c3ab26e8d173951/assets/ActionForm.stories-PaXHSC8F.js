import{j as t,g as n}from"./iframe-EQYHZGCW.js";import{A as r}from"./action-form-Cb10AXzF.js";import"./preload-helper-D0iBIgcV.js";import"./DropdownField-Dyd5qMS9.js";import"./debounce-EHAoHJMy.js";import"./useOsdkClient-CuIzd9gl.js";import"./index-DcRUH42g.js";import"./Input-C4K0OIlf.js";import"./useBaseUiId-B-jRpzmU.js";import"./useControlled-D8_Vw_1O.js";import"./index-CKjEOO1w.js";import"./index-CIgaZG3c.js";import"./PopoverPopup-wEOR7HLL.js";import"./InternalBackdrop-eYIHjnQ3.js";import"./composite-CIqX99J4.js";import"./index-D0Wo5FO3.js";import"./getDisabledMountTransitionStyles-DstXpz2X.js";import"./ToolbarRootContext-DFyHSe1V.js";import"./tick-DTY36Y1v.js";import"./svgIconContainer-D1wDh7_l.js";import"./small-cross-CbxvG1Lp.js";import"./search-BVTqMz5e.js";import"./cross-C8-00d-y.js";import"./useValueChanged-DhKLyqGQ.js";import"./getPseudoElementBounds-B45YCg5U.js";import"./CompositeItem-Bzt8qu7P.js";import"./makeExternalStore-CxRQlBs2.js";import"./BaseForm-D9P6iktr.js";import"./ActionButton-3hxbNss0.js";import"./Button-DiwOmMcV.js";import"./SkeletonBar-3kB07n5e.js";import"./Tooltip-D1rS0CVa.js";import"./info-sign-CykY3DcK.js";import"./chevron-up-BwC3rD0n.js";import"./chevron-down-HP5bea9D.js";import"./useEventCallback-BSME_xf2.js";import"./iconLoader-BbrkpkWJ.js";import"./Switch-Ccx1qG5D.js";import"./CompositeRoot-B3C4bcKs.js";import"./TimePicker-C1eQMooX.js";import"./CollapsiblePanel-BfN11z03.js";import"./error-Cd2sdUKV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dwt30EQ7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
