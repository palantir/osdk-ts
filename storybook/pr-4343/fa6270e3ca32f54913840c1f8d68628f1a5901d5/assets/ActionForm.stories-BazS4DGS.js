import{j as t,g as n}from"./iframe-CDFbPseP.js";import{A as r}from"./action-form-C-FT4GM3.js";import"./preload-helper-BKjsnnFk.js";import"./DropdownField-CSbOb56z.js";import"./debounce-CP1jiFBE.js";import"./useOsdkClient-DGrdJ83Z.js";import"./index-CzYE_gFj.js";import"./Input-RJbqaFIV.js";import"./useBaseUiId-BT9BKuc8.js";import"./useControlled-DSth82Ot.js";import"./index-zCdxyZBm.js";import"./index-B9ZyEEfj.js";import"./PopoverPopup-Dx_YvUJO.js";import"./InternalBackdrop-Dlq9iOxD.js";import"./composite-DoGjJBYp.js";import"./index-DHvlVsA3.js";import"./getDisabledMountTransitionStyles-C4CA8fPv.js";import"./ToolbarRootContext-B4N7QEkj.js";import"./tick-dn_tR7od.js";import"./svgIconContainer-BNgOwI7J.js";import"./small-cross-Dij3KccF.js";import"./search-B_GZiPBG.js";import"./cross-D1CsBnZQ.js";import"./useValueChanged-BKwGtryl.js";import"./getPseudoElementBounds-3mroWXjI.js";import"./CompositeItem-CBWcSsRg.js";import"./makeExternalStore-CffN4Zs6.js";import"./BaseForm-88QUlsiU.js";import"./ActionButton-0OmN--Ya.js";import"./Button-adqe8TBe.js";import"./SkeletonBar-APOybFL0.js";import"./Tooltip-kSDQRB-X.js";import"./info-sign-DbdcSslQ.js";import"./chevron-up-B9sXUp00.js";import"./chevron-down-LTvAL7jy.js";import"./useEventCallback-BV_0VhHt.js";import"./iconLoader-m8V0dMRR.js";import"./Switch-B5EsOtKK.js";import"./CompositeRoot-Pdj2YrDd.js";import"./TimePicker-X14zPeSJ.js";import"./CollapsiblePanel-B_EKx4xS.js";import"./error-B-c6YY8H.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C_TM08QX.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
