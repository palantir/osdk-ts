import{f as p,j as e}from"./iframe-zt8gp64C.js";import{O as i}from"./object-table-C4SE7jNv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D2a9Td0v.js";import"./Table-C5TohfrD.js";import"./index-DoHyhu1H.js";import"./Dialog-CSUVimF5.js";import"./cross-De0nnUUS.js";import"./svgIconContainer-0IC9WVdo.js";import"./useBaseUiId-CCqwL6UI.js";import"./InternalBackdrop-DGaBLeqk.js";import"./composite-CiBYjtJq.js";import"./index-D5-rUW4c.js";import"./index-DKrLb4UT.js";import"./index-C2mA5K1h.js";import"./useEventCallback-COQUG7k2.js";import"./SkeletonBar-C0ADBR4Q.js";import"./LoadingCell-CrnRbXzY.js";import"./ColumnConfigDialog-CCtelOOx.js";import"./DraggableList-BKsEAfzj.js";import"./search-CkhkhpUr.js";import"./Input-CSTLDdZZ.js";import"./useControlled-B2Qs_OA4.js";import"./isEqual-B7ANsJ7b.js";import"./isObject-CuTVL94r.js";import"./Button-DeMnr8Np.js";import"./ActionButton-BjjkzeEb.js";import"./Checkbox-CvK_053Z.js";import"./useValueChanged-CEhTPnLC.js";import"./CollapsiblePanel-BSJO1h1v.js";import"./MultiColumnSortDialog-C0HuG-FX.js";import"./MenuTrigger-CcISEL9A.js";import"./CompositeItem-Brt2sv8U.js";import"./ToolbarRootContext-C57K8W0-.js";import"./getDisabledMountTransitionStyles-BpPAz8nb.js";import"./getPseudoElementBounds-BMx_lEUq.js";import"./chevron-down-CBSyC7tf.js";import"./index-D_xoP6e4.js";import"./error-9mYmZixJ.js";import"./BaseCbacBanner-DvyF_XxH.js";import"./makeExternalStore-kuj4NcTB.js";import"./Tooltip-C97TE3_V.js";import"./PopoverPopup-DVY_tgYX.js";import"./toNumber-CLCJ8uM8.js";import"./useOsdkClient-DVQ-u_Rd.js";import"./tick-DGaV7WNd.js";import"./DropdownField-DELSMJny.js";import"./withOsdkMetrics-C6hfCkXD.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
