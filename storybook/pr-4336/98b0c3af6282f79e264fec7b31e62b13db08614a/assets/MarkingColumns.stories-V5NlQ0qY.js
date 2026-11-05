import{f as p,j as e}from"./iframe-fiDzxSac.js";import{O as i}from"./object-table-Cfy5VgMd.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-vUH8WtXv.js";import"./Table-DKy28Mke.js";import"./index-RsLmo9Ef.js";import"./Dialog-DOJr_i77.js";import"./cross-Dj0Tr1LR.js";import"./svgIconContainer-DuFQRV6L.js";import"./useBaseUiId-D5crqalZ.js";import"./InternalBackdrop-CodZtGfP.js";import"./composite-BaurXFau.js";import"./index-ZxWxF6R4.js";import"./index-CFMoivIb.js";import"./index-BbKVh42F.js";import"./useEventCallback-CNobfbIA.js";import"./SkeletonBar-Bv_L57OJ.js";import"./LoadingCell-CzRJ6sTb.js";import"./ColumnConfigDialog-2FQHcVYm.js";import"./DraggableList-BSfGvR0K.js";import"./search-B0MLGd_Y.js";import"./Input-kfNjj_-b.js";import"./useControlled-CY87ml-W.js";import"./Button-BF-ip-LD.js";import"./small-cross-XpA8OmpU.js";import"./ActionButton-DJAwwkO8.js";import"./Checkbox-C_Tjg2ZD.js";import"./useValueChanged-DVEDmsGJ.js";import"./CollapsiblePanel-rOI86CBK.js";import"./MultiColumnSortDialog-CEkRnoUu.js";import"./MenuTrigger-D7sevTuD.js";import"./CompositeItem-CFHCXDOZ.js";import"./ToolbarRootContext-C3QdEmtK.js";import"./getDisabledMountTransitionStyles-Cl4MErAH.js";import"./getPseudoElementBounds-Cz4hQZQV.js";import"./chevron-down-BeNvA5Jp.js";import"./index-CxuMtNmx.js";import"./error-DWaVmqt2.js";import"./BaseCbacBanner-Df49S7d1.js";import"./makeExternalStore-GIa5UA4P.js";import"./Tooltip-BmuBTOPC.js";import"./PopoverPopup-CoMFK958.js";import"./debounce-D-d1nhMU.js";import"./useOsdkClient-BTUTxBhe.js";import"./tick-_9QlYMSH.js";import"./DropdownField-Pss_3XlK.js";import"./isEqual-Dm9UOhP2.js";import"./withOsdkMetrics-CGcDstXp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
