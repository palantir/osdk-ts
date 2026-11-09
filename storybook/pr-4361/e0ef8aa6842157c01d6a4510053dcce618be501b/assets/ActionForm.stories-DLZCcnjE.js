import{j as t,g as n}from"./iframe-CQjpYJVQ.js";import{A as r}from"./action-form-BjWcmc-L.js";import"./preload-helper-5bhpmr97.js";import"./DropdownField-C1a46o93.js";import"./debounce-dJHnwnXb.js";import"./useOsdkClient-DD-lOblu.js";import"./index-zd6HXz9_.js";import"./Input-BiPNpz_C.js";import"./useBaseUiId-jFZ68_bH.js";import"./useControlled-Ft9yJ31_.js";import"./index-CULyv4a8.js";import"./index-plWBun5g.js";import"./isObject-uzU1Ylcp.js";import"./InternalBackdrop-CTLp_BJs.js";import"./composite-D-zcsHj1.js";import"./index-DSMMhLR-.js";import"./getDisabledMountTransitionStyles-YjHiHV9j.js";import"./ToolbarRootContext-DqJWDTyy.js";import"./tick-BHxlRL9h.js";import"./svgIconContainer-CE1ZQVk8.js";import"./small-cross-DJff8L-H.js";import"./search-DStplL8v.js";import"./cross-Deh5uDpB.js";import"./useValueChanged-D_5yXDiE.js";import"./getPseudoElementBounds-BLYD-n1h.js";import"./CompositeItem-C0zU83Hu.js";import"./makeExternalStore-Cn0Nj4g1.js";import"./BaseForm-DvNgCStA.js";import"./ActionButton-CnnTCenO.js";import"./Button-fOyW8XxT.js";import"./SkeletonBar-BOoh_hK9.js";import"./Tooltip-Dgp5uIQr.js";import"./info-sign-e2rTvdDf.js";import"./chevron-up-BiXb6AmR.js";import"./chevron-down-BDQkglqC.js";import"./useEventCallback-eP2xfpVZ.js";import"./iconLoader-9b1K00ud.js";import"./Switch-gwll9dc_.js";import"./CompositeRoot-Xf_FKSS4.js";import"./TimePicker-DsRwQKUS.js";import"./CollapsiblePanel-DOU8qtuA.js";import"./error-BRCQmACx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-By-ZCu6K.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
