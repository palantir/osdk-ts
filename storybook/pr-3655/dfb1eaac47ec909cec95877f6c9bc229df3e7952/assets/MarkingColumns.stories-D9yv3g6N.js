import{f as n,j as t}from"./iframe-x-EkXKwC.js";import{O as p}from"./object-table-Bifs-eA3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DkSTjVgo.js";import"./Table-DGi_2EwH.js";import"./index-B2dWK80O.js";import"./Dialog-B41fnEim.js";import"./cross-HOK30F7Y.js";import"./svgIconContainer-Cx0ByDhV.js";import"./useBaseUiId-DKZfTFRk.js";import"./InternalBackdrop-DA9yQmsz.js";import"./composite-CWs4svrB.js";import"./index-BZNo1s6y.js";import"./index-fnlWMt0W.js";import"./index-Cr3PpJJj.js";import"./useEventCallback-q4fImamg.js";import"./SkeletonBar-lplXG_Y4.js";import"./LoadingCell-DZ35YJpU.js";import"./ColumnConfigDialog-CtHzZsyA.js";import"./DraggableList-Dqqxtsq7.js";import"./search-BbuzKBph.js";import"./Input-DUn2lO0X.js";import"./useControlled-Fylp3L4L.js";import"./Button-NTh2X_Ck.js";import"./small-cross-CgwMl_fz.js";import"./ActionButton-XDAQ5TFq.js";import"./Checkbox-Vc0azE5l.js";import"./useValueChanged-Do6An4_X.js";import"./CollapsiblePanel-BZ6K6TpB.js";import"./MultiColumnSortDialog-Dna9zTMy.js";import"./MenuTrigger-BuweI0EY.js";import"./CompositeItem-8uZrMEeY.js";import"./ToolbarRootContext-BOYe-MJ6.js";import"./getDisabledMountTransitionStyles-OrIpoVfa.js";import"./getPseudoElementBounds-BcUIdLc5.js";import"./chevron-down-DwQqn4mC.js";import"./index-C9TLjHrB.js";import"./error-DBG3Fpck.js";import"./BaseCbacBanner-CPZa4hq1.js";import"./makeExternalStore-C1jkQbmp.js";import"./Tooltip-PS9fSnYp.js";import"./PopoverPopup-DnmlcT9I.js";import"./toNumber-BE3ZhCOq.js";import"./useOsdkClient-BCufKzSM.js";import"./tick-BZY14iEW.js";import"./DropdownField-BFlUlZTX.js";import"./withOsdkMetrics-D9Ylyz18.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
