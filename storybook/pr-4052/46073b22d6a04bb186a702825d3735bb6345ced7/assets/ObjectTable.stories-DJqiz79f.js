import{j as i}from"./iframe-ErFjiRdR.js";import{O as p}from"./object-table-QyogTFES.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CewCP_Pa.js";import"./preload-helper-QXATeijz.js";import"./Table-DJVVBOBS.js";import"./index-CprRWtZ0.js";import"./Dialog-ckZVKOH3.js";import"./cross-DA1xIqSH.js";import"./svgIconContainer-DwCJmDQ6.js";import"./useBaseUiId-q1R-2ocn.js";import"./InternalBackdrop-BVX_h7aO.js";import"./composite-BNsKQKoz.js";import"./index-DyME0HO3.js";import"./index-R776mpCr.js";import"./index-CioP4s9H.js";import"./useEventCallback-CsjBQJGO.js";import"./SkeletonBar-9G0HH7I4.js";import"./LoadingCell-DvDzoNzg.js";import"./ColumnConfigDialog-WsY2GTDy.js";import"./DraggableList-R0EEiGI7.js";import"./search-D70lAymL.js";import"./Input-5vpb7ex0.js";import"./useControlled-y5HTd1hS.js";import"./Button-Bkuli5yv.js";import"./small-cross-W7MFHZ4g.js";import"./ActionButton-BmfgSZLa.js";import"./Checkbox-DAHD9CoB.js";import"./useValueChanged-sN946PV6.js";import"./CollapsiblePanel-Cb17J6r_.js";import"./MultiColumnSortDialog-Chshm_fF.js";import"./MenuTrigger-DfZeTdKg.js";import"./CompositeItem-CXu476SC.js";import"./ToolbarRootContext-DKYtYCzN.js";import"./getDisabledMountTransitionStyles-CudQAnha.js";import"./getPseudoElementBounds-BWDQXgDF.js";import"./chevron-down-8N5DEpE8.js";import"./index-B68TyCJi.js";import"./error-D-xAMd6a.js";import"./BaseCbacBanner-8yr2Itnn.js";import"./makeExternalStore-BmDH-BLi.js";import"./Tooltip-DVQuoGJ7.js";import"./PopoverPopup-CBq8CNSA.js";import"./debounce-DAbWe4HY.js";import"./useOsdkClient-B2bg1Zbb.js";import"./tick-CsfDOtgs.js";import"./DropdownField-CxUf6e52.js";import"./isEqual-Bsn6PwYT.js";import"./withOsdkMetrics-LLxyWREg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
