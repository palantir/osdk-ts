import{f as p,j as e}from"./iframe-B6WQQhy8.js";import{O as i}from"./object-table-BFB8XBQ_.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ChsmwISn.js";import"./Table-BJ48fYQb.js";import"./index-CZJ7wKSS.js";import"./Dialog-TiXVZi4t.js";import"./cross-DTGtSarw.js";import"./svgIconContainer-L79qlVtg.js";import"./useBaseUiId-qIW79UrF.js";import"./InternalBackdrop-DfDtW0xk.js";import"./composite-CHtKDR7j.js";import"./index-DovvsuXm.js";import"./index-JE_lKjA0.js";import"./index-DACugfUF.js";import"./useEventCallback-DB4LvSLv.js";import"./SkeletonBar-C_dRKANi.js";import"./LoadingCell-xWLJzCPm.js";import"./ColumnConfigDialog-CNH35am9.js";import"./DraggableList-Cb-QDuSG.js";import"./search-CFJ6Aknr.js";import"./Input-CBrPnRp5.js";import"./useControlled-CPqJu1d3.js";import"./isEqual-D7FEOiUM.js";import"./isObject-fWvF7JaM.js";import"./Button-5VoPTOux.js";import"./ActionButton-DH98knHC.js";import"./Checkbox-lYIsmAdD.js";import"./useValueChanged-DNKi3Im-.js";import"./CollapsiblePanel-Drauktfl.js";import"./MultiColumnSortDialog-BIPX08HG.js";import"./MenuTrigger-BDitvKcK.js";import"./CompositeItem-CYbk5fSZ.js";import"./ToolbarRootContext-BuUE0P6o.js";import"./getDisabledMountTransitionStyles-DPtRIq4D.js";import"./getPseudoElementBounds-DaSGSTHJ.js";import"./chevron-down-Dxw3b8ee.js";import"./index-BK5Yiwqs.js";import"./error-yDqP26O9.js";import"./BaseCbacBanner-wpa3ZMwy.js";import"./makeExternalStore-CjXhJZfv.js";import"./Tooltip-CHk_byN0.js";import"./PopoverPopup-_sbYg48w.js";import"./toNumber-0Syk-GH5.js";import"./useOsdkClient-CE-RTGap.js";import"./tick-Dyh4bebE.js";import"./DropdownField-CNVZC72F.js";import"./withOsdkMetrics-DQOgFRz6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
