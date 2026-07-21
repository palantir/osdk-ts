import{f as n,j as t}from"./iframe-Oyh7YWVy.js";import{O as p}from"./object-table-YfyakQK1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DzjYghL3.js";import"./Table-HFAeY48X.js";import"./index-xEo1ZlxZ.js";import"./Dialog-CQZds_wh.js";import"./cross-D3VIzmhf.js";import"./svgIconContainer-DOss5Ez0.js";import"./useBaseUiId-BvyYcN2c.js";import"./InternalBackdrop-DG3xWsog.js";import"./composite-_OL6DVDU.js";import"./index-Cc89UydO.js";import"./index-DP-E86sA.js";import"./index-B8YBElKK.js";import"./useEventCallback-EuLu3WWi.js";import"./SkeletonBar-DVpemjCt.js";import"./LoadingCell-B1IdkGkB.js";import"./ColumnConfigDialog-Boe9jFFY.js";import"./DraggableList-DKAL_qPi.js";import"./search-LRAlq_kr.js";import"./Input-Bv50XYYd.js";import"./useControlled-CqqqXdoU.js";import"./Button-DeDouW8J.js";import"./small-cross-CMaOmCVT.js";import"./ActionButton-C6GJ9AHy.js";import"./Checkbox-BZPG1ZXw.js";import"./useValueChanged-CC9BPWFL.js";import"./CollapsiblePanel-Cl03ZTxj.js";import"./MultiColumnSortDialog-BYeBnSmM.js";import"./MenuTrigger-h2ompmrZ.js";import"./CompositeItem-9J1_-fS5.js";import"./ToolbarRootContext-BaOGvdf2.js";import"./getDisabledMountTransitionStyles-BQxmAcay.js";import"./getPseudoElementBounds-BOsUaYkg.js";import"./chevron-down-DAtbsfww.js";import"./index-Cu_y1ZLF.js";import"./error-zQ5jpS7E.js";import"./BaseCbacBanner-D8Imwfzx.js";import"./makeExternalStore-BSTQoVfL.js";import"./Tooltip-BbWSU9mm.js";import"./PopoverPopup-CJ9Sgz76.js";import"./toNumber-DpZyQAsn.js";import"./useOsdkClient-hBc7mprP.js";import"./tick-B4gPvG-J.js";import"./DropdownField-52DLcoQZ.js";import"./withOsdkMetrics-p9AruliU.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
