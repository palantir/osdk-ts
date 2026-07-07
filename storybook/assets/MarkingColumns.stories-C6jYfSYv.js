import{f as n,j as t}from"./iframe-BQ5bIaEt.js";import{O as p}from"./object-table-fwMn60Z7.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-C0Dvrc_-.js";import"./index-CxTof4NU.js";import"./Dialog-PSeFAsdw.js";import"./cross-oFBvDg8D.js";import"./svgIconContainer-DxdbcvvB.js";import"./useBaseUiId-BssyuYZd.js";import"./InternalBackdrop-Nq7-y5ph.js";import"./composite-C7Kgyyjz.js";import"./index-hpDNR9J8.js";import"./index-DJPOsElS.js";import"./index-B4HYa738.js";import"./useEventCallback-DHq3oUCa.js";import"./SkeletonBar-CzzGQFh8.js";import"./LoadingCell-7FK8eby7.js";import"./ColumnConfigDialog-CqkZsH6m.js";import"./DraggableList-BHDiKCna.js";import"./search-NcartjHP.js";import"./Input-BpgW1-MB.js";import"./useControlled-C0kanQvr.js";import"./Button-DmOBiAMv.js";import"./small-cross-BvW-FwlX.js";import"./ActionButton-CcZz9Z2h.js";import"./Checkbox-BXQbgyf5.js";import"./useValueChanged-BeeYZxez.js";import"./CollapsiblePanel-BbbS2zAv.js";import"./MultiColumnSortDialog-BjDWDjh9.js";import"./MenuTrigger-CaB4-0V6.js";import"./CompositeItem-B9GjdRlN.js";import"./ToolbarRootContext-DG1gzZaQ.js";import"./getDisabledMountTransitionStyles-2YFnbids.js";import"./getPseudoElementBounds-BnBuQX1H.js";import"./chevron-down-BXiYQBlg.js";import"./index-JSWJrBox.js";import"./error-CS2in6u-.js";import"./BaseCbacBanner-DxIrDXLW.js";import"./makeExternalStore-BziXXW6L.js";import"./Tooltip-DWeZjeiu.js";import"./PopoverPopup-T-bjA8RU.js";import"./toNumber-Bk4jqXNa.js";import"./useOsdkClient-DtibL-0a.js";import"./tick-Cy4sX5Hb.js";import"./DropdownField-PixDCyby.js";import"./withOsdkMetrics-COldZ75L.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
