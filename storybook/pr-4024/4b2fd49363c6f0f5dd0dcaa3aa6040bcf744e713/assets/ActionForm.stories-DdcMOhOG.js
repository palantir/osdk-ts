import{j as t,g as n}from"./iframe-BhKMX8Fx.js";import{A as r}from"./action-form-LrANS5vP.js";import"./preload-helper-CZy_0jgg.js";import"./DropdownField-BeMP89sC.js";import"./debounce-CzfTDtAQ.js";import"./useOsdkClient-ZpvYWodJ.js";import"./index-DyXRR_oe.js";import"./Input-qedQc-sF.js";import"./useBaseUiId-B9dth6ze.js";import"./useControlled-D7ZrYDZP.js";import"./index-BvAdv-zV.js";import"./index-C8--fwDy.js";import"./PopoverPopup-DGMdDGjG.js";import"./InternalBackdrop-BS1tlxHN.js";import"./composite-CveWDbYe.js";import"./index-DE7CeQ9V.js";import"./getDisabledMountTransitionStyles-JqiqpVqP.js";import"./ToolbarRootContext-CjkyXnS-.js";import"./tick-C_DOXN-b.js";import"./svgIconContainer-Dqg69n5p.js";import"./small-cross-CG13Z6HZ.js";import"./search-BJB8jL9m.js";import"./cross-Cg-ZPVlB.js";import"./useValueChanged-Eluq5fvP.js";import"./getPseudoElementBounds-ChNg3QuF.js";import"./CompositeItem-CaT0iTXd.js";import"./makeExternalStore-ChUKIeN-.js";import"./BaseForm-Pk7LPEle.js";import"./ActionButton-B1IiXgFb.js";import"./Button-XEWUMbMz.js";import"./SkeletonBar-Kk12plMz.js";import"./Tooltip-DxrxksXr.js";import"./info-sign-DHB7alPD.js";import"./chevron-up-DunxYoVZ.js";import"./chevron-down-B_4JujMO.js";import"./useEventCallback-C9nVCC2I.js";import"./iconLoader-DZe_9elI.js";import"./CompositeRoot-DnjZA3jo.js";import"./Switch-fWFwTQhS.js";import"./TimePicker-Bk-SSNmI.js";import"./CollapsiblePanel-BZGbmPQ9.js";import"./error-BDttauQc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bm1ct0GQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
