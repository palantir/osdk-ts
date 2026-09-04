import{f as p,j as e}from"./iframe-C8SPWzFD.js";import{O as i}from"./object-table-CEVvWNl8.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-0-zjDLXH.js";import"./Table-Sy8XZYjj.js";import"./index-CGimpnDA.js";import"./Dialog-sJbwuz-W.js";import"./cross-yQkVXtk-.js";import"./svgIconContainer-B40AAOuO.js";import"./useBaseUiId-C57VmH3J.js";import"./InternalBackdrop-DxF2V30r.js";import"./composite-DPxUJccb.js";import"./index-VKcShZXo.js";import"./index-BwAo9-Ip.js";import"./index-DI8w2Wrl.js";import"./useEventCallback-DjuFsSbR.js";import"./SkeletonBar-o-eg2SlE.js";import"./LoadingCell-D10QJ8hN.js";import"./ColumnConfigDialog-DgDCdwV7.js";import"./DraggableList-DBkiK7wC.js";import"./search-bHMR0YBt.js";import"./Input-B7RJGze7.js";import"./useControlled-Yy6Nm7q-.js";import"./Button-BSl9QmF1.js";import"./small-cross-94u2Um9w.js";import"./ActionButton-BkWFOmHW.js";import"./Checkbox-DPCHiLIB.js";import"./useValueChanged-DPIPHUs8.js";import"./CollapsiblePanel-BSR-rgRE.js";import"./MultiColumnSortDialog-DM-SV7VS.js";import"./MenuTrigger-DYJhdpX_.js";import"./CompositeItem--Cz5F4Xa.js";import"./ToolbarRootContext-BVFmYY-d.js";import"./getDisabledMountTransitionStyles-XmNCU5wP.js";import"./getPseudoElementBounds-ckCn8Eoc.js";import"./chevron-down-C45MQu-J.js";import"./index-7TRVPqPj.js";import"./error-B5OE4NvJ.js";import"./BaseCbacBanner-WRiAVdzF.js";import"./makeExternalStore-C93JHYzf.js";import"./Tooltip-BOvX8lE8.js";import"./PopoverPopup-D5c_P4sS.js";import"./debounce-B5Hx5zW4.js";import"./useOsdkClient-Gc4DZ-CV.js";import"./tick-Dd7xtzHi.js";import"./DropdownField-C8LjKSnS.js";import"./isEqual-C4Xo_KzQ.js";import"./withOsdkMetrics-jd8u8gq8.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
