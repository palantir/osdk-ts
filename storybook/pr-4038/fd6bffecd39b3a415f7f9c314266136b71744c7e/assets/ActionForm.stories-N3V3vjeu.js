import{j as t,g as n}from"./iframe-voMwDu9I.js";import{A as r}from"./action-form-DxtQoApX.js";import"./preload-helper-YavkZJGd.js";import"./DropdownField-HtDR-_bI.js";import"./debounce-CLoU_st_.js";import"./useOsdkClient-DI51Lvg2.js";import"./index-C1wISBvp.js";import"./Input-fxz47iVN.js";import"./useBaseUiId-h_zaYehG.js";import"./useControlled-DQz2j8QF.js";import"./index-Y79_UCBN.js";import"./index-T2NqJhn0.js";import"./PopoverPopup-B7NNXEVs.js";import"./InternalBackdrop-Bg2Pn1be.js";import"./composite-DmYT7ddW.js";import"./index-FmnW_XGx.js";import"./getDisabledMountTransitionStyles-O0gDbVYL.js";import"./ToolbarRootContext-D3Zw5lJf.js";import"./tick-CQYdHD5k.js";import"./svgIconContainer-BNVNdA9N.js";import"./small-cross-CkCJfZA3.js";import"./search-C1v65Y4n.js";import"./cross-Dtmq2APj.js";import"./useValueChanged-B51ZhceZ.js";import"./getPseudoElementBounds-BGhK9mLg.js";import"./CompositeItem-DkKn9mJ-.js";import"./makeExternalStore-D4KyXXBP.js";import"./BaseForm-j7jzcpc_.js";import"./ActionButton-h7gq_W3b.js";import"./Button-BuGgzmKH.js";import"./SkeletonBar-BfD5j53C.js";import"./Tooltip-DdvT815d.js";import"./info-sign-pHgGC1Js.js";import"./chevron-up-cwuzoM1M.js";import"./chevron-down-C58xTrh7.js";import"./useEventCallback-Bimyknxr.js";import"./iconLoader-R-hOuTUa.js";import"./Switch-6aG6rlBw.js";import"./CompositeRoot-Bo_d4cVz.js";import"./TimePicker-CYB3pIB5.js";import"./CollapsiblePanel-DTchAleF.js";import"./error-Dh0kRUzk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DiALcgCI.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
