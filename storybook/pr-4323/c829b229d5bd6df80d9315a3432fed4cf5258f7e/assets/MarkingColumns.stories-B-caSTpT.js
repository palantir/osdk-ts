import{f as p,j as e}from"./iframe-DywpB1hE.js";import{O as i}from"./object-table-DSqGDhpz.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C9IGOhE9.js";import"./Table-BJyzRyQX.js";import"./index-DmgiNEb3.js";import"./Dialog-b8TWvGfl.js";import"./cross-aTqn6PnT.js";import"./svgIconContainer-BDFx6Zxn.js";import"./useBaseUiId-J99Ack0x.js";import"./InternalBackdrop-ilty_vzC.js";import"./composite-Cr11nkBG.js";import"./index-BtGsUy0O.js";import"./index-BtfNmnmI.js";import"./index-CkWqHjdx.js";import"./useEventCallback-B0JvgrbD.js";import"./SkeletonBar-CYjAwPZM.js";import"./LoadingCell-Dn8kxFfT.js";import"./ColumnConfigDialog-DENzayAM.js";import"./DraggableList-DNGNwkdW.js";import"./search-DVZ7S7-1.js";import"./Input-DaT49KS2.js";import"./useControlled-vk6jUFHs.js";import"./Button-Ctxa2jTP.js";import"./small-cross-DEhP5KVo.js";import"./ActionButton-j4A3JxyA.js";import"./Checkbox-C9Fq3_-7.js";import"./useValueChanged-DBM24efT.js";import"./CollapsiblePanel-QB2yvwOj.js";import"./MultiColumnSortDialog-BV5JkRYB.js";import"./MenuTrigger-B8-0Pn4M.js";import"./CompositeItem-D-O0kvjn.js";import"./ToolbarRootContext-DhYqu86z.js";import"./getDisabledMountTransitionStyles-hoTdldX2.js";import"./getPseudoElementBounds-CTvhJMZP.js";import"./chevron-down-B3UYxdX4.js";import"./index-CiTdpWDW.js";import"./error-zG4ckKPW.js";import"./BaseCbacBanner-030hm0gk.js";import"./makeExternalStore-CFrW1DiS.js";import"./Tooltip-BR9BNp9s.js";import"./PopoverPopup-9xYxalag.js";import"./debounce-DRpUcqeI.js";import"./useOsdkClient-BoCP8Ra0.js";import"./tick-dSuqEogv.js";import"./DropdownField-DhQOHxUk.js";import"./isEqual-CbNKEKf0.js";import"./withOsdkMetrics-BM9yLZRB.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
