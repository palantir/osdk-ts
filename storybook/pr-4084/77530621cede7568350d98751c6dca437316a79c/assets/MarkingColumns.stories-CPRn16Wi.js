import{f as p,j as e}from"./iframe-CBBfontH.js";import{O as i}from"./object-table-D00hhH1n.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9XLNiex.js";import"./Table-Dq4sIwo_.js";import"./index-BK79uKA4.js";import"./Dialog-Bez2GmQV.js";import"./cross-FHMV1Mb9.js";import"./svgIconContainer-DticknVs.js";import"./useBaseUiId-D3hM4v_U.js";import"./InternalBackdrop-Bhw3AVLQ.js";import"./composite-B8aA5vzU.js";import"./index-C2T6QgIM.js";import"./index-CD1w3ijm.js";import"./index-BVDezsvr.js";import"./useEventCallback-BwO2T9OZ.js";import"./SkeletonBar-CleAdRcI.js";import"./LoadingCell-C5GvXRpf.js";import"./ColumnConfigDialog-DjY86Eyb.js";import"./DraggableList-BcoMav9O.js";import"./search-l34gwdLO.js";import"./Input-CnWoOgAt.js";import"./useControlled-DaI-bqFd.js";import"./Button-BzMH9WPr.js";import"./small-cross-B2CUI9TY.js";import"./ActionButton-X94BlYS6.js";import"./Checkbox-stvUx_jr.js";import"./useValueChanged-BW_ZWeBx.js";import"./CollapsiblePanel-PXa-ow1L.js";import"./MultiColumnSortDialog-CW3J4Whf.js";import"./MenuTrigger-Bdw45WiW.js";import"./CompositeItem-DvZr4Fnk.js";import"./ToolbarRootContext-DlEp5yGp.js";import"./getDisabledMountTransitionStyles-DCBtf9ru.js";import"./getPseudoElementBounds-Dewf_zh7.js";import"./chevron-down-BeGAiI5e.js";import"./index-Ddgk7NGU.js";import"./error-BFkl_rh_.js";import"./BaseCbacBanner-CglxUYEK.js";import"./makeExternalStore-D8kr4lHx.js";import"./Tooltip-kEuvMNv7.js";import"./PopoverPopup-Bx6Q7Dee.js";import"./debounce-BRaC803f.js";import"./useOsdkClient-CKOOY0Rx.js";import"./tick-B05HzIpP.js";import"./DropdownField-BFYkkAFZ.js";import"./isEqual-C-yu64RW.js";import"./withOsdkMetrics-vNqbOsIn.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
