import{j as i}from"./iframe-D5rHaRYI.js";import{O as p}from"./object-table-D6o8iS4P.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DLTNbDDP.js";import"./preload-helper-gGgdcVSI.js";import"./Table-BmW-MXkH.js";import"./index-ue2T5dve.js";import"./Dialog-D5rWxqCJ.js";import"./cross-tQgaE3wF.js";import"./svgIconContainer-BdHsWNaY.js";import"./useBaseUiId-BazUPCkp.js";import"./InternalBackdrop-CE-So33P.js";import"./composite-D7Nu2T_E.js";import"./index-AIpwznod.js";import"./index-DfxgWUtW.js";import"./index-DnYB0A4y.js";import"./useEventCallback-CiPjA_gS.js";import"./SkeletonBar-CjG6OaBt.js";import"./LoadingCell-Bw8gQhPx.js";import"./ColumnConfigDialog-B4Ki-hr0.js";import"./DraggableList-D68QyVqL.js";import"./search-BwM1R0ZS.js";import"./Input-Dlx4X-uM.js";import"./useControlled-B8vB9SF0.js";import"./Button-CIrXEDiW.js";import"./small-cross-Ddvwp2ZN.js";import"./ActionButton-CzNhuO_z.js";import"./Checkbox-CA1k2VZo.js";import"./useValueChanged-CoYa5TxM.js";import"./CollapsiblePanel-4SI1lhlK.js";import"./MultiColumnSortDialog-BrFsZdDA.js";import"./MenuTrigger-Bn989o8m.js";import"./CompositeItem-RLNz4WVT.js";import"./ToolbarRootContext-D4BSaJiN.js";import"./getDisabledMountTransitionStyles-DAQHPmPU.js";import"./getPseudoElementBounds-CaseLu2O.js";import"./chevron-down-k1GVYLCT.js";import"./index-CvK2Swrc.js";import"./error-CSPAQ9Pw.js";import"./BaseCbacBanner-HGQI-gli.js";import"./makeExternalStore-D6mpUf8a.js";import"./Tooltip-P7YTeqYd.js";import"./PopoverPopup-BFmgaf30.js";import"./debounce-D6uuEO4U.js";import"./useOsdkClient-BEH1fdfR.js";import"./tick-DzQoXvq2.js";import"./DropdownField-CcLvyEmm.js";import"./isEqual-DtAnoOPo.js";import"./withOsdkMetrics-Dw564kRS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
