import{j as i}from"./iframe-BzTrYIGj.js";import{O as p}from"./object-table-B-Ijnqri.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DmwR9dtn.js";import"./preload-helper-DN18uj2q.js";import"./Table-D6xe963K.js";import"./index-BrLV4dFb.js";import"./Dialog-B4_vQQmg.js";import"./cross-C6h0gf3C.js";import"./svgIconContainer-BZmpt804.js";import"./useBaseUiId-BnkVlZO6.js";import"./InternalBackdrop-BxTdVsU4.js";import"./composite-BD8s54zP.js";import"./index-BwQpmBgV.js";import"./index-Cb5QJVzG.js";import"./index-CTFSiazZ.js";import"./useEventCallback-lPJeV2ho.js";import"./SkeletonBar-HJjKmAs4.js";import"./LoadingCell--wQm6AzL.js";import"./ColumnConfigDialog-B52kott7.js";import"./DraggableList-D95DUzYE.js";import"./search-C0_wSRgh.js";import"./Input-DYoLRy9q.js";import"./useControlled-DOebwg81.js";import"./Button-iX8EOfC8.js";import"./small-cross-BlolGBAt.js";import"./ActionButton-D-Tq9Dhs.js";import"./Checkbox-CM3qffdw.js";import"./useValueChanged-BS2UNk3o.js";import"./CollapsiblePanel-fkBpzIbF.js";import"./MultiColumnSortDialog-hI5XWovP.js";import"./MenuTrigger-Bzv7UvTk.js";import"./CompositeItem-BftnSL_x.js";import"./ToolbarRootContext-BxcZ8iGZ.js";import"./getDisabledMountTransitionStyles-DT16cxHd.js";import"./getPseudoElementBounds-CKv8RmSv.js";import"./chevron-down-BgrpuhFy.js";import"./index-Cetl04Gl.js";import"./error-gmpJmGSg.js";import"./BaseCbacBanner-CylE7vdU.js";import"./makeExternalStore-TyTg8pnL.js";import"./Tooltip-CY7RNSdr.js";import"./PopoverPopup-XLUtI616.js";import"./debounce-O82EKYE8.js";import"./useOsdkClient-BwFfMjb6.js";import"./tick-C06aFeyp.js";import"./DropdownField-CzeFiqs2.js";import"./isEqual-DMiOnRvx.js";import"./withOsdkMetrics-B4hlBqzl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
