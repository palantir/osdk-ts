import{j as i}from"./iframe-CSN8hPBK.js";import{O as p}from"./object-table-DbL69lyR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CTj8sOMP.js";import"./preload-helper-CgkWS9T4.js";import"./Table-DClyCIpE.js";import"./index-LA6eGdrx.js";import"./Dialog-FtEKHH1N.js";import"./cross-CLh64p0F.js";import"./svgIconContainer-COOyKoHH.js";import"./useBaseUiId-CST19_eI.js";import"./InternalBackdrop-CTXp7ef6.js";import"./composite-DSnE_YQk.js";import"./index-P9xxddcK.js";import"./index-DeMBNUsz.js";import"./index-BIKPmtBh.js";import"./useEventCallback-B81jpozq.js";import"./SkeletonBar-BGTpH663.js";import"./LoadingCell-A6O8gUu9.js";import"./ColumnConfigDialog-Cp-LNAQK.js";import"./DraggableList-BYRdoRfp.js";import"./search-By7vWzyC.js";import"./Input-BG0-cI5h.js";import"./useControlled-BD5V0Ccm.js";import"./Button-CTdUnl-9.js";import"./small-cross-DqRZZTHz.js";import"./ActionButton-iRrLnlXb.js";import"./Checkbox-B02p3FBc.js";import"./useValueChanged-DROKVxxL.js";import"./CollapsiblePanel-BxP2J2Dt.js";import"./MultiColumnSortDialog-mWaAjcZB.js";import"./MenuTrigger-5cpEf70X.js";import"./CompositeItem-BScttQtR.js";import"./ToolbarRootContext-CDg3nyHK.js";import"./getDisabledMountTransitionStyles-DhTy_FKz.js";import"./getPseudoElementBounds-CVxG5WR2.js";import"./chevron-down-BhdvQ1g6.js";import"./index-BuNpqgsl.js";import"./error-BtGej3op.js";import"./BaseCbacBanner-CJ7LF4Ac.js";import"./makeExternalStore-DS_EZCHg.js";import"./Tooltip-Bv17cXKg.js";import"./PopoverPopup-CQJhkZED.js";import"./debounce-ccFfTLWb.js";import"./useOsdkClient-B6qKL_vp.js";import"./tick-l3MhEpoD.js";import"./DropdownField-DUXRBZrT.js";import"./isEqual-CtNna9zA.js";import"./withOsdkMetrics-jlPvbe-f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
