import{f as p,j as e}from"./iframe-Brg_cLQb.js";import{O as i}from"./object-table-BWs_VCv5.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Y5XS6iK1.js";import"./Table-CXKxbRro.js";import"./index-CrF7Hfnz.js";import"./Dialog-CnyvFr3p.js";import"./cross-BM6OYU6g.js";import"./svgIconContainer-BRGYtCeZ.js";import"./useBaseUiId-DK5umTF8.js";import"./InternalBackdrop-BAArTL5Y.js";import"./composite-DXwrVJ8Z.js";import"./index-C82d9Hjp.js";import"./index-DAYKTTDO.js";import"./index-DWIdoxig.js";import"./useEventCallback-PcLKrdMT.js";import"./SkeletonBar-iXiA43LF.js";import"./LoadingCell-BxTPh0WF.js";import"./ColumnConfigDialog-CAvK7YVH.js";import"./DraggableList-DVewDeMa.js";import"./search-C4E6Jgg1.js";import"./Input-an-oiaSC.js";import"./useControlled-CT2yj4iv.js";import"./isEqual-D49SKO9i.js";import"./isObject-DS2RQay5.js";import"./Button-c0xcWgk4.js";import"./ActionButton-DohSud9u.js";import"./Checkbox-Dkcqx__k.js";import"./useValueChanged-Bm0RcCoh.js";import"./CollapsiblePanel-B3RKaBfX.js";import"./MultiColumnSortDialog-Tlv0fYfn.js";import"./MenuTrigger-CHlGD6Wx.js";import"./CompositeItem-0SA-C97C.js";import"./ToolbarRootContext-DJMC0sxm.js";import"./getDisabledMountTransitionStyles-6mhoIfPT.js";import"./getPseudoElementBounds-YNsuRSMp.js";import"./chevron-down-BdWX5g2Q.js";import"./index-BAbnckoF.js";import"./error-DhNgpSfu.js";import"./BaseCbacBanner-C9uPqEEi.js";import"./makeExternalStore-BTtAbm94.js";import"./Tooltip-CGc_VbY3.js";import"./PopoverPopup-BZFhHUwT.js";import"./debounce-BiADBLNL.js";import"./useOsdkClient-Cmb6R8ID.js";import"./tick-m0A6XvMW.js";import"./DropdownField-Cj3eFEyH.js";import"./withOsdkMetrics-p9hMVxev.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
