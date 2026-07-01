import{f as n,j as t}from"./iframe-BQ-UFPab.js";import{O as p}from"./object-table-CkBdXWFx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C2q6NCp1.js";import"./Table-CdiPIsG9.js";import"./index-CINCS_hH.js";import"./Dialog-paYnu4ay.js";import"./cross-Cn9a0bfk.js";import"./svgIconContainer-DSZHW2D1.js";import"./useBaseUiId-MrnhRuI7.js";import"./InternalBackdrop-BA-dh_Dq.js";import"./composite-AfrrArFw.js";import"./index-BhyjrTbC.js";import"./index-CHrjTCPO.js";import"./index-BFovtqXH.js";import"./useEventCallback-D2uLjwwK.js";import"./SkeletonBar-C6VggNIK.js";import"./LoadingCell-BYaxGteB.js";import"./ColumnConfigDialog-BHNUkg39.js";import"./DraggableList-B40QKnru.js";import"./search-D2BB4vzI.js";import"./Input-DOJCSaX4.js";import"./useControlled-DailpD-X.js";import"./Button-DcugvAgH.js";import"./small-cross-LUsUce0e.js";import"./ActionButton-cjPgoB9p.js";import"./Checkbox-CQj0pr7t.js";import"./minus-7qZczigh.js";import"./tick-BZP2nvHl.js";import"./useValueChanged-DjXIt3cg.js";import"./caret-down-iR9-OPRM.js";import"./CollapsiblePanel-C4j6LTmG.js";import"./MultiColumnSortDialog-CtezMS-O.js";import"./MenuTrigger-OVMwaJEO.js";import"./CompositeItem-TzTS48sK.js";import"./ToolbarRootContext-Bljw1WLR.js";import"./getDisabledMountTransitionStyles-DrrVoi2c.js";import"./getPseudoElementBounds-DJh1RA32.js";import"./chevron-down-BG90A_3d.js";import"./index-BW1k3ZVh.js";import"./error-_bIEfi5X.js";import"./BaseCbacBanner-0R5G5xhb.js";import"./makeExternalStore-CsvDjyll.js";import"./Tooltip-CoseQslT.js";import"./PopoverPopup-DQbSgkLA.js";import"./toNumber-CVV8ild9.js";import"./useOsdkClient-Dx8GM3be.js";import"./DropdownField-BZWxXcvS.js";import"./withOsdkMetrics-Ci7yXCHq.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
