import{f as n,j as t}from"./iframe-kN2CD5Qg.js";import{O as p}from"./object-table-BIdiy0GS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BaVDpoU1.js";import"./Table-Ciwei5TE.js";import"./index-oBrtIaAG.js";import"./Dialog-C5HfxUm9.js";import"./cross-DRmp8dJy.js";import"./svgIconContainer-CxmpMNRa.js";import"./useBaseUiId-B6udq1We.js";import"./InternalBackdrop-BVF173Iy.js";import"./composite-D4cCxMuf.js";import"./index-DS_WxjgQ.js";import"./index-FbxXCkto.js";import"./index-BGaBFTMb.js";import"./useEventCallback-DkiPdzk9.js";import"./SkeletonBar-BEkHG2o3.js";import"./LoadingCell-D2wbWtIq.js";import"./ColumnConfigDialog-0cI3ncQk.js";import"./DraggableList-Bhjp0CnB.js";import"./search-BgBwo5jC.js";import"./Input-ubkYoiwR.js";import"./useControlled-DL9FSZoX.js";import"./Button-D3jhIO28.js";import"./small-cross-Dc5vy2Rt.js";import"./ActionButton-BTYBs_na.js";import"./Checkbox-CBTHRBFp.js";import"./useValueChanged-a4TG1A35.js";import"./CollapsiblePanel-DYTdzwCI.js";import"./MultiColumnSortDialog-hI-Tf89h.js";import"./MenuTrigger-YS6rHvUE.js";import"./CompositeItem-BABLNs1C.js";import"./ToolbarRootContext-CUQoRhDS.js";import"./getDisabledMountTransitionStyles-C0pwxqHL.js";import"./getPseudoElementBounds-YRZFzxDR.js";import"./chevron-down-DBrI4cKi.js";import"./index-BM0_vPDD.js";import"./error-BIXJ4F89.js";import"./BaseCbacBanner-Dcs6jCNU.js";import"./makeExternalStore-CqsXbcPR.js";import"./Tooltip-C2K1WL0n.js";import"./PopoverPopup-kd6gG1P0.js";import"./toNumber-Ca22zIiL.js";import"./useOsdkClient-B4iTmaqi.js";import"./tick-CAhoiOwE.js";import"./DropdownField-SXr2PDBE.js";import"./withOsdkMetrics-C3QIy4-V.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
