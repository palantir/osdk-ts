import{j as t,g as n}from"./iframe-B1KRdkhO.js";import{A as r}from"./action-form-CqwjfF9b.js";import"./preload-helper-Bnxkxvgo.js";import"./DropdownField-fIw7AjbO.js";import"./debounce-BqZLsoFx.js";import"./useOsdkClient-Cr05SL_1.js";import"./index-BSlreuwL.js";import"./Input-B2oruy_a.js";import"./useBaseUiId-Cr74IIpt.js";import"./useControlled-CLV8A8ub.js";import"./index-bzttAU4r.js";import"./index-DTJULArL.js";import"./PopoverPopup-C0hcd2Vi.js";import"./InternalBackdrop-DVl-y0rc.js";import"./composite-JDw4eSYM.js";import"./index-Guz5zGoB.js";import"./getDisabledMountTransitionStyles-wREHFmKX.js";import"./ToolbarRootContext-Bfq07vZg.js";import"./tick-DN0jUzW_.js";import"./svgIconContainer-B6SQl79i.js";import"./small-cross-Cap9qk1X.js";import"./search-C904-bBJ.js";import"./cross-I1O1eUVR.js";import"./useValueChanged-CXerxiwd.js";import"./getPseudoElementBounds-CJIzvOat.js";import"./CompositeItem-Bkqt9gor.js";import"./makeExternalStore-YXTpwul9.js";import"./BaseForm-Cev-7yIH.js";import"./ActionButton-BFe9pmTu.js";import"./Button-D76Gdss_.js";import"./SkeletonBar-QeVp58Hy.js";import"./Tooltip-CtbVHmv4.js";import"./info-sign-Ctl9Bpy2.js";import"./chevron-up-mv0eRtgQ.js";import"./chevron-down-CnakN8OV.js";import"./useEventCallback-CfkBWOSK.js";import"./iconLoader-C2pdp7hm.js";import"./Switch-DqO6qArX.js";import"./CompositeRoot-nDtRVmwJ.js";import"./TimePicker-kP2blA85.js";import"./CollapsiblePanel-CFp75AIt.js";import"./error-DulRH5vX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BnkJio_O.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
