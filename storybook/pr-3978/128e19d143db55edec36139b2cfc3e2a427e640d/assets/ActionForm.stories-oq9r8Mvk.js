import{j as t,g as n}from"./iframe-Cfa7VV9b.js";import{A as r}from"./action-form-D0BBKGCc.js";import"./preload-helper-CNnDmdGh.js";import"./DropdownField-s65vbGOa.js";import"./debounce-BhgPK9RJ.js";import"./useOsdkClient-DHcLBuTj.js";import"./index-CH9AmopW.js";import"./Input-DN8AJK08.js";import"./useBaseUiId-D_k54qol.js";import"./useControlled-CjWedb3G.js";import"./index-Bv1S_5M0.js";import"./index-TmLVBI9S.js";import"./PopoverPopup-BPWYYHWp.js";import"./InternalBackdrop-BVCviyNt.js";import"./composite-CrY-lNuw.js";import"./index-67hxxU-T.js";import"./getDisabledMountTransitionStyles-D8GdmpOs.js";import"./ToolbarRootContext-b1GByVNw.js";import"./tick-C2d5tvIe.js";import"./svgIconContainer-DvY8yHqi.js";import"./small-cross-C3IJlndA.js";import"./search-BwdTmPFq.js";import"./cross-BEJbLhxw.js";import"./useValueChanged-B94bKY6Z.js";import"./getPseudoElementBounds-D_Rk3WjB.js";import"./CompositeItem-Hyqz3S2c.js";import"./makeExternalStore-CgLbI1f8.js";import"./BaseForm-CAyEZr5y.js";import"./ActionButton-CXudEriw.js";import"./Button-DTyGlfF4.js";import"./SkeletonBar-Bs1-yAkF.js";import"./Tooltip-fzl9DYcK.js";import"./info-sign-BpIUqn_P.js";import"./chevron-up-CUjg0Z2m.js";import"./chevron-down-GlFAnb1p.js";import"./useEventCallback-K8cd2Fnj.js";import"./iconLoader-BlmbAFLP.js";import"./CompositeRoot-C_HDpiI_.js";import"./Switch-BlFjrn3x.js";import"./TimePicker-Dzta_ATV.js";import"./CollapsiblePanel-DCPma9to.js";import"./error-DARJoisr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6ZfJzuW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
