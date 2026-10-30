import{f as p,j as e}from"./iframe-C8YzkEKz.js";import{O as i}from"./object-table-D7SdME4l.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B8sJgEbx.js";import"./Table-C56OY43H.js";import"./index-C-Vxog0Y.js";import"./Dialog-2en1DzcI.js";import"./cross-CSu4FEcq.js";import"./svgIconContainer-_UKoevk1.js";import"./useBaseUiId-4XXFTLSd.js";import"./InternalBackdrop-dIKvouY1.js";import"./composite-DSkWtwuy.js";import"./index-Sammz_NI.js";import"./index-DWcboD_p.js";import"./index-CdSI9hhO.js";import"./useEventCallback-CCpgUzuf.js";import"./SkeletonBar-BWSmrnL_.js";import"./LoadingCell-Dm-PsAvU.js";import"./ColumnConfigDialog-CM8qN433.js";import"./DraggableList-DtsVu7l_.js";import"./search-0pSkbv3G.js";import"./Input-XPv58Dmh.js";import"./useControlled-CCblLEGd.js";import"./Button-XJjUiBNX.js";import"./small-cross-Dk2yMoi_.js";import"./ActionButton-Bcfn6CfF.js";import"./Checkbox-Jf59qoM_.js";import"./useValueChanged-DNAGv0cE.js";import"./CollapsiblePanel-DlES1K8I.js";import"./MultiColumnSortDialog-BhiK2rUk.js";import"./MenuTrigger-DeQjFEoy.js";import"./CompositeItem-CygnWs4n.js";import"./ToolbarRootContext-B7rZx-C2.js";import"./getDisabledMountTransitionStyles-Ck8jkMVH.js";import"./getPseudoElementBounds-DDudvtJw.js";import"./chevron-down-DAumFw1T.js";import"./index-DH0qhbVu.js";import"./error-C6Q2i6Lc.js";import"./BaseCbacBanner-B_fZmsKC.js";import"./makeExternalStore-DCdwwz1M.js";import"./Tooltip-DvVaVw7C.js";import"./PopoverPopup-LsEw6BHM.js";import"./debounce-B0L2FpgR.js";import"./useOsdkClient-vAKVtB8q.js";import"./tick-DweM-Z-r.js";import"./DropdownField-BCYfPW_3.js";import"./isEqual-ERStwv5y.js";import"./withOsdkMetrics-ClUT4fsQ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
