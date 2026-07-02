import{f as n,j as t}from"./iframe-D88ys8_5.js";import{O as p}from"./object-table-fHMv59VG.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BSuWjTQ8.js";import"./Table-Cp_y5IqX.js";import"./index-D2iS1gbC.js";import"./Dialog-DxzTKsKC.js";import"./cross-32ksmMI9.js";import"./svgIconContainer-CKMXSgTs.js";import"./useBaseUiId-5ahtmozG.js";import"./InternalBackdrop-BBguK_Gq.js";import"./composite-DyBPRih-.js";import"./index-Cd6eL8Zb.js";import"./index-E2eDRUfi.js";import"./index-DVlbCx9o.js";import"./useRole-BFnkeE3G.js";import"./useEventCallback-Sz5_KXJR.js";import"./SkeletonBar-CAw2fvkk.js";import"./LoadingCell-C8nt4WOz.js";import"./ColumnConfigDialog-CES9OfyM.js";import"./DraggableList-B589NTDE.js";import"./Input-ACvvhHDx.js";import"./useControlled-rkZFEJs-.js";import"./Button-tUp13dwH.js";import"./small-cross-FyZq1WIK.js";import"./ActionButton-qbq-BvAq.js";import"./Checkbox-C94EjZ_3.js";import"./minus-CKn_IV6c.js";import"./useValueChanged-BSGBG8FV.js";import"./FieldItemContext-d1r-WGYt.js";import"./caret-down-g9xom6Am.js";import"./CollapsiblePanel-CtbThwuX.js";import"./MultiColumnSortDialog-DHQ7WpqI.js";import"./MenuTrigger-NGM11S8U.js";import"./useCompositeListItem-DhWFIbt1.js";import"./ToolbarRootContext-BaucZlF2.js";import"./getDisabledMountTransitionStyles-Bd0QG0WE.js";import"./safePolygon-BleuNYCX.js";import"./getPseudoElementBounds-gAqFwjdn.js";import"./CompositeItem-D0sipvbn.js";import"./chevron-down-BoHAKoOS.js";import"./index-Da7I0-cb.js";import"./error-CnpSY9pC.js";import"./BaseCbacBanner-qM_hbMRJ.js";import"./makeExternalStore-hwPEEK2S.js";import"./Tooltip-BWFeCgy6.js";import"./PopoverPopup-BJ7gvj56.js";import"./toNumber-K4OerYjz.js";import"./useOsdkClient-Dg07jMYD.js";import"./Combobox-B8-v-GCg.js";import"./DropdownField-Bcqc29wS.js";import"./useOsdkObjects-RkDVy66i.js";import"./withOsdkMetrics-B5xH0POT.js";const mr={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
