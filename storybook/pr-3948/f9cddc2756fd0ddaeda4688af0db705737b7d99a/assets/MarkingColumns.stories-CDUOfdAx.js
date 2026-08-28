import{f as p,j as e}from"./iframe-DWvzDoTE.js";import{O as i}from"./object-table-8nYiaszu.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ByL0Uuda.js";import"./Table-D0j1LDAV.js";import"./index-BBS1h8cn.js";import"./Dialog-CSZr3sQl.js";import"./cross--Y2f0GiD.js";import"./svgIconContainer-BhadlONA.js";import"./useBaseUiId-CMlf_How.js";import"./InternalBackdrop-Cf-iMcVw.js";import"./composite-BIHrvkj3.js";import"./index-BQWPPGSx.js";import"./index-q_1-gxWd.js";import"./index-cn8ZGUe5.js";import"./useEventCallback-CLbs7kRX.js";import"./SkeletonBar-Dh1OEZAF.js";import"./LoadingCell-BezJaplu.js";import"./ColumnConfigDialog-DAotHv7w.js";import"./DraggableList-BTEdgyZX.js";import"./search-BObskws0.js";import"./Input-DiGaV4rJ.js";import"./useControlled-DfUZjtJU.js";import"./Button-DwyCCUCH.js";import"./small-cross-Ci3vpnc1.js";import"./ActionButton-CgSZK0K1.js";import"./Checkbox-CSrcKRpx.js";import"./useValueChanged-Cub_cMIY.js";import"./CollapsiblePanel-CFHmzmB0.js";import"./MultiColumnSortDialog-B01Dc84v.js";import"./MenuTrigger-Df2Y7rGo.js";import"./CompositeItem-DeeOISel.js";import"./ToolbarRootContext-B7EsbN7p.js";import"./getDisabledMountTransitionStyles-C1rCgQf8.js";import"./getPseudoElementBounds-B5N3m30C.js";import"./chevron-down-BZ6p4J3G.js";import"./index-Bu_tjXun.js";import"./error-DJSg9FwQ.js";import"./BaseCbacBanner-B_OmK-25.js";import"./makeExternalStore-BresugQV.js";import"./Tooltip-DoT3m1bO.js";import"./PopoverPopup-CbJaaqPE.js";import"./debounce-DNUqOVJ3.js";import"./useOsdkClient-s2lA0VPO.js";import"./tick-BiKiKjho.js";import"./DropdownField-CDx_h5d6.js";import"./isEqual-CO1MvszY.js";import"./withOsdkMetrics-5t1Ggpdt.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
