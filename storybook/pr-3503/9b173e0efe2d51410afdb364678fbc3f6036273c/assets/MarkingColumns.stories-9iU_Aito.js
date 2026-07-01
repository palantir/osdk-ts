import{f as n,j as t}from"./iframe-e4xxZlLX.js";import{O as p}from"./object-table-CYiddsTF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-rJdqRfxk.js";import"./Table-Bb3T1q4T.js";import"./index-Gm9A5VSg.js";import"./Dialog-B-ew0HoM.js";import"./cross-gfESoIOU.js";import"./svgIconContainer-UwA6AoWd.js";import"./useBaseUiId-DGzUd2I8.js";import"./InternalBackdrop-rq3tb_Wb.js";import"./composite-Csv0wmR-.js";import"./index-DUJUZG2z.js";import"./index-3H7a4RR8.js";import"./index-DnszxVay.js";import"./useEventCallback-rcwqho5k.js";import"./SkeletonBar-DSC0ev9b.js";import"./LoadingCell-CeDE7SYa.js";import"./ColumnConfigDialog-B8LuCvjk.js";import"./DraggableList-BoSXRicX.js";import"./search-D_83hUj3.js";import"./Input-QxJmuteo.js";import"./useControlled-U9efWSZ0.js";import"./Button-DknwoNF0.js";import"./small-cross-BhXmPPvn.js";import"./ActionButton-C5XgDIm9.js";import"./Checkbox-DtTaJBTW.js";import"./minus-B8lsOsrg.js";import"./tick-Dpqvl9W2.js";import"./useValueChanged-uTtqGcmI.js";import"./caret-down-BFlswwP8.js";import"./CollapsiblePanel-Xk-1RyRr.js";import"./MultiColumnSortDialog-DcROhRAq.js";import"./MenuTrigger-B7nME5B3.js";import"./CompositeItem-BlIMV_eY.js";import"./ToolbarRootContext-m8WQ9JxB.js";import"./getDisabledMountTransitionStyles-BpndDTHW.js";import"./getPseudoElementBounds-dcmsCxF_.js";import"./chevron-down-BiR-SeyM.js";import"./index-BMPSm5Vl.js";import"./error-D55kQXFb.js";import"./BaseCbacBanner-CBacpsYg.js";import"./makeExternalStore-j_oqf-Bd.js";import"./Tooltip-DvmlGp6R.js";import"./PopoverPopup-4lqMeGZi.js";import"./toNumber-lHIdAUwG.js";import"./useOsdkClient-BzAwfM7P.js";import"./DropdownField-DbrGs-G5.js";import"./withOsdkMetrics-BH2KiWKg.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
