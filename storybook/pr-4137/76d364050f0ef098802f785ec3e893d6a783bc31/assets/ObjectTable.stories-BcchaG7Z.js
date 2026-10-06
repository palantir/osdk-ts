import{j as i}from"./iframe-D8wUjP5Q.js";import{O as p}from"./object-table-DSVS_rtH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BM4vryHR.js";import"./preload-helper-C60jAzLY.js";import"./Table-CPajttPC.js";import"./index-BIu9Kojc.js";import"./Dialog-BBNCka6x.js";import"./cross-uw8rTCsg.js";import"./svgIconContainer-DfD-bPJ9.js";import"./useBaseUiId-BUaCAPTV.js";import"./InternalBackdrop-DVaKSQ1p.js";import"./composite-C2EdyOaO.js";import"./index-Urfc-aXa.js";import"./index-9bYJqJha.js";import"./index-ce0ZDUPy.js";import"./useEventCallback-dtUX6p5h.js";import"./SkeletonBar-B6gmAwPT.js";import"./LoadingCell-BrI3KBYK.js";import"./ColumnConfigDialog-Qngo8wHu.js";import"./DraggableList-D_AfdPMT.js";import"./search-CqoqcUsr.js";import"./Input-DqsKhBeK.js";import"./useControlled-DRmCkPiT.js";import"./Button-Db1yV2vy.js";import"./small-cross-DDqBCwa4.js";import"./ActionButton-DjdPFFrW.js";import"./Checkbox-BpgF2RLN.js";import"./useValueChanged-D4VH-6l-.js";import"./CollapsiblePanel-DLikBfTi.js";import"./MultiColumnSortDialog-CWrCEuuh.js";import"./MenuTrigger-C2hcdVp2.js";import"./CompositeItem-Df57X5b8.js";import"./ToolbarRootContext-Cng6yUXD.js";import"./getDisabledMountTransitionStyles-BmFHpdBq.js";import"./getPseudoElementBounds-DWEBDegK.js";import"./chevron-down-BCcrHoHV.js";import"./index-BopS7lH3.js";import"./error-CtMjuQbV.js";import"./BaseCbacBanner-CF1k4-_h.js";import"./makeExternalStore-CO9Wus6n.js";import"./Tooltip-FI1a-GTF.js";import"./PopoverPopup-D-3JSrTB.js";import"./debounce-CY5bsJow.js";import"./useOsdkClient-x6ND1sZF.js";import"./tick-BvcCbX7h.js";import"./DropdownField-r2EybeYn.js";import"./isEqual-DTRWaw1c.js";import"./withOsdkMetrics-cJOGTvbe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
