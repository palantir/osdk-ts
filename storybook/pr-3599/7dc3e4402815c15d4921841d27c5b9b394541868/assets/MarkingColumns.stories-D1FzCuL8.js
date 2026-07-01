import{f as n,j as t}from"./iframe-BBjxdfoH.js";import{O as p}from"./object-table-BWD-ICNt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-mCdvOkgg.js";import"./Table-BLYakq2D.js";import"./index-CXpfL-al.js";import"./Dialog-aOGCys_7.js";import"./cross-BpOK24Em.js";import"./svgIconContainer-Dl_6Ak-k.js";import"./useBaseUiId-CODNe0dC.js";import"./InternalBackdrop-COi04poT.js";import"./composite-Q-RZA8KT.js";import"./index-CktCWn9i.js";import"./index-GmPMBlgy.js";import"./index-B9n9mIA_.js";import"./useEventCallback-BumJ118x.js";import"./SkeletonBar-B_x223BN.js";import"./LoadingCell-94t37gwD.js";import"./ColumnConfigDialog-DRp4LgeI.js";import"./DraggableList-oUXBlL9u.js";import"./search-B9-C2B7m.js";import"./Input-slapFlw6.js";import"./useControlled-CWLh4UCS.js";import"./Button-CMQoOM5E.js";import"./small-cross-CSFuBdIK.js";import"./ActionButton-BLDpWw5V.js";import"./Checkbox-Dmy2rqbu.js";import"./minus-BeRbPymu.js";import"./tick-YpPEocQb.js";import"./useValueChanged-CeZGFBSw.js";import"./caret-down-Bg6Ma-df.js";import"./CollapsiblePanel-BMdBXdhN.js";import"./MultiColumnSortDialog-CTw9PRjN.js";import"./MenuTrigger-Cucf9fiM.js";import"./CompositeItem-F2YNVfIG.js";import"./ToolbarRootContext-vxBZ3l3m.js";import"./getDisabledMountTransitionStyles-CvBJvZzS.js";import"./getPseudoElementBounds-4wLic3W8.js";import"./chevron-down-BJj78C4_.js";import"./index-B96dIsgt.js";import"./error-D35UHXxk.js";import"./BaseCbacBanner-D8zJeVPA.js";import"./makeExternalStore-CL5NyPse.js";import"./Tooltip-BLMNRTXo.js";import"./PopoverPopup-BJpNBWEw.js";import"./toNumber-yEtr79zj.js";import"./useOsdkClient-DeRm3bRL.js";import"./DropdownField-D6DbAw6R.js";import"./withOsdkMetrics-Q-YLxusW.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
