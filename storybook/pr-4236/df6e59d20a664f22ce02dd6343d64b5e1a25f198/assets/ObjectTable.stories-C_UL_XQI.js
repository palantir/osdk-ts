import{j as i}from"./iframe-DrF4uDXw.js";import{O as p}from"./object-table-CM95MaM2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-dQsqKwW6.js";import"./preload-helper-u_zBXynr.js";import"./Table-kd6lbu9d.js";import"./index-CVI5kV9I.js";import"./Dialog-BrX1t0fv.js";import"./cross-CpHoxb52.js";import"./svgIconContainer-DTs7PmKd.js";import"./useBaseUiId-C9RyiOK8.js";import"./InternalBackdrop-DofvZUsK.js";import"./composite-Bq13iBNY.js";import"./index-BDX0ToeT.js";import"./index-CGWCVoH4.js";import"./index-BnGuicAT.js";import"./useEventCallback-BTghxZoS.js";import"./SkeletonBar-0N9X2Eze.js";import"./LoadingCell-BVuDg30F.js";import"./ColumnConfigDialog--izrLFr-.js";import"./DraggableList-CSNOh3nO.js";import"./search-CELVamy6.js";import"./Input-CdEHyPrX.js";import"./useControlled-CZU-WiQ8.js";import"./Button-YLbQ9ZAy.js";import"./small-cross-CJbFFKn2.js";import"./ActionButton-BLh9uJNd.js";import"./Checkbox-BhjXID7e.js";import"./useValueChanged-zSpMIuHM.js";import"./CollapsiblePanel-C9eazrfz.js";import"./MultiColumnSortDialog-DfEBvsXN.js";import"./MenuTrigger-CAXmNMT1.js";import"./CompositeItem-D46vdXYg.js";import"./ToolbarRootContext-C8VOBVuh.js";import"./getDisabledMountTransitionStyles-BEvFk-mr.js";import"./getPseudoElementBounds-D-ciol2Y.js";import"./chevron-down-DrKAguLe.js";import"./index-DyhoC8yA.js";import"./error-LoVtbcsO.js";import"./BaseCbacBanner-23rij7S2.js";import"./makeExternalStore-DYuKTott.js";import"./Tooltip-cvIFboQ2.js";import"./PopoverPopup-g1OrYGZg.js";import"./debounce-CWgpGISZ.js";import"./useOsdkClient-DIPpS90p.js";import"./tick-DD1ZkEBA.js";import"./DropdownField-D6v5zaPU.js";import"./isEqual-DckClti8.js";import"./withOsdkMetrics-CRS-8bKl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
