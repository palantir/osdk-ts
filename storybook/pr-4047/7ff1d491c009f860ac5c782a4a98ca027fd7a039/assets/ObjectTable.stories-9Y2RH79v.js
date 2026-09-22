import{j as i}from"./iframe-b99LbP9m.js";import{O as p}from"./object-table-pZnWuds5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CwxiFpB3.js";import"./preload-helper-DVhK3iQp.js";import"./Table-BRLCpUgA.js";import"./index-lvCDhi6D.js";import"./Dialog-CbNqy00v.js";import"./cross-DIxLp0N9.js";import"./svgIconContainer-BihU0y1S.js";import"./useBaseUiId-6kqzncOU.js";import"./InternalBackdrop-COXnZoqL.js";import"./composite-CtvoA4ac.js";import"./index-DJmpNsh_.js";import"./index-CQtcp48q.js";import"./index-DPKFJAUb.js";import"./useEventCallback-BRh0F3Gc.js";import"./SkeletonBar-DiB2OCWt.js";import"./LoadingCell-lj19Zhoi.js";import"./ColumnConfigDialog-Cjx8ju9e.js";import"./DraggableList-Dw54j7lg.js";import"./search-CC467d8u.js";import"./Input-hdA3kWA3.js";import"./useControlled-ByvbEfpA.js";import"./Button-C5yqAo8p.js";import"./small-cross-CVBamzYp.js";import"./ActionButton-CgHWaoxM.js";import"./Checkbox-f37FVRU5.js";import"./useValueChanged-CqszMfOm.js";import"./CollapsiblePanel-Bq-rJ7Pf.js";import"./MultiColumnSortDialog-BBbGd2Rj.js";import"./MenuTrigger-BGm_gEHF.js";import"./CompositeItem-CKc0sSZR.js";import"./ToolbarRootContext-BgL_RAO8.js";import"./getDisabledMountTransitionStyles-4C3EEDb3.js";import"./getPseudoElementBounds-CP-KB6E2.js";import"./chevron-down-D4nxFd5U.js";import"./index-DLEC-1eU.js";import"./error-DAEmkM_5.js";import"./BaseCbacBanner-BF3-W7TS.js";import"./makeExternalStore-BPDPOT32.js";import"./Tooltip-GFqETB97.js";import"./PopoverPopup-CtpNbWOs.js";import"./debounce-BQ_I9Yzc.js";import"./useOsdkClient-B5OWGTmv.js";import"./tick-DHP_OEKV.js";import"./DropdownField-B091wn9X.js";import"./isEqual-DCogO1wH.js";import"./withOsdkMetrics-C6RLviWF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
