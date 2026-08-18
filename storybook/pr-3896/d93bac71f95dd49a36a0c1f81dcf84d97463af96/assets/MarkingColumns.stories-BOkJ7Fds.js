import{f as p,j as e}from"./iframe-Bm2xIDK5.js";import{O as i}from"./object-table-CFUxdN_r.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DjaAX_dd.js";import"./Table-4F6h1b3D.js";import"./index-CRCzPeKr.js";import"./Dialog-BZR8Cca8.js";import"./cross-CkbifLjz.js";import"./svgIconContainer-ZRcJnPU8.js";import"./useBaseUiId-BiVvMHjj.js";import"./InternalBackdrop-vr1BUsoL.js";import"./composite-CbVqY-fJ.js";import"./index-C4KdMwTz.js";import"./index-BPaiiW9-.js";import"./index-Bapk-oR-.js";import"./useEventCallback-RlciTi2w.js";import"./SkeletonBar-DfDeRVBU.js";import"./LoadingCell-DOimdUde.js";import"./ColumnConfigDialog-ChUa5nps.js";import"./DraggableList-C2BMGGxP.js";import"./search-BUI-KeZj.js";import"./Input-DAk1mrJi.js";import"./useControlled-ct5PUNgp.js";import"./Button-B6A5AFkI.js";import"./small-cross-PqOGkBCn.js";import"./ActionButton-C8EGQVdk.js";import"./Checkbox-YRFK2TzR.js";import"./useValueChanged-Cgt2JHZk.js";import"./CollapsiblePanel-DRsQEzKl.js";import"./MultiColumnSortDialog-BgpqHr6x.js";import"./MenuTrigger-Vj5KFc4x.js";import"./CompositeItem-C2KXSrkE.js";import"./ToolbarRootContext-BpHcU6MJ.js";import"./getDisabledMountTransitionStyles-DgA_rwoM.js";import"./getPseudoElementBounds-_BLc3f3_.js";import"./chevron-down-BWun0Vbz.js";import"./index-D54hbR-G.js";import"./error-DiQG4vMl.js";import"./BaseCbacBanner-swcONsxt.js";import"./makeExternalStore-B3tvKJjP.js";import"./Tooltip-CKLRVgEW.js";import"./PopoverPopup-DVgnt-uY.js";import"./debounce-BYjFGIK6.js";import"./useOsdkClient-Czd0V4OL.js";import"./tick-Dkou_i6S.js";import"./DropdownField-CsJ9gtlA.js";import"./isEqual-oln7N0D1.js";import"./withOsdkMetrics-YdolIAmM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
