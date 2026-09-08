import{f as p,j as e}from"./iframe-CMaTw6X_.js";import{O as i}from"./object-table-CvS1PKqw.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-YUCSvBRl.js";import"./Table-BdZxk-Ie.js";import"./index-DcwZFFHE.js";import"./Dialog-BtAm0E3z.js";import"./cross-BToySQSC.js";import"./svgIconContainer-DzaaatyJ.js";import"./useBaseUiId-BQVDaT2W.js";import"./InternalBackdrop-B4tVXPLL.js";import"./composite-CLM32H9h.js";import"./index-DrAoL5DS.js";import"./index-CokBQJMj.js";import"./index-i_JEJzIT.js";import"./useEventCallback-JAzPbeMV.js";import"./SkeletonBar-y-lFwvfk.js";import"./LoadingCell-DIjFy37G.js";import"./ColumnConfigDialog-dfkhJbJK.js";import"./DraggableList-D1PRcDgt.js";import"./search-DX2tWApA.js";import"./Input-C22UXl1f.js";import"./useControlled-BhIydEad.js";import"./Button-gCGWFRxS.js";import"./small-cross-D_VaN_YZ.js";import"./ActionButton-j6Ig36dP.js";import"./Checkbox-BSSG_spo.js";import"./useValueChanged-DC6zsyd6.js";import"./CollapsiblePanel-zt3byeQH.js";import"./MultiColumnSortDialog-ju9Ri7Y7.js";import"./MenuTrigger-Cha642qv.js";import"./CompositeItem-BOjJ-dS3.js";import"./ToolbarRootContext-0tvyCtzm.js";import"./getDisabledMountTransitionStyles-21zR2DnY.js";import"./getPseudoElementBounds-t54joTAf.js";import"./chevron-down-CiliQGq8.js";import"./index-FMHsbTbl.js";import"./error-QpkULiAa.js";import"./BaseCbacBanner-CdnmMMv_.js";import"./makeExternalStore-daS2Qovb.js";import"./Tooltip-B5T5Xpkt.js";import"./PopoverPopup-_o2oNRLE.js";import"./debounce-CcQQoCkT.js";import"./useOsdkClient-BWocAVB-.js";import"./tick-D-4tdeUZ.js";import"./DropdownField-C8LlY8gH.js";import"./isEqual-HbZTEvno.js";import"./withOsdkMetrics-06-Hb-DT.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
