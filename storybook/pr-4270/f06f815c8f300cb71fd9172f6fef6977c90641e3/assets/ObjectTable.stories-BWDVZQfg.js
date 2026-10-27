import{j as i}from"./iframe-C4dizZ36.js";import{O as p}from"./object-table-BgrvQbJI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DRAXtzs1.js";import"./preload-helper-yVPvR8z3.js";import"./Table-BzUgLi4N.js";import"./index-CFT7unnD.js";import"./Dialog-D8prFB35.js";import"./cross-drbNV1T7.js";import"./svgIconContainer-DfcgCVjr.js";import"./useBaseUiId-k_5E4sc5.js";import"./InternalBackdrop-ConLyfAg.js";import"./composite-BKXJ61hE.js";import"./index-CTCpbOLj.js";import"./index-BMu-FTMn.js";import"./index-B0IHZgxT.js";import"./useEventCallback-BEbBXTDA.js";import"./SkeletonBar-Dt_A_Oo6.js";import"./LoadingCell-KwchXr4h.js";import"./ColumnConfigDialog-xcBo-RJ9.js";import"./DraggableList-CKHBkgED.js";import"./search-D-SP9Yj6.js";import"./Input-DPBssrp3.js";import"./useControlled-CUKEEG6I.js";import"./Button-B3WKdDfx.js";import"./small-cross-yc2rW1h-.js";import"./ActionButton-CrXRFnK7.js";import"./Checkbox-CWgjRKWS.js";import"./useValueChanged-DCy4_NVv.js";import"./CollapsiblePanel-TS6XPwGw.js";import"./MultiColumnSortDialog-CG_eOG-o.js";import"./MenuTrigger-B9hf80SG.js";import"./CompositeItem-Deat6XJ7.js";import"./ToolbarRootContext-cilGYW-z.js";import"./getDisabledMountTransitionStyles-DSExnO14.js";import"./getPseudoElementBounds-BTkeKk10.js";import"./chevron-down-B_DWNPfU.js";import"./index-C5-B81cJ.js";import"./error-j1AChp6N.js";import"./BaseCbacBanner-Bkd4XpK8.js";import"./makeExternalStore-BsFJZbFX.js";import"./Tooltip-CcaOWhED.js";import"./PopoverPopup-DjEzPR4r.js";import"./debounce-DpNok1rz.js";import"./useOsdkClient-DYefkPsN.js";import"./tick-9qx9fXAT.js";import"./DropdownField-BfEb6RcP.js";import"./isEqual-DnhpXLt3.js";import"./withOsdkMetrics-CrG5BOev.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
