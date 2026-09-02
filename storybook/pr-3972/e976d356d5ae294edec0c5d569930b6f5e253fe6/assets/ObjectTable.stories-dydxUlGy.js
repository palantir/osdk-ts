import{j as i}from"./iframe-fyhOhwEJ.js";import{O as p}from"./object-table-DL8SFP3R.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bv7QQRfr.js";import"./preload-helper-DZoapQc5.js";import"./Table-Ctpip_To.js";import"./index-D-0-qAO5.js";import"./Dialog-43hYOnmf.js";import"./cross-DcnXKO8D.js";import"./svgIconContainer-D3XXZDFA.js";import"./useBaseUiId-CZh58POx.js";import"./InternalBackdrop-vw9qXSiq.js";import"./composite-7m6ynQ4d.js";import"./index-B_-hV7j3.js";import"./index-CYvM2k13.js";import"./index-CrSiM7KM.js";import"./useEventCallback-DjM_GW4g.js";import"./SkeletonBar-Cw5Aef6j.js";import"./LoadingCell-CFwFhPVt.js";import"./ColumnConfigDialog-ByNW_vNZ.js";import"./DraggableList-D7BBk5vR.js";import"./search-wMsJ6744.js";import"./Input-Cz7IuMZA.js";import"./useControlled-ClsMoo9s.js";import"./Button-Co7avqcv.js";import"./small-cross-CAgcnaA8.js";import"./ActionButton-BZu6itaU.js";import"./Checkbox-mC8xxjCq.js";import"./useValueChanged-X0NoeIhA.js";import"./CollapsiblePanel-B9lz7yEt.js";import"./MultiColumnSortDialog-4iaVSLEp.js";import"./MenuTrigger-DmW7hve0.js";import"./CompositeItem-BW8rxov7.js";import"./ToolbarRootContext-D9LUIP1a.js";import"./getDisabledMountTransitionStyles-Cl4PQU1i.js";import"./getPseudoElementBounds-BYiy2Fl5.js";import"./chevron-down-BpyNxw-E.js";import"./index-Vhqxhhfj.js";import"./error-CMmhcpte.js";import"./BaseCbacBanner-C2PkaPNb.js";import"./makeExternalStore-NbT1IyrN.js";import"./Tooltip-D88G4HUZ.js";import"./PopoverPopup-B-sMZa0V.js";import"./debounce-C1ihnlW1.js";import"./useOsdkClient-IFEN1g4H.js";import"./tick-Dkudayrr.js";import"./DropdownField-DmsLnnQ3.js";import"./isEqual-B59dK6L3.js";import"./withOsdkMetrics-Bf5xCGJp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
