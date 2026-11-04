import{f as p,j as e}from"./iframe-B8HV8iQM.js";import{O as i}from"./object-table-BmDs5ypl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BJL_29SE.js";import"./Table-CN6tDEys.js";import"./index-DfArBtGw.js";import"./Dialog-CtwmlsVl.js";import"./cross-BUomV37k.js";import"./svgIconContainer-CSeiJgb1.js";import"./useBaseUiId-DIsSmRfw.js";import"./InternalBackdrop-D8Lv6NUu.js";import"./composite-Csop57qo.js";import"./index-6KHmLmfs.js";import"./index-UkSWMlbC.js";import"./index-BdGJVPhn.js";import"./useEventCallback-C4vCOB3Y.js";import"./SkeletonBar-IYKBkIS2.js";import"./LoadingCell-Ba-FKL6d.js";import"./ColumnConfigDialog-C9QzF-Qy.js";import"./DraggableList-BHV1EGi1.js";import"./search-NJ19wZoC.js";import"./Input-BDX0t5YK.js";import"./useControlled-Bmw28nji.js";import"./Button-C9_cOvqp.js";import"./small-cross-DIXE5x7P.js";import"./ActionButton-Be-vXg2-.js";import"./Checkbox-CvkNDLi6.js";import"./useValueChanged-B-_ytn6c.js";import"./CollapsiblePanel-SrwTh7HR.js";import"./MultiColumnSortDialog-BCwk3CPa.js";import"./MenuTrigger-BC9qF4S9.js";import"./CompositeItem-B4-eeroY.js";import"./ToolbarRootContext-CMP0qHsY.js";import"./getDisabledMountTransitionStyles-C_SsSajC.js";import"./getPseudoElementBounds-tj4TkaA0.js";import"./chevron-down-InHxZIxd.js";import"./index-BtUOZ1zx.js";import"./error-B8hDXUgK.js";import"./BaseCbacBanner-BQo3W4ga.js";import"./makeExternalStore-D-MiCBSb.js";import"./Tooltip-BdCeYLjB.js";import"./PopoverPopup-BOpxhme4.js";import"./debounce-3SAgyzFW.js";import"./useOsdkClient-D7UMSCqS.js";import"./tick-CnJDPiGK.js";import"./DropdownField-CHI-_Y2P.js";import"./isEqual-7IXkhA4A.js";import"./withOsdkMetrics-Qp2i-feo.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
