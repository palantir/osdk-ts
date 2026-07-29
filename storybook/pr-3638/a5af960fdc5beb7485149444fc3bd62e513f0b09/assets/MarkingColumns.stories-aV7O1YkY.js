import{f as n,j as t}from"./iframe-D19FdeZ5.js";import{O as p}from"./object-table-CdZzhDpQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DDgU7gWw.js";import"./Table-DUo_2wL7.js";import"./index-C-JUZCdg.js";import"./Dialog-DUwi3P07.js";import"./cross-CBMojWZK.js";import"./svgIconContainer-DbVS29Tz.js";import"./useBaseUiId-_B9PHlWX.js";import"./InternalBackdrop-C7hm4RrL.js";import"./composite-D5RWh6v2.js";import"./index-SiZiara9.js";import"./index-EjE6FTTb.js";import"./index-DuoDP4wD.js";import"./useEventCallback-l48rf3Az.js";import"./SkeletonBar-B8Mn9j5w.js";import"./LoadingCell-Beoyjc1N.js";import"./ColumnConfigDialog-BNX8FpsG.js";import"./DraggableList-nXfwyXgc.js";import"./search-DuawIE4c.js";import"./Input-DqW8AQJb.js";import"./useControlled-CxhSZM1o.js";import"./Button-BJ-VtjQ9.js";import"./small-cross-DsCBE6qJ.js";import"./ActionButton-CdZYTp3q.js";import"./Checkbox-BA82LCyn.js";import"./useValueChanged-DZ_8Zrc2.js";import"./CollapsiblePanel-CTOsL2b5.js";import"./MultiColumnSortDialog-D0j0rTBJ.js";import"./MenuTrigger-iKfNFaNR.js";import"./CompositeItem-CSYndqI1.js";import"./ToolbarRootContext-sKIqKh9d.js";import"./getDisabledMountTransitionStyles-CKKy6IMm.js";import"./getPseudoElementBounds-CXPMK6-h.js";import"./chevron-down-DHPcNjce.js";import"./index-CERxgRVL.js";import"./error-D781TkmO.js";import"./BaseCbacBanner-BeWb3Txk.js";import"./makeExternalStore-UvIRmA59.js";import"./Tooltip-wgqZNfG2.js";import"./PopoverPopup-CIuW_OMM.js";import"./toNumber-omYE5Tvr.js";import"./useOsdkClient-BRRiu0_f.js";import"./tick-DtAsvH1d.js";import"./DropdownField-CURko24d.js";import"./withOsdkMetrics-DprP80WS.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
