import{f as n,j as t}from"./iframe-CJ1k9s2s.js";import{O as p}from"./object-table-BIIzuX-9.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-xGEu8B2E.js";import"./Table-Cv4zI1MX.js";import"./index-BDnFjOlH.js";import"./Dialog-Cs_sQyHQ.js";import"./cross-D470-lej.js";import"./svgIconContainer-ChwrX5Lf.js";import"./useBaseUiId-DRFVnBda.js";import"./InternalBackdrop-BCkmE3Pa.js";import"./composite-CyTvAPVt.js";import"./index-C06RO_Su.js";import"./index-JosqavAX.js";import"./index-D4TxaTBR.js";import"./useEventCallback-DExgDMFD.js";import"./SkeletonBar-DfiHRzYw.js";import"./LoadingCell-Dvkvqsth.js";import"./ColumnConfigDialog-Kvkc2gQU.js";import"./DraggableList-DiTm8S8t.js";import"./search-f2QUDm-t.js";import"./Input-DCQ9YCGs.js";import"./useControlled-Bq1q_8CB.js";import"./Button-i-vyX_VJ.js";import"./small-cross-BQfJzVSj.js";import"./ActionButton-CR64bhzy.js";import"./Checkbox-CrRcULaR.js";import"./useValueChanged-yQrbeR_M.js";import"./CollapsiblePanel-BW6og0en.js";import"./MultiColumnSortDialog-Cap5ovi8.js";import"./MenuTrigger-C4hauMUT.js";import"./CompositeItem-Bp61A018.js";import"./ToolbarRootContext-DANNGKFY.js";import"./getDisabledMountTransitionStyles-ip5b1aJf.js";import"./getPseudoElementBounds-KzXbuBjp.js";import"./chevron-down-gslDsfHA.js";import"./index-B4n_eF_o.js";import"./error-BjfPp1E9.js";import"./BaseCbacBanner-DqYugKkF.js";import"./makeExternalStore-D_hniRDO.js";import"./Tooltip-bx7MNMvi.js";import"./PopoverPopup-B1AJKiCK.js";import"./toNumber-BAbZVJDC.js";import"./useOsdkClient-BaSnKZfU.js";import"./tick-CDYdi_vM.js";import"./DropdownField-BJ48uJBA.js";import"./withOsdkMetrics-CUAcaiOz.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
