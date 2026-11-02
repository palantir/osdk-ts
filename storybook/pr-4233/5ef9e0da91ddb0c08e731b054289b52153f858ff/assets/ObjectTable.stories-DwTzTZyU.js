import{j as i}from"./iframe-C-gRhmL7.js";import{O as p}from"./object-table-BuNrcFUB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DqgBh324.js";import"./preload-helper-BRnBMuxX.js";import"./Table-D1wEI7Jw.js";import"./index-BomyFAOQ.js";import"./Dialog-DORMEh_O.js";import"./cross-BgbLU6cP.js";import"./svgIconContainer-D3HKLOfp.js";import"./useBaseUiId-Dr0jpy2a.js";import"./InternalBackdrop-DAQFGGKN.js";import"./composite-abNLhxgk.js";import"./index-Cc3D0dS0.js";import"./index-CMgDy_5O.js";import"./index-Bn78Igy-.js";import"./useEventCallback-L7w5wNTM.js";import"./SkeletonBar-BrXfWJ3s.js";import"./LoadingCell-CGoqfSvN.js";import"./ColumnConfigDialog-CRQ1b3Zi.js";import"./DraggableList-DPdWpbia.js";import"./search-BQdh6WXo.js";import"./Input-D1XkMJrA.js";import"./useControlled-BYigcnNh.js";import"./Button-CE8V4pbx.js";import"./small-cross-QE8L2S61.js";import"./ActionButton-CtsB9LNj.js";import"./Checkbox-BoknC1gS.js";import"./useValueChanged-DfaHdTkd.js";import"./CollapsiblePanel-BKE8iGjK.js";import"./MultiColumnSortDialog-CMd7Ma2F.js";import"./MenuTrigger-B1zMt0LI.js";import"./CompositeItem-Dc0cRnHM.js";import"./ToolbarRootContext-tG5LuvDM.js";import"./getDisabledMountTransitionStyles-BmL3-adz.js";import"./getPseudoElementBounds-Cw9ZB0lo.js";import"./chevron-down-Cj7UC7sg.js";import"./index-CYurDmtO.js";import"./error-AkMr3-YU.js";import"./BaseCbacBanner-CFHgpu92.js";import"./makeExternalStore-s0ePZNdW.js";import"./Tooltip-DQzNOf2f.js";import"./PopoverPopup-BfjojjnZ.js";import"./debounce-DGWONp_t.js";import"./useOsdkClient-CVDU5GOE.js";import"./tick-CwSemnZF.js";import"./DropdownField-Br06tlrV.js";import"./isEqual-CM2lqVB7.js";import"./withOsdkMetrics-Dez2mISn.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
