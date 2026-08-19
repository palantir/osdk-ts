import{f as p,j as e}from"./iframe-B_x9XvmG.js";import{O as i}from"./object-table-l5ZKxGcv.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DITc7NUo.js";import"./Table-BxY4gdLK.js";import"./index-C3PElE5z.js";import"./Dialog-QLZadL9p.js";import"./cross-CXaMbnSI.js";import"./svgIconContainer-D4Odc14H.js";import"./useBaseUiId-BiDC3o6s.js";import"./InternalBackdrop-xOer-FmO.js";import"./composite-BZvFUogL.js";import"./index-BLoCQL3a.js";import"./index-BBIYY3UR.js";import"./index-dzoRTbgc.js";import"./useEventCallback-CTv-Axwi.js";import"./SkeletonBar-BsXsv3-p.js";import"./LoadingCell-CjCa9wK8.js";import"./ColumnConfigDialog-D59UQMdg.js";import"./DraggableList-dwa4l-3n.js";import"./search-DnO_YLk6.js";import"./Input-CrrumfsJ.js";import"./useControlled-CmgwpyDU.js";import"./Button-C6ny7jzS.js";import"./small-cross-DvnB8WJm.js";import"./ActionButton-ByK1EtK2.js";import"./Checkbox-BZHsgA9m.js";import"./useValueChanged-CInVWb7b.js";import"./CollapsiblePanel-DrJyDo7E.js";import"./MultiColumnSortDialog-B8T_q1dR.js";import"./MenuTrigger-B0tpP2Ga.js";import"./CompositeItem-C9DYqB7p.js";import"./ToolbarRootContext-7JgjqYNy.js";import"./getDisabledMountTransitionStyles-DoJBgGot.js";import"./getPseudoElementBounds-yhz1puC4.js";import"./chevron-down-Cacce87-.js";import"./index-wwXQ8xo5.js";import"./error-CpyC-KmL.js";import"./BaseCbacBanner-6ECyv6vF.js";import"./makeExternalStore-BY--bFis.js";import"./Tooltip-C9TvRN4R.js";import"./PopoverPopup-BI1Nn7oq.js";import"./debounce-BIWVV4l_.js";import"./useOsdkClient-CBHc-CmL.js";import"./tick-CeNcKQ7_.js";import"./DropdownField-sX4nPjva.js";import"./isEqual-BbGOrC67.js";import"./withOsdkMetrics-BwmTGSf3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
