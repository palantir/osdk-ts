import{j as i}from"./iframe-xdaTYGRj.js";import{O as p}from"./object-table-CXau66t4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D056Y_Xm.js";import"./preload-helper-DZUDwwCn.js";import"./Table-DQJKa7S1.js";import"./index-BdPDvpnl.js";import"./Dialog-Dusk4zGf.js";import"./cross-CSoA2ZQa.js";import"./svgIconContainer-exvQzp4T.js";import"./useBaseUiId-CxUh_Q__.js";import"./InternalBackdrop-POEzz6gH.js";import"./composite-BBMq-zQx.js";import"./index-ChGZ1vto.js";import"./index-DjfesuTU.js";import"./index-BvtF8lSO.js";import"./useEventCallback-BzvhssYV.js";import"./SkeletonBar-B8t_W87W.js";import"./LoadingCell-C1DmdKaJ.js";import"./ColumnConfigDialog-OpKrZQ53.js";import"./DraggableList-ZBGvnIzB.js";import"./search-Ba1wUlyN.js";import"./Input-CVYxdw6a.js";import"./useControlled-BvC-sVWY.js";import"./Button-DhIcXnSN.js";import"./small-cross-BW9BpdHj.js";import"./ActionButton-asvmdyUj.js";import"./Checkbox-BcViMRef.js";import"./useValueChanged-Ch5z-mkh.js";import"./CollapsiblePanel-ClYrkXoI.js";import"./MultiColumnSortDialog-DhoBGIBc.js";import"./MenuTrigger-C_lNo9IA.js";import"./CompositeItem-Cl6_46jA.js";import"./ToolbarRootContext-5SJeTWub.js";import"./getDisabledMountTransitionStyles-B16LXGKh.js";import"./getPseudoElementBounds-Dy-Bisec.js";import"./chevron-down-aagd7exO.js";import"./index-CUVjcwyy.js";import"./error-CApwHpph.js";import"./BaseCbacBanner-CceQ-h3H.js";import"./makeExternalStore-DYC4j6Cy.js";import"./Tooltip-CW0n3yWY.js";import"./PopoverPopup-BKjDaV96.js";import"./debounce-DBf5uZYv.js";import"./useOsdkClient-CrpVNgyy.js";import"./tick-C88F2OoG.js";import"./DropdownField-C6ZSBKPJ.js";import"./isEqual-DJka3NIw.js";import"./withOsdkMetrics-D5YFfTwH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
