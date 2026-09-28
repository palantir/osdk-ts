import{f as p,j as e}from"./iframe-BiX95vgM.js";import{O as i}from"./object-table-BNQm4Bsr.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DWnaR-1b.js";import"./Table-acSUwZXb.js";import"./index-BabfefxA.js";import"./Dialog-BDQ5_Bfx.js";import"./cross-C7wa8kmV.js";import"./svgIconContainer-BCrh5jbf.js";import"./useBaseUiId-CQekfIk1.js";import"./InternalBackdrop-CE-LWvCh.js";import"./composite-KUIWn9JP.js";import"./index-CqOEHXIi.js";import"./index-DsTIq2po.js";import"./index-k1PdwCZb.js";import"./useEventCallback-Cmi2IqX2.js";import"./SkeletonBar-B9Rdl8b0.js";import"./LoadingCell-CNYJZaMp.js";import"./ColumnConfigDialog-B8jLQSvW.js";import"./DraggableList-J8UJKRI9.js";import"./search-BRep0j7S.js";import"./Input-mW8oBDz9.js";import"./useControlled-B0weLlnb.js";import"./Button-DbzWoDvM.js";import"./small-cross-Boqia_iR.js";import"./ActionButton-BsI0HZIG.js";import"./Checkbox-DEa-GyN1.js";import"./useValueChanged-DAGoXpR0.js";import"./CollapsiblePanel-COHaPPM9.js";import"./MultiColumnSortDialog-CTF13iwp.js";import"./MenuTrigger-D5WFLw3j.js";import"./CompositeItem-BFJIxEVd.js";import"./ToolbarRootContext-DqKQJUCi.js";import"./getDisabledMountTransitionStyles-B3gRsSQK.js";import"./getPseudoElementBounds-wEO7NvSI.js";import"./chevron-down-Qcf4cgke.js";import"./index-BdjoCnA2.js";import"./error-Bo4C15lT.js";import"./BaseCbacBanner-9jPJRVZK.js";import"./makeExternalStore-BiSG9WI-.js";import"./Tooltip-CAv1GjkH.js";import"./PopoverPopup-BhUB52O1.js";import"./debounce-DvrF_ne3.js";import"./useOsdkClient-CBCEya-4.js";import"./tick-DJUMmsvK.js";import"./DropdownField-DzcwNOIS.js";import"./isEqual-6CvQLIm3.js";import"./withOsdkMetrics-Bu7X3_wp.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
