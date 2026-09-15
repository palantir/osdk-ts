import{f as p,j as e}from"./iframe-5SoalxB8.js";import{O as i}from"./object-table-DcytYsBJ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B3AWIfbd.js";import"./Table-BhIfm7wU.js";import"./index-Cez1kwXk.js";import"./Dialog-Bdx_IH1I.js";import"./cross-C6M2F8_v.js";import"./svgIconContainer-ZIKM4LC1.js";import"./useBaseUiId-_hIxwWiU.js";import"./InternalBackdrop-BNnaRKAX.js";import"./composite-SE2iQFWF.js";import"./index-DT5Sidop.js";import"./index-OzD1TZjX.js";import"./index-DWklm5Nh.js";import"./useEventCallback-CoMxb96Z.js";import"./SkeletonBar-UdUH3l3g.js";import"./LoadingCell-Dy3t5IHW.js";import"./ColumnConfigDialog-CJ_Qxc9o.js";import"./DraggableList-D9zI9O9E.js";import"./search-7jKLWuvF.js";import"./Input-B7jz047V.js";import"./useControlled-WPjc1su4.js";import"./Button-C7yTVROs.js";import"./small-cross-BXQIwf9i.js";import"./ActionButton-vMTpem8c.js";import"./Checkbox-BxPwSiXj.js";import"./useValueChanged-BRgu9RH8.js";import"./CollapsiblePanel-BPbFINDF.js";import"./MultiColumnSortDialog-DG0uFl9D.js";import"./MenuTrigger-BhHI-4MQ.js";import"./CompositeItem-vz-X2T1a.js";import"./ToolbarRootContext-BawR_l4w.js";import"./getDisabledMountTransitionStyles-iftAt274.js";import"./getPseudoElementBounds-DeJjQFQA.js";import"./chevron-down-C4Jmkz2d.js";import"./index-DlMkNRxq.js";import"./error-_mgoiawP.js";import"./BaseCbacBanner-BMmA5ke7.js";import"./makeExternalStore-DfAT07Vb.js";import"./Tooltip-DyjzpvsB.js";import"./PopoverPopup-CZVBhwLf.js";import"./debounce-Cow5gaxU.js";import"./useOsdkClient-Ct6jxELr.js";import"./tick-b6pDkRL9.js";import"./DropdownField-B9xNR_1-.js";import"./isEqual-BBKpWkCo.js";import"./withOsdkMetrics-BjqDzNow.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
