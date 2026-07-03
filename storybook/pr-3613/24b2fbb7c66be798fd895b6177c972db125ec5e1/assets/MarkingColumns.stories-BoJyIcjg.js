import{f as n,j as t}from"./iframe-CEhhBbNK.js";import{O as p}from"./object-table-D_12vcUt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DB8ZhJc4.js";import"./Table-D0yWT9_d.js";import"./index-CHpswpiI.js";import"./Dialog-CRz5T-Er.js";import"./cross-DS2WplKF.js";import"./svgIconContainer-Dth0NKYa.js";import"./useBaseUiId-C8npskZc.js";import"./InternalBackdrop-CzrCeVN2.js";import"./composite-BNINo6Vx.js";import"./index-DyEw3VpL.js";import"./index-DJrOghPE.js";import"./index-ChsBobv4.js";import"./useEventCallback-CnghszoD.js";import"./SkeletonBar-fyTk0NE4.js";import"./LoadingCell-BtK0Ef9c.js";import"./ColumnConfigDialog-DU6e2uqV.js";import"./DraggableList-PL6W4ovw.js";import"./search-bAuDLLvk.js";import"./Input-Dpft6TUY.js";import"./useControlled-CKhigy8T.js";import"./Button-nh4VLvQJ.js";import"./small-cross-DjFNtWP5.js";import"./ActionButton-B0GCmywk.js";import"./Checkbox-B6Fzw6kt.js";import"./minus-YoEhkVMm.js";import"./tick-3sDOEa3a.js";import"./useValueChanged-Zz0zCBQp.js";import"./caret-down-BNKBe6TQ.js";import"./CollapsiblePanel-akVfJX9x.js";import"./MultiColumnSortDialog-Ds0fokYF.js";import"./MenuTrigger-C7MOeRQn.js";import"./CompositeItem-IHqXqKgR.js";import"./ToolbarRootContext--C8cIVEC.js";import"./getDisabledMountTransitionStyles-AXseg_tg.js";import"./getPseudoElementBounds-DR2LxPWu.js";import"./chevron-down-ChyVfUwq.js";import"./index-ChoFX5rI.js";import"./error-kHe-qRwn.js";import"./BaseCbacBanner-DfHd5S0f.js";import"./makeExternalStore-BVjELZXI.js";import"./Tooltip-B4ED1hIa.js";import"./PopoverPopup-VOv-406c.js";import"./toNumber-tyLdKr4P.js";import"./useOsdkClient-DkTA_2hH.js";import"./DropdownField-DozIH8b_.js";import"./withOsdkMetrics-B02PfkNJ.js";const ir={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
