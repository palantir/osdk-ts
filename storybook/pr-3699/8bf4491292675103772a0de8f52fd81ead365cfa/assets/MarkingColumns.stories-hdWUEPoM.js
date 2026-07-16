import{f as n,j as t}from"./iframe-dax33wrH.js";import{O as p}from"./object-table-CYbcPH0b.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper--ptp1-jN.js";import"./Table-63jiKPSt.js";import"./index-DMMgfq7E.js";import"./Dialog-UjF9bSZu.js";import"./cross-CaIZLZrZ.js";import"./svgIconContainer-BHtd-Y_f.js";import"./useBaseUiId-CDrNLAhM.js";import"./InternalBackdrop-B9WWlSQ3.js";import"./composite-BKU8Rsyn.js";import"./index-CXweuEQF.js";import"./index-V0evU-dd.js";import"./index-h35Ko0_v.js";import"./useEventCallback-DXjbUOTI.js";import"./SkeletonBar-bgKo0afE.js";import"./LoadingCell-B5e3KDAP.js";import"./ColumnConfigDialog-CDZFyKEM.js";import"./DraggableList-BuYZN2ra.js";import"./search-Ce8ONpd4.js";import"./Input-BKsap1VQ.js";import"./useControlled-CGOZZZVV.js";import"./Button-CSmctVrW.js";import"./small-cross-CEq4EMbg.js";import"./ActionButton-BxHvWkqA.js";import"./Checkbox-KY2tc5J8.js";import"./useValueChanged-C1hPxkhn.js";import"./CollapsiblePanel-C18QskNY.js";import"./MultiColumnSortDialog-DeeErYZX.js";import"./MenuTrigger-DV-e47JD.js";import"./CompositeItem--mSAHIOA.js";import"./ToolbarRootContext-XVRT1KGe.js";import"./getDisabledMountTransitionStyles-BmEpys50.js";import"./getPseudoElementBounds-BWdnF25p.js";import"./chevron-down-CJzM1_aP.js";import"./index-D0C4uVvG.js";import"./error-DTuR9zTq.js";import"./BaseCbacBanner-D0qtuKzf.js";import"./makeExternalStore-LkkdMXRm.js";import"./Tooltip-CnCiJhtB.js";import"./PopoverPopup-KLrRuJhF.js";import"./toNumber-DOMV9MdK.js";import"./useOsdkClient-ntbsJPr1.js";import"./tick-shPhCAs4.js";import"./DropdownField-HqYgk2yw.js";import"./withOsdkMetrics-1TpuYbUB.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
