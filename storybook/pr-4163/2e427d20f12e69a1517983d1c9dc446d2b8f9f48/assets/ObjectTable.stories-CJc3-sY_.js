import{j as i}from"./iframe-DTvoIH2r.js";import{O as p}from"./object-table-DcBRKP2Z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-5Q52-Vk0.js";import"./preload-helper-Bl5BDaS_.js";import"./Table-B5BM-1ts.js";import"./index-Cm5sGWxJ.js";import"./Dialog-DOwUxWz4.js";import"./cross-dEikKBUB.js";import"./svgIconContainer-TNOoFETa.js";import"./useBaseUiId-DFuLIzAR.js";import"./InternalBackdrop-BtTRXxuq.js";import"./composite-u0e-F1rW.js";import"./index-BkNGnmPX.js";import"./index-huiBNFNy.js";import"./index-BJuMumhG.js";import"./useEventCallback-ClE8dN3c.js";import"./SkeletonBar-B_QvOAKR.js";import"./LoadingCell-Db0NAIaK.js";import"./ColumnConfigDialog-DFcvH2Ry.js";import"./DraggableList-BhFAB-0e.js";import"./search-CkOB4LMx.js";import"./Input-C-tth6vb.js";import"./useControlled-0uh_9m14.js";import"./Button-Eyz2dERQ.js";import"./small-cross-b1Gc4au3.js";import"./ActionButton-DvyFEALd.js";import"./Checkbox-DD7fo72m.js";import"./useValueChanged-C0F3L9Dh.js";import"./CollapsiblePanel-CmQJ5gXg.js";import"./MultiColumnSortDialog-C1nSqxJj.js";import"./MenuTrigger-BvK8OaRd.js";import"./CompositeItem-OtQFnxkB.js";import"./ToolbarRootContext-Bwl43FVk.js";import"./getDisabledMountTransitionStyles-jYzEuXLs.js";import"./getPseudoElementBounds-DP6PNIaO.js";import"./chevron-down-Kc2WAjaE.js";import"./index-C_BS0Bod.js";import"./error-CAqUL9Mb.js";import"./BaseCbacBanner-Dgtv0AkD.js";import"./makeExternalStore-B3yQfg4Y.js";import"./Tooltip-D8UVCGwD.js";import"./PopoverPopup-BTvzJrlx.js";import"./debounce-Kfo2TjOI.js";import"./useOsdkClient-DgEbhQnl.js";import"./tick-xV1uMXxC.js";import"./DropdownField-_nnCiIcu.js";import"./isEqual-osHTpoDt.js";import"./withOsdkMetrics-iCsj3SqR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
