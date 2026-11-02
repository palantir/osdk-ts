import{j as t,g as n}from"./iframe-Chczgz1L.js";import{A as r}from"./action-form-DET6E-1a.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BuaHdJat.js";import"./debounce-CXpZecUZ.js";import"./useOsdkClient-D5LFzarX.js";import"./index-B9rruesR.js";import"./Input-D4C3JvNi.js";import"./useBaseUiId-BKJ7O9Ur.js";import"./useControlled-BC2wgxgm.js";import"./index-Bt7ugu0N.js";import"./index-Dre7KrbC.js";import"./PopoverPopup-C55rHfzo.js";import"./InternalBackdrop-B43ScOJk.js";import"./composite-B4QMOHJZ.js";import"./index-C3YdOJBa.js";import"./getDisabledMountTransitionStyles-DNM4KQ8Z.js";import"./ToolbarRootContext-BtrjEFZW.js";import"./tick-CT8h7pmf.js";import"./svgIconContainer-1jnQ2eo6.js";import"./small-cross-C5CmaSnd.js";import"./search-wmopA8Vh.js";import"./cross-BNk5cXgp.js";import"./useValueChanged-BPFB-1jm.js";import"./getPseudoElementBounds-kaI3yQ6b.js";import"./CompositeItem-DywVVkGM.js";import"./makeExternalStore-BDwYNInw.js";import"./BaseForm-CDnX5gng.js";import"./ActionButton-CZnKDqRc.js";import"./Button-DeWrzdot.js";import"./SkeletonBar-ygOk5JN2.js";import"./Tooltip-BdxHwWMz.js";import"./info-sign-zVWoeHGY.js";import"./chevron-up-C3UysyRl.js";import"./chevron-down-Btx-Kyg4.js";import"./useEventCallback-iA9Hkw4u.js";import"./iconLoader-BZt8hq9L.js";import"./Switch-Bj1HeRPj.js";import"./CompositeRoot-DkshdpEu.js";import"./TimePicker-bEViw15H.js";import"./CollapsiblePanel-MP_8oHdu.js";import"./error-ChH6XIqA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C9LJ-x24.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
