import{j as i}from"./iframe-sFkKU2EW.js";import{O as p}from"./object-table-B3v0WA7i.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCOoVPWm.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-lMjGN9O9.js";import"./index-C1mtpbbb.js";import"./Dialog-Dr0_knAV.js";import"./cross-Bblj5XEn.js";import"./svgIconContainer-CTKs33eW.js";import"./useBaseUiId-2GBtkKH8.js";import"./InternalBackdrop-DMI4zPFa.js";import"./composite-BWqY2mYD.js";import"./index-D9YZPkpb.js";import"./index-MBbYPXaC.js";import"./index-DMVl0OVE.js";import"./useEventCallback-DTEoozzd.js";import"./SkeletonBar-yb79BTsc.js";import"./LoadingCell-BbboCVej.js";import"./ColumnConfigDialog-a2pYwYfl.js";import"./DraggableList-ShBPaOoB.js";import"./search-C5MyxlXn.js";import"./Input-HNcQN8UH.js";import"./useControlled-CO-q6SPI.js";import"./isEqual-Bie7IRiN.js";import"./isObject-izUB8-_H.js";import"./Button-BzrUlVJG.js";import"./ActionButton-B2-nWb-3.js";import"./Checkbox-DER-NUfx.js";import"./useValueChanged-Cs053s6l.js";import"./CollapsiblePanel-Cr-QFvJF.js";import"./MultiColumnSortDialog-0vEef6gt.js";import"./MenuTrigger-Dcbu3aeb.js";import"./CompositeItem-eIp0TU0l.js";import"./ToolbarRootContext-D3tP2Ava.js";import"./getDisabledMountTransitionStyles-J18KEhlf.js";import"./getPseudoElementBounds-DUtwLibb.js";import"./chevron-down-ClDz1vs8.js";import"./index-KH1gmPLT.js";import"./error-BZvSZmgV.js";import"./BaseCbacBanner-1WcoocYE.js";import"./makeExternalStore-CocMOkpk.js";import"./Tooltip-CYG3Z_J6.js";import"./PopoverPopup-a3UQvS-R.js";import"./toNumber-UiKID2wH.js";import"./useOsdkClient-Cbm-ZTUZ.js";import"./tick-DzJzocCC.js";import"./DropdownField-Df3bZfRm.js";import"./withOsdkMetrics-BHzd1wiG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
