import{f as p,j as e}from"./iframe-CAlFL39P.js";import{O as i}from"./object-table-UQy4RF9D.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Di8UnZgY.js";import"./Table-DsU3_Ge1.js";import"./index-Btel0vm8.js";import"./Dialog-CrbdkfzJ.js";import"./cross-C-7oEPIv.js";import"./svgIconContainer-B3bjsS48.js";import"./useBaseUiId-DZP7PN-D.js";import"./InternalBackdrop-CJFWdMDJ.js";import"./composite-Do6HvbOs.js";import"./index-CFlCfQcw.js";import"./index-BkqKFdv7.js";import"./index-vkk_5yOj.js";import"./useEventCallback-DuUtYSXt.js";import"./SkeletonBar-D07kBYWy.js";import"./LoadingCell-Btiev75L.js";import"./ColumnConfigDialog-D9yGeKRs.js";import"./DraggableList-pJ6FsEp7.js";import"./search-B49Txj1R.js";import"./Input-BBwNdl2L.js";import"./useControlled-CagAHQp0.js";import"./Button-C360afnZ.js";import"./small-cross-BLQbHCb6.js";import"./ActionButton-DjRyKh7y.js";import"./Checkbox-B2NUrj_g.js";import"./useValueChanged-BMf8iwn2.js";import"./CollapsiblePanel-EQ6Qu2qu.js";import"./MultiColumnSortDialog-6JpRNIIu.js";import"./MenuTrigger-BMrrXs9Q.js";import"./CompositeItem-BD07_lL8.js";import"./ToolbarRootContext-NYYVBOfJ.js";import"./getDisabledMountTransitionStyles-C65SjH8s.js";import"./getPseudoElementBounds-DAJFGzrR.js";import"./chevron-down-C4L1Vt1n.js";import"./index-DlRk9Ig6.js";import"./error-DNzjg8ag.js";import"./BaseCbacBanner-BozJzFUC.js";import"./makeExternalStore-H3EygE5L.js";import"./Tooltip-DivaijH4.js";import"./PopoverPopup-CDqtgdJD.js";import"./debounce-sXHlCwpy.js";import"./useOsdkClient-BWqfO9Ex.js";import"./tick-C2A5bpz7.js";import"./DropdownField-DbH7bzp-.js";import"./isEqual-UK523JPQ.js";import"./withOsdkMetrics-D_LiGSK5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
