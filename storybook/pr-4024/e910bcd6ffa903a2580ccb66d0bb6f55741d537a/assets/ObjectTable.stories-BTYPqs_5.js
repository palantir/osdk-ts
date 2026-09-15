import{j as i}from"./iframe-CMAdZ-tl.js";import{O as p}from"./object-table-Dx9xL36M.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CZG_uOaL.js";import"./preload-helper-BCEvkaTh.js";import"./Table-D_DSDL0d.js";import"./index-uZXDV4-c.js";import"./Dialog-CW_CWxXG.js";import"./cross-TecNFToN.js";import"./svgIconContainer-BGo4Ffmi.js";import"./useBaseUiId-C6a-nIiQ.js";import"./InternalBackdrop-DDjtbvyl.js";import"./composite-hUzc6DpG.js";import"./index-DqPGLAB8.js";import"./index-Bi9d8J52.js";import"./index-BVbV_G_W.js";import"./useEventCallback-1slYZiXe.js";import"./SkeletonBar-BrSrSU08.js";import"./LoadingCell-D4OTFGIY.js";import"./ColumnConfigDialog-BidNcYNA.js";import"./DraggableList-Bs_dkqHq.js";import"./search-Bbf0CQIG.js";import"./Input-EDICR5v8.js";import"./useControlled-BNZjX3EY.js";import"./Button-CMbZ2dfd.js";import"./small-cross-DSzexAdf.js";import"./ActionButton-B6tCqEcW.js";import"./Checkbox-D74xxvMN.js";import"./useValueChanged-6IX2onud.js";import"./CollapsiblePanel-Hpy333SY.js";import"./MultiColumnSortDialog-BxfQROOL.js";import"./MenuTrigger-DA2yGYW4.js";import"./CompositeItem-WbzOgrFX.js";import"./ToolbarRootContext-UfxXSGbE.js";import"./getDisabledMountTransitionStyles-jvQsg8pP.js";import"./getPseudoElementBounds-k5Ib03Kp.js";import"./chevron-down--0eNTL5v.js";import"./index-BkytFj73.js";import"./error-CKKGLKp7.js";import"./BaseCbacBanner-DPtrzNX8.js";import"./makeExternalStore-Y97085jQ.js";import"./Tooltip-CzT_wPMb.js";import"./PopoverPopup-Dr43Tc4o.js";import"./debounce-jO5PmR1U.js";import"./useOsdkClient-DLfNvm6T.js";import"./tick-JhIa2r4T.js";import"./DropdownField-Vcml5_p5.js";import"./isEqual--xBYkPnr.js";import"./withOsdkMetrics-XprJI73J.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
