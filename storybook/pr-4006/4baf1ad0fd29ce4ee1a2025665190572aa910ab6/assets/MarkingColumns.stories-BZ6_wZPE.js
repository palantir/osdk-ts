import{f as p,j as e}from"./iframe-CGyuUHxy.js";import{O as i}from"./object-table-CqzVwxGZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CHXR4TEM.js";import"./Table-D3_qtNfp.js";import"./index-BY9adCgo.js";import"./Dialog-CSowe9qH.js";import"./cross-IJIRpi8I.js";import"./svgIconContainer-BsIK3M0v.js";import"./useBaseUiId-CxRjJ2eA.js";import"./InternalBackdrop-D2QUgXtn.js";import"./composite-Ccbhb-G_.js";import"./index-BAxLRNzk.js";import"./index-CiafOJ6c.js";import"./index-BeL2DRU1.js";import"./useEventCallback-D7IhiRBC.js";import"./SkeletonBar-DpG5K-jj.js";import"./LoadingCell-KJtsg1rt.js";import"./ColumnConfigDialog-BBfs4NJo.js";import"./DraggableList-BSQTvWPg.js";import"./search-lH3pU1gQ.js";import"./Input-C3-P_z4v.js";import"./useControlled-DMowJxn0.js";import"./Button-BCdalSJc.js";import"./small-cross-C5mq1gMO.js";import"./ActionButton-1oqP8PoB.js";import"./Checkbox-C1SgmmoO.js";import"./useValueChanged-BTu-LDDs.js";import"./CollapsiblePanel-BrxTnTCc.js";import"./MultiColumnSortDialog-D9g3JzPL.js";import"./MenuTrigger-C1mo3QbN.js";import"./CompositeItem-C9KCjhut.js";import"./ToolbarRootContext-B3Ikfeie.js";import"./getDisabledMountTransitionStyles-BiBOKD-Z.js";import"./getPseudoElementBounds-Di2B7QRI.js";import"./chevron-down-DvkSXyV_.js";import"./index-GV80kSzg.js";import"./error-2nP38RK7.js";import"./BaseCbacBanner--HBtBBsc.js";import"./makeExternalStore-DIn4B4sN.js";import"./Tooltip-qASfieF8.js";import"./PopoverPopup-C8iqkpjZ.js";import"./debounce-qtcXepJn.js";import"./useOsdkClient-Dvl_qWbV.js";import"./tick-BgWIPs4c.js";import"./DropdownField-DV35Ur0Z.js";import"./isEqual-BidfQ1Lo.js";import"./withOsdkMetrics-BUGq6PJK.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
