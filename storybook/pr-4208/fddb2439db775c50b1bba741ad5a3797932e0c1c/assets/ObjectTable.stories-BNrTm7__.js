import{j as i}from"./iframe-CDhHfbZk.js";import{O as p}from"./object-table-BIIGIbV_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CYQKHoPP.js";import"./preload-helper-D9m9ft9F.js";import"./Table-B465KFbL.js";import"./index-vUAebvBG.js";import"./Dialog-C4wjWsAg.js";import"./cross-CLCYSP7-.js";import"./svgIconContainer-DP_9rndU.js";import"./useBaseUiId-BNzPhzzT.js";import"./InternalBackdrop-kU3g4qnB.js";import"./composite-zry2u9iy.js";import"./index-IitVmvoQ.js";import"./index-DDa4qDBw.js";import"./index-QX77SP4G.js";import"./useEventCallback-B7ZISNVL.js";import"./SkeletonBar-BnvFfaYp.js";import"./LoadingCell-jwwDjlQv.js";import"./ColumnConfigDialog-Dvr0Mgyu.js";import"./DraggableList-tNZKpXfZ.js";import"./search-Bcd3upv2.js";import"./Input-B4zROYTD.js";import"./useControlled-C9J3sV3W.js";import"./Button-Eng2VAlv.js";import"./small-cross-DV4dQjPE.js";import"./ActionButton-Tom3ILVB.js";import"./Checkbox-Bbi6BQXM.js";import"./useValueChanged-C52zQhOD.js";import"./CollapsiblePanel-CxG2E3R9.js";import"./MultiColumnSortDialog-DP92EJIX.js";import"./MenuTrigger-CtSJZt_C.js";import"./CompositeItem-CfrnZWNF.js";import"./ToolbarRootContext-BHNpAEXV.js";import"./getDisabledMountTransitionStyles-BsTot6L0.js";import"./getPseudoElementBounds-CQtQrLv_.js";import"./chevron-down-BrdASUtV.js";import"./index-CaQKQtm_.js";import"./error-CgXh1tPF.js";import"./BaseCbacBanner-0aUDutEj.js";import"./makeExternalStore-BkKmabtu.js";import"./Tooltip-BYY_Xvns.js";import"./PopoverPopup-D0oa-8rs.js";import"./debounce-CYPWazyu.js";import"./useOsdkClient-BN3vNMZc.js";import"./tick-Bxx5r_FA.js";import"./DropdownField-BBgRvZiW.js";import"./isEqual-BF0VAMYr.js";import"./withOsdkMetrics-BPDsAwtw.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
