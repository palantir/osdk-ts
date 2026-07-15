import{f as n,j as t}from"./iframe-CJiq-E_e.js";import{O as p}from"./object-table-BxyN07sa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DS5Tv33m.js";import"./Table-CXpNxwpr.js";import"./index-RG-pe8JG.js";import"./Dialog-C2F2Gse7.js";import"./cross-Vl2_w_5N.js";import"./svgIconContainer-BAf1AP0X.js";import"./useBaseUiId-DCcJMylE.js";import"./InternalBackdrop-D1cGFBoF.js";import"./composite-CvR0XMDM.js";import"./index-XtazrHa6.js";import"./index-2vCvkmSC.js";import"./index-vVs_6ZlX.js";import"./useEventCallback-jkKKyR19.js";import"./SkeletonBar-DTzomy64.js";import"./LoadingCell-5CkqKlTn.js";import"./ColumnConfigDialog-V1eOunda.js";import"./DraggableList-BsqDkNyL.js";import"./search-CDDtQBtn.js";import"./Input-BttGwUkn.js";import"./useControlled-BQYZJGLj.js";import"./Button-BEkaDJcE.js";import"./small-cross-CdxYkX4l.js";import"./ActionButton-wy-I23gh.js";import"./Checkbox-4yAgzsKI.js";import"./useValueChanged-BluNvFvE.js";import"./CollapsiblePanel-D6mxuvZt.js";import"./MultiColumnSortDialog-CK6TQgwi.js";import"./MenuTrigger-sriWWN72.js";import"./CompositeItem-ZPPorMDp.js";import"./ToolbarRootContext-NAVJZ1iN.js";import"./getDisabledMountTransitionStyles-C2kt07r_.js";import"./getPseudoElementBounds-ClkW9Rfu.js";import"./chevron-down-Csq-RQuV.js";import"./index-habhP5WM.js";import"./error-Bk6uebMO.js";import"./BaseCbacBanner-ynxnNx1o.js";import"./makeExternalStore-Dua2Wtk2.js";import"./Tooltip-vsaWSURO.js";import"./PopoverPopup-B1xZD49Q.js";import"./toNumber-DpmMuRCX.js";import"./useOsdkClient-CQqh3i4R.js";import"./tick-DlTqRNWj.js";import"./DropdownField-CPJ9596a.js";import"./withOsdkMetrics-D7xkgiCe.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
