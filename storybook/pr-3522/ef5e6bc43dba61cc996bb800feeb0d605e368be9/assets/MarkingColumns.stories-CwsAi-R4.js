import{f as n,j as t}from"./iframe-ZUB6IC-i.js";import{O as p}from"./object-table-DqXpM9nf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-JSGDW2EE.js";import"./Table-BLlMduka.js";import"./index-kkF-sHSR.js";import"./Dialog-C5bdms97.js";import"./cross-DAlFLQ8V.js";import"./svgIconContainer-vkeEtLLq.js";import"./useBaseUiId-8JVytAd4.js";import"./InternalBackdrop-C1gMFC_6.js";import"./composite-CYJkcK0Q.js";import"./index-BnGIgAZn.js";import"./index-BjqQMb7M.js";import"./index-BtELYtbZ.js";import"./useEventCallback-BQWo0XOa.js";import"./SkeletonBar-DdW3wJCW.js";import"./LoadingCell-C_PYltWi.js";import"./ColumnConfigDialog-B9oB7EmY.js";import"./DraggableList-B2l0L13f.js";import"./search-Cxmpkc3b.js";import"./Input-B0ErIUZ2.js";import"./useControlled-D5JAD95y.js";import"./Button-9-saF2rs.js";import"./small-cross-CiR4Ogs1.js";import"./ActionButton-Dg6ResVF.js";import"./Checkbox-BKKaJe3n.js";import"./minus-oAtQTwgm.js";import"./tick-BJNtpojT.js";import"./useValueChanged-C6wGv_F3.js";import"./caret-down-CM67Qc_g.js";import"./CollapsiblePanel-CytwC8BP.js";import"./MultiColumnSortDialog-BxX3Gf7u.js";import"./MenuTrigger-DvWnlAjk.js";import"./CompositeItem-DxD9hL6l.js";import"./ToolbarRootContext-DXYxYbuP.js";import"./getDisabledMountTransitionStyles-BAiLTdY4.js";import"./getPseudoElementBounds-6ElEA1xK.js";import"./chevron-down-C67n9eRn.js";import"./index-CvCX7BzG.js";import"./error-B-AGre3U.js";import"./BaseCbacBanner-J9qIbOCV.js";import"./makeExternalStore-DwG2idL0.js";import"./Tooltip-tQTXjl9-.js";import"./PopoverPopup-D-EEkwJQ.js";import"./toNumber-DZrzsv1u.js";import"./useOsdkClient-Cg1MzSTt.js";import"./DropdownField-CqxJU-Q2.js";import"./withOsdkMetrics-hA4DBR4r.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ir as default};
