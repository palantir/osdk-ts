import{f as n,j as t}from"./iframe-CdnHJWer.js";import{O as p}from"./object-table-BgcM1P17.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ClUQoThJ.js";import"./Table-UGeaUVfj.js";import"./index-Bq9iVrmx.js";import"./Dialog-DOXWIpww.js";import"./cross-B5TZda8d.js";import"./svgIconContainer-vwky4czQ.js";import"./useBaseUiId-9ZzKGsol.js";import"./InternalBackdrop-DYrc6lIC.js";import"./composite-CQ1NeEFq.js";import"./index-Cpfc7j_U.js";import"./index-Dssl8RWO.js";import"./index-DwW9ihxU.js";import"./useEventCallback-CnkKOYAX.js";import"./SkeletonBar-EavD8KmX.js";import"./LoadingCell-knFUv3n1.js";import"./ColumnConfigDialog-CD7ahPYs.js";import"./DraggableList-DbKK6FOT.js";import"./search-CXJcZwyL.js";import"./Input-CrgSAbkC.js";import"./useControlled-B3ZkmSp1.js";import"./Button-D9MNrTFP.js";import"./small-cross-B8nwT5Ju.js";import"./ActionButton-Bd7o05WS.js";import"./Checkbox-DXI9anQM.js";import"./useValueChanged-C9RyS-G8.js";import"./CollapsiblePanel-CMTjtUeR.js";import"./MultiColumnSortDialog-D2XCTvHp.js";import"./MenuTrigger-B4q1OVlg.js";import"./CompositeItem-CYgwlLcn.js";import"./ToolbarRootContext-CenhvMdl.js";import"./getDisabledMountTransitionStyles-VLf_pPpc.js";import"./getPseudoElementBounds-UPFJVfmd.js";import"./chevron-down-tyE7l5KP.js";import"./index-Bg9QG2A-.js";import"./error-C5LE5DkW.js";import"./BaseCbacBanner-xplx384o.js";import"./makeExternalStore-Ck39SXta.js";import"./Tooltip-DnBQSC2L.js";import"./PopoverPopup-wek_hSFR.js";import"./toNumber-Cax7aZqy.js";import"./useOsdkClient-CbWc2V-P.js";import"./tick-CCW1u-JK.js";import"./DropdownField-DaqJseao.js";import"./withOsdkMetrics-DwBEnLue.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
