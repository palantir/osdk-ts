import{j as t,g as n}from"./iframe-BAjgPtEd.js";import{A as r}from"./action-form-BVyLcU2p.js";import"./preload-helper-CvSpShLn.js";import"./DropdownField-Dd_PGUOx.js";import"./debounce-DYx6ReB0.js";import"./useOsdkClient-BCGm5mz_.js";import"./index-DkQET497.js";import"./Input-BkIr6Cv-.js";import"./useBaseUiId-QgJXrsod.js";import"./useControlled-DSQPO38y.js";import"./index-2jadBPxc.js";import"./index-DNkRyEMq.js";import"./isObject-BIkKAW4r.js";import"./InternalBackdrop-DVevY0e1.js";import"./composite-17xRguTl.js";import"./index-CpXxZpck.js";import"./getDisabledMountTransitionStyles-BxkbLjPv.js";import"./ToolbarRootContext-DYBHmzGt.js";import"./tick-BykmFIBb.js";import"./svgIconContainer-RrdsKFgG.js";import"./small-cross-jzbeAole.js";import"./search-moMGOLYA.js";import"./cross-Zmf20Klh.js";import"./useValueChanged-iTC_WZuQ.js";import"./getPseudoElementBounds-knK5p6iP.js";import"./CompositeItem-9sostI2N.js";import"./makeExternalStore-ucFYf-xR.js";import"./BaseForm-Df7pf4pK.js";import"./ActionButton-lEBAIWe4.js";import"./Button-7st_Ze6e.js";import"./SkeletonBar-Cjk3uSES.js";import"./Tooltip-D6v0Q2e4.js";import"./info-sign-DmVGwuB1.js";import"./chevron-up-DIX70cdp.js";import"./chevron-down-C_c1RpTk.js";import"./useEventCallback-TLq2luMM.js";import"./iconLoader-YLIu_Y42.js";import"./Switch-CviLicDe.js";import"./CompositeRoot-B9vaGc1o.js";import"./TimePicker-VtWQqOGx.js";import"./CollapsiblePanel-CrYZSgVe.js";import"./error-BPyKBfp3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CitYO8jf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
