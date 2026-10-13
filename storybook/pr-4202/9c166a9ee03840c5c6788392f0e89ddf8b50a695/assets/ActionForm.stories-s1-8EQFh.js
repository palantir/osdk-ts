import{j as t,g as n}from"./iframe-Cnqo8JoO.js";import{A as r}from"./action-form-BQtp3Gra.js";import"./preload-helper-DB7HrsLr.js";import"./DropdownField-DRUiHbSz.js";import"./debounce-DdinpU2x.js";import"./useOsdkClient-6VKDxm1Q.js";import"./index-DPLneUTO.js";import"./Input-DB0BU6v_.js";import"./useBaseUiId-CMntNwg3.js";import"./useControlled-D7Uij8uU.js";import"./index-CwsDo0MO.js";import"./index-CKI4qvj-.js";import"./PopoverPopup-CAsTwxkG.js";import"./InternalBackdrop-CJ-eceSN.js";import"./composite-DaaqoGoy.js";import"./index-BJ_GXgk1.js";import"./getDisabledMountTransitionStyles-FfoApt6d.js";import"./ToolbarRootContext-BP77INzo.js";import"./tick-BdumFRCq.js";import"./svgIconContainer-CSxRudGe.js";import"./small-cross-CHaVBd3F.js";import"./search-Bfy7kx1g.js";import"./cross-L-SNvRGg.js";import"./useValueChanged-Bs1dvRlB.js";import"./getPseudoElementBounds-C015kcjA.js";import"./CompositeItem-Cx-1EMH-.js";import"./makeExternalStore-BgRsNlcL.js";import"./BaseForm-CKsYr_yq.js";import"./ActionButton-CwRBsdhk.js";import"./Button-ChrgAtHr.js";import"./SkeletonBar-Bxqkbprw.js";import"./Tooltip-CHepNGwK.js";import"./info-sign-D0B3Ll1_.js";import"./chevron-up-BPnDo3OQ.js";import"./chevron-down-T8AVx82S.js";import"./useEventCallback-B62oHhCV.js";import"./iconLoader-CNX6hFKP.js";import"./Switch-B8jaUU_o.js";import"./CompositeRoot-Dh3LHx10.js";import"./TimePicker-DzyzIcd0.js";import"./CollapsiblePanel-fS7hUv8f.js";import"./error-DWCGh03E.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C2CbSeLM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
