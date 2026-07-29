import{f as n,j as t}from"./iframe-DW5haiqE.js";import{O as p}from"./object-table-U7i4Ks2g.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DVKA9px6.js";import"./Table-D1hqOYTj.js";import"./index-xjAgWE80.js";import"./Dialog-yqI1PCjD.js";import"./cross-Ce5L2vs3.js";import"./svgIconContainer-CEP856Ty.js";import"./useBaseUiId-CvU9jtB4.js";import"./InternalBackdrop-D8Nl1wTF.js";import"./composite-CbaFILzo.js";import"./index-_rIVvBJF.js";import"./index-BisFlCA8.js";import"./index-CilzRk4R.js";import"./useEventCallback-BoX992sc.js";import"./SkeletonBar-Ce6bjEL7.js";import"./LoadingCell-CHzBWt2v.js";import"./ColumnConfigDialog-BdDcClS-.js";import"./DraggableList-BVwXeQ9F.js";import"./Input-BldVSmgU.js";import"./useControlled-klrfy2e5.js";import"./Button-Dl8_S-nu.js";import"./small-cross-CwE1VUWN.js";import"./ActionButton-DWOH-1EL.js";import"./Checkbox-C8832iPx.js";import"./minus-BAU68G9T.js";import"./useValueChanged-Cf4eEP95.js";import"./caret-down-CisoYFST.js";import"./CollapsiblePanel-gMbrp4gW.js";import"./MultiColumnSortDialog-DnvRHefW.js";import"./MenuTrigger-D0OMDS-3.js";import"./CompositeItem-BTy4FVkA.js";import"./ToolbarRootContext-DxbxBlN-.js";import"./getDisabledMountTransitionStyles-Dbwf1Coz.js";import"./getPseudoElementBounds-BoSxbcSn.js";import"./chevron-down-CVV46y4F.js";import"./index-wvYSg08r.js";import"./error-BuErwVjw.js";import"./BaseCbacBanner-DQCOg9ZV.js";import"./makeExternalStore-CRp4eHSV.js";import"./Tooltip-1AG4YkwS.js";import"./PopoverPopup-Igb7F1B8.js";import"./toNumber-lpeY3mbR.js";import"./useOsdkClient-Diy5fZtY.js";import"./DropdownField-7KxmwqB2.js";import"./withOsdkMetrics-C_3kcjB2.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
