import{j as i}from"./iframe-acbxn-f7.js";import{O as p}from"./object-table-CN5yha45.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnnaW2Cy.js";import"./preload-helper-fbPQYzet.js";import"./Table-BBFk4ims.js";import"./index-CVPAqU1b.js";import"./Dialog-CwejTPwi.js";import"./cross-BW0HBlIL.js";import"./svgIconContainer-DRdEcW3D.js";import"./useBaseUiId-CdtAIfTS.js";import"./InternalBackdrop-CiYWkt9x.js";import"./composite-CPBbATn-.js";import"./index-D440U2lf.js";import"./index-DqqbpueN.js";import"./index-DywtUTxm.js";import"./useEventCallback-C4hxqqtx.js";import"./SkeletonBar-DfTJMEGe.js";import"./LoadingCell-Cxki7mau.js";import"./ColumnConfigDialog-D5_Oyh5j.js";import"./DraggableList-L1L_4TYq.js";import"./search-DiYKFhHE.js";import"./Input-BjbaQoWk.js";import"./useControlled-GOo3Sud3.js";import"./isEqual-z9pnKAG9.js";import"./isObject-DSXN-3i3.js";import"./Button-1BzMXgMp.js";import"./ActionButton-D0AUONzO.js";import"./Checkbox-CAXj-zpQ.js";import"./useValueChanged-UVEJ5iFP.js";import"./CollapsiblePanel-DaXd5Eta.js";import"./MultiColumnSortDialog-DWFARLg5.js";import"./MenuTrigger-2GuiCSnN.js";import"./CompositeItem-C-TpVr46.js";import"./ToolbarRootContext-DhAyKrZU.js";import"./getDisabledMountTransitionStyles-CoXTLwP5.js";import"./getPseudoElementBounds-n0j8dayn.js";import"./chevron-down-fLJV3lSr.js";import"./index-7FxVYwUR.js";import"./error-RYjU87Ko.js";import"./BaseCbacBanner-DZaR4XFw.js";import"./makeExternalStore-B4WBQrGe.js";import"./Tooltip-Bielf6rk.js";import"./PopoverPopup-A73qwNSF.js";import"./toNumber-hUwX4eVc.js";import"./useOsdkClient-CqDg3tJw.js";import"./tick-BS44LqM1.js";import"./DropdownField-BsQvaeWW.js";import"./withOsdkMetrics-DopriMje.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
