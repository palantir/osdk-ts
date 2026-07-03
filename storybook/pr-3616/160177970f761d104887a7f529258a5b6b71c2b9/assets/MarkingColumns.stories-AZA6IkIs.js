import{f as n,j as t}from"./iframe-CyqMwwwa.js";import{O as p}from"./object-table-CMugAopB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-AtWPu6x5.js";import"./Table-DAo8sUBL.js";import"./index-BQ01XBWb.js";import"./Dialog-DXT83sRA.js";import"./cross-DO-0I_3Y.js";import"./svgIconContainer-B6yM1sE_.js";import"./useBaseUiId-DzGITZS5.js";import"./InternalBackdrop-8Zqb3ANz.js";import"./composite-Duq6hh4g.js";import"./index-DYsHBxeE.js";import"./index-CcpSGuBk.js";import"./index-DIHHxjgY.js";import"./useEventCallback-Cj1-w6WN.js";import"./SkeletonBar-BQMpFHOu.js";import"./LoadingCell-CvF53yTG.js";import"./ColumnConfigDialog-B74qC10Z.js";import"./DraggableList-CkslO-Mh.js";import"./search-cwTssfHk.js";import"./Input-BtpaAmi8.js";import"./useControlled-rqeQw8gV.js";import"./Button-CXO_Rr9x.js";import"./small-cross-Dp3Pu0cg.js";import"./ActionButton-Bqy0gAP_.js";import"./Checkbox-CsrbQ5-_.js";import"./minus-CEraPhPD.js";import"./tick-OKmhAjot.js";import"./useValueChanged-D7ybjWid.js";import"./caret-down-BWp8ZItO.js";import"./CollapsiblePanel-Ct-28Nrn.js";import"./MultiColumnSortDialog-BXFsItg4.js";import"./MenuTrigger-upw5FU3W.js";import"./CompositeItem-BgpsbA-o.js";import"./ToolbarRootContext-Ck6me1lS.js";import"./getDisabledMountTransitionStyles-DAGRMAK3.js";import"./getPseudoElementBounds-BtFR1fwX.js";import"./chevron-down-B36C-D_2.js";import"./index-DLKsCh9P.js";import"./error-po-IxwNG.js";import"./BaseCbacBanner-D0hiOFcz.js";import"./makeExternalStore-D9iTGIhU.js";import"./Tooltip-C9sRcwYR.js";import"./PopoverPopup-D2pwyG45.js";import"./toNumber-CnvNCkYP.js";import"./useOsdkClient-C0RHeFUe.js";import"./DropdownField-BRLcEhKR.js";import"./withOsdkMetrics-Dbs3QriX.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
