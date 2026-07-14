import{f as n,j as t}from"./iframe-BNyrhVdW.js";import{O as p}from"./object-table-Ca2axy2d.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-FRiRKs-L.js";import"./Table-BMd5B4t4.js";import"./index-DkBAUnWa.js";import"./Dialog-DkoHgwBj.js";import"./cross-Wb1iDlKc.js";import"./svgIconContainer-MA1JfUXV.js";import"./useBaseUiId-KzHqaaf1.js";import"./InternalBackdrop-CZVVm7To.js";import"./composite-BKmOyerC.js";import"./index-DJNWyFnw.js";import"./index-ooXVSDT_.js";import"./index-FIHYLr8p.js";import"./useEventCallback-BGTVJHKH.js";import"./SkeletonBar-pLMq4URT.js";import"./LoadingCell-Dxv8W3G7.js";import"./ColumnConfigDialog-CsCSWPKE.js";import"./DraggableList-D4UcL9nt.js";import"./search-BgwVfiju.js";import"./Input-Cd2-5o9b.js";import"./useControlled-DCvpdeEr.js";import"./Button-Df4W_3CD.js";import"./small-cross-D5CiSboP.js";import"./ActionButton-Iht_SOL1.js";import"./Checkbox-Bnam-HED.js";import"./useValueChanged-GfcMSebZ.js";import"./CollapsiblePanel-RDDfKzvg.js";import"./MultiColumnSortDialog-DNTsOnTb.js";import"./MenuTrigger-CeHaKOvj.js";import"./CompositeItem-Caz_ZeZt.js";import"./ToolbarRootContext-BWerFr-k.js";import"./getDisabledMountTransitionStyles-yZhHF7zJ.js";import"./getPseudoElementBounds-CzivCr0R.js";import"./chevron-down-Bqs5YN-g.js";import"./index-CujYUlk8.js";import"./error-Ad3vot64.js";import"./BaseCbacBanner-DM9h8wph.js";import"./makeExternalStore-CD_BskCq.js";import"./Tooltip-CgWitfVY.js";import"./PopoverPopup-DJtFM2EN.js";import"./toNumber-Bai0gA1f.js";import"./useOsdkClient-w73E4XS-.js";import"./tick-Byys0MXE.js";import"./DropdownField-CKes_566.js";import"./withOsdkMetrics-XGcTdurw.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
