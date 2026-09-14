import{j as i}from"./iframe-BIBiDLzG.js";import{O as p}from"./object-table-DO2-4StQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-XqDT_63C.js";import"./preload-helper-M-hMOyfR.js";import"./Table-CqMv3F_I.js";import"./index-DVl0wepy.js";import"./Dialog-BeJ4utiY.js";import"./cross-Bct1nQA0.js";import"./svgIconContainer-CoQwsTQZ.js";import"./useBaseUiId-uizV67he.js";import"./InternalBackdrop-D5m4v8WT.js";import"./composite-WJpwW_h1.js";import"./index-ChCEVhY0.js";import"./index-oK6fUSTy.js";import"./index-BpFwk2gn.js";import"./useEventCallback-BAwy8rT_.js";import"./SkeletonBar-BwxLZXkl.js";import"./LoadingCell-vKzjE125.js";import"./ColumnConfigDialog-DsX6HxUn.js";import"./DraggableList-DlSB-TLa.js";import"./search-Dp0L04CB.js";import"./Input-DjyK0ZMe.js";import"./useControlled-C1UaCMGh.js";import"./Button-C3sxjNx0.js";import"./small-cross-DhGfP6H8.js";import"./ActionButton-BNlBdLC6.js";import"./Checkbox-wdV7A-ZT.js";import"./useValueChanged-CzF2vCV8.js";import"./CollapsiblePanel-CZiuD1Hf.js";import"./MultiColumnSortDialog-mMx323K3.js";import"./MenuTrigger-BDmXfceM.js";import"./CompositeItem-DcFVDvs6.js";import"./ToolbarRootContext-DSpWAJaB.js";import"./getDisabledMountTransitionStyles-CwoXuUOt.js";import"./getPseudoElementBounds-CNxmiBte.js";import"./chevron-down-D9WTAz47.js";import"./index-CgV98ypJ.js";import"./error-VYeOdSiM.js";import"./BaseCbacBanner-BF3HYUIs.js";import"./makeExternalStore-CpzPkJRH.js";import"./Tooltip-uJ9PHc8e.js";import"./PopoverPopup-BWEg_lAC.js";import"./debounce-C6GUNjet.js";import"./useOsdkClient-L3-wMMON.js";import"./tick-KoHgs3il.js";import"./DropdownField-Dc7oRDG2.js";import"./isEqual-BO52wWTb.js";import"./withOsdkMetrics-BODaHo4W.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
