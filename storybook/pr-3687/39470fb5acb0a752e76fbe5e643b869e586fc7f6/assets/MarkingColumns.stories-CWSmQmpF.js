import{f as n,j as t}from"./iframe-BQdKTA3B.js";import{O as p}from"./object-table-DUXMXqzq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6pDrBrI.js";import"./Table-B4OFRVNa.js";import"./index-yRrmqH44.js";import"./Dialog-C_S1GTnZ.js";import"./cross-CHRhgEve.js";import"./svgIconContainer-zPLSAFiw.js";import"./useBaseUiId-AbGP9aXI.js";import"./InternalBackdrop-auwaipTn.js";import"./composite-BtNcypUO.js";import"./index-ClaWqMrq.js";import"./index-Cvi1Jpje.js";import"./index-41PzxBrL.js";import"./useEventCallback-DWZwSev6.js";import"./SkeletonBar-BiIBHtJm.js";import"./LoadingCell-BJ9mJwzo.js";import"./ColumnConfigDialog-Ddsh2Xqg.js";import"./DraggableList-B-ijSjkL.js";import"./search-BD9Xz5zR.js";import"./Input-B1zZBTfB.js";import"./useControlled-DA1gI_2t.js";import"./Button-BN0G4ykr.js";import"./small-cross-BUh4UV6f.js";import"./ActionButton-C8iMNpOr.js";import"./Checkbox-3jX7J9Dv.js";import"./useValueChanged-vNopdAys.js";import"./CollapsiblePanel-Ddo-FTp-.js";import"./MultiColumnSortDialog-B6P9ASVp.js";import"./MenuTrigger-DKL6cSxU.js";import"./CompositeItem-BjGWU9xA.js";import"./ToolbarRootContext-D6hSTuri.js";import"./getDisabledMountTransitionStyles-Dc7dDJ30.js";import"./getPseudoElementBounds-DJrKUOUw.js";import"./chevron-down-DXrq4IEb.js";import"./index-Duh_3BMp.js";import"./error-C9pGDhKB.js";import"./BaseCbacBanner-D-IdS_Iu.js";import"./makeExternalStore-BmyKLWUH.js";import"./Tooltip-B0ch_o5U.js";import"./PopoverPopup-CLEmV4w7.js";import"./toNumber-Bi4mkL5T.js";import"./useOsdkClient-CFMXGqkp.js";import"./tick-CWjGJdZO.js";import"./DropdownField-BSEfrZwS.js";import"./withOsdkMetrics-CLpE56yC.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
