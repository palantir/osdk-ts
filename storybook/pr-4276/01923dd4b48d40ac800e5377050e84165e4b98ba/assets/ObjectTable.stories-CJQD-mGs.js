import{j as i}from"./iframe-CvtnXpWI.js";import{O as p}from"./object-table-BL_5837Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CRGTgqsj.js";import"./preload-helper-CRqjKMTV.js";import"./Table-CmUVnd3U.js";import"./index-jeLRGmVS.js";import"./Dialog-DCRDnXqO.js";import"./cross-CaW9jTLZ.js";import"./svgIconContainer-C107_u4J.js";import"./useBaseUiId-Dw1uN2EV.js";import"./InternalBackdrop-BoC-Z1Bo.js";import"./composite-E-ohJHTb.js";import"./index-BtiKNh2b.js";import"./index-D-06_23q.js";import"./index-CqGesz-z.js";import"./useEventCallback-CTWgCbj5.js";import"./SkeletonBar-BFsAtTQ9.js";import"./LoadingCell-BgUBUq2n.js";import"./ColumnConfigDialog-CmtAzB6p.js";import"./DraggableList-Cv5c3GqV.js";import"./search-BIqi2et5.js";import"./Input-zhgReKbn.js";import"./useControlled-D1NesXJk.js";import"./Button-UnInDvPq.js";import"./small-cross-Db9ebHG-.js";import"./ActionButton-CafTjkNJ.js";import"./Checkbox-C9BLbFtD.js";import"./useValueChanged-CoEu5z_v.js";import"./CollapsiblePanel-DbP5aWCf.js";import"./MultiColumnSortDialog-CK365kWV.js";import"./MenuTrigger-BZ_YHWTN.js";import"./CompositeItem-C6nFI7h_.js";import"./ToolbarRootContext-ChZi5vEo.js";import"./getDisabledMountTransitionStyles-6caJPnGT.js";import"./getPseudoElementBounds-Cv8mXtVl.js";import"./chevron-down-C3-hEeSa.js";import"./index-skLFeqF3.js";import"./error-BIezve7k.js";import"./BaseCbacBanner-D0TruWAx.js";import"./makeExternalStore-DHDRqvun.js";import"./Tooltip-BazKam0z.js";import"./isObject-CrBKpQd0.js";import"./debounce-BFHp0zYR.js";import"./useOsdkClient-DVkylxA-.js";import"./tick-B7O-16gu.js";import"./DropdownField-BsbKwjfj.js";import"./isEqual-DFrG572d.js";import"./_baseIsEqual-DjC_Kex7.js";import"./withOsdkMetrics-CRjxXxf-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
