import{f as p,j as e}from"./iframe-D64bY6TH.js";import{O as i}from"./object-table-C8uAPbFI.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C76Jrfws.js";import"./Table-CrZ7d2aP.js";import"./index-Cc3FeXj1.js";import"./Dialog-Cy3xzR8q.js";import"./cross-D6Cdabtd.js";import"./svgIconContainer-CfgNuiYE.js";import"./useBaseUiId-CFOcLwn4.js";import"./InternalBackdrop-Bc_2TPL1.js";import"./composite-DAqKTlgI.js";import"./index-bp5PTA0n.js";import"./index-B70IpAtL.js";import"./index-DpWxliah.js";import"./useEventCallback-CgjSN3m2.js";import"./SkeletonBar-BlBlU7HK.js";import"./LoadingCell-XrALK-34.js";import"./ColumnConfigDialog-BePDkvcN.js";import"./DraggableList-ByZRTa2k.js";import"./search-Bfu3ziqv.js";import"./Input-QZumNvU1.js";import"./useControlled-CxTqzmL5.js";import"./Button-BmCoWmmM.js";import"./small-cross-CwHEtqN2.js";import"./ActionButton-BVVdRIEF.js";import"./Checkbox-DYiWsfyB.js";import"./useValueChanged-Cfe25gjJ.js";import"./CollapsiblePanel-D4Pc_im2.js";import"./MultiColumnSortDialog-C_xoBBQg.js";import"./MenuTrigger-D3zjlXSJ.js";import"./CompositeItem-9LTTeiMZ.js";import"./ToolbarRootContext-CrHW8pig.js";import"./getDisabledMountTransitionStyles-C0e0B9o7.js";import"./getPseudoElementBounds-C8omZZgw.js";import"./chevron-down-CihExyy-.js";import"./index-Dr8-JDhp.js";import"./error-DEgvCPew.js";import"./BaseCbacBanner-DEptZPu_.js";import"./makeExternalStore-DhnEC1sn.js";import"./Tooltip-By2rP-Yc.js";import"./PopoverPopup-Be8aQKMg.js";import"./debounce-Cg8_SxcC.js";import"./useOsdkClient-IPsSAxyW.js";import"./tick-foI34yl5.js";import"./DropdownField-BfpsV4IR.js";import"./isEqual-CQXYOo64.js";import"./withOsdkMetrics-Dszg8kI0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
