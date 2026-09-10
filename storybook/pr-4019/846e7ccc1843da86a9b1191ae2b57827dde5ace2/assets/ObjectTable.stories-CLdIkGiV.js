import{j as i}from"./iframe-D3RGMnav.js";import{O as p}from"./object-table-BakC7nn4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C_HTThZT.js";import"./preload-helper-BklmKIr_.js";import"./Table-R7a12CVv.js";import"./index-nSo8ObpB.js";import"./Dialog-DzLg0Ofr.js";import"./cross-DJMZ2_VJ.js";import"./svgIconContainer-nHtSwbNR.js";import"./useBaseUiId-BhJo7SoD.js";import"./InternalBackdrop-DNhkpLhR.js";import"./composite-DtZsoZnS.js";import"./index-B1m7fBwG.js";import"./index-BCGsGoWh.js";import"./index-DkTcI7f6.js";import"./useEventCallback-Bb_RfLNl.js";import"./SkeletonBar--V7bY1Hg.js";import"./LoadingCell-C-Mgr2_3.js";import"./ColumnConfigDialog-BmT51Anr.js";import"./DraggableList-CyL66yiO.js";import"./search-DhStDycO.js";import"./Input-BD3DYMGR.js";import"./useControlled-TK_e7a_Y.js";import"./Button-DybLmK6C.js";import"./small-cross-I1SXQrv5.js";import"./ActionButton-LPM2maYQ.js";import"./Checkbox-BPd5nN8O.js";import"./useValueChanged-BhgPHUED.js";import"./CollapsiblePanel-B5YKTTfg.js";import"./MultiColumnSortDialog-DTCkqGq-.js";import"./MenuTrigger-XGVUEXcP.js";import"./CompositeItem-Bs8xPD2u.js";import"./ToolbarRootContext-DVajx3A6.js";import"./getDisabledMountTransitionStyles-CAL3aepw.js";import"./getPseudoElementBounds-BCjf5F4u.js";import"./chevron-down-Cq6RCzUz.js";import"./index-DDdvHcPj.js";import"./error-BtBmESuY.js";import"./BaseCbacBanner-f6adz1Nr.js";import"./makeExternalStore-DkQFuTyA.js";import"./Tooltip-xT35MYb5.js";import"./PopoverPopup-CgsNZx-r.js";import"./debounce-DCoo-0F-.js";import"./useOsdkClient-B1LUMolX.js";import"./tick-BFwYDZkg.js";import"./DropdownField-DifR4mWz.js";import"./isEqual-cXk5KBsJ.js";import"./withOsdkMetrics-q9Ci7M-s.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
