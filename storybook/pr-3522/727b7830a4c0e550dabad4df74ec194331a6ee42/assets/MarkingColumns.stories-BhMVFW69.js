import{f as n,j as t}from"./iframe-UO4Ybkw7.js";import{O as p}from"./object-table-minTE95q.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DiJvXCUK.js";import"./Table-gYp1cA-1.js";import"./index-Bb5mjG_a.js";import"./Dialog-C-c-Vb1c.js";import"./cross-BCTqA8Jr.js";import"./svgIconContainer-B_raw7t4.js";import"./useBaseUiId-_4TB_TLw.js";import"./InternalBackdrop-DG29521T.js";import"./composite-KS3-JNxL.js";import"./index-Bvhr_DAd.js";import"./index-DKFo-HpT.js";import"./index-B19JNjQG.js";import"./useEventCallback-Dz-HZ3Np.js";import"./SkeletonBar-D1yGdgp-.js";import"./LoadingCell-PTR6RfRl.js";import"./ColumnConfigDialog-CHhX8KWW.js";import"./DraggableList-C87Ym9zT.js";import"./search-B4rNT_0W.js";import"./Input-CEw-t_4F.js";import"./useControlled-CR06vBJn.js";import"./Button-kE2g4U-0.js";import"./small-cross--7lRPtID.js";import"./ActionButton-Coi3xlzQ.js";import"./Checkbox-DJ051bR9.js";import"./minus-XZ5ilPR8.js";import"./tick-CSlRno-u.js";import"./useValueChanged-C4Lv8Guw.js";import"./caret-down-OLSMawvw.js";import"./CollapsiblePanel-DVelCP_y.js";import"./MultiColumnSortDialog-BfZ9mNyk.js";import"./MenuTrigger-CcN81Rk4.js";import"./CompositeItem-61FeIbyL.js";import"./ToolbarRootContext-bbK7gci1.js";import"./getDisabledMountTransitionStyles-BckiRFDN.js";import"./getPseudoElementBounds-3Q_UrLvs.js";import"./chevron-down-CEdjdYlD.js";import"./index-CVIKVHhv.js";import"./error-D7LxK_a3.js";import"./BaseCbacBanner-CXzzZjUT.js";import"./makeExternalStore-BJTOYz4i.js";import"./Tooltip-z611wQhe.js";import"./PopoverPopup-B1ErmwQo.js";import"./toNumber-CfFeyvd2.js";import"./useOsdkClient-DNydPMdf.js";import"./DropdownField-NqVwCBgu.js";import"./withOsdkMetrics-pAjbcXOm.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
