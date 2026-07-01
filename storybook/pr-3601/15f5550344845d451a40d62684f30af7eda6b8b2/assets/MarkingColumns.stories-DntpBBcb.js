import{f as n,j as t}from"./iframe-DqIi5H2l.js";import{O as p}from"./object-table-B-YacViO.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C86vAGuD.js";import"./Table-C3H9uB85.js";import"./index-BCQ60U_l.js";import"./Dialog-DwVDEsuS.js";import"./cross-Dr5XmJc0.js";import"./svgIconContainer-CDuC4OGm.js";import"./useBaseUiId-DO463V7b.js";import"./InternalBackdrop-CUuyplta.js";import"./composite-Be1YNfrZ.js";import"./index-xTptXFCr.js";import"./index-D4nFVbyi.js";import"./index-Cb-dHrwH.js";import"./useRole-BRSrN1dE.js";import"./useEventCallback-R4X2PBLx.js";import"./SkeletonBar-DP7ah7bH.js";import"./LoadingCell-CReSef9W.js";import"./ColumnConfigDialog-Ccf5uPoJ.js";import"./DraggableList-CFoU6TZQ.js";import"./Input-qx95b4R1.js";import"./useControlled-DKa5DHWs.js";import"./Button-CV0cYCdF.js";import"./small-cross-qiCd2iS0.js";import"./ActionButton-Dy04h5d0.js";import"./Checkbox-DFtoxvHc.js";import"./minus-RPV2OpRP.js";import"./useValueChanged-rRdAOHsr.js";import"./FieldItemContext-BpCuU8A4.js";import"./caret-down-Cb7ToyeZ.js";import"./CollapsiblePanel-DioNrlcj.js";import"./MultiColumnSortDialog-BZ40b4hl.js";import"./MenuTrigger-CuitPm-X.js";import"./useCompositeListItem-DthbaNEX.js";import"./ToolbarRootContext-Ch_uoF-V.js";import"./getDisabledMountTransitionStyles-B9MFFKE3.js";import"./safePolygon-DIcBUsSg.js";import"./getPseudoElementBounds-CbCSX6Ra.js";import"./CompositeItem-2qfiSIe9.js";import"./chevron-down-B0sS6dSX.js";import"./index-t5HjcbWQ.js";import"./error-vGoXLlzz.js";import"./BaseCbacBanner-Blh32eC1.js";import"./makeExternalStore-DsdJLsiE.js";import"./Tooltip-hcP-ht13.js";import"./PopoverPopup-CxmOQwRY.js";import"./toNumber-CIpT_Hq6.js";import"./useOsdkClient-r3Nz3-F7.js";import"./Combobox-BvXsVmYA.js";import"./DropdownField-CdIvugc9.js";import"./useOsdkObjects-pwBQMOcU.js";import"./withOsdkMetrics-BWcr1Vjf.js";const mr={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const sr=["MarkingColumns"];export{r as MarkingColumns,sr as __namedExportsOrder,mr as default};
