import{f as p,j as e}from"./iframe-FZKVnNVk.js";import{O as i}from"./object-table-loXsL1bM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-3dwBIJCj.js";import"./Table-hKbrjj3q.js";import"./index-Dde_nhTq.js";import"./Dialog-nns0O2qZ.js";import"./cross-Dm4ybRp6.js";import"./svgIconContainer-XHaqdbDx.js";import"./useBaseUiId-CHWJmPEK.js";import"./InternalBackdrop-BqJGJ_zZ.js";import"./composite-pRARdUSn.js";import"./index-CF9ImBhb.js";import"./index-DcCADMqh.js";import"./index-CkeIfmFs.js";import"./useEventCallback-zjPLn5wF.js";import"./SkeletonBar-BGliQaQA.js";import"./LoadingCell-93UchtYC.js";import"./ColumnConfigDialog-Cu8cIVL2.js";import"./DraggableList-BGvhm88l.js";import"./search-UOw594pj.js";import"./Input-CZghJbmx.js";import"./useControlled-z91UpuYz.js";import"./Button-CYIzntRV.js";import"./small-cross-NJGDyAQR.js";import"./ActionButton-CdreXPwS.js";import"./Checkbox-BXapXcMI.js";import"./useValueChanged-C5VkOvOI.js";import"./CollapsiblePanel-CmKPWPla.js";import"./MultiColumnSortDialog-BvfowQRQ.js";import"./MenuTrigger-Cq7tkS0o.js";import"./CompositeItem-DwzK3_pD.js";import"./ToolbarRootContext-DURRKwiG.js";import"./getDisabledMountTransitionStyles-LA4j7wgS.js";import"./getPseudoElementBounds-DzPv2Lpp.js";import"./chevron-down-D0c3SzT7.js";import"./index-CO1rso4Q.js";import"./error-ClLL5bQm.js";import"./BaseCbacBanner-DnKk2Fz0.js";import"./makeExternalStore-BWIKD2My.js";import"./Tooltip-CNa5ZfhK.js";import"./isObject-DSmxuai9.js";import"./debounce-BBy5KbHR.js";import"./useOsdkClient-DZXuGuSk.js";import"./tick-BfEHlf8d.js";import"./DropdownField-D0HrafpY.js";import"./isEqual-CFjxyXGr.js";import"./_baseIsEqual-CEa3UOU3.js";import"./withOsdkMetrics-BeTzvhLK.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
