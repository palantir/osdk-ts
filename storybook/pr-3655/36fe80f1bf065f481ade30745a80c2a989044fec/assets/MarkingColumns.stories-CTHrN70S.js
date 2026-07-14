import{f as n,j as t}from"./iframe-DpnSyYKg.js";import{O as p}from"./object-table-CFnhSkkB.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D4Ne9IvA.js";import"./Table-DCw71bWA.js";import"./index-BhE-BM1F.js";import"./Dialog-Cu35BK7y.js";import"./cross-CdRZLzcb.js";import"./svgIconContainer-6ZtllvSg.js";import"./useBaseUiId-BXhD5RtC.js";import"./InternalBackdrop-DrIgeM7G.js";import"./composite-GHogKWSt.js";import"./index-Bt0j-H5Q.js";import"./index-CJhmNOR9.js";import"./index-DNtF71kg.js";import"./useEventCallback-BSZsZXKY.js";import"./SkeletonBar-H0RBJpxK.js";import"./LoadingCell-DnP_lAAr.js";import"./ColumnConfigDialog-B5kTUS8_.js";import"./DraggableList-DxXNoKoT.js";import"./search-BN0Oo0wI.js";import"./Input-x7mFGvsV.js";import"./useControlled-ByflmZjz.js";import"./Button-GAbnoE2Z.js";import"./small-cross-n8pIBdN4.js";import"./ActionButton-CdBo_g-4.js";import"./Checkbox-iaFKk1Uh.js";import"./useValueChanged-Czx6mT7t.js";import"./CollapsiblePanel-DW4o43yM.js";import"./MultiColumnSortDialog-C4jvSvxT.js";import"./MenuTrigger-I1Q7y-c_.js";import"./CompositeItem-CMedSlEq.js";import"./ToolbarRootContext-D9Rovtc1.js";import"./getDisabledMountTransitionStyles-CCZGhpkJ.js";import"./getPseudoElementBounds-DxtsF1fe.js";import"./chevron-down-DcI0Fccd.js";import"./index-Cq5MYYL8.js";import"./error-U-LNQglq.js";import"./BaseCbacBanner-BRFvhPdo.js";import"./makeExternalStore-Ck6cDuZK.js";import"./Tooltip-DFIYvQFu.js";import"./PopoverPopup-D2D_9QOI.js";import"./toNumber-CCgqIba8.js";import"./useOsdkClient-C4U_tr0P.js";import"./tick-C6KZECPu.js";import"./DropdownField-htEti2vj.js";import"./withOsdkMetrics-BeQr-ddq.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
