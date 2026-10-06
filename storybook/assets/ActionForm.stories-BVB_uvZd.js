import{j as t,g as n}from"./iframe-Cd5diGA4.js";import{A as r}from"./action-form-CLihUVhZ.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-Bg6DPx3N.js";import"./debounce-DpmfyqFC.js";import"./useOsdkClient-DNLZbnGw.js";import"./index-CzM4WAmt.js";import"./Input-BTdSlwyz.js";import"./useBaseUiId-visX6u-_.js";import"./useControlled-BM2rkvMt.js";import"./index-DAgKjLrT.js";import"./index-Y3NM_UBm.js";import"./PopoverPopup-CkIT-hq_.js";import"./InternalBackdrop-BH_ajHFZ.js";import"./composite-CvjMA8y2.js";import"./index-B-PHEzSN.js";import"./getDisabledMountTransitionStyles-BvKshnXk.js";import"./ToolbarRootContext-BsB0g93g.js";import"./tick-B8kZrpYx.js";import"./svgIconContainer-DaB2_UOp.js";import"./small-cross-D8C9SWIq.js";import"./search-Dn_Ud8yw.js";import"./cross-ButwHlHJ.js";import"./useValueChanged-BwYeNo1h.js";import"./getPseudoElementBounds-BJZWWLa0.js";import"./CompositeItem-Bud6cqZd.js";import"./makeExternalStore-CFuKSi4I.js";import"./BaseForm-Cos9vjYA.js";import"./ActionButton-D1mJzJ86.js";import"./Button-CqfMgiGG.js";import"./SkeletonBar-BLoGGC6L.js";import"./Tooltip-2UDphehv.js";import"./info-sign-BKzBAOge.js";import"./chevron-up-C0JkiHi0.js";import"./chevron-down-BxrXgsF8.js";import"./useEventCallback-gcr9TNzx.js";import"./iconLoader-Cxe8OM8g.js";import"./Switch-DXh_RFlr.js";import"./CompositeRoot-CNo3Liwx.js";import"./TimePicker-DJkV1Gcv.js";import"./CollapsiblePanel-Df68r8NJ.js";import"./error-BudjlwPt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C_0Aw4CV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
